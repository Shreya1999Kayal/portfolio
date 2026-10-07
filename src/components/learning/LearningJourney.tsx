import Section from "../common/Section";
import { LEARNING_AREAS } from "../../data/portfolio";

const LearningJourney = () => (
  <Section
    id="learning"
    eyebrow="Always growing"
    title="My Learning Journey"
    subtitle="As a fresher, I am continuously improving my development skills through learning and practical projects. I believe that building projects is one of the best ways to understand programming and improve development skills."
    tone="white"
    next="contact"
    split
  >
    <ol className="m-0 grid list-none gap-x-8 gap-y-4 p-0 sm:grid-cols-2">
      {LEARNING_AREAS.map((area, i) => (
        <li key={area} className="flex items-center gap-3 rounded-full bg-navy py-2 pl-2 pr-5 text-white">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf text-xs font-bold text-navy">
            {i + 1}
          </span>
          <span className="text-sm font-medium">{area}</span>
        </li>
      ))}
    </ol>
  </Section>
);

export default LearningJourney;
