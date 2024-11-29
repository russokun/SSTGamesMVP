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
            <div className="flex flex-col sm:flex-row mb-4">
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
                <div className="w-full md:w-2/3 flex flex-col items-center justify-center mb-4">
                    {product.originalPrice && (
                        <div className='flex flex-col'>
                            <span className="text-2xl " style={{ color: product.color[0] }}>Valor Normal</span>
                            <span className="line-through text-2xl text-white self-center">
                                ${product.originalPrice} 
                            </span>
                        </div>
                    )}
                    {product.launchPrice && (
                        <div className='flex flex-col'>
                            <span className="text-2xl " style={{ color: product.color[0] }}>Oferta de lanzamiento</span>
                            <span className=" line-through text-2xl text-white self-center">
                                ${product.launchPrice} 
                            </span>
                        </div>
                    )}
                    <div className='flex flex-col'>
                        <span className="text-2xl " style={{ color: product.color[1] }}>Oferta x EDUFEST</span>
                        <span className="text-3xl font-bold self-center" style={{ color: product.color[1] }}>
                            ${product.price} 
                        </span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-white text-xl  py-5 px-10 rounded-full font-bold transition-colors mt-4"
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