import type { ReactNode } from "react";
import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";

export type Tone = "navy" | "leaf" | "white";

const TONES: Record<Tone, { bg: string; title: string; eyebrow: string; sub: string; arrow: string }> = {
  navy: { bg: "bg-navy", title: "text-white", eyebrow: "text-white", sub: "text-white/80", arrow: "bg-leaf text-navy" },
  leaf: { bg: "bg-leaf", title: "text-navy", eyebrow: "text-navy", sub: "text-navy/80", arrow: "bg-navy text-leaf" },
  white: { bg: "bg-white", title: "text-navy", eyebrow: "text-navy/70", sub: "text-slate-600", arrow: "bg-navy text-leaf" },
};

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone: Tone;
  next?: string; // id of the next section (shows the round arrow button)
  split?: boolean; // heading on the left, content on the right (like the template)
  children: ReactNode;
}

// Every section fills the screen, like the Canva template pages
const Section = ({ id, eyebrow, title, subtitle, tone, next, split = false, children }: SectionProps) => {
  const t = TONES[tone];
  return (
    <section id={id} className={`relative flex min-h-screen scroll-mt-16 items-center pt-24 pb-28 ${t.bg}`}>
      <motion.div
        className="mx-auto w-full max-w-6xl px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={split ? "grid items-center gap-12 lg:grid-cols-[5fr_7fr]" : ""}>
          <header className={split ? "" : "mb-12"}>
            <p className={`m-0 mb-3 text-sm font-bold uppercase tracking-widest ${t.eyebrow}`}>{eyebrow}</p>
            <h2
              className={`m-0 font-display font-semibold break-words ${t.title} ${
                split ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"
              }`}
            >
              {title}
            </h2>
            {subtitle && <p className={`mt-5 max-w-xl ${t.sub}`}>{subtitle}</p>}
          </header>
          <div>{children}</div>
        </div>
      </motion.div>

      {next && (
        <a
          href={`#${next}`}
          aria-label="Go to next section"
          className={`absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full transition hover:translate-y-1 ${t.arrow}`}
        >
          <FiArrowDown size={20} />
        </a>
      )}
    </section>
  );
};

export default Section;
