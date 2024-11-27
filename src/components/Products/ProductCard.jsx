import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 flex justify-between">
        <div className="mr-6">
          <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
        </div>
        <img src={product.logo} alt={product.title} className="h-16 mb-4" />
      </div>
      
      <div className="grid md:grid-cols-2">
        <div className='ml-4 w-2/3'>
          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <div className="mb-4 space-y-2">
            {product.originalPrice && (
              <div>
                <span className="line-through text-gray-400">
                  ${product.originalPrice}
                </span>
              </div>
            )}
            {product.launchPrice && (
              <div>
                <span className="line-through text-gray-400">
                  ${product.launchPrice}
                </span>
              </div>
            )}
            <div>
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            ¡Lo quiero!
          </motion.button>
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} preview ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;