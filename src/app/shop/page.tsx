import { Footer } from "@/components/footer";
import { Header } from "@/components/header"
import { ShopPageContent } from "@/components/ShopPageContent";
import { Suspense } from 'react'
const ShopPage = () => {

   return (
      <main className="">
         <Header/>
         <Suspense fallback={<div>Loading...</div>}>
          <ShopPageContent />
         </Suspense>
         <Footer/>
      </main>
   )
}

export default ShopPage;