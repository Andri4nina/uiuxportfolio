"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
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

      {/* Éléments électroniques décoratifs */}
      {/* Grille de points */}
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

      {/* Carrés avec rotation */}
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-blue-400 opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/5 right-1/5 w-10 h-10 border border-yellow-500 opacity-50"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Triangles */}
      <div className="absolute bottom-20 left-20 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-pink-400 border-r-[15px] border-r-transparent opacity-50"></div>
      <div className="absolute top-20 right-20 w-0 h-0 border-l-[20px] border-l-transparent border-t-[35px] border-t-purple-400 border-r-[20px] border-r-transparent opacity-50"></div>

      {/* Circuits électroniques */}
      <div className="absolute top-10 right-10 w-24 h-8 border-t-2 border-r-2 border-purple-500 rounded-tr-lg opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-16 h-6 border-b-2 border-l-2 border-pink-500 rounded-bl-lg opacity-60"></div>

      {/* Contenu principal */}
      <div className="z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 px-6 py-12 bg-opacity-60 backdrop-blur-lg rounded-xl ">
        {/* Photo */}
        <div className="relative">
          <img
            src="/images/profile.png"
            alt="Moi"
            className="w-48 h-48 rounded-full object-cover border-4 border-pink-500 shadow-lg relative z-10"
          />
          {/* Décoration autour de la photo */}
          <div className="absolute -inset-2 border-2 border-purple-400 rounded-full opacity-60 animate-ping-slow"></div>
          <div className="absolute -inset-4 border border-pink-300 rounded-full opacity-30"></div>
        </div>

        {/* Texte */}
        <div className="text-center md:text-left relative">
          {/* Points électroniques autour du texte */}
          <div className="absolute -top-4 -left-4 w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-pink-500 rounded-full"></div>
          
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4 leading-tight">
            UX/UI <span className="text-pink-600">Designer</span> By Andrianina
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Je crée des interfaces qui <span className="font-bold text-purple-600">inspirent</span>.
          </p>
          <button className="relative bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition group">
            Voir mon portfolio
            {/* Effet électronique sur le bouton */}
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full group-hover:animate-ping"></span>
          </button>
        </div>
      </div>
    </div>
  );
}