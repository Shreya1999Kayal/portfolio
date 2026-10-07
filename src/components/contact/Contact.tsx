import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SocialLinks from "../common/SocialLinks";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/portfolio";

const link = "text-white no-underline hover:text-leaf break-all";

// Contact = big heading at the top, details bottom-left, "Connect with me" bottom-right (like the template)
const Contact = () => (
  <section id="contact" className="flex min-h-screen scroll-mt-16 flex-col bg-navy pt-24 pb-12">
    <motion.div
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between gap-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <h2 className="m-0 font-display text-4xl font-semibold text-white md:text-6xl">Let's Connect</h2>
        <p className="mt-5 max-w-xl text-white/80">
          I am open to learning opportunities, internships, and junior developer opportunities. Feel free to
          connect with me.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="m-0 mb-5 font-display text-xl font-semibold text-leaf">Shreya Kayal</h3>
          <ul className="m-0 list-none space-y-4 p-0 text-white">
            <li className="flex items-center gap-3">
              <FiMail className="shrink-0 text-leaf" size={20} />
              {EMAIL ? <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a> : <span>Your Email (to be added)</span>}
            </li>
            <li className="flex items-center gap-3">
              <FiGithub className="shrink-0 text-leaf" size={20} />
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={link}>github.com/Shreya1999Kayal</a>
            </li>
            <li className="flex items-center gap-3">
              <FiLinkedin className="shrink-0 text-leaf" size={20} />
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={link}>linkedin.com/in/shreya-kayal-5ab6b72a6</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="m-0 mb-5 text-lg font-bold text-white">Connect with me</h3>
          <SocialLinks className="justify-start" />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
