import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                {images.map((image, index) => (
                    <div key={index} className={`transition-transform duration-500 ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}>
                        <img src={image} alt={`Imagen ${index + 1}`} className="object-cover h-32 w-full" />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                <button onClick={prevSlide} className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black">
                    <FaChevronLeft />
                </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                <button onClick={nextSlide} className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carrousel;