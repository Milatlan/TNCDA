"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { EVENTS } from "@/lib/siteData";
const UPCOMING_EVENTS = EVENTS;


const totalEvents = EVENTS.length;

const totalDistricts = new Set(
  EVENTS.map((e) => e.district)
).size;

// Extract numeric seats safely
const totalAttendees = EVENTS.reduce((acc, ev) => {
  const num = parseInt(ev.seats.replace(/\D/g, "")) || 0;
  return acc + num;
}, 0);

const CATEGORY_COLORS: Record<string, string> = {
  Networking: "ev-cat--teal",
  Workshop:   "ev-cat--amber",
  Summit:     "ev-cat--navy",
  Training:   "ev-cat--green",
  Forum:      "ev-cat--rose",
};

export default function EventsPage() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("data-ev-id") ?? "";
          if (e.isIntersecting) {
            setRevealed((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.08 }
    );

    UPCOMING_EVENTS.forEach(({ id }) => {
      const el = cardRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="ev-root">

        {/* ══ HERO ══════════════════════════════════════ */}
        <section className="ev-hero">
          <div className="ev-hero-grid"   aria-hidden="true" />
          <div className="ev-hero-glow"   aria-hidden="true" />
          <span className="ev-hero-wm"    aria-hidden="true">Events</span>

          <div className="ev-hero-inner">
            <div className="ev-hero-eyebrow">
              <span className="ev-eyebrow-pip" />
              Upcoming Events
            </div>

            <h1 className="ev-hero-title">
              Where Builders <em>Meet</em>
            </h1>

            <p className="ev-hero-sub">
              Summits, workshops, and chapter meets that connect India&apos;s
              construction professionals — shaping the future of the industry together.
            </p>

            <div className="ev-hero-chips">
              <span className="ev-chip">{totalEvents}+ Events Planned</span>
              <span className="ev-chip">{totalDistricts}+ Districts</span>
              <span className="ev-chip">{totalAttendees}+ Expected Attendees</span>
            </div>
          </div>

          <div className="ev-scroll-cue" aria-hidden="true">
            <span className="ev-scroll-line" />
          </div>
        </section>

        {/* ══ SECTION LABEL ═══════════════════════════ */}
        <div className="ev-section-label-row">
          <div className="ev-section-label-inner">
            <span className="ev-section-label">
              <span className="ev-label-pip" />
              2025 Programme
            </span>
            <span className="ev-section-count">{UPCOMING_EVENTS.length} Events</span>
          </div>
        </div>

        {/* ══ EVENTS LIST ══════════════════════════════ */}
        <section className="ev-list-section">
          <div className="ev-list-container">
            {UPCOMING_EVENTS.map(({ id, title, subtitle, location, district, month, day, category, seats, type }, i) => (
              <article
                key={id}
                data-ev-id={id}
                ref={(el) => { cardRefs.current[id] = el; }}
                className={`ev-card${revealed.has(id) ? " ev-card--in" : ""}`}
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                {/* Date block */}
                <div className="ev-date-block">
                  <span className="ev-date-month">{month}</span>
                  <span className="ev-date-day">{day}</span>
                  <span className="ev-date-year">2025</span>
                </div>

                {/* Divider */}
                <div className="ev-card-rule" aria-hidden="true" />

                {/* Body */}
                <div className="ev-card-body">
                  <div className="ev-card-top-row">
                    <span className={`ev-cat ${CATEGORY_COLORS[category] ?? "ev-cat--teal"}`}>
                      {category}
                    </span>
                    <span className="ev-type-badge">{type}</span>
                  </div>

                  <h2 className="ev-card-title">{title}</h2>
                  <p className="ev-card-sub">{subtitle}</p>

                  <div className="ev-card-meta-row">
                    <span className="ev-meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {district}
                    </span>
                    <span className="ev-meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                      {seats}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="ev-card-cta">
                  <button className="ev-register-btn">
                    Register
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                  <span className="ev-location-pin">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                    {location}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* ── Bottom note ── */}
          <div className="ev-bottom-note">
            <div className="ev-bottom-note-inner">
              <div className="ev-bottom-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <p className="ev-bottom-title">More events being planned</p>
                <p className="ev-bottom-body">
                  Chapter meetings, district drives, and industry sessions are being organised across all 7 circles.
                  Contact your chapter head or reach us directly to stay informed.
                </p>
              </div>
              <a href="/contact" className="ev-bottom-cta">
                Get Notified
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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