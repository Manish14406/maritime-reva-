import React, { useEffect, useRef, useState } from 'react';

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

const ETHICS_ITEMS = [
  {
    title: 'Responsibilities of Authors',
    content: `
      <p>Authors must ensure that their submitted work is entirely original and has not been published elsewhere, 
      nor is it currently under consideration for publication in any other venue. Authors are responsible for 
      obtaining all necessary permissions for the use of any third-party material included in their manuscripts.</p>
      <p>Authors must accurately and completely disclose all sources used in their work. Proper attribution must 
      be given to the work of others. Data fabrication, falsification, or selective reporting of findings to 
      support particular conclusions are considered serious forms of research misconduct and will not be 
      tolerated.</p>
      <p>Where applicable, authors must declare any conflicts of interest that could be perceived as influencing 
      the results or interpretation of their manuscript. All authors listed on a submission must have made a 
      genuine and substantial intellectual contribution to the work. The addition of individuals who have not 
      contributed to the research (gift authorship) is not permitted. The corresponding author bears 
      responsibility for ensuring that all co-authors have reviewed and approved the final version of the 
      manuscript and have agreed to its submission.</p>
    `,
  },
  {
    title: 'Responsibilities of Reviewers',
    content: `
      <p>Reviewers are expected to treat manuscripts submitted for peer review as strictly confidential 
      documents. They must not share, discuss, or disclose the content of a manuscript with anyone without 
      the explicit authorisation of the Organising Committee.</p>
      <p>Reviewers must conduct their evaluations objectively, providing clear and constructive feedback 
      grounded in the scholarly merit of the work. Personal criticism of the authors is unacceptable. 
      If a reviewer identifies a potential conflict of interest with the authors or subject matter of the 
      assigned manuscript, they must promptly notify the Organising Committee and recuse themselves from 
      the review process.</p>
      <p>Reviewers should bring to the attention of the Organising Committee any identified similarities 
      between the manuscript under review and other published works or submissions of which they are aware.</p>
    `,
  },
  {
    title: 'Responsibilities of the Organising Committee',
    content: `
      <p>The Organising Committee bears ultimate responsibility for decisions concerning the acceptance or 
      rejection of manuscripts. These decisions are guided solely by the academic merit, originality, 
      relevance, and quality of the work submitted, without discrimination on the basis of race, gender, 
      religion, ethnic origin, nationality, institutional affiliation, or political beliefs of the authors.</p>
      <p>The Organising Committee is committed to maintaining the integrity and confidentiality of the 
      double-blind peer review process. Information about submitted manuscripts, including the identities 
      of authors and reviewers, will not be disclosed to unauthorised individuals. In instances where 
      ethical concerns or misconduct are identified, the Organising Committee will take appropriate 
      measures in accordance with established academic standards and best practices.</p>
    `,
  },
  {
    title: 'Plagiarism Policy',
    content: `
      <p>The conference maintains a strict zero-tolerance policy towards plagiarism in all its forms, 
      including direct copying, paraphrasing without attribution, mosaic plagiarism, and self-plagiarism. 
      All submitted manuscripts may be subject to plagiarism screening using appropriate detection tools.</p>
      <p>Where plagiarism is detected, the manuscript will be rejected immediately. If plagiarism is 
      discovered after acceptance, the acceptance will be rescinded. If plagiarism is identified after 
      publication in conference proceedings, corrective action will be taken, which may include retraction 
      of the paper. Authors found to have engaged in plagiarism may be reported to their respective 
      institutions.</p>
    `,
  },
  {
    title: 'Handling Ethical Misconduct',
    content: `
      <p>Any allegations of ethical misconduct, including plagiarism, data fabrication, falsification, 
      undisclosed conflicts of interest, or authorship disputes, will be thoroughly and fairly investigated 
      by the Organising Committee.</p>
      <p>All parties involved in an allegation will be given a reasonable opportunity to respond to the 
      concerns raised. If misconduct is confirmed following investigation, appropriate action will be 
      taken, which may include rejection of the manuscript, retraction of accepted or published work, 
      reporting of the misconduct to the author's institution, and barring the author(s) from future 
      participation in conferences organised by CILP and its partner institutions.</p>
      <p>The Organising Committee is committed to upholding the highest standards of research integrity 
      and academic ethics in all aspects of the conference.</p>
    `,
  },
];

function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  const bodyRefs = useRef([]);

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

  useEffect(() => {
    bodyRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = openIdx === i ? `${el.scrollHeight}px` : '0';
    });
  }, [openIdx]);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div
          className={`accordion-item${openIdx === i ? ' open' : ''}`}
          key={i}
          id={`ethics-acc-${i}`}
        >
          <button
            className="accordion-trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIdx === i}
            id={`ethics-trigger-${i}`}
          >
            <span className="accordion-trigger-text">{item.title}</span>
            <span className="accordion-icon">
              <iconify-icon icon="lucide:plus" style={{ fontSize: '12px' }}></iconify-icon>
            </span>
          </button>
          <div
            className="accordion-body"
            ref={el => bodyRefs.current[i] = el}
            aria-hidden={openIdx !== i}
          >
            <div
              className="accordion-body-inner"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PublicationEthics() {
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  return (
    <section className="section section-alt" id="ethics" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Academic Integrity</p>
          <h2 className="section-title">Publication Ethics &<br />Malpractice Statement</h2>
          <p className="section-subtitle">
            IMC 2026 is committed to the highest standards of research integrity and academic ethics.
            The following policies govern all aspects of manuscript submission, peer review, and publication.
          </p>
        </div>

        <div className="fade-in" style={{ marginTop: '1rem' }}>
          <Accordion items={ETHICS_ITEMS} />
        </div>
      </div>
    </section>
  );
}
