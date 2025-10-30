import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear the error as the user types
    if (e.target.name === "name") {
      setError((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (!formData.name.trim()) {
      setError({ name: "Name is required" });
      return;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      setError({ name: "Name can contain only letters and spaces" });
      return;
    }

    // Clear previous errors
    setError({ name: "" });

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      toast.success(`${formData.name} Message Sent Successfully!`);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again!");
      console.error("Error submitting form:", error.response?.data || error.message);
    }

    // setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const formItem = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-16 mt-8 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <ToastContainer position="top-right" autoClose={3000} />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.div
              variants={item}
              whileHover="hover"
              className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-3 bg-red-100 rounded-full flex-shrink-0"
                >
                  <FaMapMarkerAlt className="text-red-500 text-xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Location</h3>
                  <Link
                    to="https://maps.app.goo.gl/FGQkCRPdq3DGNdQG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition text-sm sm:text-base"
                  >
                    Pune, Maharashtra, India
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                variants={item}
                whileHover="hover"
                className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 bg-yellow-100 rounded-full flex-shrink-0"
                  >
                    <FaEnvelope className="text-yellow-500 text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <Link 
                      to="mailto:dhekaneakanksha68@gmail.com" 
                      className="text-gray-600 hover:text-blue-500 transition text-sm sm:text-base break-all"
                    >
                      dhekaneakanksha68@gmail.com
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover="hover"
                className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 bg-green-100 rounded-full flex-shrink-0"
                  >
                    <FaPhone className="text-green-500 text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                    <Link 
                      to="tel:+919689485992" 
                      className="text-gray-600 hover:text-blue-500 transition text-sm sm:text-base"
                    >
                      +91 9689485992
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60550.810372320644!2d73.81586465534684!3d18.46436916262593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953ac44c7ddf%3A0x737faa6b90930b51!2sAmbegaon%20Budruk%2C%20Pune%2C%20Maharashtra%20411046!5e0!3m2!1sen!2sin!4v1745052805898!5m2!1sen!2sin"
                className="w-full h-64 sm:h-80 rounded-lg"
                allowFullScreen
                loading="lazy"
                title="Kolhapur Location"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={container}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div variants={formItem}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="abc xyz"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    error.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base`}
                />
                {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
              </motion.div>

              {/* Rest of the fields stay the same */}
              <motion.div variants={formItem}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="xyz@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={formItem}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={formItem}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                ></textarea>
              </motion.div>

              <motion.div variants={formItem}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2 text-sm sm:text-base"
                >
                  <FaPaperPlane className="text-lg" />
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
