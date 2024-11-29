import React from 'react';
import MemoryGame from './MemoryGame';

function Header() {
  return (
    <header className="min-h-screen">
      {/* Memory Game Section */}
      <div className="bg-[#acfdf9] py-16">
        <div className="container mx-auto px-4">
          <MemoryGame />
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-tight">
            Somos <span className="text-blue-600">SSTGames</span>, tu maletín de herramientas lúdicas para la 
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text"> Prevención en seguridad y salud en el trabajo </span> 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre una nueva forma de capacitar a tu equipo con nuestras 
            <span className="font-semibold text-blue-600"> herramientas prácticas </span> 
            y de 
            <span className="font-semibold text-orange-500"> alto impacto</span>
          .</p>
        </div>
      </div>
    </header>
  );
}

export default Header;