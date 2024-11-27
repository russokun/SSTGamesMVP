import React from 'react';
import ProductCard from './ProductCard';

// Definir las carpetas de imágenes de forma estática
const riskCastleImages = import.meta.glob('../assets/landing/risk castle cuadrado/*.{png,jpg,jpeg,svg}');
const elAccidenteFueImages = import.meta.glob('../assets/landing/el accidente fue/*.{png,jpg,jpeg,svg}');
const happyBreakImages = import.meta.glob('../assets/landing/happybreak/*.{png,jpg,jpeg,svg}');

// Función para convertir los objetos importados en arrays
const convertImagesToArray = (importedImages) => {
  return Object.values(importedImages).map(image => image());
};

// Cargar las imágenes en arrays
const images = {
  riskCastle: convertImagesToArray(riskCastleImages),
  elAccidenteFue: convertImagesToArray(elAccidenteFueImages),
  happyBreak: convertImagesToArray(happyBreakImages),
};

const products = [
  {
    id: 1,
    title: 'Risk Castle',
    logo: '/src/assets/landing/risk castle cuadrado/7.png',
    description: (
      <>
        
Risk Castle es un juego para 6 jugadores que fomenta la metacognición. Incluye 182 tarjetas de bloques de construcción por color (uno por jugador) y 40 tarjetas de casos que representan 4 tipos de demandas laborales: mentales, emocionales, equilibrio trabajo-vida y físicas (10 de cada tipo).
        <br />
        El objetivo es construir un castillo con las tarjetas contra reloj. Si una tarjeta cae, el juego se detiene para reflexionar sobre la situación usando las tarjetas de casos. La dinámica introduce tensión y fomenta la reflexión sobre imprevistos y manejo de demandas laborales.
      </>
    ),
    features: [
      '196 tarjetas imprimibles (puedes imprimir cuantos sets quieras)',
      'Acta de juego imprimible para sistema de gestión',
      'Test automatizado para cada participante para generar evidencias de aprendizaje.',
      'Test imprimible para generar evidencias de aprendizaje',
      'Manual De juego',
      'Comunidad en whatsapp',
      'Foro de preguntas en sistema privado',
    ],
    originalPrice: 137,
    launchPrice: 97,
    price: 87.13,
    images: images.riskCastle
  },
  {
    id: 2,
    title: 'El Accidente Fue',
    logo: '/src/assets/landing/el accidente fue/el accidente fue.png',
    description: (
      <>
        
Risk Castle es un juego para 6 jugadores que fomenta la metacognición. Incluye 182 tarjetas de bloques de construcción por color (uno por jugador) y 40 tarjetas de casos que representan 4 tipos de demandas laborales: mentales, emocionales, equilibrio trabajo-vida y físicas (10 de cada tipo).
        <br />
        El objetivo es construir un castillo con las tarjetas contra reloj. Si una tarjeta cae, el juego se detiene para reflexionar sobre la situación usando las tarjetas de casos. La dinámica introduce tensión y fomenta la reflexión sobre imprevistos y manejo de demandas laborales.
      </>
    ),
    features: [
      '196 tarjetas imprimibles (puedes imprimir cuantos sets quieras)',
      'Acta de juego imprimible para sistema de gestión',
      'Test automatizado para cada participante para generar evidencias de aprendizaje.',
      'Test imprimible para generar evidencias de aprendizaje',
      'Manual De juego',
      'Comunidad en whatsapp',
      'Foro de preguntas en sistema privado',
    ],
    originalPrice: 137,
    launchPrice: 97,
    price: 87.13,
    images: Array(3).fill('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SaXNrIE1hc3RlciBQcm88L3RleHQ+PC9zdmc+')
  },
  {
    id: 3,
    title: 'HappyBreak Serious Game',
    logo: '/src/assets/landing/happybreak/logo.png',
    description: (
      <>
        
        HappyBreak Serious Game es un juego diseñado para desarrollar la salud mental y emocional. Se puede jugar como juego de mesa para 7 personas o en formato taller para hasta 50 participantes.
        <br />
        La metáfora central es que somos "baristas" que procesan 7 "cafés" o acciones intencionadas para promover felicidad y bienestar. Basado en investigaciones de expertos como Martin Seligman (psicología positiva), Tal Ben Shahar (Harvard) y Sonja Lyubomirsky (U. de California), el juego destaca que nuestras acciones pueden influir en el 40% de nuestra felicidad subjetiva.
      </>
    ),
    features: [
      '141  tarjetas imprimibles (puedes imprimir cuantos sets quieras)',
      'Acta de juego imprimible para sistema de gestión',
      'Test automatizado para cada participante para generar evidencias de aprendizaje.',
      'Test imprimible para generar evidencias de aprendizaje',
      'Manual De juego',
      'Comunidad en whatsapp',
      'Foro de preguntas en sistema privado',
    ],
    originalPrice: 137,
    price: 97,
    images: images.elAccidenteFue
  }
];

function Products() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Juegos
        </h2>
        <div className="space-y-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;