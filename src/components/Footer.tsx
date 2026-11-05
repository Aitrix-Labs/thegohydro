import { Link } from 'react-router-dom'
import { footerColumns, footerLegal, footerSocial } from '../data/footer'
import Logo from './Logo'

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'facebook') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9c0-.6.4-1 1-1z"
          fill="#FCFBF5"
        />
      </svg>
    )
  }
  if (icon === 'linkedin') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4zM20.3 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.8V20h-2.8s.1-9.3 0-10.5h2.8v1.7c.4-.7 1.2-1.9 3.1-1.9 2.3 0 4 1.5 4 4.7V20z"
          fill="#FCFBF5"
        />
      </svg>
    )
  }
  if (icon === 'youtube') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.4 5.2 12 5.2 12 5.2s-6.4 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z"
          fill="#FCFBF5"
        />
      </svg>
    )
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17.4 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
        fill="#FCFBF5"
      />
      <path
        d="M12 3.5c-2.3 0-2.6 0-3.5.1-.9 0-1.5.2-2 .4-.6.2-1 .5-1.5 1-.4.4-.8.9-1 1.5-.2.5-.3 1.1-.4 2-.1.9-.1 1.2-.1 3.5s0 2.6.1 3.5c0 .9.2 1.5.4 2 .2.6.5 1 1 1.5.4.4.9.8 1.5 1 .5.2 1.1.3 2 .4.9.1 1.2.1 3.5.1s2.6 0 3.5-.1c.9 0 1.5-.2 2-.4.6-.2 1-.5 1.5-1 .4-.4.8-.9 1-1.5.2-.5.3-1.1.4-2 .1-.9.1-1.2.1-3.5s0-2.6-.1-3.5c0-.9-.2-1.5-.4-2-.2-.6-.5-1-1-1.5-.4-.4-.9-.8-1.5-1-.5-.2-1.1-.3-2-.4-.9-.1-1.2-.1-3.5-.1zm0 1.5c2.3 0 2.5 0 3.4.1.8 0 1.3.2 1.6.3.4.1.7.3 1 .6.3.3.5.6.6 1 .1.3.3.8.3 1.6.1.9.1 1.1.1 3.4s0 2.5-.1 3.4c0 .8-.2 1.3-.3 1.6-.1.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.8.3-1.6.3-.9.1-1.1.1-3.4.1s-2.5 0-3.4-.1c-.8 0-1.3-.2-1.6-.3-.4-.1-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.1-.3-.3-.8-.3-1.6-.1-.9-.1-1.1-.1-3.4s0-2.5.1-3.4c0-.8.2-1.3.3-1.6.1-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.1.8-.3 1.6-.3.9-.1 1.1-.1 3.4-.1z"
        fill="#FCFBF5"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid-container footer__grid-container">
        <div className="footer__wrapper">
          <div className="footer__wrapper-left">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="footer-sitemap">
              {footerColumns.map((column, i) => (
                <div className="sitemap-column" key={i}>
                  {column.groups.map((group) => (
                    <div key={group.title}>
                      <h6
                        className={`heading${group.links.length === 0 ? ' heading--no-list' : ''}`}
                      >
                        <Link className="link" to={group.to}>
                          {group.title}
                        </Link>
                      </h6>
                      {group.links.length > 0 ? (
                        <ul className="sitemap-column__list">
                          {group.links.map((link) => (
                            <li className="sitemap-column__item" key={link.label}>
                              <Link className="link sitemap-column__link" to={link.to}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="footer__wrapper-right">
            <div className="footer-social">
              <nav className="social-menu" aria-label="Social">
                <ul>
                  {footerSocial.map((item) => (
                    <li key={item.label}>
                      <a
                        className={`icon-${item.icon}`}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                      >
                        <SocialIcon icon={item.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="footer-legal">
              <div className="footer-legal__links">
                {footerLegal.map((item) => (
                  <Link key={item.label} className="link footer-legal__link" to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <span className="footer-legal__copyright">
                GoHydro © {new Date().getFullYear()}. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
