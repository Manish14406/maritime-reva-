import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Institutions', href: '#institutions' },
  { label: 'Themes',       href: '#themes' },
  { label: 'Details',      href: '#details' },
  { label: 'Dates',        href: '#dates' },
  { label: 'Submissions',  href: '#submissions' },
  { label: 'Register',     href: '#registration' },
  { label: 'Leadership',   href: '#leadership' },
  { label: 'Contact',      href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <a href="#home" id="nav-logo" onClick={close} style={{ textDecoration: 'none' }}>
            <div className="nav-logo">
              IMC<span>.</span>2026
            </div>
            <span className="nav-logo-sub">International Maritime Conference</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.slice(0, 7).map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" id={`nav-${l.href.slice(1)}`}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#registration" id="cta-register" className="nav-cta">Register Now</a>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            id="nav-hamburger"
          >
            <iconify-icon icon="lucide:menu" style={{ fontSize: '22px' }}></iconify-icon>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <button className="mobile-menu-close" onClick={close} aria-label="Close menu" id="mobile-menu-close">
          <iconify-icon icon="lucide:x" style={{ fontSize: '22px' }}></iconify-icon>
        </button>
        <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '17px', color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          IMC<span style={{ color: 'var(--accent)' }}>.</span>2026
        </div>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#registration" className="nav-cta" onClick={close} style={{ marginTop: '0.75rem' }}>
          Register Now
        </a>
      </div>
    </>
  );
}
