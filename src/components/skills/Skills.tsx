import { Chip } from "@mui/material";
import Section from "../common/Section";
import { SKILLS } from "../../data/portfolio";

// Skills = big heading on the left, skill groups on the right (no percentages / bars)
const Skills = () => (
  <Section id="skills" eyebrow="What I know" title="My Skills" tone="navy" next="projects" split>
    <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
      {SKILLS.map((cat) => (
        <div key={cat.title}>
          <h3 className="m-0 mb-3 text-base font-bold text-white">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((s) => (
              <Chip key={s} label={s} size="small" className="!bg-leaf !font-medium !text-navy" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
