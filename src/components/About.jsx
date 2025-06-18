import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg max-w-3xl mx-auto text-center"
        >
          I'm a dedicated developer with 5+ years of experience in building
          scalable web applications. I specialize in React, Node.js, and modern
          JavaScript frameworks, with a keen eye for design and user experience.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
