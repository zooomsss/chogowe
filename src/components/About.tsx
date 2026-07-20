import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-6xl md:text-8xl text-secondary">
            Wait, who?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="chunky-border bg-primary p-8 shadow-xl text-primary-foreground transform -rotate-2"
          >
            <h3 className="text-4xl mb-6 text-accent" style={{ textShadow: '2px 2px 0px #000' }}>The Lore</h3>
            <p className="text-2xl font-mono leading-relaxed font-bold">
              Born from the depths of internet forums and fueled entirely by caffeine and chaotic good energy. I build things that make people look twice. If it doesn't have personality, why even make it?
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: "Vibe", desc: "akan saya lawann", color: "bg-accent", text: "text-accent-foreground", shadowColor: "var(--primary)" },
              { title: "Status", desc: "God Father Government", color: "bg-secondary", text: "text-secondary-foreground", shadowColor: "var(--accent)" },
              { title: "Goal", desc: "web 3 world order", color: "bg-card", text: "text-card-foreground", shadowColor: "var(--border)" }
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -10 }}
                className={`chunky-border ${fact.color} ${fact.text} p-6 flex items-center justify-between`}
                style={{
                  boxShadow: `8px 8px 0px 0px hsl(${fact.shadowColor})`
                }}
              >
                <span className="font-mono font-bold text-xl uppercase tracking-widest">{fact.title}</span>
                <span className="font-black text-2xl" style={{ textShadow: 'none' }}>{fact.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
