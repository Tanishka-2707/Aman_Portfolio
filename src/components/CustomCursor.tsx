import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const over = () => setIsHover(true);
    const out = () => setIsHover(false);
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const interactives = document.querySelectorAll("a, button, input, textarea, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: isHover ? 40 : 8,
          height: isHover ? 40 : 8,
          background: isHover ? "hsla(12, 80%, 55%, 0.15)" : "hsl(0, 0%, 100%)",
          border: isHover ? "1px solid hsla(12, 80%, 55%, 0.5)" : "none",
          boxShadow: "0 0 15px hsla(12, 80%, 55%, 0.3)",
        }}
        animate={{
          x: pos.x - (isHover ? 20 : 4),
          y: pos.y - (isHover ? 20 : 4),
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-foreground/20"
        style={{ width: 32, height: 32 }}
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          opacity: isHover ? 0 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
