import { motion } from 'framer-motion';

const skills = [
  { name: "MEMEOLOGY", level: 99, color: "bg-primary" },
  { name: "VIBE CHECKING", level: 100, color: "bg-accent" },
  { name: "ANOMALY", level: 85, color: "bg-secondary" },
  { name: "MAKING THINGS WIGGLE", level: 120, color: "bg-border" },
  { name: "TYPING FAST", level: 90, color: "bg-primary" },
  { name: "DEBUGGING", level: 40, color: "bg-accent" },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ rotate: -5, scale: 0.8 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-card text-card-foreground chunky-border px-8 py-4 mb-16 shadow-lg transform rotate-2 hover:-rotate-2 transition-transform"
        >
          <h2 className="text-5xl md:text-7xl">MY STATS</h2>
        </motion.div>

        <div className="grid gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, delay: i * 0.1 }}
              className="relative group cursor-crosshair"
            >
              <div className="flex justify-between items-end mb-2 relative z-10">
                <span className="text-3xl font-black text-foreground drop-shadow-md">
                  {skill.name}
                </span>
                <span className="text-2xl font-mono font-bold text-accent">
                  lvl {skill.level}
                </span>
              </div>
              
              <div className="h-12 w-full bg-background chunky-border overflow-hidden relative">
                {/* The fill bar */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(skill.level, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (i * 0.1) }}
                  className={`h-full ${skill.color} border-r-4 border-border relative`}
                >
                  {/* Internal pattern */}
                  <div className="absolute inset-0 opacity-30" 
                       style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }} 
                  />
                </motion.div>
                
                {/* Hover interaction overlay */}
                <motion.div
                  className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ 
                    x: ["-100%", "100%"]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Tooltip that follows cursor on hover */}
              <motion.div 
                className="absolute top-0 right-1/4 bg-foreground text-background font-mono font-bold p-2 text-sm z-20 chunky-border opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ y: 20 }}
                whileHover={{ y: -40, rotate: (Math.random() - 0.5) * 20 }}
              >
                {skill.level > 100 ? 'HACKER DETECTED' : 'VERY GOOD YES'}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
