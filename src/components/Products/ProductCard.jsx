import React from 'react';
import { motion } from 'framer-motion';
import Carrousel from './Carrousel';
import { FaCheck } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className={`product-card ${product.className} relative p-6 rounded-lg shadow-md`}>
            <h1 className="text-center text-3xl font-bold text-white mb-4">
                {product.title}
            </h1>
            <div className="flex flex-col md:flex-row mb-4">
                <img src={product.logo} alt={product.title} className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4" />
                <div className="flex-1">
                    <div className="mb-4 text-slate-100">
                        {product.description1}
                    </div>
                    <div className="mb-4 text-slate-100">
                        {product.description2}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <ul className="w-full md:w-2/3 mb-4">
                    {product.features.map((feature, index) => (
                        <li key={index} className="text-slate-200 flex font-semibold items-center mb-2">
                            <FaCheck className="text-green-500 mr-2" /> {feature}
                        </li>
                    ))}
                </ul>
                <div className="w-full md:w-1/3 flex flex-col items-end justify-center mb-4">
                    {product.originalPrice && (
                        <div>
                            <span className="line-through text-gray-400">
                                ${product.originalPrice} <span className="text-sm text-gray-600" style={{ color: product.color[0] }}>Precio original</span>
                            </span>
                        </div>
                    )}
                    {product.launchPrice && (
                        <div>
                            <span className="line-through text-gray-400">
                                ${product.launchPrice} <span className="text-sm text-gray-600" style={{ color: product.color[0] }}>Precio de lanzamiento</span>
                            </span>
                        </div>
                    )}
                    <div>
                        <span className="text-3xl font-bold " style={{ color: product.color[1] }}>
                            ${product.price} <span className="text-sm " style={{ color: product.color[1] }}>Precio final</span>
                        </span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-white py-2 px-6 rounded-full font-semibold transition-colors mt-4"
                        style={{ backgroundColor: product.color[0] }}
                        onClick={() => window.location.href = product.redirectUrl}
                    >
                        ¡Lo quiero!
                    </motion.button>
                </div>
            </div>
            <div className="max-w-full overflow-hidden">
                <Carrousel images={product.images} />
            </div>
        </div>
    );
}

export default ProductCard;