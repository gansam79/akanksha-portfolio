import { useState } from "react";
import { motion } from "framer-motion";
import nasscom from '../assets/Certificates/NASSCOM.jpeg';
import jshero from '../assets/Certificates/js_Zero_hero.jpg';
import react from '../assets/Certificates/React_JS.jpg'; 
import web from '../assets/Certificates/WebDevlopment.jpg'; 
import frontend from '../assets/Certificates/FrontendCSS.jpg';
import html from '../assets/Certificates/HTML.jpg';
import css from '../assets/Certificates/CSS.jpg';
import sql from '../assets/Certificates/SQL_Project_Beginers.jpg'; 
import mongo from '../assets/Certificates/MongoDB.jpg';

export default function Certifications() {
  const certifications = [
    { title: "Java Full Stack Development (Accenture)", image: nasscom },
    { title: "JavaScript Zero to Hero", image: jshero },
    { title: "React.js", image: react },
    { title: "Web Development", image: web },
    { title: "Front-End Development", image: frontend },
    { title: "HTML", image: html },
    { title: "CSS", image: css },
    { title: "SQL", image: sql },
    { title: "MongoDB", image: mongo },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="certifications" className="bg-white py-16 px-4 mt-8 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
            My Certifications
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Recognized achievements and completed training programs
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200 cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                <motion.img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 text-white text-3xl bg-red-600 hover:bg-red-700 w-10 h-10 flex items-center justify-center rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                &times;
              </motion.button>
              <motion.img 
                src={selectedImage} 
                alt="Certificate Preview" 
                className="w-full max-h-[80vh] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}