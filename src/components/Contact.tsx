import { motion } from 'framer-motion';

const links = [
  {
    label: 'X / TWITTER',
    href: 'https://x.com/idkanynamehiks',
    icon: '𝕏',
    rotate: -1,
  },
  {
    label: 'DISCORD',
    href: 'https://discord.gg/KsEqerHV',
    icon: '🎮',
    rotate: 1,
  },
  {
    label: 'EMAIL',
    href: 'mailto:queenmysth@gmail.com',
    icon: '✉️',
    rotate: -2,
  },
];

export default function Contact() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative background text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 overflow-hidden">
        <div className="text-[30vw] font-black leading-none whitespace-nowrap">
          HELLO HELLO
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card text-card-foreground p-12 chunky-border shadow-[16px_16px_0px_0px_hsl(var(--accent))] transform -rotate-1"
        >
          <h2 className="text-6xl md:text-8xl mb-6">
            LET'S DO THIS
          </h2>
          <p className="text-2xl font-mono font-bold mb-12 border-b-4 border-border pb-8 inline-block" style={{ textShadow: 'none' }}>
            I am ready for the chaos. Are you?
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {links.map(({ label, href, icon, rotate }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, rotate }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex group cursor-pointer"
              >
                {/* Button shadow */}
                <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 chunky-border group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                {/* Button */}
                <div className="relative z-10 bg-accent text-accent-foreground px-6 py-5 text-xl font-black chunky-border flex items-center gap-3">
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center font-mono font-bold text-sm mix-blend-overlay">
        © {new Date().getFullYear()} CHOGOWE. NO REFUNDS.
      </div>
    </section>
  );
}
