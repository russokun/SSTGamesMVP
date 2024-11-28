import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold mb-6 text-center">¡Descubre más juegos!</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-100 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-100 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black hover:bg-slate-800 hover:text-white  py-3 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105 duration-200"
        >
          Quiero!
        </button>
      </form>
    </div>
  );
}

export default ContactForm;