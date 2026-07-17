import { motion } from "framer-motion";

export default function SimpleAppear() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       // Hidden and shifted down
      whileInView={{ opacity: 1, y: 0 }}    // Animates when scrolled into view
      viewport={{ once: true }}             // IMPORTANT: Only animates ONCE
      transition={{ duration: 0.6 }}
    >
      <h2>I appear when you scroll to me!</h2>
    </motion.div>
  );
}