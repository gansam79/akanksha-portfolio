import { FaLaptopCode, FaTools, FaLightbulb, FaProjectDiagram, FaUserFriends, FaRocket, FaGraduationCap } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function AboutMe() {
  const refEdu = useRef(null);
  const refFeatures = useRef(null);

  const isInViewEdu = useInView(refEdu, { triggerOnce: false });
  const isInViewFeatures = useInView(refFeatures, { triggerOnce: false });
  const edus = [
    {
      degree: "Master in Computer Application (MCA)",
      year: "2024-2026",
      university: "Savitribai phule pune university",
      percentage: "Pursuing"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      year: "2021-2024",
      university: "Savitribai phule pune university",
      percentage: "CGPA 9.05"
    }
  ];

  return (
    <section id="about" className="bg-white text-gray-900 py-12 px-4  mt-10   sm:px-6 lg:px-12">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4"
        >
          I am <span className="text-blue-500 font-semibold">Akanksha Dhekane</span>, a passionate <span className="text-blue-600">Full-Stack Developer</span> dedicated to exploring
          new technologies and building impactful applications. With a strong foundation in <span className="text-green-600">Java, React.js,
            and Web Development</span>, I thrive on solving challenges and crafting efficient, scalable, and user-friendly solutions.
          My goal is to create high-performance applications that enhance user experiences and drive innovation.
        </motion.p>

        {/* Education Section */}
        <div ref={refEdu} className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center mt-8">
          {edus.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInViewEdu ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md shadow-md hover:scale-105 hover:duration-150 duration-150 mx-2 sm:mx-0"
            >
              <div className="flex flex-row justify-between w-full">
                <p className="text-xs">{edu.year}</p>
              </div>

              <div className="flex flex-row justify-between w-full">
                <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                <div className="text-xs">
                  <div className="flex flex-row">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                        ></path>
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <span>{edu.university}</span> <span className="font-bold" >{edu.percentage}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Features Section */}
        <div ref={refFeatures} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 mb-10 px-4 sm:px-0">
          {[
            { icon: FaLaptopCode, title: "Full-Stack Development", color: "text-blue-600", desc: "Proficient in both frontend & backend development, creating seamless and responsive user experiences." },
            { icon: FaTools, title: "Problem-Solving", color: "text-green-600", desc: "Passionate about tackling complex challenges, optimizing performance, and writing clean, efficient code." },
            { icon: FaLightbulb, title: "Continuous Learning", color: "text-yellow-600", desc: "Always eager to learn new technologies, frameworks, and best practices to stay ahead in the industry." },
            { icon: FaProjectDiagram, title: "Project Management", color: "text-purple-600", desc: "Experienced in handling end-to-end project development, from planning to deployment." },
            { icon: FaUserFriends, title: "Team Collaboration", color: "text-red-600", desc: "Strong communication and teamwork skills, ensuring smooth collaboration in development projects." },
            { icon: FaRocket, title: "Innovation & Growth", color: "text-teal-600", desc: "Passionate about building impactful solutions that drive growth and innovation in the tech industry." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform mx-2 sm:mx-0"
            >
              {<feature.icon className={`text-3xl sm:text-4xl ${feature.color} mb-3 sm:mb-4`} />}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}