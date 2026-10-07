import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import { ABOUT_HIGHLIGHTS } from "../../data/portfolio";
import profile from "../../assets/profile.jpeg";

// About = photo on the left, one big statement on the right (like the template)
const About = () => (
  <section id="about" className="relative flex min-h-screen scroll-mt-16 items-center bg-leaf pt-24 pb-28">
    <motion.div
      className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 lg:grid-cols-[5fr_7fr]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center lg:justify-start">
        <img
          src={profile}
          alt="Shreya Kayal"
          className="h-96 w-72 rounded-[3rem] object-cover object-top sm:h-h-120 sm:w-96 lg:w-full lg:max-w-sm"
        />
      </div>

      <div>
        <p className="m-0 mb-4 text-sm font-bold uppercase tracking-widest text-navy">About me</p>
        <h2 className="m-0 font-display text-2xl font-semibold leading-snug text-navy sm:text-4xl">
          I am a fresher Software Developer who enjoys building responsive websites and full-stack web applications.
        </h2>

        <p className="m-0 mt-6 text-navy/90">
          I have made several projects with both frontend and backend technologies and understand how different parts of a web
          application work together. My main areas of interest are React, JavaScript, TypeScript, Node.js, Express.js,
          REST APIs and database development, and I am continuously improving my programming skills through practical
          projects and hands-on learning.
        </p>
        <p className="m-0 mt-4 text-navy/90">
          My short-term goal is to secure a challenging role where I can apply and enhance my technical and professional
          skills, while my long-term goal is to grow into a responsible position and contribute significantly to
          organizational success.
        </p>

        <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
          {ABOUT_HIGHLIGHTS.map((h) => (
            <li key={h} className="rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-leaf">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    <a
      href="#skills"
      aria-label="Go to next section"
      className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-leaf transition hover:translate-y-1"
    >
      <FiArrowDown size={20} />
    </a>
  </section>
);

export default About;
