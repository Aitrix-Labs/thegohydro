import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { moreMenuItem, moreNav, primaryNav, type NavItem } from '../data/content'
import Logo from './Logo'

const DESKTOP_MQ = '(min-width: 1024px)'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [alertsOpen, setAlertsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [navHidden, setNavHidden] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const locked = menuOpen || searchOpen || alertsOpen || Boolean(activeSubmenu)
    document.body.style.overflow = locked ? 'hidden' : ''
    document.body.classList.toggle('menu-open', locked)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen, searchOpen, alertsOpen, activeSubmenu])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
        setAlertsOpen(false)
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const readY = () =>
      document.scrollingElement?.scrollTop ??
      document.documentElement.scrollTop ??
      window.scrollY ??
      0

    const onScroll = () => {
      const y = readY()
      const goingDown = y > lastScrollY.current
      if (goingDown && y > 100) {
        setNavHidden(true)
        setActiveSubmenu(null)
      } else if (y < lastScrollY.current) {
        setNavHidden(false)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDesktop = () => window.matchMedia(DESKTOP_MQ).matches

  const closeAll = () => {
    setMenuOpen(false)
    setSearchOpen(false)
    setAlertsOpen(false)
    setActiveSubmenu(null)
    setMobileExpanded(null)
  }

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia(DESKTOP_MQ).matches) {
        setMenuOpen(false)
        setMobileExpanded(null)
      } else {
        setActiveSubmenu(null)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const openSubmenu = (id: string) => {
    if (!isDesktop()) return
    setActiveSubmenu(id)
    setMenuOpen(false)
    setSearchOpen(false)
    setAlertsOpen(false)
  }

  const closeSubmenus = () => {
    if (!isDesktop()) return
    setActiveSubmenu(null)
  }

  const submenuPanels: NavItem[] = [...primaryNav, moreMenuItem]

  return (
    <header
      className={`site-header${navHidden && !menuOpen && !searchOpen && !alertsOpen ? ' is-nav-hidden' : ''}${menuOpen ? ' is-menu-open' : ''}`}
    >
      <div className="header__inner">
        <div
          className="mega-menu-container"
          ref={megaRef}
          onMouseLeave={closeSubmenus}
        >
          <div className="navigation-wrapper">
            <div className="logo-container">
              <Logo />
            </div>

            <nav className="mega-menu" aria-label="Primary">
              <ul className="menu">
                {primaryNav.map((link) => (
                  <li
                    key={link.id}
                    className={`menu-item-level-1 dropdown${
                      activeSubmenu === link.id ? ' active' : ''
                    }`}
                    data-menu-id={link.id}
                    onMouseEnter={() => openSubmenu(link.id)}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `menu-item-level-1__link${isActive ? ' is-active' : ''}`
                      }
                      onClick={closeAll}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li
                  className={`menu-item-level-1 dropdown desktop-menu-toggle${
                    activeSubmenu === moreMenuItem.id ? ' active' : ''
                  }`}
                  data-menu-id={moreMenuItem.id}
                  onMouseEnter={() => openSubmenu(moreMenuItem.id)}
                >
                  <button
                    type="button"
                    className={`button button--hamburger${
                      menuOpen || activeSubmenu === moreMenuItem.id
                        ? ' is-active'
                        : ''
                    }`}
                    aria-label={menuOpen ? 'Close menu' : 'More'}
                    aria-expanded={menuOpen || activeSubmenu === moreMenuItem.id}
                    onClick={() => {
                      if (isDesktop()) {
                        setActiveSubmenu((v) =>
                          v === moreMenuItem.id ? null : moreMenuItem.id,
                        )
                        return
                      }
                      setMenuOpen((v) => !v)
                      setSearchOpen(false)
                      setAlertsOpen(false)
                      setActiveSubmenu(null)
                    }}
                  />
                </li>
              </ul>
            </nav>
          </div>

          <div className="action-links-container">
            <ul>
              <li className="search">
                <button
                  type="button"
                  className="button button--search-modal"
                  aria-label="Search"
                  onClick={() => {
                    setSearchOpen(true)
                    setMenuOpen(false)
                    setAlertsOpen(false)
                    setActiveSubmenu(null)
                  }}
                />
              </li>
              <li className="button-info has-alerts">
                <button
                  type="button"
                  className="button button--info-modal"
                  aria-label="Alerts"
                  onClick={() => {
                    setAlertsOpen(true)
                    setMenuOpen(false)
                    setSearchOpen(false)
                    setActiveSubmenu(null)
                  }}
                />
              </li>
              <li className="menu-button">
                <button
                  type="button"
                  className={`button button--hamburger${menuOpen ? ' is-active' : ''}`}
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={menuOpen}
                  onClick={() => {
                    setMenuOpen((v) => !v)
                    setSearchOpen(false)
                    setAlertsOpen(false)
                    setActiveSubmenu(null)
                  }}
                />
              </li>
            </ul>
          </div>

          {submenuPanels.map((panel) => (
            <div
              key={panel.id}
              className={`submenu-container${
                activeSubmenu === panel.id ? ' active' : ''
              }`}
              data-submenu-id={panel.id}
              aria-hidden={activeSubmenu !== panel.id}
            >
              <div className="submenu-primary-container">
                <div className="main-navigation">
                  <div className="submenu-header">
                    <h4 className="submenu-header__title">{panel.label}</h4>
                  </div>
                  <ul className="submenu-primary">
                    {panel.children.map((child) => (
                      <li key={child.label} className="menu-item-level-2">
                        <NavLink
                          to={child.to}
                          className="menu-item-level-2__link"
                          onClick={closeAll}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                {panel.id !== moreMenuItem.id && (
                  <div className="parent-link">
                    <NavLink
                      to={panel.to}
                      className="link link--arrow-right"
                      onClick={closeAll}
                    >
                      {panel.label}
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`mobile-panel ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <nav className="mobile-panel__nav" aria-label="All pages">
          {primaryNav.map((item) => {
            const expanded = mobileExpanded === item.id
            const hasChildren = item.children.length > 0
            return (
              <div
                key={item.id}
                className={`mobile-panel__item${expanded ? ' is-expanded' : ''}`}
              >
                <div className="mobile-panel__row">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `mobile-panel__link${isActive ? ' is-active' : ''}`
                    }
                    onClick={closeAll}
                  >
                    {item.label}
                  </NavLink>
                  {hasChildren && (
                    <button
                      type="button"
                      className="mobile-panel__toggle"
                      aria-expanded={expanded}
                      aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label}`}
                      onClick={() =>
                        setMobileExpanded((id) => (id === item.id ? null : item.id))
                      }
                    />
                  )}
                </div>
                {hasChildren && (
                  <ul className="mobile-panel__children" hidden={!expanded}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.to}
                          className="mobile-panel__child-link"
                          onClick={closeAll}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <NavLink
                        to={item.to}
                        className="mobile-panel__child-link mobile-panel__child-link--parent"
                        onClick={closeAll}
                      >
                        View {item.label}
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            )
          })}
          <div className="mobile-panel__more">
            <p className="mobile-panel__more-label">More</p>
            {moreNav.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `mobile-panel__link mobile-panel__link--more${isActive ? ' is-active' : ''}`
                }
                onClick={closeAll}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      <div className={`side-modal ${searchOpen ? 'is-open' : ''}`} hidden={!searchOpen}>
        <button
          type="button"
          className="side-modal__close"
          aria-label="Close search"
          onClick={() => setSearchOpen(false)}
        />
        <div className="side-modal__content">
          <div className="side-modal__header">
            <img src="/icons/search.svg" alt="" width={22} height={22} />
            <h2>Search</h2>
          </div>
          <form
            className="side-modal__form"
            onSubmit={(e) => {
              e.preventDefault()
              setSearchOpen(false)
            }}
          >
            <label className="visually-hidden" htmlFor="site-search">
              Search GoHydro
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search GoHydro"
              autoFocus={searchOpen}
            />
            <button type="submit" className="btn btn--lime">
              Search
            </button>
          </form>
          <p className="side-modal__hint">Common search</p>
          <ul className="side-modal__list">
            {['Lake level', 'Careers', 'Power stations', 'Alerts'].map((item) => (
              <li key={item}>
                <button type="button" onClick={() => setSearchOpen(false)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`side-modal ${alertsOpen ? 'is-open' : ''}`} hidden={!alertsOpen}>
        <button
          type="button"
          className="side-modal__close"
          aria-label="Close alerts"
          onClick={() => setAlertsOpen(false)}
        />
        <div className="side-modal__content">
          <div className="side-modal__header">
            <img src="/icons/info.svg" alt="" width={24} height={24} />
            <h2>Alerts</h2>
          </div>
          <ul className="side-modal__list side-modal__list--alerts">
            <li>
              <span>24 September 2026 · North-West</span>
              <strong>Variable water level conditions on the River Forth</strong>
            </li>
            <li>
              <span>14 September 2026 · Central Highlands</span>
              <strong>Nive River day use area (Tungatinah) re-opened</strong>
            </li>
            <li>
              <span>13 April 2026 · North</span>
              <strong>Water flows to Brumbys Creek</strong>
            </li>
          </ul>
        </div>
      </div>

      {(menuOpen || searchOpen || alertsOpen) && (
        <button
          type="button"
          className="header-overlay"
          aria-label="Close"
          onClick={closeAll}
        />
      )}
    </header>
  )
}
