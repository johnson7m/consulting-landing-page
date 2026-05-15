import { motion } from "framer-motion";

const MotionDiv = motion.div;

function MotionReveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 0.6,
  amount = 0.2,
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export default MotionReveal;
