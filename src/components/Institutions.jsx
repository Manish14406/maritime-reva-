import React, { useEffect, useRef, useState } from 'react';

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

const INSTITUTIONS = [
  {
    id: 'reva',
    short: 'REVA University',
    icon: 'lucide:university',
    tags: ['Karnataka Act No. 13 of 2013', 'UGC Recognised', 'Bengaluru', '15,000+ Students', 'Knowledge is Power'],
    facts: [
      { icon: 'lucide:map-pin',  val: 'Bengaluru, Karnataka' },
      { icon: 'lucide:users',    val: '15,000+ Students' },
      { icon: 'lucide:scroll',   val: 'UGC Recognised' },
    ],
    body: [
      `REVA University, Bengaluru, is a premier state private university established under the Government of Karnataka Act No. 13 of 2013 and recognised by the University Grants Commission (UGC). Committed to academic excellence, innovation, research and industry-oriented learning, REVA University is strategically located in Bengaluru, the knowledge capital of India.`,
      `The University offers a wide spectrum of programmes spanning Undergraduate, Postgraduate, Doctoral, Diploma, and Certificate levels across disciplines including Engineering and Technology, Architecture, Management, Commerce, Law, Science and Technology, Liberal Studies, and Performing Arts. It nurtures a vibrant academic community of over 15,000 students, supported by a dedicated and accomplished faculty.`,
      `REVA University is distinguished by its student-centric approach, innovative pedagogy, research-driven curricula, and a strong emphasis on interdisciplinary learning and industry engagement. Its state-of-the-art infrastructure, well-equipped laboratories, research centres, and incubation facilities foster a culture of innovation and entrepreneurship.`,
      `Guided by its motto "Knowledge is Power", REVA University continues to evolve as a centre of academic excellence with a clear vision for impactful education, research, and societal contribution.`,
    ],
  },
  {
    id: 'sls',
    short: 'School of Legal Studies',
    icon: 'lucide:scale',
    tags: ['UG · PG · Doctoral Programmes', 'Moot Court Hall', 'Legal Aid & Counselling', 'Staffordshire · Exeter · Hume MoUs', 'IMU Collaboration'],
    facts: [
      { icon: 'lucide:gavel',      val: 'Moot Court Hall' },
      { icon: 'lucide:globe',      val: 'International MoUs' },
      { icon: 'lucide:handshake',  val: 'IMU Collaboration' },
    ],
    body: [
      `The School of Legal Studies (SLS) at REVA University is firmly committed to advancing legal education, research, and professional development, with a vision to nurture socially responsible legal professionals capable of navigating the complexities of contemporary law and governance. The School offers comprehensive Undergraduate, Postgraduate, and Doctoral programmes designed to provide a rigorous grounding in legal scholarship.`,
      `Equipped with a state-of-the-art Moot Court Hall, legal aid and counselling facilities, well-stocked libraries, and technology-enabled learning environments, the School fosters a culture of experiential learning. Students actively participate in moot court competitions, legal aid initiatives, research projects, internships, seminars, and workshops, with direct interaction with eminent judges, legal practitioners, policymakers, and industry experts.`,
      `The School has established significant International MoUs with leading institutions including Staffordshire University, University of Exeter, and Hume University, enhancing its global academic outreach. Its collaboration with the Indian Maritime University has further strengthened interdisciplinary learning, research cooperation, faculty exchange, and student opportunities in specialised maritime law and policy.`,
      `Through its unwavering commitment to academic excellence, innovation, internationalisation, and social responsibility, the School of Legal Studies continues to shape the next generation of legal professionals, advocates, and policymakers.`,
    ],
  },
  {
    id: 'cilp',
    short: 'Centre for International Law and Policy (CILP)',
    icon: 'lucide:globe-2',
    tags: ['International Law', 'Maritime Law', 'Space Law', 'Cyber Law', 'Human Rights', 'Environmental Governance', 'Dispute Resolution'],
    facts: [
      { icon: 'lucide:anchor',   val: 'Maritime Law Focus' },
      { icon: 'lucide:satellite', val: 'Space Law Initiatives' },
      { icon: 'lucide:shield',   val: 'IMC 2026 Organiser' },
    ],
    body: [
      `The Centre for International Law and Policy (CILP), established within the School of Legal Studies, REVA University, serves as a dedicated academic and research platform for advancing scholarship, dialogue, and capacity-building in international law, global governance, and public policy. CILP is committed to fostering interdisciplinary engagement that bridges legal scholarship, policy formulation, and practical application.`,
      `Through a wide range of research initiatives, training programmes, conferences, workshops, and collaborative projects, CILP engages with complex and evolving areas including maritime law, international trade and investment law, human rights, environmental governance, space law, cyber law, international dispute resolution, and sustainable development.`,
      `CILP brings together students, researchers, policymakers, industry professionals, and legal practitioners to participate in national and international conferences, academic academies, and expert lectures, creating a vibrant intellectual space where scholars, jurists, diplomats, policymakers, and industry experts converge.`,
      `The International Maritime Conference 2026 is a flagship initiative of CILP, reflecting its commitment to advancing interdisciplinary research, policy dialogue, and academic collaboration in maritime law, governance, and sustainability.`,
    ],
  },
  {
    id: 'imu',
    short: 'Indian Maritime University (IMU)',
    icon: 'lucide:ship',
    tags: ['Central University', 'IMU Act 2008', 'Ministry of Ports, Shipping & Waterways', 'Marine Engineering', 'Nautical Science', 'Blue Economy'],
    facts: [
      { icon: 'lucide:building-2', val: 'Central University' },
      { icon: 'lucide:anchor',     val: 'Chennai Headquarters' },
      { icon: 'lucide:waves',      val: 'Blue Economy Leader' },
    ],
    body: [
      `The Indian Maritime University (IMU), headquartered in Chennai, is India's premier maritime university and a Central University established under the Indian Maritime University Act, 2008, under the Ministry of Ports, Shipping and Waterways, Government of India. IMU is dedicated to advancing maritime education, training, research, and capacity building to serve the evolving needs of the Indian and global maritime sectors.`,
      `IMU offers a comprehensive range of academic programmes spanning Marine Engineering, Nautical Science, Naval Architecture, Maritime Management, Logistics and Supply Chain Management, Port Management, Transportation, and Maritime Law. The University operates through a network of campuses and affiliated institutions across India.`,
      `As a national leader in maritime education, IMU actively contributes to the blue economy through interdisciplinary research, innovation, and consultancy in partnership with government agencies, industry stakeholders, international organisations, and academic institutions. Its state-of-the-art laboratories, simulation facilities, and modern academic infrastructure position IMU at the forefront of maritime education in Asia.`,
      `IMU's collaboration with the Centre for International Law and Policy (CILP), School of Legal Studies, REVA University, for the International Maritime Conference 2026 reflects its commitment to fostering interdisciplinary engagement and to the sustainable development of the blue economy.`,
    ],
  },
];

