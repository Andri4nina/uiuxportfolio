"use client";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - Logo + Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-pink-500">UX</span> Portfolio
            </h3>
            <p className="text-gray-400 mb-6">
              Designer UX/UI & Développeur Front-end passionné par la création d'expériences digitales mémorables.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://github.com/Andri4nina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Projets', 'Services', 'À propos', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Coordonnées */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:raso4m4ndrianina@gmail.com" className="hover:text-white transition-colors">
                  raso4m4ndrianina@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+261341320874" className="hover:text-white transition-colors">
                  +261 34 13 208 74
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Abonnez-vous pour recevoir mes dernières réalisations.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500 text-white w-full"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 px-4 rounded-r-lg transition-colors"
              >
                <FiSend className="text-xl" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Portfolio UX/UI - Andrianina. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;