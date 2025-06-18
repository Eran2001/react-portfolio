import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#F3F4F6]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <motion.img
          src="/src/assets/profile.jpg"
          alt="Profile"
          className="w-80 h-80 rounded-full mx-auto mb-6"
          whileHover={{ scale: 1.1 }}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-[#10B981]">John Doe</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A passionate Full-Stack Developer creating modern web applications.
        </p>
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-[#10B981] transition"
          whileHover={{ scale: 1.05 }}
        >
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
