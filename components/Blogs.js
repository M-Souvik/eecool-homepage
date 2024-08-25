import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <div className='flex sm:flex-row  flex-col justify-evenly gap-4 sm:px-20 sm:py-10'>
        <div className="flex flex-col bg-white p-4 gap-3 pb-16">
            <Image src="/assets/blog1.jpg" width={1900} height={1000} className='bg-contain w-full h-full'/>
            <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">How to choose the right Air Cooler - Air Cooler Buying Guide</h1>
            <h2 className="text-md italic text-gray-500 text-left">Desert Cooler</h2>
            <p className="text-md font-extralight text-gray-600">Choosing the right air cooler can significantly enhance your comfort during hot weather while also saving energy compared to traditional air conditioning systems. Here's a comprehensive guide to help you make an informed decision when buying an air cooler.</p>
            </div>
            
            <button className="bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200 ease-in-out px-5 py-3 rounded-md w-40">View More</button>
        </div>
        <div className="flex flex-col bg-white p-4 gap-3 pb-16">
            <Image src="/assets/blog2.jpg" width={400} height={400} className='bg-contain w-full h-full'/>
            <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Air Cooler Tips for Energy-Efficient Homes & Offices</h1>
            <h2 className="text-md italic text-gray-500 text-left">Desert Cooler</h2>
            <p className="text-md font-extralight text-gray-600">As the demand for energy-efficient cooling solutions continues to rise, air coolers are becoming increasingly popular for both homes and offices. Not only are they cost-effective and environmentally friendly, but they also offer efficient cooling without the hefty energy bills associated with traditional air conditioning systems.</p>
            </div>
            
            <button className="bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200 ease-in-out px-5 py-3 rounded-md w-40">View More</button>
        </div>
        <div className="flex flex-col bg-white p-4 gap-3 pb-16">
            <Image src="/assets/blog3.jpg" width={500} height={500} className='bg-contain w-full h-full'/>
            <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Top 8 Advantages of Air Coolers That You Should Know About</h1>
            <h2 className="text-md italic text-gray-500 text-left">Desert Cooler</h2>
            <p className="text-md font-extralight text-gray-600">Air coolers are becoming increasingly popular as an efficient and eco-friendly way to cool indoor spaces, especially in regions with hot climates. Unlike traditional air conditioning systems, air coolers offer several advantages that make them a preferred choice for many homeowners and businesses</p>
            </div>
            
            <button className="bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200 ease-in-out px-5 py-3 rounded-md w-40">View More</button>
        </div>

    </div>
  )
}

export default Blogs