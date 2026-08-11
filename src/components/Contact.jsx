import React, { useEffect, useRef } from 'react';

function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Contact() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-alt" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            For all queries regarding the conference, abstract submission, registration, or any other
            matter, contact the Conference Coordinator.
          </p>
        </div>

        <div className="contact-grid">
          {/* Coordinator */}
          <div className="contact-block fade-in">
            <h3>Conference Coordinator</h3>

            <div className="contact-line">
              <iconify-icon icon="lucide:user-round" className="contact-icon" style={{ fontSize: '17px' }}></iconify-icon>
              <div>
                <strong style={{ color: 'var(--navy)', fontSize: '15px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
                  Mr. Heramb Asvin
                </strong>
                <p style={{ fontSize: '12.5px', color: 'var(--ink-muted)', marginTop: '4px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
                  Assistant Professor and Head<br />
                  Centre for International Law and Policy (CILP)<br />
                  School of Legal Studies, REVA University
                </p>
              </div>
            </div>

            <div className="contact-line">
              <iconify-icon icon="lucide:phone" className="contact-icon" style={{ fontSize: '17px' }}></iconify-icon>
              <a href="tel:+919600560443" className="email-link" id="link-phone" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                +91 9600560443
              </a>
            </div>

            <div className="contact-line">
              <iconify-icon icon="lucide:mail" className="contact-icon" style={{ fontSize: '17px' }}></iconify-icon>
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <a href="mailto:cilp.sols@reva.edu.in" className="email-link" id="link-email-cilp">
                  cilp.sols@reva.edu.in
                </a>
                <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '0.5rem' }}>(Official)</span>
              </div>
            </div>

            <div className="contact-line">
              <iconify-icon icon="lucide:mail" className="contact-icon" style={{ fontSize: '17px' }}></iconify-icon>
              <a href="mailto:heramb.a@reva.edu.in" className="email-link" id="link-email-heramb" style={{ fontFamily: 'Inter, sans-serif' }}>
                heramb.a@reva.edu.in
              </a>
            </div>

            <div className="info-box" style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <iconify-icon icon="lucide:info" style={{ fontSize: '15px', color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}></iconify-icon>
                <p style={{ fontFamily: 'Inter, sans-serif' }}>
                  For all conference queries, use the Centre's official email:{' '}
                  <a href="mailto:cilp.sols@reva.edu.in" className="email-link" id="link-email-general">
                    cilp.sols@reva.edu.in
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/showcase/centre-for-international-law-and-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
              id="link-linkedin"
            >
              <iconify-icon icon="lucide:linkedin" style={{ fontSize: '15px' }}></iconify-icon>
              Follow CILP on LinkedIn
            </a>
          </div>

          {/* Address + summary */}
          <div className="contact-block fade-in">
            <h3>Institutions</h3>

            <div className="contact-line">
              <iconify-icon icon="lucide:building-2" className="contact-icon" style={{ fontSize: '17px' }}></iconify-icon>
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <strong style={{ color: 'var(--navy)' }}>School of Legal Studies, REVA University</strong>
                <p style={{ fontSize: '13px', color: 'var(--ink-muted)', marginTop: '4px', lineHeight: 1.65 }}>
                  Rukmini Knowledge Park, Kattigenahalli<br />
                  Yelahanka, Bengaluru – 560 064, Karnataka, India
                </p>
                <a
                  href="https://www.reva.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-link"
                  id="link-reva-website"
                  style={{ fontSize: '12.5px', display: 'inline-block', marginTop: '0.35rem' }}
                >
                  www.reva.edu.in
                </a>
              </div>
            </div>

            <div className="contact-line" style={{ marginTop: '1rem' }}>
              <iconify-icon icon="lucide:ship" className="contact-icon" style={{ fontSize: '17px' }}></iconify-icon>
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <strong style={{ color: 'var(--navy)' }}>Indian Maritime University</strong>
                <p style={{ fontSize: '13px', color: 'var(--ink-muted)', marginTop: '4px', lineHeight: 1.65 }}>
                  East Coast Road, Uthandi<br />Chennai – 600 119, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Summary box */}
            <div style={{
              marginTop: '1.75rem',
              padding: '1.25rem 1.4rem',
              background: 'var(--navy)',
              borderRadius: 'var(--radius)',
              color: '#fff',
            }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.85rem' }}>
                Conference at a Glance
              </p>
              {[
                ['Event',      'International Maritime Conference 2026'],
                ['Dates',      '16–18 September 2026'],
                ['Venue',      'REVA University, Bengaluru'],
                ['Organiser',  'CILP, School of Legal Studies, REVA University'],
                ['Collab.',    'Indian Maritime University, Chennai'],
                ['Support',    'ICSSR, MoE, Govt. of India'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: '0.75rem', fontSize: '12.5px', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', minWidth: '70px', paddingTop: '2px' }}>{k}</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
