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

const STEPS = [
  {
    title: 'Initial Screening',
    desc: 'All submitted manuscripts undergo an initial screening by the Organising Committee to verify compliance with conference formatting guidelines, word count, citation style (Bluebook 20th Edition), and the use of the Abstract Code as the sole identifier.',
  },
  {
    title: 'Relevance Assessment',
    desc: 'Manuscripts that pass initial screening are assessed for relevance to the overarching conference theme — Maritime Policy, Governance and Sustainability — and alignment with the published sub-themes.',
  },
  {
    title: 'Originality & Ethics Check',
    desc: 'Submitted manuscripts are evaluated for originality and screened for plagiarism in accordance with the conference\'s Publication Ethics and Malpractice Statement. Manuscripts that fail to meet originality and ethical standards are rejected at this stage.',
  },
  {
    title: 'Double-Blind Peer Review',
    desc: 'Manuscripts that successfully complete the initial screening stages are assigned to subject-matter experts for double-blind peer review. The identity of authors is concealed from reviewers, and the identity of reviewers is concealed from authors. The Abstract Code serves as the sole identifier throughout this process.',
  },
  {
    title: 'Evaluation Criteria',
    desc: 'Reviewers evaluate manuscripts on: originality and contribution to existing scholarship; clarity and rigour of research methodology; quality and coherence of legal and policy analysis; engagement with relevant literature; adherence to citation and formatting standards; and significance and potential impact of the findings.',
  },
  {
    title: 'Revision & Resubmission',
    desc: 'Based on reviewer feedback, manuscripts may be accepted without revision, accepted subject to minor revisions, returned for major revisions and resubmission, or rejected. Authors of manuscripts requiring revisions will be provided with detailed feedback and guidance.',
  },
  {
    title: 'Final Decision',
    desc: 'The final decision on acceptance or rejection of all manuscripts rests with the Organising Committee, taking into account the recommendations of the peer reviewers. The decision of the Conference Review Committee is final and binding. All authors will be notified of the outcome of their submission in a timely manner.',
  },
];

export default function PeerReview() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section" id="peer-review" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Review Process</p>
          <h2 className="section-title">Peer Review Process</h2>
          <p className="section-subtitle">
            All submitted manuscripts undergo a rigorous double-blind peer review. The Abstract Code is the
            sole identifier throughout the evaluation process.
          </p>
        </div>

        <div className="process-steps fade-in">
          {STEPS.map((step, i) => (
            <div className="process-step" key={i} id={`review-step-${i + 1}`}>
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="step-content">
                <p className="step-title">{step.title}</p>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
