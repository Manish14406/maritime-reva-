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

/* Lucide icons — no emojis */
const PARTICIPANTS = [
  { icon: 'lucide:book-open',   label: 'Academicians and Researchers' },
  { icon: 'lucide:graduation-cap', label: 'Students and Research Scholars' },
  { icon: 'lucide:ship',        label: 'Maritime Industry Professionals' },
  { icon: 'lucide:landmark',    label: 'Government Officials and Policymakers' },
  { icon: 'lucide:scale',       label: 'Legal Practitioners and Arbitrators' },
  { icon: 'lucide:waves',       label: 'Sustainability and Marine Environment Experts' },
];

const FORMAT = [
  { icon: 'lucide:mic-2',        label: 'Keynote Addresses',       desc: 'Distinguished experts in maritime law and policy' },
  { icon: 'lucide:layout-list',  label: 'Technical Sessions',      desc: 'Structured sessions on each conference sub-theme' },
  { icon: 'lucide:file-text',    label: 'Paper Presentations',     desc: 'Peer-reviewed academic papers by selected authors' },
  { icon: 'lucide:users-round',  label: 'Interdisciplinary Dialogue', desc: 'Bridging research, policy, law, and practice' },
];

export default function ConferenceDetails() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-lightblue" id="details" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Conference Details</p>
          <h2 className="section-title">Who Can Participate?</h2>
          <p className="section-subtitle">
            IMC 2026 welcomes participants from diverse professional and academic backgrounds
            involved in maritime law, policy, governance, and sustainability.
          </p>
        </div>

        <div className="participate-grid">
          {PARTICIPANTS.map((p, i) => (
            <div className="card-light participate-card fade-in" key={i} id={`participant-${i + 1}`}>
              <div className="participate-card-icon">
                <iconify-icon icon={p.icon} style={{ fontSize: '18px' }}></iconify-icon>
              </div>
              <p className="participate-label">{p.label}</p>
            </div>
          ))}
        </div>

        {/* Conference format */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
            color: 'var(--navy)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.015em',
          }}>
            Conference Format
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {FORMAT.map((item, i) => (
              <div key={i} className="card-light" style={{ padding: '1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '38px', height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', flexShrink: 0,
                }}>
                  <iconify-icon icon={item.icon} style={{ fontSize: '18px' }}></iconify-icon>
                </div>
                <div>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '0.3rem' }}>{item.label}</p>
                  <p style={{ fontSize: '12.5px', color: 'var(--ink-muted)', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="venue-bar fade-in" style={{ marginTop: '2.5rem' }}>
          <iconify-icon icon="lucide:calendar" style={{ fontSize: '22px', color: 'rgba(255,255,255,0.6)' }}></iconify-icon>
          <div className="venue-item">
            <span className="venue-item-label">Conference Dates</span>
            <span className="venue-item-val">16–18 September 2026</span>
          </div>
          <div className="venue-item">
            <span className="venue-item-label">Venue</span>
            <span className="venue-item-val">REVA University, Bengaluru</span>
          </div>
          <div className="venue-item">
            <span className="venue-item-label">Mode</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>In-Person</span>
          </div>
        </div>
      </div>
    </section>
  );
}
