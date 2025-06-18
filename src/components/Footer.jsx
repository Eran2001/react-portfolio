import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1E3A8A] text-white py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2025 John Doe. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
