"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const CLAUSES = [
  {
    id: "acceptance",
    num: "01",
    title: "Acceptance of Terms",
    tag: "Binding Agreement",
    body: `By accessing, registering with, or participating in any TNCNA platform, event, or service, you unconditionally agree to be bound by these Terms & Conditions. If you do not agree, you must immediately discontinue use of our services. Continued membership constitutes ongoing acceptance of any amendments made to these terms.`,
  },
  {
    id: "membership",
    num: "02",
    title: "Membership Responsibility",
    tag: "Professional Standards",
    body: `All members are required to provide accurate, truthful, and verifiable information during registration and throughout their membership tenure. Members must uphold professional integrity, act in good faith in all association interactions, and promptly notify TNCNA of any material changes to their credentials, licensing status, or professional standing.`,
  },
  {
    id: "conduct",
    num: "03",
    title: "Code of Conduct",
    tag: "Ethics & Integrity",
    body: `TNCNA members must conduct themselves with the highest standards of professionalism. Any misuse of the network — including but not limited to false claims, fraudulent representation, predatory practices, harassment, or conduct harmful to other members — will result in immediate suspension pending investigation. Confirmed violations will lead to permanent removal and, where applicable, referral to relevant regulatory authorities.`,
  },
  {
    id: "payments",
    num: "04",
    title: "Payments & Transactions",
    tag: "Financial Terms",
    body: `TNCNA facilitates professional connections but bears no direct responsibility for financial transactions, contract disputes, or commercial arrangements between members. All parties entering contractual or commercial agreements do so independently. Members are expected to maintain transparent, documented, and fair payment practices consistent with Tamil Nadu construction industry standards.`,
  },
  {
    id: "compliance",
    num: "05",
    title: "Legal Compliance",
    tag: "Regulatory Obligations",
    body: `Every member must operate in full compliance with all applicable Tamil Nadu state laws, Central Government regulations, BIS standards, OSHA-equivalent safety norms, and any construction sector-specific legislation in force at the time of their work. TNCNA may from time to time issue compliance advisories — adherence to these advisories is a condition of continued membership.`,
  },
  {
    id: "intellectual",
    num: "06",
    title: "Intellectual Property",
    tag: "IP Rights",
    body: `The TNCNA name, logo, visual identity, member directories, and all published materials are the exclusive intellectual property of the association. Unauthorised reproduction, distribution, or commercial use of any TNCNA-owned assets without prior written consent is strictly prohibited and may constitute grounds for legal action.`,
  },
  {
    id: "privacy",
    num: "07",
    title: "Privacy & Data",
    tag: "Data Protection",
    body: `Member data collected through TNCNA platforms is governed by our Privacy Policy. We collect only what is necessary for association operations and do not sell personal data to third parties. Members consent to communications related to association activities, industry updates, and governance matters. You may manage your communication preferences through the member portal at any time.`,
  },
  {
    id: "modifications",
    num: "08",
    title: "Modifications to Terms",
    tag: "Governance",
    body: `TNCNA reserves the right to revise, update, or amend these Terms & Conditions at any time to reflect changes in law, industry standards, or association governance requirements. Material changes will be communicated to members via registered contact details with a minimum 14-day notice period. Continued membership following such notice constitutes acceptance of the revised terms.`,
  },
];

export default function TermsPage() {
  const [activeId, setActiveId] = useState("acceptance");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* ── Scroll spy ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("data-clause-id") ?? "";
          if (e.isIntersecting) {
            setActiveId(id);
            setRevealed((prev) => new Set([...prev, id]));
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    CLAUSES.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    // Reveal all visible on mount
    CLAUSES.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setRevealed((prev) => new Set([...prev, id]));
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <Navbar />

      <main className="tr-root">

        {/* ══ HERO ════════════════════════════════════════ */}
        <section className="tr-hero">
          <div className="tr-hero-grid" aria-hidden="true" />
          <div className="tr-hero-glow" aria-hidden="true" />

          {/* Watermark */}
          <span className="tr-hero-wm" aria-hidden="true">T&C</span>

          <div className="tr-hero-inner">
            <div className="tr-hero-eyebrow">
              <span className="tr-eyebrow-pip" />
              Legal Framework
            </div>

            <h1 className="tr-hero-title">
              Terms &amp; <em>Conditions</em>
            </h1>

            <p className="tr-hero-sub">
              These terms govern your membership and participation in the Tamil Nadu
              Contractors &amp; Networks Association. Last revised:{" "}
              <strong>January 2025</strong>
            </p>

            <div className="tr-hero-meta">
              {["8 Clauses", "Effective Immediately", "Member Binding"].map((m) => (
                <span key={m} className="tr-meta-pill">{m}</span>
              ))}
            </div>
          </div>

          {/* Scroll cue */}
          <div className="tr-scroll-cue" aria-hidden="true">
            <span className="tr-scroll-line" />
          </div>
        </section>

        {/* ══ CONTENT ═════════════════════════════════════ */}
        <section className="tr-body-section">
          <div className="tr-body-container">

            {/* ── TOC Sidebar ── */}
            <aside className="tr-toc">
              <p className="tr-toc-heading">Contents</p>
              <nav>
                {CLAUSES.map(({ id, num, title }) => (
                  <button
                    key={id}
                    className={`tr-toc-item${activeId === id ? " tr-toc-item--active" : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="tr-toc-num">{num}</span>
                    <span className="tr-toc-label">{title}</span>
                    <span className="tr-toc-arrow" aria-hidden="true">→</span>
                  </button>
                ))}
              </nav>

              <div className="tr-toc-footer">
                <span className="tr-toc-footer-label">Questions?</span>
                <a href="/contact" className="tr-toc-contact">Contact Us →</a>
              </div>
            </aside>

            {/* ── Clauses ── */}
            <div className="tr-clauses">
              {CLAUSES.map(({ id, num, title, tag, body }, i) => (
                <article
                  key={id}
                  data-clause-id={id}
                  ref={(el) => { sectionRefs.current[id] = el; }}
                  className={`tr-clause${revealed.has(id) ? " tr-clause--in" : ""}`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Left rule accent */}
                  <div className="tr-clause-rule" aria-hidden="true" />

                  <div className="tr-clause-inner">
                    <header className="tr-clause-head">
                      <div className="tr-clause-head-left">
                        <span className="tr-clause-tag">{tag}</span>
                        <h2 className="tr-clause-title">
                          <span className="tr-clause-num">{num}.</span> {title}
                        </h2>
                      </div>
                      <span className="tr-clause-num-bg" aria-hidden="true">{num}</span>
                    </header>

                    <p className="tr-clause-body">{body}</p>

                    <div className="tr-clause-footer">
                      <span className="tr-clause-footer-rule" aria-hidden="true" />
                      <span className="tr-clause-footer-label">Clause {num} of 08</span>
                    </div>
                  </div>
                </article>
              ))}

              {/* Closing note */}
              <div className="tr-closing">
                <div className="tr-closing-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="tr-closing-title">Governed by TNCNA</p>
                  <p className="tr-closing-body">
                    These terms are governed by the laws of Tamil Nadu, India. Any disputes
                    arising shall first be resolved through the association&apos;s internal
                    grievance mechanism before escalation to civil courts.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}