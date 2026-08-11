import React, { useEffect, useRef } from 'react';

function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* Maritime-themed Lucide icons for each sub-theme */
const SUB_THEMES = [
  { icon: 'lucide:anchor',          text: 'Historical Maritime Rights and Evolution of Ocean Governance' },
  { icon: 'lucide:globe',           text: 'Maritime Territorial Disputes, Seabed Governance and the Role of Treaty Bodies' },
  { icon: 'lucide:fish',            text: 'Highly Migratory Fish Stocks, RFMOs and the Roles of FAO and WTO in Sustainable Fisheries' },
  { icon: 'lucide:leaf',            text: 'Marine Biodiversity Conservation and Restoration in Coastal and Marine Ecosystems' },
  { icon: 'lucide:package',         text: 'Shipping Contracts in a Digitalised and Integrated Global Supply Chain' },
  { icon: 'lucide:alert-triangle',  text: 'Operations & Incidents at Sea: Risk Allocation, Compensation and Marine Insurance in Shipping' },
  { icon: 'lucide:container',       text: 'Carriage of Goods by Sea: From Hague Rules to Rotterdam Rules' },
  { icon: 'lucide:droplets',        text: 'State Responsibility, Liability and Compensation for Marine Pollution Damage' },
  { icon: 'lucide:wind',            text: 'Alternative Fuels, Regulation and Sustainable Green Shipping' },
  { icon: 'lucide:users',           text: "Seafarers' Rights: Human Rights and Welfare at Sea" },
];

export default function Themes() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-white" id="themes" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Sub-Themes</p>
          <h2 className="section-title">Themes &<br />Sub-Themes</h2>
          <p className="section-subtitle">
            <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Main Theme:</strong>{' '}
            Maritime Policy, Governance and Sustainability
          </p>
        </div>

        <div className="themes-grid">
          {SUB_THEMES.map((t, i) => (
            <div className="card-light theme-card fade-in" key={i} id={`theme-${i + 1}`}>
              <div className="theme-card-icon">
                <iconify-icon icon={t.icon} style={{ fontSize: '18px' }}></iconify-icon>
              </div>
              <div className="theme-num">{String(i + 1).padStart(2, '0')}</div>
              <p className="theme-text">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="themes-note fade-in">
          <iconify-icon icon="lucide:info" style={{ fontSize: '15px', color: 'var(--accent)', verticalAlign: 'middle', marginRight: '0.5rem' }}></iconify-icon>
          <strong style={{ color: 'var(--navy)' }}>Note:</strong>{' '}
          The sub-themes listed above are indicative and not exhaustive. Abstracts and full papers addressing
          any aspect of maritime policy, governance, sustainability, or related interdisciplinary issues that
          align with the overarching theme of the conference are welcome and will be considered for
          presentation and publication.
        </div>
      </div>
    </section>
  );
}
