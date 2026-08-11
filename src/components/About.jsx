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

/* Lucide icon + label for each highlight */
const HIGHLIGHTS = [
  { icon: 'lucide:anchor',        label: 'Maritime India Vision 2030' },
  { icon: 'lucide:globe',         label: 'UN Sustainable Development Goals' },
  { icon: 'lucide:waves',         label: 'Sustainable Ocean Governance' },
  { icon: 'lucide:leaf',          label: 'Marine Biodiversity Conservation' },
  { icon: 'lucide:ship',          label: 'Sustainable Shipping & Green Fuels' },
  { icon: 'lucide:droplets',      label: 'Marine Pollution & Liability' },
  { icon: 'lucide:scale',         label: "Seafarers' Rights & Welfare" },
  { icon: 'lucide:shield',        label: 'Maritime Security & Seabed Governance' },
  { icon: 'lucide:database',      label: 'Digitalisation of Shipping' },
  { icon: 'lucide:users',         label: 'Interdisciplinary Engagement' },
  { icon: 'lucide:building-2',    label: 'Bridging Research, Policy & Practice' },
  { icon: 'lucide:graduation-cap', label: 'Global Academic Platform' },
];

export default function About() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-white" id="about" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">About the Conference</p>
          <h2 className="section-title">International Maritime<br />Conference 2026</h2>
          <p className="section-subtitle">
            A global interdisciplinary platform on maritime law, policy, governance and sustainability —
            organised by CILP, School of Legal Studies, REVA University.
          </p>
        </div>

        <div className="about-grid">
          {/* Body text */}
          <div className="about-body fade-in">
            <p>
              The International Maritime Conference 2026 on <em>"Maritime Policy, Governance and Sustainability"</em> is
              organised by the Centre for International Law and Policy (CILP), School of Legal Studies, REVA University,
              Bengaluru, in collaboration with the Indian Maritime University, Chennai, and supported by the Indian
              Council of Social Science Research (ICSSR), Ministry of Education, Government of India.
            </p>
            <p>
              The maritime sector stands at a critical juncture of transformation, driven by rapid technological
              innovation, mounting environmental imperatives, evolving regulatory frameworks, and complex geopolitical
              developments. As the lifeline of international trade and a vital ecosystem for billions of people worldwide,
              the world's oceans and maritime spaces demand urgent, informed, and collaborative policy responses.
            </p>
            <p>
              IMC 2026 seeks to bring together a diverse community of academicians, researchers, policymakers, legal
              practitioners, maritime industry professionals, representatives from international organisations, and
              students from across the world to exchange ideas, share research, and build collaborative frameworks for
              addressing the most pressing maritime challenges of our time.
            </p>
            <p>
              The conference will explore a wide range of issues including the blue economy and sustainable development,
              marine biodiversity conservation, maritime security and seabed governance, the digitalisation of shipping
              operations, marine pollution and state responsibility, seafarers' rights, and the role of international
              law in regulating the global maritime commons.
            </p>
            <p>
              Through keynote addresses, technical sessions, and peer-reviewed paper presentations, IMC 2026 aims to
              advance the goals of Maritime India Vision 2030 and the United Nations Sustainable Development Goals,
              and to contribute meaningfully to the global effort towards sustainable ocean governance by bridging
              research, policy, and practice.
            </p>

            {/* Support callout */}
            <div style={{
              marginTop: '2rem',
              padding: '1.1rem 1.4rem',
              background: 'var(--bg-alt)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--navy)',
            }}>
              <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                Supported by
              </p>
              <p style={{ fontSize: '13px', color: 'var(--ink-muted)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
                Indian Council of Social Science Research (ICSSR),<br />
                Ministry of Education, Government of India
              </p>
            </div>

            <a href="/brochure.pdf" download="IMC_2026_Brochure.pdf" className="btn-secondary" style={{ marginTop: '1.75rem', display: 'inline-flex', textDecoration: 'none' }} id="btn-brochure" aria-label="Download Conference Brochure">
              <iconify-icon icon="lucide:file-down" style={{ fontSize: '16px' }}></iconify-icon>
              Download Brochure
            </a>
          </div>

          {/* Highlight tags */}
          <div className="about-highlights fade-in">
            {HIGHLIGHTS.map(h => (
              <div key={h.label} className="highlight-tag">
                <iconify-icon icon={h.icon} style={{ fontSize: '14px', color: 'var(--accent)', flexShrink: 0 }}></iconify-icon>
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