function InstCard({ inst }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.style.maxHeight = open ? `${bodyRef.current.scrollHeight}px` : '0';
  }, [open]);

  return (
    <div
      className="card-navy fade-in"
      style={{
        marginBottom: '1rem',
        overflow: 'hidden',
        boxShadow: open ? '0 12px 35px rgba(0,0,0,0.15)' : '',
      }}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        id={`inst-toggle-${inst.id}`}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.4rem 1.5rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Icon box */}
        <div style={{
          width: '42px', height: '42px', flexShrink: 0,
          borderRadius: 'var(--radius-sm)',
          background: open ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          transition: 'background 0.25s',
        }}>
          <iconify-icon icon={inst.icon} style={{ fontSize: '20px' }}></iconify-icon>
        </div>

        <span style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          fontWeight: 800,
          letterSpacing: '-0.01em',
          color: '#ffffff',
          flex: 1,
        }}>
          {inst.short}
        </span>

        <span style={{
          flexShrink: 0, width: '24px', height: '24px',
          border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#ffffff',
          transition: 'transform 0.25s',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>
          <iconify-icon icon="lucide:plus" style={{ fontSize: '12px' }}></iconify-icon>
        </span>
      </button>

      {/* Content */}
      <div
        id={`inst-content-${inst.id}`}
        hidden={!open}
        style={{
          display: open ? 'block' : 'none',
          padding: '0 1.5rem 1.5rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>
          {inst.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.02em',
              background: 'rgba(255,255,255,0.08)',
              color: '#C8D6E2',
              padding: '0.4rem 0.7rem',
              borderRadius: '99px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="institution-split">
          {/* Quick Facts */}
          <div className="institution-facts">
            {inst.facts.map(f => (
              <div key={f.val} className="fact-item">
                <iconify-icon icon={f.icon} style={{ color: '#4FA3C7' }}></iconify-icon>
                <span style={{ color: '#C8D6E2' }}>{f.val}</span>
              </div>
            ))}
          </div>

          {/* Body text */}
          <div className="institution-body" style={{ color: '#C8D6E2' }}>
            {inst.body.map((p, i) => <p key={i} style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{p}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Institutions() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-navy" id="institutions" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Organising Institutions</p>
          <h2 className="section-title">About the Institutions</h2>
          <p className="section-subtitle">
            IMC 2026 is a joint initiative of REVA University and the Indian Maritime University —
            click each institution to learn more.
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          {INSTITUTIONS.map(inst => <InstCard key={inst.id} inst={inst} />)}
        </div>
      </div>
    </section>
  );
}
