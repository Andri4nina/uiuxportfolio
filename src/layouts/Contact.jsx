"use client";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 py-20 px-4 relative overflow-hidden">
      {/* Décoration animée identique à Home */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-2/3 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
        animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Éléments électroniques décoratifs comme Home */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex justify-evenly mb-4">
            {[...Array(30)].map((_, j) => (
              <div key={j} className="w-1 h-1 bg-purple-600 rounded-full"></div>
            ))}
          </div>
        ))}
      </div>

      {/* Cercles concentriques */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-pink-400 rounded-full opacity-40"></div>

      {/* Contenu principal avec style cohérent */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* En-tête style Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Contactez-<span className="text-pink-600">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section coordonnées - style carte Home */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white border-opacity-50"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Mes coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full text-pink-600">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:raso4m4ndrianina@gmail.com" className="text-gray-600 hover:text-pink-600 hover:underline">
                    raso4m4ndrianina@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                  <FiPhone className="text-xl rotate-90" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Téléphone</h4>
                  <a href="tel:+261341320874" className="text-gray-600 hover:text-purple-600 hover:underline">
                    +261 34 13 208 74
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Localisation</h4>
                  <p className="text-gray-600">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux avec style bouton Home */}
            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-4">Mes réseaux</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a
                  href="https://github.com/Andri4nina"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire avec style cohérent */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white border-opacity-50"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Envoyez un message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Dites-moi tout sur votre projet..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <span>Envoyer</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;