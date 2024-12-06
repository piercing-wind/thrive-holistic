'use client';
import { IBlogPost } from "../../../types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const BlogsList = () => {
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/getallblogs?page=${page}&limit=5`, {
         //  cache: 'no-store',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": process.env.NEXT_PUBLIC_API_KEY!
          }
        });
        const data = await response.json();
        console.log(data);
        setBlogs(data.blogs || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      }
    }
    fetchBlogs();
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleDelete = async (id: string) => {
    try {
      const isConfirmed = confirm('Are you sure you want to delete this blog?');
      if (!isConfirmed) {
        return;
      }
      setBlogs(blogs.filter(blog => blog._id !== id));
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/delete/?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": process.env.NEXT_PUBLIC_API_KEY!
        }
      });
      const data = await response.json();
      alert(`Blog deleted successfully ${data.message}`);
      if (data.error) {
        alert(`${data.error}`);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert(`Error deleting blog ${(error as Error).message}`);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 w-full">
      <h1 className="text-3xl font-bold mb-4">List of Blogs</h1>
      <div className="flex flex-col gap-4 w-full">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <div key={blog.slug} className="bg-white flex shadow-md rounded-lg overflow-hidden w-full min-h-36 max-h-36 h-full">
              <Image src={blog.thumbNail} alt={blog.title} height={200} width={180} className="object-contain bg-gray-100" />
              <div className="p-4 w-full flex flex-col justify-between">
                <h2 className="text-lg font-bold mb-2">{blog.title.length > 40 ? blog.title.substring(0, 40) + '...' : blog.title}</h2>
                <p className="text-sm"><span className="font-medium text-sm">Posted on</span> : {new Date(blog.createdAt!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div className="flex space-x-2 mt-auto justify-between">
                  <button
                    onClick={() => router.push(`/admin/${blog._id}`)}
                    className="px-4 py-1 w-[50%] font-medium bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id!)}
                    className="px-4 py-1 w-[50%] font-medium bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}