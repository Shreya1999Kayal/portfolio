import { Chip } from "@mui/material";
import { WorkspacePremium } from "@mui/icons-material";
import Section from "../common/Section";
import InfoCard from "../common/InfoCard";
import { CERTIFICATIONS } from "../../data/portfolio";

const Certifications = () => (
  <Section id="certifications" eyebrow="Learning proof" title="Certifications" tone="navy" next="what-i-can-do" split>
    <div className="grid gap-5 sm:grid-cols-2">
      {CERTIFICATIONS.map((c) => (
        <InfoCard key={c.title} icon={<WorkspacePremium />} title={c.title}>
          {c.text && <p className="m-0 text-sm text-slate-600">{c.text}</p>}
          {c.items && (
            <div className="flex flex-wrap gap-2">
              {c.items.map((i) => (
                <Chip key={i} label={i} size="small" className="!bg-navy/10 !font-medium !text-navy" />
              ))}
            </div>
          )}
        </InfoCard>
      ))}
    </div>
  </Section>
);

export default Certifications;
