import { motion } from "framer-motion";
import video from "../assets/Bgvideo/bgvideo2.mp4";
import akanksha_resume from "../assets/akanksha_resume.pdf";
import { Download, ArrowRight } from "lucide-react";
import akanksha from "../assets/akanksha.jpeg";
import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/Bootstrap_logo.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import mysql from '../assets/mysql.png';
import github from '../assets/Github.png';
import vs from '../assets/vs.png';

export default function Home() {
  const techStack = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Java", icon: java },
    { name: "MySQL", icon: mysql },
    { name: "GitHub", icon: github },
    { name: "VS Code", icon: vs }
  ];

  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" }
  ];

  const skills = [
    "JavaScript", "React", "Java", "Spring Boot", 
    "MongoDB", "AWS", "Docker", "Node.js", "HTML5", 
    "CSS3", "Tailwind CSS", "Git"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white mt-16">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/20"></div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-slate-800"
        >
          <div className="max-w-4xl space-y-6">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-cyan-500"
            >
              Akanksha Dhekane
            </motion.h1>
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-white"
            >
              Full-Stack Developer & Problem Solver
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-purple-400"
            >
              Crafting elegant solutions to complex problems through code and creativity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <a
                href={akanksha_resume}
                download="Akanksha_Dhekane_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold 
                         hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 bg-white border-2 border-cyan-500 text-cyan-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold 
                         hover:bg-cyan-50 transition-all duration-300 hover:gap-3 shadow-md hover:shadow-cyan-500/20"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-500 rounded-full mt-2 animate-scroll"></div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative w-full sm:w-80 h-auto sm:h-96 bg-white flex flex-col items-center justify-center 
                      text-center rounded-2xl overflow-hidden shadow-xl border border-slate-200 p-6
                      hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all duration-500"
          >
            {/* Profile Image */}
            <div className="w-24 sm:w-32 h-24 sm:h-32 mt-4 sm:mt-8 rounded-full border-4 border-white z-10 
                          group-hover:border-cyan-400 transition-all duration-500
                          shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)]">
              <img
                className="rounded-full w-full h-full object-cover"
                src={akanksha}
                alt="Akanksha Dhekane"
              />
            </div>

            {/* Profile Details */}
            <div className="z-10 mt-4 sm:mt-6 px-4 sm:px-6 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Akanksha Dhekane</h3>
              <p className="text-cyan-600 text-sm sm:text-base">Full-Stack Developer</p>
              <div className="h-px w-12 sm:w-16 mx-auto bg-slate-200 my-2 sm:my-3 group-hover:bg-cyan-400 transition-colors duration-500"></div>
              <p className="text-slate-500 text-xs sm:text-sm">
                Java | React | Node.js | Spring Boot | MongoDB
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 z-10">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  href={social.url}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-100 rounded-full
                            hover:bg-cyan-500/20 hover:text-cyan-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
              About <span className="text-cyan-600">Me</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base">
              <p>
                I'm a passionate <span className="text-cyan-600 font-medium">Full-Stack Developer</span> with expertise in building scalable web applications and solving complex problems through innovative solutions.
              </p>
              <p>
                My toolkit includes <span className="text-slate-800 font-medium">Java, React.js, Node.js, and modern web technologies</span> that I leverage to create performant, user-friendly applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-2 sm:px-3 py-1 bg-slate-100 text-xs sm:text-sm rounded-full text-cyan-600 border border-slate-200
                            hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full py-8 sm:py-12 px-4 bg-white"
      >
        <hr className="w-[90%] sm:w-[80%] mx-auto border-t border-slate-200 mb-6 sm:mb-8" />
        
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8 sm:mb-12">
          My <span className="text-cyan-600">Tech Stack</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <motion.div 
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <img
                className="w-12 sm:w-16 md:w-20 grayscale hover:grayscale-0 transition-all duration-300"
                src={tech.icon}
                alt={`${tech.name} logo`}
              />
              <span className="text-xs sm:text-sm mt-2 text-slate-600">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}