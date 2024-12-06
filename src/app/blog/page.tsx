import { BlogLists } from "@/components/blog/blogcard";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Page() {
   return (
       <div className="w-full">
         <Header/>
         <div className="max-w-7xl w-full mx-auto px-4">
          <h1 className="mx-auto font-semibold text-lg">Blogs</h1>
         </div>
         <BlogLists />
         <Footer/>
       </div>
    );
}