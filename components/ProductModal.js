"use client"

import { RxCross2 } from "react-icons/rx";
import { AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";

const ProductModal = ({ product, isOpen, onClose }) => {
    const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      if (newQuantity < 1) return 1;
      if (newQuantity > 99) return 99; // assuming 99 is the max quantity allowed
      return newQuantity;
    });
  };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
          <button className="absolute top-4 right-4" onClick={onClose}>
            <RxCross2 size={20}/>
          </button>
          <div className="flex">
            <div className="w-1/2">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
            </div>
            <div className="w-1/2 ml-4">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              
              <div className="flex flex-col gap-2 mb-2">
              <p className=" font-thin text-xl">Price:<span className="text-gray-400 font-thin line-through text-2xl"> {product.actual_price}</span></p>
              <p className="font-thin text-xl">Discounted Price: <span className="text-blue-700 font-bold text-2xl"> {product.price}</span> </p>
              </div>
             
              <hr/>
              <div className=" flex  items-center my-4 gap-2 ">
              <label className=" text-gray-700 font-thin mb-2 text-xl" htmlFor="quantity">
                Quantity:
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="bg-gray-100 text-gray-600 rounded-full h-8 w-8 flex items-center justify-center"
                >
                  &ndash;
                </button>
                <span className="mx-4 text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="bg-gray-100 text-gray-600 rounded-full h-8 w-8 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            <hr/>
              <div className="flex mt-4 relative">
                <button className="bg-blue-600 text-white py-2 px-4 rounded mr-2 inline-flex justify-center items-center gap-2">
                  <AiOutlineShopping size={20}/>Add to Cart
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductModal;