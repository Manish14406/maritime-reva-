import React from 'react';

export function PortalHero() {
  return (
    <section className="hero-wrapper" id="home">
      {/* Background Text */}
      <div className="hero-bg-text">MARITIME POLICY</div>

      {/* 3D Rotating Cube */}
      <div className="cube-scene">
        <div className="cube">
          <div className="cube-face cube-front">
            <img src="/front.png" alt="Maritime" />
          </div>
          <div className="cube-face cube-top">
            <img src="/top.png" alt="Governance" />
          </div>
          <div className="cube-face cube-back">
            <img src="/back.png" alt="Global Policy" />
          </div>
          <div className="cube-face cube-bottom">
            <img src="/bottom.png" alt="Sustainability" />
          </div>
        </div>
      </div>

      {/* Hero Content (Below Cube) */}
      <div className="container hero-content">
        <img 
          src="/reva_university_logo_hd_transparent.png" 
          alt="REVA University" 
          className="hero-logo" 
        />

        <h1 className="hero-content-title">
          International Maritime Conference 2026
        </h1>
        <p className="hero-content-theme">
          Maritime Policy, Governance and Sustainability
        </p>

        <div className="hero-content-org">
          <span>
            Organised by<br/>
            <strong>Centre for International Law and Policy (CILP)</strong><br/>
            School of Legal Studies, REVA University, Bengaluru
          </span>
          <span>
            In Collaboration with<br/>
            <strong>Indian Maritime University, Chennai</strong>
          </span>
          <span>
            Supported by<br/>
            <strong>Indian Council of Social Science Research (ICSSR)</strong>
          </span>
        </div>

        <div className="hero-content-dates">
          <iconify-icon icon="lucide:calendar" style={{ fontSize: '15px' }}></iconify-icon>
          16–18 September 2026 · REVA University, Bengaluru
        </div>

        <div className="hero-content-ctas">
          <a href="mailto:cilp.sols@reva.edu.in" className="btn-primary" id="hero-cta-abstract">
            <iconify-icon icon="lucide:send" style={{ fontSize: '14px' }}></iconify-icon>
            Submit Abstract
          </a>
          <a href="#registration" className="btn-secondary" id="hero-cta-register">
            <iconify-icon icon="lucide:user-plus" style={{ fontSize: '14px' }}></iconify-icon>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
