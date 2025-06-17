import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto"
        >
          <div className="flex items-center mb-6">
            <EnvelopeIcon className="h-6 w-6 text-primary mr-4" />
            <a href="mailto:john@example.com" className="text-lg">
              john@example.com
            </a>
          </div>
          <div className="flex items-center mb-6">
            <PhoneIcon className="h-6 w-6 text-primary mr-4" />
            <a href="tel:+1234567890" className="text-lg">
              +1 (234) 567-890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
