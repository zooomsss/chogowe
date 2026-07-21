import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroGif from "public/chogowe-joko.gif";

export default function Hero() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Name with huge click interaction */}
        <motion.div 
          onClick={handleClick}
          className="cursor-pointer relative inline-block group"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.9, rotate: 5 }}
        >
          <motion.h1 
            className="text-[12vw] sm:text-[10vw] leading-none text-accent"
            animate={{ 
              rotate: [0, -1, 2, -2, 1, 0],
              y: [0, -5, 5, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            CHOGOWE
          </motion.h1>
          
          <AnimatePresence>
            {Array.from({ length: clickCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0, y: 0, x: 0 }}
                animate={{ 
                  opacity: 0, 
                  scale: Math.random() * 2 + 1,
                  y: -300 - Math.random() * 200,
                  x: (Math.random() - 0.5) * 400
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 text-primary font-black text-6xl pointer-events-none"
                style={{ textShadow: 'none' }}
              >
                LOL
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 chunky-border bg-card p-4 shadow max-w-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
        >
          <p className="text-xl md:text-3xl font-mono text-card-foreground">
            Artist - Web3 Enthusiast - hidup jokowi !!!
          </p>
        </motion.div>

        {/* Featured GIF */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.6, delay: 0.4 }}
          className="mt-12 relative group"
        >
          <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 chunky-border" />
          <img 
            src={heroGif} 
            alt="Chogowe being awesome" 
            className="relative z-10 chunky-border max-w-[280px] md:max-w-[400px] object-cover transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2"
          />
        </motion.div>
      </div>

      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary font-black text-9xl opacity-20"
            animate={{
              y: ['-10vh', '110vh'],
              x: Math.sin(i) * 200,
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${20 * i}%`,
              top: '-20%',
              textShadow: 'none'
            }}
          >
            !
          </motion.div>
        ))}
      </div>
    </section>
  );
}
