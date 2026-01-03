import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { FiGithub, FiInstagram, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Have a project or idea in mind? I build modern, high-performance websites 
            that help businesses and freelancers stand out online. Reach out and let’s 
            create something exceptional.
          </p>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 text-2xl text-gray-400 mt-4"
          >
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
              aria-label="GitHub"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
              aria-label="Instagram"
            >
              <FiInstagram />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
              aria-label="WhatsApp"
            >
              <FiPhone />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl grid gap-6 shadow-lg"
        >
          {[
            { type: "text", placeholder: "Your Name" },
            { type: "email", placeholder: "Your Email" },
          ].map((field, index) => (
            <motion.input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="p-4 rounded-2xl bg-black/40 border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition"
            />
          ))}

          <motion.textarea
            rows={5}
            placeholder="Your Message"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-4 rounded-2xl bg-black/40 border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition"
          />

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 py-3 rounded-2xl text-white font-medium hover:bg-blue-700 transition shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
