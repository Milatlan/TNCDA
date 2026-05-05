"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LEADERS, FOUNDER_STATS, LEADERSHIP_PILLARS } from "@/lib/siteData";

export default function LeadersPage() {
  const founder = LEADERS[0];
  const rest    = LEADERS.slice(1);

  return (
    <>
      <Navbar />
      <main className="ld-root">

        {/* ── HERO ── */}
        <section className="ld-hero">
          <div className="ld-hero-grid"   aria-hidden="true" />
          <div className="ld-hero-glow"   aria-hidden="true" />
          <div className="ld-hero-wm"     aria-hidden="true">TNCNA</div>

          <div className="ld-hero-inner">
            <div className="ld-hero-left">
              <div className="ld-hero-eyebrow">
                <span className="ld-eyebrow-rule" />
                Association Leadership
              </div>
              <h1 className="ld-hero-title">
                The Faces<br />Behind <em>TNCNA</em>
              </h1>
              <p className="ld-hero-sub">
                Guiding Tamil Nadu&apos;s construction and decor professionals
                with clarity of vision, unwavering integrity, and a deep
                commitment to collective growth.
              </p>
            </div>

            <div className="ld-hero-right">
              {LEADERSHIP_PILLARS.map((p) => (
                <div className="ld-pillar" key={p.label}>
                  <span className="ld-pillar-icon">{p.icon}</span>
                  <div>
                    <p className="ld-pillar-label">{p.label}</p>
                    <p className="ld-pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ld-scroll-cue" aria-hidden="true">
            <span className="ld-scroll-line" />
          </div>
        </section>

        {/* ── FOUNDER ── */}
        <section className="ld-founder-section">
          <div className="ld-container">
            <div className="ld-founder-eyebrow">
              <span className="ld-label-pip" />
              Founding Leadership
            </div>

            <div className="ld-founder-card">

              {/* Portrait */}
              <div className="ld-founder-portrait">
                <div className="ld-founder-portrait-bg" aria-hidden="true" />

                <div className="ld-corner ld-corner--tl" aria-hidden="true" />
                <div className="ld-corner ld-corner--tr" aria-hidden="true" />
                <div className="ld-corner ld-corner--bl" aria-hidden="true" />
                <div className="ld-corner ld-corner--br" aria-hidden="true" />

                {founder.image ? (
                  <Image
                    src={founder.image}
                    alt={`${founder.name} — Founder, TNCNA`}
                    fill
                    sizes="(max-width: 860px) 85vw, 340px"
                    className="ld-founder-photo"
                    priority
                  />
                ) : (
                  <div className="ld-founder-monogram" aria-hidden="true">
                    {founder.initial}
                  </div>
                )}

                <div className="ld-founder-photo-tint" aria-hidden="true" />

                <div className="ld-founder-portrait-caption">
                  <span className="ld-portrait-tag">Founder</span>
                </div>
              </div>

              {/* Info */}
              <div className="ld-founder-info">
                <div className="ld-founder-rank">
                  <span className="ld-rank-num">01</span>
                  <span className="ld-rank-rule" />
                  <span className="ld-rank-tier">Founder</span>
                </div>

                <h2 className="ld-founder-name">{founder.name}</h2>

                <p className="ld-founder-bio">
                  The visionary who established the Tamil Nadu Civil &amp; Décor
                  Association, building a professional ecosystem from the ground
                  up. Under this leadership, TNCNA has grown into a trusted
                  network spanning 05 circles across the state.
                </p>

                <div className="ld-founder-stats">
                  {FOUNDER_STATS.map((stat, i) => (
                    <div key={i} className="ld-fstat">
                      <span className="ld-fstat-num">{stat.num}</span>
                      <span className="ld-fstat-lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── LEADERSHIP GRID ── */}
        <section className="ld-grid-section">
          <div className="ld-container">
            <div className="ld-grid-eyebrow">
              <span className="ld-label-pip" />
              Executive &amp; Chapter Leaders
            </div>

            <div className="ld-grid">
              {rest.map((leader, i) => (
                <article
                  key={i}
                  className={`ld-card ld-card--${leader.tier}`}
                  style={{ animationDelay: `${i * 65}ms` }}
                >
                  <div className="ld-card-wm" aria-hidden="true">{leader.tag}</div>

                  <div className="ld-card-top">
                    <span className="ld-card-num">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <span className={`ld-card-tier-badge ld-card-tier-badge--${leader.tier}`}>
                      {leader.tag}
                    </span>
                  </div>

                  <div className="ld-card-avatar-wrap">
                    <div className="ld-card-avatar">
                      <span>{leader.initial}</span>
                    </div>
                    <div className="ld-card-avatar-ring" aria-hidden="true" />
                  </div>

                  <h3 className="ld-card-name">{leader.name}</h3>
                  <p  className="ld-card-role">{leader.role}</p>
                  <div className="ld-card-rule" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOIN BANNER ── */}
        <section className="ld-join-section">
          <div className="ld-join-inner">
            <div className="ld-join-left">
              <p className="ld-join-eyebrow">Leadership Opportunities</p>
              <h2 className="ld-join-title">
                Serve your chapter.<br /><em>Shape the industry.</em>
              </h2>
              <p className="ld-join-body">
                TNCNA is always seeking dedicated professionals to take up
                chapter leadership and advisory roles. Leadership here means
                building something that lasts.
              </p>
            </div>
            <div className="ld-join-right">
              <a href="/contact" className="ld-join-btn ld-join-btn--primary">
                Express Interest
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="/contact" className="ld-join-btn ld-join-btn--ghost">
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}