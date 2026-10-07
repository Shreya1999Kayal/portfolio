import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import GithubProjects from "../components/projects/GithubProjects";
import Education from "../components/education/Education";
import Certifications from "../components/certifications/Certifications";
import WhatICanDo from "../components/whatICanDo/WhatICanDo";
import LearningJourney from "../components/learning/LearningJourney";
import Contact from "../components/contact/Contact";

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <GithubProjects />
    <Education />
    <Certifications />
    <WhatICanDo />
    <LearningJourney />
    <Contact />
  </>
);

export default Home;
