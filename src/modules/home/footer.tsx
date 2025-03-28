import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const footerLinks = [
  {
    href: "https://facebook.com/alexakagi",
    Icon: FaFacebookSquare,
    ariaLabel: "Facebook",
  },
  {
    href: "https://twitter.com/akagi____",
    Icon: FaTwitter,
    ariaLabel: "Twitter",
  },
  {
    href: "https://instagram.com/alexakagi",
    Icon: FaInstagram,
    ariaLabel: "Instagram",
  },
  {
    href: "https://github.com/aakagi",
    Icon: FaGithub,
    ariaLabel: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/aakagi/",
    Icon: FaLinkedin,
    ariaLabel: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="flex">
      {footerLinks.map(({ href, Icon, ariaLabel }, index) => (
        <a
          key={"social-" + index}
          target="_blank"
          rel="noreferrer"
          href={href}
          aria-label={ariaLabel}
          className="mx-3 text-2xl opacity-40 transition-opacity duration-100 hover:opacity-80 sm:mx-4"
        >
          <Icon />
        </a>
      ))}
    </footer>
  );
};

export { Footer };
