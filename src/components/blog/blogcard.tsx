'use client';
import { useEffect, useState } from "react";
import { IBlogPost } from "../../../types";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlogPost }) => {
  const { _id, title, description, thumbNail, content, createdAt, author } = blog;
  const contentSnippet = content.length > 100 ? content.substring(0, 100) + "..." : content;

  return (
    <div className="max-w-72 p-2 sm:pb-4 flex flex-col rounded-xl overflow-hidden bg-white"
    style={{boxShadow: "0px 0px 10px 3px rgba(255, 215, 0, 0.4)"}}
    >
      <div className=" px-2 lg:px-6 py-2">
        <h2 className="font-bold text-sm sm:text-lg lg:text-xl mb-2">{title}</h2>
      </div>
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow">
       <Image 
         src={thumbNail} 
         alt={title} 
         fill
         style={{
            objectFit: 'contain',
         }}
      />

      </div>
      <div className="sm:px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          {author?.profileImageUrl && (
            <Image
               height={25}
               width={25}
               src={author.profileImageUrl}
               alt={author.name}
               className="rounded-full border border-red-800"
            />
          )}
          <div className="text-xs sm:text-sm pt-1">
            <p className=" leading-none">{author?.name}</p>
          </div>
        </div>
        <span className="text-xs lg:text-sm">{new Date(blog.createdAt!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <div className="w-full border-t border-b py-2 sm:px-4 mb-2">
        <p className="text-xs lg:text-sm w-full hidden sm:block">{description ? (description).substring(0,140) + "..." : ""}</p>
        <p className="text-[10px] lg:text-sm w-full sm:hidden">{description ? (description).substring(0,60) + "..." : ""}</p>
      </div>

        <Link href={`/blog/${_id}`} className="text-red mx-auto ml-auto py-1 rounded-full font-semibold px-4 text-sm">Read More</Link>
    </div>
  );
};


export const BlogLists =()=>{
   const [blogs, setBlogs] = useState<IBlogPost[]>([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const router = useRouter();

   useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/getallblogs?page=${page}&limit=4`, {
            cache: 'force-cache',
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "Authorization": process.env.NEXT_PUBLIC_API_KEY!
            }
          });
          const data = await response.json();
          console.log(data);
          const sortedBlogs = (data.blogs || []).sort((a: IBlogPost, b: IBlogPost) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
          setBlogs(sortedBlogs);
          setTotalPages(data.totalPages || 1);
        } catch (error) {
          console.error('Error fetching blogs:', error);
          setBlogs([]);
        }
      }
      fetchBlogs();
    }, [page]);


  const handlePreviousPage = () => {
   if (page > 1) {
     setPage(page - 1);
   }
 };

 const handleNextPage = () => {
   if (page < totalPages) {
     setPage(page + 1);
   }
 };

    return (
      <main className="max-w-7xl mx-auto my-8 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <div className="text-center col-span-3">No blogs found</div>
        )}
      </div>
      <div className="flex justify-between items-center mt-8 sm:mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="flex items-center px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <ArrowLeftCircleIcon className="mr-2" /> Previous
        </button>
        <span className="text-gray-700">Page {page} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="flex items-center px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next <ArrowRightCircle className="ml-2" />
        </button>
      </div>
      <p className="w-full flex items-center justify-center font-semibold mt-8 text-center mx-auto">* * * * *</p>
    </main>
    )
}