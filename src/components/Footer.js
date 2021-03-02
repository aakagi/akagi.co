import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

const footerLinks = [
  {
    href: 'https://instagram.com/alexakagi',
    Icon: FaInstagram,
  },
  {
    href: 'https://facebook.com/alexakagi',
    Icon: FaFacebook,
  },
  {
    href: 'https://twitter.com/akagi____',
    Icon: FaTwitter,
  },
  {
    href: 'https://github.com/aakagi',
    Icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/aakagi/',
    Icon: FaLinkedin,
  },
]

export default function Footer() {
  return (
    <footer className="flex">
      {footerLinks.map(({ href, Icon }, index) => (
        <a
          key={'social-' + index}
          target="_blank"
          rel="noreferrer"
          href={href}
          className="text-2xl opacity-40 hover:opacity-80 mx-3 transition-opacity duration-100"
        >
          <Icon />
        </a>
      ))}
    </footer>
  )
}
