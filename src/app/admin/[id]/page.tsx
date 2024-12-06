import dynamic from "next/dynamic";
import { IBlogPost } from "../../../../types";
const BlogEdit = dynamic(() => import("@/app/admin/edit"), { ssr: false });
const ProtectedPage = dynamic(() => import("@/app/admin/protected"), { ssr: false });

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/getallblogs?page=1&limit=2`, {
    cache: 'force-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": process.env.NEXT_PUBLIC_API_KEY!
    }
  });
  const { blogs }: { blogs: IBlogPost[] } = await response.json();
  return blogs.map(({ _id }) => ({
    id: _id
  })).slice(0, 2);
}

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY!}/getblogpost?id=${params.id}`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.NEXT_PUBLIC_API_KEY!,
    }
  });
  const blog = await response.json();
  return (
    <ProtectedPage>
      <div className="max-w-7xl mx-auto py-4 flex flex-col items-center">
        <div className="border py-4 rounded px-2 max-w-xl mx-auto text-sm flex items-center justify-center">
          Keep The image Size in 1920x1080 or 1280x720 for best Visual!
        </div>
        <h2 className="text-lg font-semibold">Edit Mode</h2>
      </div>
      <div className="w-full flex items-center justify-center mb-4">
        <div className="max-w-7xl mx-auto">
          <BlogEdit blog={blog} />
        </div>
      </div>
    </ProtectedPage>
  );
}