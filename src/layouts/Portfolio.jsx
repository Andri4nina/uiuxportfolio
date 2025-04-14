"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
    const projects = [
        {
            title: "AchaToo",
            description: "Plateforme de renouveau des achats en entreprise avec fonctionnalités avancées",
            technologies: ["C#", "Python", "NestJS", "React"],
            year: 2025,
            links: {
                github: "https://github.com/ArtKaody/documentation.git",

            },
            image: "/placeholder-achatoo.jpg" // Remplacez par votre image
        },
        {
            title: "Iot",
            description: "Système de gestion d'objets connectés socket avec apk mobile",
            technologies: ["C++", "Express", "React"],
            year: 2025,
            links: {
                github: "https://github.com/Andri4nina/Iot.git",

            },
            image: "/placeholder-iot.jpg" // Remplacez par votre image
        },
        {
            title: "Tragnobe",
            description: "Application de gestion de stock avec recherche avancée",
            technologies: ["React", "NestJS"],
            year: 2024,
            links: {
                github: "#",
                live: "#"
            },
            image: "/placeholder-tragnobe.jpg"
        },
        {
            title: "Stockify",
            description: "Solution de gestion de stock avec analyse en temps réel",
            technologies: ["React", "NestJS"],
            year: 2024,
            links: {
                github: "#",
                live: "#"
            },
            image: "/placeholder-stockify.jpg"
        },
        {
            title: "Kalintsika Anio",
            description: "Application mobile de la gestion d'alimentation",
            technologies: ["React Native"],
            year: 2024,
            links: {
                live: "https://lnkd.in/eEu4jxSx"
            },
            image: "/images/Kalintsika anio.jfif"
        },
        {
            title: "Pubnex",
            description: "AppBlog pour projet d'ecole",
            technologies: ["React", "NestJS"],
            year: 2024,
            links: {
                github: "#",
            },
            image: "/images/pubnex2.0.png"
        },
        {
            title: "Pisciculture",
            description: "Système de gestion de ferme piscicole",
            technologies: ["React", "Spring Boot"],
            year: 2024,
            links: {
                github: "https://github.com/Andri4nina/Pisciculture.git",
            },
            image: "/placeholder-pisciculture.jpg"
        },
        {
            title: "Posteman",
            description: "Application de gestion postale",
            technologies: ["Laravel"],
            year: 2024,
            links: {
                github: "https://github.com/Andri4nina/courrier.git",

            },
            image: "/images/posteman.png"
        },
        {
            title: "Gestion de location de voitures",
            description: "Système de gestion de location de voitures",
            technologies: ["C#", "Java"],
            year: 2023,
            links: {
                github: "#",
                live: "#"
            },
            image: "/placeholder-location.jpg"
        },
        {
            title: "Gestion de frais de scolarité",
            description: "Solution pour établissements éducatifs",
            technologies: ["JavaScript", "PHP"],
            year: 2023,
            links: {
                github: "#",
                live: "#"
            },
            image: "/placeholder-scolarite.jpg"
        },
        {
            title: "F1",
            description: "Site d'information sur la Formule 1",
            technologies: ["HTML", "CSS"],
            year: 2022,
            links: {
                github: "#",
                live: "#"
            },
            image: "/placeholder-f1.jpg"
        },
        {
            title: "Portfolio (ancien)",
            description: "Mon premier portfolio personnel",
            technologies: ["HTML", "CSS"],
            year: 2022,
            links: {
                github: "https://github.com/Andri4nina/andri4nina.github.io.git",
                live: "https://andri4nina.github.io/"
            },
            image: "/images/Portfolio ancien.png"
        }
    ];

    return (
        <div className="min-h-screen bg-yellow-100 py-20 px-4 relative overflow-hidden">
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
                {[...Array(200)].map((_, i) => (
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

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto relative z-10">
                {/* En-tête style Home */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                        Mes <span className="text-pink-600">Réalisations</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Découvrez comment je transforme des idées en expériences digitales mémorables.
                    </p>
                </motion.div>

                {/* Filtres avec style cohérent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {['Tous', 'Web', 'Mobile', 'Desktop', 'Design'].map((filter, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-full bg-white bg-opacity-70 backdrop-blur-sm border border-white border-opacity-50 text-purple-700 hover:bg-purple-100 transition-all"
                        >
                            {filter}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grille de projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-white border-opacity-50 group relative"
                        >
                            {/* Décoration projet */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full" />

                            {/* Image du projet */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-sm shadow-md">
                                    {project.year}
                                </span>
                            </div>

                            {/* Contenu texte */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-purple-800 mb-2 group-hover:text-pink-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Boutons */}
                                <div className="flex space-x-3">
                                    {project.links.github && (
                                        <motion.a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 3 }}
                                            className="flex items-center text-purple-700 hover:text-pink-600 transition-colors"
                                        >
                                            <FiGithub className="mr-1" /> Code
                                        </motion.a>
                                    )}
                                    {project.links.live && (
                                        <motion.a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 3 }}
                                            className="flex items-center text-purple-700 hover:text-pink-600 transition-colors"
                                        >
                                            <FiExternalLink className="mr-1" /> Live
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA avec style Home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Prêt à démarrer votre projet ?</h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                    >
                        <span className="relative z-10">Contactez-moi</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;