import { motion } from "framer-motion";

function MotionReveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 0.6,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionReveal;