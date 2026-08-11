import React from 'react';
import Nav from './components/Nav';
import { PortalHero } from './components/PortalHero';
import About from './components/About';
import Institutions from './components/Institutions';
import Themes from './components/Themes';
import ConferenceDetails from './components/ConferenceDetails';
import ImportantDates from './components/ImportantDates';
import Submission from './components/Submission';
import PublicationEthics from './components/PublicationEthics';
import PeerReview from './components/PeerReview';
import Registration from './components/Registration';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Branding */}
          <div style={{ maxWidth: '280px' }}>
            <div className="footer-logo">IMC<span>.</span>2026</div>
            <p className="footer-info" style={{ marginTop: '0.5rem' }}>
              International Maritime Conference 2026<br />
              Maritime Policy, Governance and Sustainability<br />
              16–18 September 2026<br />
              REVA University, Bengaluru, India
            </p>
          </div>

          {/* Institution address */}
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.65rem' }}>
              Organiser
            </p>
            <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.72, fontFamily: 'Inter, sans-serif' }}>
              Centre for International Law and Policy (CILP)<br />
              School of Legal Studies, REVA University<br />
              Rukmini Knowledge Park, Kattigenahalli<br />
              Yelahanka, Bengaluru – 560 064, Karnataka
            </p>
            <a href="https://www.reva.edu.in" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '0.4rem', fontSize: '12px', color: 'rgba(79,163,199,0.8)', textDecoration: 'underline', fontFamily: 'Inter, sans-serif' }}>
              www.reva.edu.in
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.65rem' }}>
              Quick Links
            </p>
            <div className="footer-links">
              <a href="#about"        className="footer-link">About the Conference</a>
              <a href="#institutions" className="footer-link">Institutions</a>
              <a href="#themes"       className="footer-link">Themes & Sub-Themes</a>
              <a href="#dates"        className="footer-link">Important Dates</a>
              <a href="#submissions"  className="footer-link">Submission Guidelines</a>
              <a href="#registration" className="footer-link">Registration</a>
              <a href="#leadership"   className="footer-link">Organising Committee</a>
              <a href="#contact"      className="footer-link">Contact</a>
              <a
                href="https://www.linkedin.com/showcase/centre-for-international-law-and-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                CILP on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copy">
          © 2026 Centre for International Law and Policy (CILP), School of Legal Studies, REVA University.
          All rights reserved. · In collaboration with Indian Maritime University, Chennai.
          Supported by ICSSR, Ministry of Education, Government of India.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <PortalHero />
        <About />
        <Institutions />
        <Themes />
        <ConferenceDetails />
        <ImportantDates />
        <Submission />
        <PublicationEthics />
        <PeerReview />
        <Registration />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
