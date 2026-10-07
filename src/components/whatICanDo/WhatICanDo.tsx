import type { ReactNode } from "react";
import { Api, Code, Dns, Layers, Storage } from "@mui/icons-material";
import Section from "../common/Section";
import InfoCard from "../common/InfoCard";
import { CAPABILITIES } from "../../data/portfolio";

const ICONS: Record<string, ReactNode> = {
  "Frontend Development": <Code />,
  "Backend Development": <Dns />,
  "Database Development": <Storage />,
  "Full-Stack Development": <Layers />,
  "API Integration": <Api />,
};

const WhatICanDo = () => (
  <Section id="what-i-can-do" eyebrow="What I can do" title="What I Can Do" tone="leaf" next="learning" split>
    <div className="grid gap-5 sm:grid-cols-2">
      {CAPABILITIES.map((c) => (
        <InfoCard key={c.title} icon={ICONS[c.title]} title={c.title} dark>
          <p className="m-0 text-sm text-white/85">{c.text}</p>
        </InfoCard>
      ))}
    </div>
  </Section>
);

export default WhatICanDo;
