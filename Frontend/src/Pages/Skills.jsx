import { FaCode, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
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
export default function Skills() {

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <FaCode className="text-4xl md:text-5xl text-blue-600" />, 
      skills: ["Java", "JavaScript", "React.js", "Next.js", "HTML", "CSS", "Bootstrap", "Tailwind"],
      description: "Proficient in modern programming languages, ensuring clean and efficient code.",
    },
    {
      category: "Databases & Backend",
      icon: <FaDatabase className="text-4xl md:text-5xl text-red-600" />, 
      skills: ["SQL", "MongoDB", "SQL Server", "Firebase", "PostgreSQL"],
      description: "Expertise in relational and NoSQL databases, optimized for performance and security.",
    },
    {
      category: "Web Development",
      icon: <FaLaptopCode className="text-4xl md:text-5xl text-yellow-600" />, 
      skills: ["Frontend & Backend", "API Integration", "Performance", "Serverless", "GraphQL"],
      description: "Developing responsive and efficient web applications with seamless user experiences.",
    },
    {
      category: "Technologies & Tools",
      icon: <FaTools className="text-4xl md:text-5xl text-green-600" />, 
      skills: ["AWS", "Docker", "Git", "CI/CD", "Kubernetes"],
      description: "Familiar with cloud computing, DevOps tools, and version control for scalable applications.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const tagVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="bg-white py-16 px-4 mt-5 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient Text */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2 md:mb-3">
            My Skills
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full"
            >
              <div className="flex flex-col h-full">
                {/* Icon and Category */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center mb-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 bg-blue-50 rounded-full mb-3"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                    {skill.category}
                  </h3>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-xs sm:text-sm mb-5 text-center flex-grow"
                  whileHover={{ scale: 1.02 }}
                >
                  {skill.description}
                </motion.p>

                {/* Skills Tags */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-2"
                  layout
                >
                  {skill.skills.map((item, i) => (
                    <motion.span
                      key={i}
                      variants={tagVariants}
                      whileHover="hover"
                      className="inline-block px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <hr className="w-[90%] sm:w-[80%] mx-auto border-t-1 border-black mb-5 mt-10" />
          
          {/* Tech Stack Icons */}
          <div className='flex flex-wrap justify-center gap-4 sm:gap-0 sm:justify-evenly px-4'>
            {[html, css, javascript, react, bootstrap].map((img, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.1 }}
                className='w-[12%] sm:w-[8%] md:w-[6%] grayscale hover:grayscale-0 transition-all duration-300'
                src={img}
                alt="Tech logo"
              />
            ))}
          </div>
          
          <div className='flex flex-wrap justify-center gap-4 sm:gap-0 sm:justify-evenly mt-6 sm:mt-10 mb-10 px-4'>
            {[tailwind, java, mysql, github, vs].map((img, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.1 }}
                className='w-[12%] sm:w-[8%] md:w-[6%] grayscale hover:grayscale-0 transition-all duration-300'
                src={img}
                alt="Tech logo"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}