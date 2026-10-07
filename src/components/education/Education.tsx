import Section from "../common/Section";
import { EDUCATION } from "../../data/portfolio";

// three navy rounded cards, oldest to newest (like the template)
const Education = () => (
  <Section id="education" eyebrow="Academics" title="Education" tone="white" next="certifications">
    <div className="grid gap-6 md:grid-cols-3">
      {[...EDUCATION].reverse().map((edu) => (
        <article
          key={edu.degree}
          className="flex min-h-80 flex-col rounded-[2.5rem] bg-navy p-8 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="m-0 font-display text-3xl font-semibold">{edu.year}</p>
          <h3 className="m-0 mt-4 text-lg font-extrabold uppercase leading-snug text-leaf">{edu.degree}</h3>
          <div className="mt-auto pt-8 text-sm">
            <p className="m-0 font-bold">{edu.institute}</p>
            {edu.board && <p className="m-0 mt-1 text-white/80">{edu.board}</p>}
            <p className="m-0 mt-3 inline-block rounded-full bg-leaf px-3 py-1 font-semibold text-navy">{edu.score}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Education;
