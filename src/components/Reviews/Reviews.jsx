import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Rafael Becerra',
    image: 'rafaelBecerra.png',
    text: 'Trabajo hace años dirigiendo un equipo de SST, para nuestra compañía la propuesta de SST Games es fantástica ya que sus dispositivos se adaptan  a cortas fracciones de tiempo, y nos permiten documentar fácilmente nuestras capacitaciones para cumplir la normativa vigente. Lo Recomiendo ampliamente.',
    role: ''
  },
  {
    id: 2,
    name: 'Ana Ezquivel',
    image: 'anaEzquivel.png',
    text: 'Para mi como facilitadora de SST me ha sido muy práctico los juegos de sst games ya que no solo su diseño es un verdadero objeto de deseo, sino que sus dinámicas son simples y de alto impacto comprensibles para distintos públicos en diversos contextos ya sea personal de terreno como de oficina.',
    role: ''
  },
  {
    id: 3,
    name: 'Cristina Solorza',
    image: 'cristinaSolorza.png',
    text: 'Como una profesional de SST , me complace recomendar los dispostivos de SSTGAMES, son prácticos, lindos , simples y de impacto.',
    role: ''
  },
  {
    id: 4,
    name: 'Edgard Paw',
    image: 'edgardPaw.png',
    text: 'Las herramientas de sst games son de un diseño impactante, y lo mejor que todas están alineadas con nuestros sistemas de gestión, tanto en forma análoga como digital.',
    role: ''
  }
];

function Reviews() {
  const baseUrl = import.meta.env.BASE_URL;
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section className="py-16 bg-[#F1D600]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Qué dicen de nuestros juegos 
        </h2>
        <div className="relative max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
            {currentReviews.map(review => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`${baseUrl}src/assets/img/${review.image}`}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <p className="text-gray-600">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-800">{review.text}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextPage}
              className="bg-black text-white p-2 rounded-full hover:bg-white hover:text-black"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;