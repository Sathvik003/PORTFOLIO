import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  }

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate="default"
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "1px solid var(--accent-color)",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        background: "var(--accent-glow)",
        backdropFilter: "blur(2px)",
        transition: "width 0.2s, height 0.2s"
      }}
    />
  );
};

export default Cursor;
