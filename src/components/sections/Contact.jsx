import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400">Get in touch with me through these platforms</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="https://github.com/ajayrao0904"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border-l-4 border-yellow-400"
            >
              <FaGithub className="text-3xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p className="text-gray-400">github.com/ajayrao0904</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ajay-rao0904/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border-l-4 border-yellow-400"
            >
              <FaLinkedin className="text-3xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-gray-400">linkedin.com/in/ajay-rao0904</p>
              </div>
            </motion.a>

            {/* <motion.a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaInstagram className="text-3xl text-white" />
              <div>
                <h3 className="text-xl font-semibold">Instagram</h3>
                <p className="text-gray-400">instagram.com/yourusername</p>
              </div>
            </motion.a> */}

            <motion.a
              href="mailto:ajayrao0904@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border-l-4 border-yellow-400"
            >
              <FaEnvelope className="text-3xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">ajayrao0904@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919538801833"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border-l-4 border-yellow-400"
            >
              <FaPhone className="text-3xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9538801833</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};