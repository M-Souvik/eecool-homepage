import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 border-t-4 border-blue-600 sm:">
      <div className="container mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 justify-items-center">
        <div>
        <Link href="#">
                  <Image className="bg-contain" src="/assets/eecool.png" alt="" width={150} height={150}/>
                </Link>
          <p className="text-sm py-3 font-semibold">
            Our organization is widely engaged in manufacturing and trading of
            a unique range of Home appliances that are manufactured by extreme
            grade of raw material which is sourced from our reliable &
            Quality-driven vendors for high durability.
          </p>
        </div>
        <div className='divide-y divide-solid divide-gray-800 font-semibold'>
          <h2 className="font-bold text-sm py-2">CONTACT INFO</h2>
        <div className='py-4 px-2'>
          <p className="text-md">
            Address:<br />
            56, Maliwara, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001
          </p>
          <p className="text-md mt-2">
            Customer Care: <a href="tel:+919760098098" className="text-blue-500">+91-9760098098</a>
          </p>
          <p className="text-md mt-2">
            Business Related Email: <a href="mailto:info@eecocool.com" className="text-blue-500">info@eecocool.com</a>
          </p>
          </div>
        </div>
        <div className='divide-y divide-solid divide-gray-800 font-semibold'>
          <h2 className="font-bold text-sm py-2">USEFUL LINKS</h2>
          <ul className="text-sm py-4 px-2">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Return Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Cancellation & Refund Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Shipping and Delivery Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Support Policy</a></li>
          </ul>
        </div>
        <div className='divide-y divide-solid divide-gray-800 font-semibold'>
          <h2 className="font-bold text-sm py-2">MY ACCOUNT</h2>
          <ul className="text-sm py-4 px-2">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Login</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Order History</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">My Wishlist</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Track Order</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Distributor Registration</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-200 py-2 mt-8">
        <div className="container mx-auto px-4 flex justify-between sm:flex-row flex-col gap-4 sm:gap-0 items-center">
          <p className="text-sm text-gray-600 font-semibold">© 2024 EECOCOOL | DEVELOPED BY BITS</p>
          <div className="flex justify-center gap-3">
            <a href="#" className="text-gray-600 hover:text-blue-500 bg-blue-900 rounded-full p-2">
              <FaFacebookF color='white'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 bg-blue-500 rounded-full p-2">
              <FaTwitter color='white'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 bg-purple-800 rounded-full p-2">
              <FaInstagram color='white'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 bg-red-700 rounded-full p-2">
              <AiOutlineYoutube color='white'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 bg-indigo-900 rounded-full p-2">
              <FaLinkedinIn color='white'/>
            </a>
          </div>
          <Image className="bg-contain" src="/assets/Razorpay.png" alt="" width={150} height={150}/>
        </div>
      </div>
    </footer>
  );
}
