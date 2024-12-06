'use client'
import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

const RichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<{ id: string, file: File, base64: string }[]>([]);

  const s3Client = new S3Client({
   region: process.env.NEXT_PUBLIC_AWS_REGION!,
   credentials: {
     accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY!,
     secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!,
   },
  });
   
  useEffect(() => {
    if (editorRef.current  && !quillRef.current) {
        quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write your great blog here...',
        modules: {
         toolbar: {
            container: [
              [{ 'header': [1,2,3,4,5,6,7] }],
              [{ 'size': ['small', false, 'large', 'huge'] }], 
              [{ 'font': [] }],
              ['bold', 'italic', 'underline'],
              ['link', 'image'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'align': [] }],
            ],
            handlers: {
              image: imageHandler,
              link: function (this: any, value: any) { // Cast `this` to `any`
               if (value) {
                 const href = prompt('Enter the URL');
                 if (href) {
                   this.quill.format('link', href);
                 }
               } else {
                 this.quill.format('link', false);
            }},
           },
          },
        },
      });

      quillRef.current.on('text-change', () => {
         const currentImages = Array.from(quillRef.current!.root.querySelectorAll('img')).map(img => img.src);
         setImages(prevImages => prevImages.filter(image => currentImages.includes(image.base64)));
       });
    }
  }, []);
  useEffect(() => {
   if (images.length > 2) {
     alert('You can only upload 2 images per blog post');
     setImages((prevImages) => {
       const updatedImages = prevImages.slice(0, 2);
       const currentImages = Array.from(quillRef.current!.root.querySelectorAll('img'));
       currentImages.forEach((img, index) => {
         if (index >= 2) {
           img.remove();
         }
       });
       return updatedImages;
     });
   }
 }, [images]);
 
  const imageHandler = () => {
   const input = document.createElement('input');
   input.setAttribute('type', 'file');
   input.setAttribute('accept', 'image/*');
   input.click();

   input.onchange = () => {
     const file = input.files ? input.files[0] : null;
      
     if (file) {
      const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB in bytes
      if (file.size > maxSizeInBytes) {
        alert('The file size exceeds the 10 MB limit. Please upload a smaller file.');
        return;
      }
      if (images.length >= 2) {
         alert('You can only upload 3 images per blog post');
         return;
       }
       try {
         const reader = new FileReader();
         reader.onload = (e) => {
           const base64Image = e.target?.result as string;
           const id = crypto.createHash('sha256').update(base64Image).digest('hex')
           const range = quillRef.current!.getSelection();

           if (range) {
             quillRef.current!.insertEmbed(range.index, 'image', base64Image);
             setImages((prevImages) => [...prevImages, { id, file, base64: base64Image }]);
           } else {
             console.log('No selection range found');
           }
         };
         reader.readAsDataURL(file);
       } catch (error) {
         console.log('Error uploading image:', error);
       }
     }
   };
 };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = title.replace(/\s+/g, '-').toLowerCase();
    let thumbNail = '';
    try {
       if (quillRef.current) {
        let updatedContent = quillRef.current.root.innerHTML;
 
       for(let i=0; i<images.length; i++){
          const {file, base64} = images[i];
          const fileName = file.name.replace(/\s+/g, '-').toLowerCase();
          const params = {
             Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
             Key: `thriveholistic/blogs/${slug}/${fileName}`,
             Body: file,
             ContentType: file.type,
           };
           await s3Client.send(new PutObjectCommand(params));
           const imageUrl = `https://dnyvrvurgen90.cloudfront.net/${params.Key}`;
           updatedContent = updatedContent.replace(base64, imageUrl);
          if(i === 0){
             thumbNail = imageUrl;
          }
       }; 
       //submit the blog post in Database
       try{
         const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY!}/saveblogpost`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': process.env.NEXT_PUBLIC_API_KEY!,
            },
            body: JSON.stringify({title, description, slug, thumbNail, content : updatedContent, author: {name: 'Hridaya', profileImageUrl: "https://thriveholistic.in/hridaya.png"}}),
         })
         const res = await response.json();
         if(response.status !== 200){
            if(res.error) {
               alert(`Something went wrong ${res.error}`);
            }
            return;
         }
         alert(`${res.message}`);
         quillRef.current.setContents([]);
         setTitle('');
         setImages([]);
       }catch(error : any){ 
         if (error.code === 11000) {
            alert('A blog post with the same title already exists. Please enter a different title.');
          }else {
             console.log('Error submitting blog post:', error.message);
             alert(`An error occurred while submitting the blog post. Please try again. ${error.message}`);
         }
        }
      };
    } catch (error) {
      console.log('Error during image upload:', error);
      alert('An error occurred while uploading images. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-2xl max-h-fit relative w-full flex-shrink-0  border rounded-md border-neutral-800 '>
     <div className='border-b border-red-800'>
      <input
         type="text"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         placeholder="Enter title"
         className='w-full mb-4 p-2 text-lg border-b border-red-800 font-bold'
       />
       <textarea
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         placeholder="Enter Description"
         className='w-full mb-4 p-2 max-h-20'
       />
      </div> 
      <div ref={editorRef} className='max-h-[70vh] border text-lg' />
      <button type="submit"  className='border rounded-full px-8 py-2 bg-red-700 text-white font-medium'>Save Post</button>
    </form>
  );
};

export default RichTextEditor;