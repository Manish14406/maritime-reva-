import React, { useEffect, useRef } from 'react';

function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.05 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const ABSTRACT_REQS = [
  'Abstracts must be original, unpublished, and must not be under consideration for publication or presentation elsewhere.',
  'Abstracts must be submitted in English and must be relevant to the conference theme or any of the sub-themes.',
  'The abstract must not exceed 300 words and must clearly state the research objective, methodology, key findings, and significance of the study.',
  'Authors must provide their name, institutional affiliation, designation, email address, and contact number.',
  'Co-authorship is permitted for a maximum of two authors.',
  'Abstracts must be prepared in Microsoft Word (.doc/.docx) format.',
  'Selected authors will be invited to submit full papers; the registration and paper submission link will be communicated upon acceptance.',
];

const PAPER_REQS = [
  'Full papers must be original and unpublished, and not currently under consideration for publication elsewhere.',
  'Manuscripts must be 6,000–8,000 words including footnotes.',
  'Citations must conform to Bluebook: A Uniform System of Citation (20th Edition).',
  'Manuscripts must be prepared in Microsoft Word (.doc/.docx) format.',
  'All submissions undergo double-blind peer review. Manuscripts must not contain identifying author information.',
  'The Organising Committee may accept, reject, or request revisions based on reviewer recommendations.',
  'Selected papers may be considered for publication in an edited volume, conference proceedings, or a partner journal (SCOPUS Indexed), subject to editorial review and publisher policies.',
  'The decision of the Review Committee is final.',
];

export default function Submission() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-white" id="submissions" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Submission Guidelines</p>
          <h2 className="section-title">Abstract & Paper<br />Submission</h2>
          <p className="section-subtitle">
            Read the complete guidelines before submitting. All submissions must meet the requirements below.
          </p>
        </div>

        {/* ── Abstract Submission ── */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.015em',
            color: 'var(--ink)',
            marginBottom: '1.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--hairline)',
          }}>Abstract Submission
            <span style={{ fontSize: '11px', fontFamily: 'Sora, sans-serif', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase', marginLeft: '1rem' }}>
              Deadline: 15 August 2026
            </span>
          </h3>

          <div className="guidelines-cols">
            <div className="guideline-block fade-in">
              <h3>Requirements</h3>
              {ABSTRACT_REQS.map((r, i) => (
                <div className="guideline-item" key={i}>
                  <span className="guideline-dot"></span>
                  <p className="guideline-text">{r}</p>
                </div>
              ))}
            </div>

            <div className="guideline-block fade-in">
              <h3>How to Submit</h3>
              <div className="info-box" style={{ marginTop: 0, borderLeftColor: 'var(--accent)' }}>
                <strong>Abstract Submission Email</strong>
                <p style={{ marginTop: '0.5rem' }}>
                  Send your abstract (MS Word .doc/.docx) to:<br />
                  <a href="mailto:cilp.sols@reva.edu.in" className="email-link" id="link-abstract-email" style={{ fontSize: '14px' }}>
                    cilp.sols@reva.edu.in
                  </a>
                </p>
              </div>

              <div className="info-box" style={{ marginTop: '1rem', borderLeftColor: 'var(--gold)' }}>
                <strong style={{ color: 'var(--gold)' }}>Abstract Code</strong>
                <p style={{ marginTop: '0.4rem' }}>
                  Accepted abstracts will be assigned a unique Abstract Code (e.g.{' '}
                  <strong style={{ color: 'var(--ink)' }}>IMC-01</strong>
                  ). This code serves as the sole identifier throughout the double-blind peer review process.
                  Authors must quote the Abstract Code in all future correspondence relating to their submission.
                </p>
              </div>

              <div className="info-box" style={{ marginTop: '1rem', borderLeftColor: 'var(--accent)' }}>
                <strong>Acceptance</strong>
                <p style={{ marginTop: '0.4rem' }}>
                  Abstracts are accepted on a rolling basis. Authors will be notified of acceptance along
                  with the paper submission link and registration details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Paper Submission ── */}
        <div style={{ marginTop: '4rem' }} id="paper-submission">
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.015em',
            color: 'var(--ink)',
            marginBottom: '1.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--hairline)',
          }}>Full Paper Submission
            <span style={{ fontSize: '11px', fontFamily: 'Sora, sans-serif', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase', marginLeft: '1rem' }}>
              Deadline: 30 August 2026
            </span>
          </h3>

          <div className="info-box fade-in" style={{ borderLeftColor: 'var(--accent)', marginBottom: '2rem' }}>
            <strong>Microsoft CMT Submission</strong>
            <p style={{ marginTop: '0.4rem' }}>
              Authors are required to submit their manuscripts using the{' '}
              <strong style={{ color: 'var(--ink)' }}>Microsoft CMT (Conference Management Toolkit)</strong>{' '}
              link, which will be communicated upon abstract acceptance. Authors are advised to retain
              the CMT acknowledgement email as confirmation of their submission.
            </p>
          </div>

          <div className="guidelines-cols">
            <div className="guideline-block fade-in">
              <h3>Manuscript Requirements</h3>
              {PAPER_REQS.slice(0, 5).map((r, i) => (
                <div className="guideline-item" key={i}>
                  <span className="guideline-dot"></span>
                  <p className="guideline-text">{r}</p>
                </div>
              ))}
            </div>

            <div className="guideline-block fade-in">
              <h3>Review & Publication</h3>
              {PAPER_REQS.slice(5).map((r, i) => (
                <div className="guideline-item" key={i}>
                  <span className="guideline-dot"></span>
                  <p className="guideline-text">{r}</p>
                </div>
              ))}
              <div className="info-box" style={{ marginTop: '1.25rem', borderLeftColor: 'var(--gold)' }}>
                <strong style={{ color: 'var(--gold)' }}>Publication Opportunity</strong>
                <p style={{ marginTop: '0.4rem' }}>
                  Selected papers will be considered for publication in a <strong style={{ color: 'var(--ink)' }}>SCOPUS Indexed</strong> journal
                  or edited volume, subject to editorial review and publisher policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
