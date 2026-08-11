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

const LEADERSHIP = [
  {
    group: 'Chief Patrons',
    members: [
      { name: 'Dr. P. Shyama Raju',  title: 'Chancellor, REVA University', code: 'CP-01' },
      { name: 'Shri Umesh S. Raju',  title: 'Pro Chancellor, REVA University', code: 'CP-02' },
    ],
  },
  {
    group: 'Patrons',
    members: [
      { name: 'Dr. Sanjay R. Chitnis',                      title: 'Vice Chancellor, REVA University', code: 'PA-01' },
      { name: 'Dr. (Mrs.) Malini V. Shankar, IAS (Retd.)',  title: 'Vice Chancellor, Indian Maritime University, Chennai', code: 'PA-02' },
      { name: 'Dr. M. Dhanamjaya',                          title: 'Registrar, REVA University', code: 'PA-03' },
    ],
  },
  {
    group: 'Convenors',
    members: [
      { name: 'Dr. Aruna Kammila', title: 'Director and Professor, School of Legal Studies, REVA University', code: 'CV-01' },
      { name: 'Dr. A. Sankaran',   title: 'Professor and Dean (CTR), Indian Maritime University, Chennai', code: 'CV-02' },
    ],
  },
  {
    group: 'Co-Convenor',
    members: [
      { name: 'Mr. Heramb Asvin', title: 'Assistant Professor and Head, Centre for International Law and Policy (CILP), School of Legal Studies, REVA University', code: 'CC-01' },
    ],
  },
  {
    group: 'Faculty Coordinators',
    members: [
      { name: 'Dr. Subin Thomas', title: 'Assistant Professor, School of Legal Studies, REVA University', code: 'FC-01' },
      { name: 'Ms. Mili Gupta',   title: 'Assistant Professor, School of Legal Studies, REVA University', code: 'FC-02' },
      { name: 'Dr. Emil Mathew',  title: 'Associate Professor, School of Maritime Management, IMU Chennai Campus', code: 'FC-03' },
      { name: 'Dr. Pradeep Raja', title: 'Assistant Professor, School of Marine Engineering, IMU Kolkata Campus, Kolkata', code: 'FC-04' },
    ],
  },
];

export default function Leadership() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-white" id="leadership" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Conference Leadership</p>
          <h2 className="section-title">Organising Committee</h2>
          <p className="section-subtitle">
            Distinguished academics, administrators and maritime experts leading IMC 2026.
          </p>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          {LEADERSHIP.map(group => (
            <div className="leadership-group fade-in" key={group.group}>
              <p className="group-label">{group.group}</p>
              {group.members.map(m => (
                <div className="roster-row" key={m.code}>
                  <div className="roster-info">
                    <span className="roster-name">{m.name}</span>
                    <span className="roster-title">{m.title}</span>
                  </div>
                  <span className="roster-code">{m.code}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
