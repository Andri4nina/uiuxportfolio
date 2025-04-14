"use client";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, FaMobileAlt, FaDesktop, FaPalette 
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      icon: <FaLaptopCode className="text-4xl" />,
      description: "Création de sites web modernes et réactifs avec ReactJs et Tailwind CSS. Interfaces utilisateur optimisées pour une expérience fluide et intuitive.",
      aosDelay: "100"
    },
    {
      title: "Applications Mobile",
      icon: <FaMobileAlt className="text-4xl" />,
      description: "Développement d'applications mobiles cross-platform avec React Native. Performantes, esthétiques et adaptées à tous les appareils.",
      aosDelay: "200"
    },
    {
      title: "Applications Desktop",
      icon: <FaDesktop className="text-4xl" />,
      description: "Solutions logicielles Windows/macOS avec Java et C#. Applications robustes, sécurisées et hautement performantes.",
      aosDelay: "300"
    },
    {
      title: "Design UI/UX",
      icon: <FaPalette className="text-4xl" />,
      description: "Conception d'interfaces suivant les meilleures pratiques. Wireframes, prototypes et designs finaux pour une expérience utilisateur optimale.",
      aosDelay: "400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 py-20 px-4 relative overflow-hidden">
      {/* Taches animées principales */}
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

      {/* Éléments décoratifs électroniques */}
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


      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Mes <span className="text-pink-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white border-opacity-50 relative overflow-hidden"
            >
             
              <div className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-500 rounded-full"></div>
              
        
              <div className="w-16 h-16 mb-4 mx-auto bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center text-white">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-center text-purple-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
              
            
              <motion.div
                className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

     
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-8 text-center text-white relative overflow-hidden"
        >
     
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white bg-opacity-5 rounded-full"></div>
          
          <h3 className="text-2xl font-bold mb-4">Un projet en tête ?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Discutons de comment je peux transformer vos idées en une expérience utilisateur exceptionnelle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium shadow-lg"
          >
            Contactez-moi
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;