import dynamic from "next/dynamic";
const BlogEdit = dynamic(() => import("@/app/admin/edit"), { ssr: false });
const ProtectedPage = dynamic(() => import("@/app/admin/protected"), { ssr: false });

export default async function Page({ params }:{params: {id: string}}) {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY!}/getblogpost?id=${params.id}`,{
      method: 'GET',
      cache: 'no-store',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': process.env.NEXT_PUBLIC_API_KEY!,
      }
   })
   const blog = await response.json();
  return (
   <ProtectedPage>
      <div className="max-w-7xl mx-auto py-4 flex flex-col items-center">
         <div className="border py-4 rounded px-2 max-w-xl mx-auto text-sm flex items-center justify-center"> Keep The image Size in 1920x1080 or 1280x720 for best Visual! </div>
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
