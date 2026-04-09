import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full"
      style={{
        width: 20,
        height: 20,
        left: pos.x - 10,
        top: pos.y - 10,
        background: "radial-gradient(circle, hsla(0,0%,100%,0.06) 0%, transparent 70%)",
        filter: "blur(4px)",
        transition: "left 0.08s ease-out, top 0.08s ease-out",
      }}
    />
  );
};

export default CustomCursor;
