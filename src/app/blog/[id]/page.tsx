
import { Header } from "@/components/header";
import { Metadata } from "next";
import Link from "next/link";
import { IBlogPost } from "../../../../types";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";


export async function generateStaticParams() {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/getallblogs?page=1&limit=8`, {
       cache: 'force-cache',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         "Authorization": process.env.NEXT_PUBLIC_API_KEY!
       }
     });
     const data :IBlogPost[] = await response.json();
   return data.map(({_id})=> _id).slice(0,30)

}

export async function generateMetadata({ params }: { params: { id: string } }) : Promise<Metadata>{
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY!}/getblogpost?id=${params.id}`,{
      method: 'GET',
      cache: 'force-cache',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': process.env.NEXT_PUBLIC_API_KEY!,
      }
   })

   const blog : IBlogPost  = await response.json();
   if (!blog) {
      throw new Error('Blog not found');
   }
   return{
      title: blog.title,
      description: blog.description,
      openGraph:{
         images:[
            {
               url : blog.thumbNail
            }
         ]
      }
   }
}

const Page=async ({ params }: { params: { id: string } })=>{
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY!}/getblogpost?id=${params.id}`,{
      method: 'GET',
      cache: 'force-cache',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': process.env.NEXT_PUBLIC_API_KEY!,
      }
   })

   const blog : IBlogPost  = await response.json();
   if (!blog) {
      throw new Error('Blog not found');
   }
   // console.log(blog)
   const styledContent = `
    <style>
      .styled-content {
        line-height: 1.8;
        color: #333;
      }
      .styled-content h1 {
        line-height: 1.2;
        font-size: 2rem;
        font-weight: 700;
        color: #2c3e50;
      }
      .styled-content h2, .styled-content h3, .styled-content h4, .styled-content h5, .styled-content h6 {
        margin-bottom: 1rem;
        font-weight: 700;
        color: #2c3e50;
      }
      .styled-content p {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
      }
      .styled-content ul, .styled-content ol {
        padding-left: 20px;
        margin-bottom: 1.5rem;
      }
      .styled-content ul {
        list-style-type: disc;
      }
      .styled-content ol {
        list-style-type: decimal;
      }
      .styled-content li {
        margin-bottom: 0.75rem;
      }
      .styled-content a {
        color: #3498db;
        text-decoration: none;
      }
      .styled-content a:hover {
        text-decoration: underline;
      }
      .styled-content blockquote {
        margin: 1.5rem 0;
        padding: 1rem 1.5rem;
        border-left: 5px solid #ccc;
        background-color: #f9f9f9;
        font-style: italic;
        color: #555;
      }
      .styled-content code {
        font-family: 'Courier New', Courier, monospace;
        background-color: #f4f4f4;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.9rem;
      }
      .styled-content pre {
        background-color: #f4f4f4;
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        font-size: 0.9rem;
      }
      .styled-content table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1.5rem;
      }
      .styled-content th, .styled-content td {
        padding: 0.75rem;
        border: 1px solid #ddd;
        text-align: left;
      }
      .styled-content th {
        background-color: #f4f4f4;
        font-weight: bold;
      }
      .styled-content img {
      //   max-width: 100%;
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .styled-content strong {
        font-weight: 700; /* Use numeric value for better support */
        font-size: 1.1rem;
      }
    </style>
    <div class="styled-content">
      ${blog.content}
    </div>
  `;
   return (
      <div className="w-full flex flex-col justify-center items-center relative ">
         <Header/>

         <div className="max-w-4xl mx-auto my-8 px-4">
            <Link href="/blog" className="text-gray-800 text-sm font-semibold mb-8 flex items-center gap-4"> <ArrowLeft size={20}/> Back</Link>
            <h1 className="text-4xl font-semibold text-neutral-800">{blog.title}</h1>
            <div className="mb-5 space-y-10" dangerouslySetInnerHTML={{ __html: styledContent }} />
            <p className="text-center mx-auto text-neutral-600">٭ ٭ ٭ ٭ ٭ </p>
           <div className="flex flex-col my-4">
            <span className="opacity-80"><strong>Author:&nbsp; </strong>{blog.author?.name}</span>
            <span className="opacity-80 text-sm"><strong>Published On:&nbsp; </strong>{new Date(blog.createdAt!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
           </div>
   
           <div className="flex justify-center">
              <Link href="/blog" className="inline-block px-6 py-1 text-lg font-semibold text-white bg-gray-800 rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-gray-700 hover:-translate-y-1 active:bg-gray-900 active:translate-y-0">
                Back
              </Link>
            </div>
         </div>
      <Footer />
      </div>
   )
}
export default Page;