import React from 'react';
import { motion } from 'framer-motion';

const upcomingGames = [
  {
    id: 1,
    title: 'New Realese',
    releaseDate: 'Marzo 2025',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SaXNrIE1hc3RlcjwvdGV4dD48L3N2Zz4='
  },
  {
    id: 2,
    title: 'New Realese',
    releaseDate: 'Mayo 2025',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR'
  },
  {
    id: 3,
    title: 'New Realese',
    releaseDate: 'Agosto 2025',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR'
  },
  {
    id: 4,
    title: 'New Realese',
    releaseDate: 'Noviembre 2025',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SaXNrIE1hc3RlcjwvdGV4dD48L3N2Zz4='
  }
];

function NewReleases() {
  return (
    <section className="py-16 bg-[#424040]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Plan de lanzamiento de nuevos dispositivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {upcomingGames.map(game => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-square relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover filter blur-sm grayscale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="mb-4">Próximo Lanzamiento: {game.releaseDate}</p>
                  <button
                    className={`py-2 px-4 rounded-full transition-colors ${
                      game.id === 1 || game.id === 3
                        ? 'bg-black text-white hover:bg-white hover:text-black'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    Mantente informado
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewReleases;