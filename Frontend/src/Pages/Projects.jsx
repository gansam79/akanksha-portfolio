import {
  FaLaptopCode,
  FaBook,
  FaNewspaper,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  // === Academic Projects (Static) ===
  const academicProjects = [
    {
      title: "Online College Finder Hub (2023-2024)",
      icon: <FaNewspaper className="text-5xl text-yellow-600" />,
      description:
        "Developed a comprehensive web platform enabling students to search, compare, and shortlist colleges based on courses, location, fees, and rankings, streamlining the admission decision process.",
      github: "https://github.com/akankshaaa27/CollegeFinderHub",
    },
    {
      title: "Blood Bank Management System (2022-2023)",
      icon: <FaBook className="text-5xl text-green-600" />,
      description:
        "Engineered a centralized platform for managing blood donations, donor records, inventory levels, and hospital requests to ensure efficient and timely blood supply distribution.",
      github: "https://github.com/akankshaaa27/blood-bank",
    },
    {
      title: "Indian Tourism System (2021-2022)",
      icon: <FaLaptopCode className="text-5xl text-blue-600" />,
      description:
        "Designed and implemented a tourism management system featuring popular destinations, travel packages, and booking functionalities to facilitate trip planning across India.",
      github: "https://github.com/akankshaaa27/Indian_Tourisum_System",
    },
  ];

  // === State for Backend-Fetched Projects ===
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // === Fetch Projects from Backend ===
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/project");
        console.log("Project data fetched:", response.data);
        setProjects(response.data.data || []); // avoid crash if data undefined
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // === Animation Variants ===
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="bg-white mt-5 py-16 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* === Academic Projects Section === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
            Academic Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Research and academic initiatives developed during my undergraduate studies
          </p>
        </motion.div>

        {/* === Academic Project Cards === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium w-full max-w-xs"
                >
                  View Repository
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === Professional Projects Section === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 mb-2">
            Professional Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Client deliverables and production-ready applications developed for real-world implementation
          </p>
        </motion.div>

        {/* === Professional Project Cards (Static + Dynamic) === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {[
            {
              title: "Saksham Softech, Pune",
              description: `• Developed user interfaces using ReactJS and integrated backend APIs
• Built and maintained CRUD operations and RESTful APIs using Java Spring Boot
• Managed API consumption and component state in React using Hooks
• Implemented protected routes with React Router
• Deployed full-stack applications using AWS and configured domains via GoDaddy
• Collaborated with cross-functional teams to deliver end-to-end full-stack features`,
              git: "https://github.com/akankshaaa27/Saksham-Softech",
              host: "https://sakshamsoftech.com/",
            },
//             {
//               title: "Saksham Finance",
//               description: `• Developed a financial web platform specializing in loan services and EMI management
// • Implemented using React, Vite, Node.js, and MongoDB for a dynamic loan system
// • Engineered features for loan eligibility assessment, user dashboard, and customer support
// • Built secure backend APIs for form processing and data management`,
//               git: "https://github.com/akankshaaa27/SakshamFinance",
//               host: "https://saksham-loan-frontend.vercel.app/",
//             },
            {
              title: "S2J Academy",
              description: `• Developed a responsive educational platform using React, Vite, and Tailwind CSS
• Implemented backend services with Node.js and MongoDB for course and student data management
• Built comprehensive features including student registration, class scheduling, and inquiry forms`,
              git: "https://github.com/akankshaaa27/S2J",
              host: "https://saksham2javaacademy.com/",
            },
            {
              title: "Paradise In Love",
              description: `• Engineered a full-featured e-commerce platform with integrated payment gateway
• Developed using React, Vite, Tailwind CSS, Node.js, and MongoDB
• Implemented product management, shopping cart functionality, secure checkout, and user authentication`,
              git: "https://github.com/akankshaaa27/paradiseinlove",
              host: "https://paradiseinlove.com/",
            },
            ...[...projects].reverse(),
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  <FaGlobe className="text-5xl text-orange-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow whitespace-pre-line">
                  {project.description}
                </p>
                <div className="flex gap-3 w-full justify-center">
                  {project.git && (
                    <motion.a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
                    >
                      Source Code
                    </motion.a>
                  )}
                  {project.host && (
                    <motion.a
                      href={project.host}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}