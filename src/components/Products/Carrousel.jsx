import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carrousel({ images, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={`relative ${className}`}>
            <img
    src={images[currentIndex]}
    alt={`Slide ${currentIndex}`}
    className="w-full h-full object-fill rounded-lg transition-transform duration-500 ease-in-out mx-auto"
/>
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-white hover:text-black"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-white hover:text-black"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}

export default Carrousel;