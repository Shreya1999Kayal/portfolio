import type { ReactNode } from "react";
import { Card } from "@mui/material";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  dark?: boolean; // dark = navy card (for white / green sections), otherwise white card (for navy sections)
  children?: ReactNode;
}

const InfoCard = ({ icon, title, dark = false, children }: InfoCardProps) => (
  <Card
    elevation={0}
    className={`h-full !rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
      dark ? "!bg-navy !text-white" : "!bg-white !text-navy"
    }`}
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf text-navy">{icon}</div>
    <h3 className={`mb-2 text-lg font-bold ${dark ? "text-leaf" : "text-navy"}`}>{title}</h3>
    {children}
  </Card>
);

export default InfoCard;
