"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  // Configuration
  const phoneNumber = "919952201761"; // Replace with actual number (Country Code + Number, no + sign)
  const message =
    "Hi Raja Events, I saw your board and I need decoration services!";

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20 bg-background scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Skip the forms. Connect with us directly on WhatsApp for instant
              inquiries and quotes.
            </p>

            {/* WhatsApp Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={28} className="animate-pulse" />
              Chat on WhatsApp
            </motion.a>

            <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8 text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                <p>hello@rajaevents.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                <p>+91 99522 01761</p>
                <p>+91 63740 85615</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p>Theni, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
