import React from 'react';
import { motion } from 'framer-motion';
import {
    FaUserTie, FaLaptopCode, FaMapMarkerAlt,
    FaEnvelope, FaPhone, FaGraduationCap, FaCalendarAlt
} from 'react-icons/fa';

const About = () => {
    const profileItems = [
        { icon: <FaUserTie className="mr-2" />, label: "Expérience", value: "1 an", delay: "300" },
        { icon: <FaLaptopCode className="mr-2" />, label: "Spécialité", value: "Front-end", delay: "350" },
        { icon: <FaMapMarkerAlt className="mr-2" />, label: "Adresse", value: "Antananarivo, Madagascar", delay: "400" },
        { icon: <FaEnvelope className="mr-2" />, label: "E-mail", value: <a href="mailto:raso4m4ndrianina@gmail.com" className="hover:underline">raso4m4ndrianina@gmail.com</a>, delay: "450" },
        { icon: <FaPhone className="mr-2 rotate-90" />, label: "Téléphone", value: "+261 34 13 208 74", delay: "500" },
        { icon: <FaGraduationCap className="mr-2" />, label: "Niveau d'étude", value: "Master 1 Science des données et IA", delay: "550" },
        { icon: <FaCalendarAlt className="mr-2" />, label: "Freelance", value: "Disponible", delay: "600" }
    ];

    return (
        <section className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
                {/* Titre Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                        À propos de <span className="text-pink-600">moi</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* Contenu */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo de profil (placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative mx-auto"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 overflow-hidden shadow-xl">
                            {/* Remplace par ta photo */}
                            <div className="w-full h-full flex items-center justify-center text-6xl">
                                <img
                                    src="/images/profile.png"
                                    alt="Moi"
                                    className="w-[80%] h-[80%] rounded-full object-cover  shadow-lg relative z-10"
                                />
                            </div>
                        </div>
                        <div className="absolute z-10 -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                            <div className="text-2xl font-bold text-purple-700">1+</div>
                            <div className="text-sm text-gray-600">Année d'expérience</div>
                        </div>
                    </motion.div>

                    {/* Informations profil */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Designer UX/UI & Développeur Front-end
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Passionné par la création d'interfaces intuitives et esthétiques, je combine mes compétences en design et développement pour offrir des expériences utilisateur exceptionnelles. Actuellement en Master 1 en Science des Données et IA, j'apporte une approche data-driven à mes projets.
                        </p>

                        {/* Grille d'informations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {profileItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start"
                                >
                                    <div className="text-purple-600 text-xl mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">{item.label}</h4>
                                        <p className="text-gray-600">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bouton CV */}
                        <motion.a
                            href="/file/CV.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Télécharger mon CV
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;