import Image from "next/image";
import AutoPlayCarousel from "@/components/AutoPlayCarousel";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { GrDocumentVerified } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Blogs from "@/components/Blogs";
import TopProducts from "@/components/TopProducts";
export default function Home() {

  return (
    <div>
    <AutoPlayCarousel/>
    <div className="grid grid-cols-2 sm:grid-cols-4 sm:px-24 px-0 py-16">
      <div className="flex flex-col items-center gap-4">
        {/* <Image src="/assets/warranty-icon.jpg" height={130} width={130} className="bg-contain"/> */}
        <HiOutlineBadgeCheck size={80}/>
        <h1 className="text-xl"><span className="font-semibold">1 Year</span> Warranty</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* <Image src="/assets/warranty-icon.jpg" height={130} width={130} className="bg-contain"/> */}
        <GrDocumentVerified size={80}/>
        <h1 className="text-xl"><span className="font-semibold">Genuine</span> Products</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* <Image src="/assets/warranty-icon.jpg" height={130} width={130} className="bg-contain"/> */}
        <MdOutlineWorkspacePremium size={80}/>
        <h1 className="text-xl"><span className="font-semibold">Exclusive</span> Products</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* <Image src="/assets/warranty-icon.jpg" height={130} width={130} className="bg-contain"/> */}
        <MdOutlineVerifiedUser size={80}/>
        <h1 className="text-xl"><span className="font-semibold">Secure</span> in Web</h1>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 justify-center  px-3 py-2 pb-6">
      <Image src="/assets/poster1.jpg" width={500} height={500} className="object-contain px-3 py-2 sm:py-0"/>
      <Image src="/assets/poster2.jpg" width={500} height={500} className="object-contain px-3 py-2 sm:py-0"/>
      <Image src="/assets/poster3.jpg" width={500} height={500} className="object-contain px-3 py-2 sm:py-0"/>
    </div>
    <div className="bg-white mx-6 p-4">
    <h2 className="text-3xl font-semibold mb-4">New Launches</h2>
      <TopProducts/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center  px-3 py-6">
      <Image src="/assets/poster4.jpg" width={500} height={500} className="object-contain px-3 py-2 sm:py-0"/>
      <Image src="/assets/poster5.jpg" width={500} height={500} className="object-contain px-3 py-2 sm:py-0"/>
      <Image src="/assets/poster6.jpg" width={500} height={500} className="object-contain px-3 py-2 sm:py-0"/>
    </div>
    <div className="bg-white mx-6 p-4">
    <h2 className="text-3xl font-semibold mb-4">Our Top Selling Products</h2>
      <TopProducts/>
    </div>
    <div className="px-4 sm:px-0 py-4 sm:py-0">
     <h1 className="text-3xl font-semibold mb-4 sm:mb-0">Blog Posts</h1>
    <Blogs/>
    </div>
    </div>
  );
}
