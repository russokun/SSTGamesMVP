import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="md:col-span-1">
            <ContactForm />
          </div>

          {/* WhatsApp and Social Links */}
          <div className="md:col-span-1 flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2 text-2xl" />
                ¡Contáctanos por WhatsApp!
              </a>
              <p className="mt-2 text-gray-400">Resolvemos tus dudas en minutos.</p>
            </div>

            <div className="text-center">
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex justify-center space-x-4 mb-6">
                <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
                <a href="#" className="text-2xl hover:text-pink-400"><FaInstagram /></a>
              </div>
              
              <div className="text-center">
                <h4 className="font-bold mb-2">DevBy</h4>
                <a 
                  href="https://www.linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SSTGames. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;