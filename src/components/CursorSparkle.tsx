import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CursorSparkle() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastTime > 50) {
        setSparkles(prev => [
          ...prev.slice(-15),
          { id: now, x: e.clientX, y: e.clientY }
        ]);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-accent mix-blend-difference"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, rotate: 0 }}
            animate={{ opacity: 0, scale: 1.5, rotate: 180 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute w-4 h-4"
            style={{
              left: sparkle.x - 8,
              top: sparkle.y - 8,
            }}
          >
            <div className="w-full h-full text-accent font-black text-xl leading-none">
              *
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
