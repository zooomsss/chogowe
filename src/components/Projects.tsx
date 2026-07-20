import { motion } from 'framer-motion';

const projects = [
  {
    title: "THAT ONE TIME I DID A THING",
    desc: "It was really cool, you had to be there. I pressed buttons and magic happened.",
    tech: ["REACT", "VIBES", "COFFEE"],
    link: "#",
    color: "bg-primary",
    rotation: -3
  },
  {
    title: "SERIOUS BUSINESS APP",
    desc: "It tracks things. Very important things. Mostly how many times I yawn in meetings.",
    tech: ["CSS", "CHAOS", "HTML"],
    link: "#",
    color: "bg-accent",
    rotation: 2
  },
  {
    title: "MY FAVORITE BUTTON",
    desc: "I spent 4 days animating a button. It wobbles. 10/10 would waste time again.",
    tech: ["FRAMER", "MOTION", "REGRET"],
    link: "#",
    color: "bg-secondary",
    rotation: -1
  },
  {
    title: "THE VOID",
    desc: "I yell into it, it yells back. Currently refactoring the yelling mechanism.",
    tech: ["EXISTENTIALISM", "JS"],
    link: "#",
    color: "bg-card",
    rotation: 4
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-9xl text-background drop-shadow-[4px_4px_0_hsl(var(--primary))]">
            THE STUFF
          </h2>
          <p className="font-mono text-2xl mt-4 text-accent font-bold">Things I made while avoiding real life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: project.rotation * -1,
                zIndex: 10
              }}
              className={`relative p-8 chunky-border ${project.color} shadow-xl cursor-pointer group`}
              style={{
                transform: `rotate(${project.rotation}deg)`
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              
              <h3 className="text-4xl mb-4 text-background" style={{ textShadow: '2px 2px 0px #000' }}>
                {project.title}
              </h3>
              
              <p className="font-mono text-xl mb-8 font-bold border-l-4 border-background pl-4">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-background text-foreground font-black px-3 py-1 text-sm chunky-border transform transition-transform group-hover:scale-110"
                    style={{ textShadow: 'none' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Click me indicator */}
              <motion.div 
                className="absolute -right-4 -bottom-4 bg-foreground text-background font-black p-4 rounded-full chunky-border opacity-0 group-hover:opacity-100"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                GO
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
