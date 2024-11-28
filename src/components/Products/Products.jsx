import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Risk Castle',
    logo: 'landing/risk castle cuadrado/7.png',
    description1: (
      <>
        Risk Castle es un juego para 6 jugadores que fomenta la metacognición. Incluye 182 tarjetas de bloques de construcción por color (uno por jugador) y 40 tarjetas de casos que representan 4 tipos de demandas laborales: mentales, emocionales, equilibrio trabajo-vida y físicas (10 de cada tipo).
      </>
    ),
    description2: (
      <>
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
    images: [
      'landing/risk castle cuadrado/1.png',
      'landing/risk castle cuadrado/2.png',
      'landing/risk castle cuadrado/3.png',
      'landing/risk castle cuadrado/4.png',
      'landing/risk castle cuadrado/5.png',
      'landing/risk castle cuadrado/6.png',
    ],
    className: 'risk-castle',
    color: ['#b812ed','#F2F6FF' ],
    redirectUrl: 'https://pay.hotmart.com/Y96782635K?bid=1732658050787?ap=240e&offDiscount=BLACKNOVEMBER'
  },
  {
    id: 2,
    title: 'El Accidente Fue',
    logo: 'landing/el accidente fue/el accidente fue.png',
    description1: (
      <>
        El Accidente Fue es una dinámica para 7 jugadores que promueve la conciencia sobre el uso de equipos de protección personal (EPP). Cada jugador recibe un mazo con 7 elementos de seguridad, mientras el juego incluye un total de 133 tarjetas: 84 con casos reales de accidentes por no usar EPP y 49 con elementos de seguridad.
      </>
    ),
    description2: (
      <>
        La dinámica consiste en adivinar qué accidente ocurrió por la falta de un elemento específico. El último jugador en quedarse con tarjetas pierde, convirtiéndose en el "accidentado". Este jugador debe leer una tarjeta de accidente y reflexionar sobre cómo prevenir esa situación, fomentando metacognición y aprendizaje.
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
    images: [
      'landing/el accidente fue/1.png',
      'landing/el accidente fue/2.png',
      'landing/el accidente fue/3.png',
      'landing/el accidente fue/4.png',
      'landing/el accidente fue/5.png',
      'landing/el accidente fue/6.png',
    ],
    className: 'el-accidente-fue',
    color: ['#F3A665','#F2F6FF' ],
    redirectUrl: 'https://pay.hotmart.com/L96785915K?bid=1732659160696?ap=240e&offDiscount=BLACKNOVEMBER'
  },
  {
    id: 3,
    title: 'HappyBreak Serious Game',
    logo: 'landing/happybreak/logo.png',
    description1: (
      <>
        HappyBreak Serious Game es un juego diseñado para desarrollar la salud mental y emocional. Se puede jugar como juego de mesa para 7 personas o en formato taller para hasta 50 participantes.
      </>
    ),
    description2: (
      <>
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
    images: ['landing/happybreak/happybreak.png'],
    className: 'happybreak',
    color: ['#986710', '#F2F6FF'],
    redirectUrl: 'https://pay.hotmart.com/P92679362T?off=m48g0dz2&bid=1732661310248'
  }
];

function Products() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Juegos
        </h2>
        <div className="space-y-12">
          {products.map(product => (
            <div key={product.id} className={`product-section ${product.className}`}>
              <ProductCard key={product.id} product={{ ...product, logo: `${baseUrl}${product.logo}`, images: product.images.map(image => `${baseUrl}${image}`) }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;