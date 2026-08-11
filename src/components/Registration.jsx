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

/* Pricing categories with icons */
const PRICING = [
  {
    icon: 'lucide:ticket',
    cat:  'Attendance',
    name: 'Participation without Paper Presentation',
    inr:  'Rs. 1,000',
    usd:  'USD 20',
  },
  {
    icon: 'lucide:graduation-cap',
    cat:  'Academic',
    name: 'Students & Research Scholars',
    inr:  'Rs. 2,500',
    usd:  'USD 30',
    featured: true,
  },
  {
    icon: 'lucide:briefcase',
    cat:  'Professional',
    name: 'Academicians & Professionals',
    inr:  'Rs. 3,000',
    usd:  'USD 35',
  },
];

export default function Registration() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-lightblue" id="registration" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Conference Registration</p>
          <h2 className="section-title">Registration &<br />Fees</h2>
          <p className="section-subtitle">
            All participants, authors, co-authors and attendees must register individually and pay
            the applicable registration fee.
          </p>
        </div>

        {/* Important co-author notice */}
        <div className="info-box fade-in" style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <iconify-icon icon="lucide:info" style={{ fontSize: '18px', color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}></iconify-icon>
            <div>
              <strong>Co-Author Registration Requirement</strong>
              <p style={{ marginTop: '0.3rem' }}>
                All co-authors must register separately and pay the applicable registration fee individually.
                Registration is mandatory for all participants, including those presenting papers.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="reg-price-grid fade-in">
          {PRICING.map((p, i) => (
            <div key={i} className={`card-light reg-price-card${p.featured ? ' featured' : ''}`} id={`pricing-${i + 1}`}>
              <div className="reg-price-icon">
                <iconify-icon icon={p.icon} style={{ fontSize: '20px' }}></iconify-icon>
              </div>
              <div className="reg-price-cat">{p.cat}</div>
              <div className="reg-price-name">{p.name}</div>
              <div className="reg-price-row">
                <div className="reg-price-item">
                  <span className="reg-price-region">India</span>
                  <span className="reg-price-amount">{p.inr}</span>
                </div>
                <div className="reg-price-item">
                  <span className="reg-price-region">International</span>
                  <span className="reg-price-amount">{p.usd}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment instructions */}
        <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }} className="fade-in">
          {/* Step 1 */}
          <div className="card-light" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: 'var(--radius-sm)',
              background: 'var(--navy)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <iconify-icon icon="lucide:credit-card" style={{ fontSize: '18px' }}></iconify-icon>
            </div>
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '0.3rem' }}>
                Step 1 — Pay Fee
              </p>
              <p style={{ fontSize: '13px', color: 'var(--ink-muted)', lineHeight: 1.65, fontFamily: 'Inter, sans-serif' }}>
                Complete payment through the REVA University Fee Payment Portal at{' '}
                <a href="https://www.reva.edu.in/payment" target="_blank" rel="noopener noreferrer" className="email-link" id="link-payment">
                  reva.edu.in/payment
                </a>
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-light" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: 'var(--radius-sm)',
              background: 'var(--navy)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <iconify-icon icon="lucide:mail-check" style={{ fontSize: '18px' }}></iconify-icon>
            </div>
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '0.3rem' }}>
                Step 2 — Confirm Registration
              </p>
              <p style={{ fontSize: '13px', color: 'var(--ink-muted)', lineHeight: 1.65, fontFamily: 'Inter, sans-serif' }}>
                Send your payment receipt to{' '}
                <a href="mailto:cilp.sols@reva.edu.in" className="email-link" id="link-reg-confirm">
                  cilp.sols@reva.edu.in
                </a>
                {' '}to confirm your registration.
              </p>
            </div>
          </div>
        </div>

        <div className="reg-actions fade-in">
          <a
            href="https://www.reva.edu.in/payment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="btn-payment"
          >
            <iconify-icon icon="lucide:credit-card" style={{ fontSize: '15px' }}></iconify-icon>
            Pay Registration Fee
          </a>
          <a
            href="mailto:cilp.sols@reva.edu.in"
            className="btn-secondary"
            id="btn-reg-enquiry"
          >
            <iconify-icon icon="lucide:mail" style={{ fontSize: '15px' }}></iconify-icon>
            Registration Enquiries
          </a>
        </div>
      </div>
    </section>
  );
}
