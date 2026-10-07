import SocialLinks from "../components/common/SocialLinks";

const Footer = () => (
  <footer className="bg-leaf py-8 text-center text-navy">
    <div className="mb-4">
      <SocialLinks variant="dark" />
    </div>
    <p className="m-0 text-sm font-medium">© 2026 Shreya Kayal. All Rights Reserved.</p>
    <p className="m-0 mt-1 text-xs opacity-80">Built with React.js and modern web technologies.</p>
  </footer>
);

export default Footer;
