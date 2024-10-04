import { link } from "fs"
import Image from "next/image"
import Link from "next/link"

const ProductsCard = ({image, link, name} : {image :  string, link :  string, name :  string}) => {
   return(
      <div className="w-full lg:w-64 h-80 rounded-xl overflow-hidden flex flex-col items-center justify-between flex-shrink-0"
      style={{boxShadow: "0px 0px 10px 3px rgba(255, 215, 0, 1)"}}
      >
         <div className="relative w-full lg:w-64 h-64">
            <Image
               loading="lazy"
               unoptimized
               src={image}
               alt={`Thrive Holistic ${name}`}
               fill
               style={{
                  objectFit : 'fill'
               }}
            />
         </div>
         <div className=" w-full p-2 ">
            <h2 className="w-full text-left font-bold text-xl mb-2">{name}</h2>
            <Link href={link} target="_blank" className={`bg-[#FFF622] hover:cursor-custom-hover py-2 w-full px-4  text-nowrap shadow-md rounded-full flex items-center justify-center font-semibold hover:bg-opacity-50 transition-all duration-200`}> See Pricing</Link>
         </div>
         
      </div>
   )
}

export const Products = () => {

   const products = [
      {
         name: "Salt",
         image: '/products/salt.jpg',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20want%20to%20purchase%20this%20product%20Salt.%20Please%20tell%20me%20about%20the%20pricing.'
      },
      {
         name: "Bracelet",
         image: '/products/bracelet.jpg',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20want%20to%20purchase%20this%20product%20Bracelet.%20Please%20tell%20me%20about%20the%20pricing.'
      },
      {
         name: "Dhoop Sticks",
         image: '/products/dhoopSticks.jpg',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20want%20to%20purchase%20this%20product%20Dhoop%20Sticks.%20Please%20tell%20me%20about%20the%20pricing.'
      },
      {
         name: "Incense Sticks",
         image: '/products/incense-sticks.jpg',
         link: 'https://wa.me/919914939308?text=Hi%20Hridaya,%20I%20want%20to%20purchase%20this%20product%20Incense%20Sticks.%20Please%20tell%20me%20about%20the%20pricing.'
      },
   ]

   return (
      <section className="w-full flex items-center flex-wrap gap-10 mx-auto mt-14">
         {products.map((product, index) => (
            <ProductsCard key={index} 
            image={product.image}
            link={product.link}
            name={product.name}
            />
         ))}
      </section>

   )
}