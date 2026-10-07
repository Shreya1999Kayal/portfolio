import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/portfolio";

interface Props {
  variant?: "light" | "dark"; // light = white circles (on navy), dark = navy circles (on green/white)
  className?: string;
}

const SocialLinks = ({ variant = "light", className = "justify-center" }: Props) => {
  const look =
    variant === "light"
      ? "bg-white text-navy hover:bg-leaf"
      : "bg-navy text-leaf hover:bg-navy/80";
  const base = `flex h-11 w-11 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 ${look}`;

  return (
    <div className={`flex gap-4 ${className}`}>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={base}>
        <FiGithub size={20} />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={base}>
        <FiLinkedin size={20} />
      </a>
      {/* No email yet -> the mail icon jumps to the Contact section */}
      <a href={EMAIL ? `mailto:${EMAIL}` : "#contact"} aria-label="Email" className={base}>
        <FiMail size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
