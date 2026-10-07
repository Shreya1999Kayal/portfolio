import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import SocialLinks from "../common/SocialLinks";
import profile from "../../assets/profile.jpeg";

// Hero = name + role pill + photo (as in the template), with the social icons
const Hero = () => (
  <section id="home" className="relative flex min-h-screen scroll-mt-16 items-center bg-navy pt-24 pb-28">
    <motion.div
      className="mx-auto grid w-full max-w-6xl items-center gap-x-12 gap-y-8 px-4 lg:grid-cols-2"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* name + role pill */}
      <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
        <div className="mx-auto w-fit max-w-full lg:mx-0">
          <p className="m-0 mb-2 text-center font-display text-lg text-white lg:text-left">Hello, I'm</p>
          <h1 className="m-0 text-center font-display text-3xl font-semibold break-words text-leaf sm:text-5xl xl:text-6xl lg:text-left">
            Shreya Kayal
          </h1>
          <p className="m-0 mt-6 rounded-full bg-white px-8 py-3 text-center text-lg font-medium text-navy sm:text-2xl">
            Fresher Software Developer
          </p>
        </div>
      </div>

      {/* profile picture, right below the role on mobile */}
      <div className="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <img
          src={profile}
          alt="Shreya Kayal"
          className="h-80 w-64 rounded-[3rem] object-cover object-top sm:h-[26rem] sm:w-80"
        />
      </div>

      {/* icons */}
      <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
        <SocialLinks className="justify-center lg:justify-start" />
      </div>
    </motion.div>

    <a
      href="#about"
      aria-label="Go to next section"
      className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-leaf text-navy transition hover:translate-y-1"
    >
      <FiArrowDown size={20} />
    </a>
  </section>
);

export default Hero;
