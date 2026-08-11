import React, { useEffect, useRef } from 'react';

function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* Icons + correct brochure dates */
const DATES = [
  {
    icon: 'lucide:file-pen',
    label: 'Abstract Submission Deadline',
    value: '15 August 2026',
    note:  'Send to cilp.sols@reva.edu.in',
    isDeadline: true,
  },
  {
    icon: 'lucide:check-circle',
    label: 'Acceptance of Abstracts',
    value: 'Rolling Basis',
    note:  'Notified as abstracts are reviewed',
    isDeadline: false,
  },
  {
    icon: 'lucide:file-text',
    label: 'Full Paper Submission Deadline',
    value: '30 August 2026',
    note:  'CMT link shared upon acceptance',
    isDeadline: true,
  },
  {
    icon: 'lucide:calendar',
    label: 'Conference Dates',
    value: '16–18 September 2026',
    note:  'REVA University, Bengaluru',
    isDeadline: false,
  },
];

export default function ImportantDates() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-navy" id="dates" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Key Milestones</p>
          <h2 className="section-title">Important Dates</h2>
          <p className="section-subtitle">
            Abstract acceptance is on a rolling basis — early submission is strongly encouraged to avoid missing the deadline.
          </p>
        </div>

        <div className="dates-grid">
          {DATES.map((d, i) => (
            <div className="card-navy fade-in" key={i} id={`date-card-${i + 1}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative' }}>
              {d.isDeadline && (
                <span className="date-deadline-badge" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(79, 163, 199, 0.2)', color: '#4FA3C7' }}>Deadline</span>
              )}
              <div style={{
                width: '40px', height: '40px', flexShrink: 0,
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
              }}>
                <iconify-icon icon={d.icon} style={{ fontSize: '18px' }}></iconify-icon>
              </div>
              <div className="date-card-body">
                <p className="date-label" style={{ color: '#C8D6E2' }}>{d.label}</p>
                <p className="date-value" style={{ color: '#ffffff' }}>{d.value}</p>
                {d.note && <p className="date-note" style={{ color: 'rgba(255,255,255,0.6)' }}>{d.note}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Venue bar */}
        <div className="venue-bar fade-in" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <iconify-icon icon="lucide:map-pin" style={{ fontSize: '22px', color: 'rgba(255,255,255,0.6)' }}></iconify-icon>
          <div className="venue-item">
            <span className="venue-item-label">Venue</span>
            <span className="venue-item-val">REVA University, Bengaluru</span>
          </div>
          <div className="venue-item">
            <span className="venue-item-label">Address</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55, fontFamily: 'Inter, sans-serif' }}>
              Rukmini Knowledge Park, Kattigenahalli<br />Yelahanka, Bengaluru – 560 064
            </span>
          </div>
          <div className="venue-item" style={{ marginLeft: 'auto' }}>
            <span className="venue-item-label">Conference Dates</span>
            <span className="venue-item-val">16–18 September 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
