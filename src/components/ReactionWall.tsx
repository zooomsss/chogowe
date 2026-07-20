import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import reactGif1 from "@assets/chogowe-joko-wi_1784557300643.gif";
import reactGif2 from "@assets/jokowi-chogowe_1784557300644.gif";
import reactGif3 from "@assets/chogowe-jokowi_1784562683420.gif";
import reactGif4 from "@assets/chogowe-joko_(1)_1784562724656.gif";
import reactGif5 from "@assets/jokowi-chogowe_(1)_1784562724657.gif";

const moods = [
  { src: reactGif1, label: "Mfw bugs", side: "left", caption: "Debugging →", filter: "grayscale", cursor: "cursor-help", shadowColor: "bg-primary" },
  { src: reactGif2, label: "IT WORKS", side: "right", caption: "← Deploying", filter: "sepia", cursor: "cursor-crosshair", shadowColor: "bg-foreground" },
  { src: reactGif3, label: "ngoding jam 3 pagi", side: "left", caption: "Late night →", filter: "grayscale", cursor: "cursor-help", shadowColor: "bg-secondary" },
  { src: reactGif4, label: "gas bro", side: "right", caption: "← Web3 time", filter: "sepia", cursor: "cursor-pointer", shadowColor: "bg-primary" },
  { src: reactGif5, label: "LETSGOOO", side: "left", caption: "Shipping →", filter: "grayscale", cursor: "cursor-crosshair", shadowColor: "bg-accent" },
];

export default function ReactionWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={containerRef} className="py-24 px-6 overflow-hidden bg-accent relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] mix-blend-overlay opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <h2 className="text-5xl md:text-8xl text-background mix-blend-difference">
            CURRENT MOOD
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {moods.map((mood, i) => {
            const isLeft = mood.side === "left";
            const x = i % 2 === 0 ? x1 : x2;
            return (
              <motion.div
                key={i}
                style={{ x }}
                className={`flex items-center gap-8 ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {!isLeft && (
                  <div className="hidden md:block font-black text-6xl text-background opacity-50 uppercase text-right">
                    {mood.caption}
                  </div>
                )}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: isLeft ? -5 : 5 }}
                  whileTap={{ scale: 0.9, rotate: isLeft ? 10 : -10 }}
                  className={`relative group ${mood.cursor}`}
                >
                  <div className={`absolute inset-0 ${mood.shadowColor} translate-x-3 translate-y-3 chunky-border`} />
                  <img
                    src={mood.src}
                    alt={`Mood ${i + 1}`}
                    className={`relative z-10 chunky-border max-w-[200px] md:max-w-[300px] filter ${mood.filter} group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-300`}
                  />
                  <motion.div
                    className={`absolute ${isLeft ? "-top-6 -right-6 bg-secondary text-secondary-foreground" : "-bottom-6 -left-6 bg-primary text-primary-foreground"} font-black p-3 chunky-border text-2xl z-20 opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2, rotate: isLeft ? 15 : -15 }}
                    style={{ textShadow: 'none' }}
                  >
                    {mood.label}
                  </motion.div>
                </motion.div>
                {isLeft && (
                  <div className="hidden md:block font-black text-6xl text-background opacity-50 uppercase">
                    {mood.caption}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
