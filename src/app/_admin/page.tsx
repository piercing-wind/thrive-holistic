import dynamic from "next/dynamic";
import { BlogsList } from "@/components/blog/listofblogs";
const BlogInput = dynamic(() => import("@/app/_admin/input"), { ssr: false });
const ProtectedPage = dynamic(() => import("@/app/_admin/protected"), { ssr: false });

export default async function Page() {
  return (
    <ProtectedPage>
      <div className="max-w-7xl mx-auto py-4">
         <div className="border py-4 rounded px-2 max-w-xl mx-auto text-sm flex items-center justify-center"> Keep The image Size in 1920x1080 or 1280x720 for best Visual! </div>
      </div>
      <div className="max-w-7xl gap-8 mx-auto px-8 flex text-neutral-800 hover:cursor-pointer py-14">
        <BlogInput />
        <BlogsList />
      </div>
    </ProtectedPage>
  );
}
