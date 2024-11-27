import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import NewReleases from './components/NewReleases/NewReleases';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Products />
      <NewReleases />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;