"use client"

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { TbShoppingCartX } from "react-icons/tb";
import ProductModal from './ProductModal';
const ProductSlider = ({ products }) => {
  const sliderRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full ">
     <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-2">
              <div className="relative bg-white px-2 pb-6 pt-2 rounded border hover:shadow-md transition-all duration-200">
                <div className="flex absolute gap-1 bg-white">
                    <h1 className="bg-indigo-800 text-sm text-white font-semibold rounded-full px-1 py-2">50%</h1>
                    <span className=" relative top-2 text-indigo-800 font-bold uppercase">Off</span>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-gray-400 line-through">{product.actual_price}</p>
                  <p className="text-blue-700 font-bold">{product.price} <span className="font-light text-gray-300">incl. all text</span>

                  </p>
                  <button 
                    className={`mt-2 ${product.isOutOfStock ? 'text-white bg-gray-300' : 'text-blue-600 hover:text-white hover:bg-blue-600 bg-blue-100'} py-2 px-4 w-full rounded transition-colors`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {product.isOutOfStock ? 
                      <span className="flex gap-2 justify-center items-center font-semibold"><TbShoppingCartX size={20}/>Out of stock</span> 
                      : 
                      <span className="flex gap-2 justify-center items-center font-semibold"><AiOutlineShopping size={20}/>Add to cart</span>
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-white py-4 px-4 shadow rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft color='black'/>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-white py-4 px-4 shadow rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
        <FaChevronRight color='black'/>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
