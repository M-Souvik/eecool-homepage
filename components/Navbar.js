"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ContinuousMarquee from './Marquee';
import { IoIosSearch } from "react-icons/io";
import { GoGitCompare } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-sky-700 text-white text-center">
        <ContinuousMarquee/>
      </div>
      <nav className="relative bg-white shadow">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between w-full sm:w-fit">
              <div className="flex lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  
                  <MdOutlineMenu size={30} className={`${isOpen ? 'hidden' : 'block'}`} color='black'/>
                  <RxCross2 size={30} className={`${isOpen ? 'block' : 'hidden'}`} color='black'/>
                  
                </button>
              </div>
                <Link href="#">
                  <Image className="bg-contain" src="/assets/eecool.png" alt="" width={150} height={150}/>
                </Link>
                <IoIosSearch size={30} color='black' className='md:hidden'/>
            </div>
            {/* Search input on desktop screen */}
            <div className="hidden mx-10 md:block w-[50rem]">
                  <div className="flex items-center gap-3">
                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:text-gray-300 border-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                    <IoIosSearch size={30} color='grey'/>
                  </div>
                </div>
              </div>
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out top-24 hidden md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
              <div className="flex flex-col md:flex-row md:mx-1 md:gap-10">
              
                <div className="flex gap-1 items-center relative">
                  <GoGitCompare size={30} color='grey'/>
                  <div className="flex flex-col">
                  <span className=" bg-blue-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  <h1 className="text-md font-extralight">Compare</h1>
                  </div>
                </div>

                <div className="flex gap-1 items-center">
                <div>
                  <FaRegHeart size={30} color='grey' className=''/>
                  </div>
                  <div className="flex flex-col">
                  <span className=" bg-blue-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  <h1 className="text-md font-extralight">Wishlist</h1>
                  </div>
                  
                </div>

                <div className="flex gap-1 items-center">
                  <IoCartOutline size={40} color='grey' className=''/>
                  <div className="flex flex-col">
                  <span className=" bg-blue-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  <h1 className="text-md font-extralight">Cart</h1>
                  </div>
                </div>

                <div className="flex gap-1 items-center">      
                  <FaRegUserCircle size={30} color='grey'/>
                <span className="text-md font-extralight">Login</span>
                |
                <span className="text-md font-extralight">Register</span>

                </div>
              </div>

              {/* Search input on mobile screen */}
              <div className="my-4 md:hidden">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>

                  <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={`absolute z-20 w-full sm:h-fit h-screen transition-all duration-300 ease-in-out md:border-t bg-white md:border-gray-300 top-16 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-full md:opacity-100 md:translate-x-0 md:flex md:justify-center md:items-center`}>
          <div className=" py-3 flex flex-col sm:flex-row justify-center sm:items-center gap-4">
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">Home</Link>
            <div className="relative group">
              <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase flex gap-2 justify-between sm:justify-center sm:items-center" href="#">  Shop <FaChevronDown/> </Link>
              <div className="absolute hidden group-hover:block bg-white border border-gray-300 shadow-lg mt-2 rounded-md">
                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white w-40" href="#">Desert Cooler</Link>
              </div>
            </div>
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">E catalogue</Link>
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">About Us</Link>
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">Distributor Registration</Link>
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">Track Order</Link>
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">Blog</Link>
            <Link className="mx-4 text-sm leading-5 text-blue-700 font-semibold dark:hover:text-blue-400 md:my-0 uppercase" href="#">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;