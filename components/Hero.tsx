"use client";

import { useEffect, useState } from "react";

/* ================================================================
   SLIDE DATA — 2 slides only
   Title is always fixed. Only label, description & image change.
================================================================ */

const SLIDES = [
  {
    image: "/images/hero/slide-1.png",
    label: "Our Community",
    description:
      "Uniting builders, engineers, and creators into one trusted ecosystem. Driving growth, credibility, and opportunity across India.",
  },
  {
    image: "/images/hero/slide-2.png",
    label: "Infrastructure",
    description:
      "From highways to high-rises — our members lead every major project across the state, setting new standards in construction excellence.",
  },
  {
    image: "/images/hero/slide-3.png",
    label: "Trusted Network",
    description:
      "A unified construction network association empowering contractors, architects, and suppliers through verified collaborations, industry standards, and scalable business opportunities.",
  },
] as const;
/* ================================================================
   COMPONENT
================================================================ */

export default function Hero() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  /* Auto-advance every 5 s, toggles between 0 ↔ 1 */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => {
        if (prev === SLIDES.length - 1) {
          return prev; // ✅ stay on last slide
        }

        setTransitioning(true);
        setTimeout(() => setTransitioning(false), 420);

        return prev + 1;
      });
    }, 10000); // keep your timing

    return () => clearInterval(timer);
  }, []);

  function goTo(index: number) {
    if (transitioning) return;

    setTransitioning(true);

    setTimeout(() => {
      setActive(index);
      setTransitioning(false);
    }, 420);
  }

  const slide = SLIDES[active];

  return (
    <section id="home" className="hero">

      {/* ── IMAGE LAYERS ────────────────────────────────────────── */}
      <div className="hero-slides" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === active ? "hero-slide--active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
      </div>

      {/* ── GLASS SWEEP on transition ───────────────────────────── */}
      <div
        className={`hero-glass-sweep ${transitioning ? "hero-glass-sweep--run" : ""}`}
        aria-hidden="true"
      />

      {/* ── COLOUR WASH ─────────────────────────────────────────── */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* ── GRID TEXTURE ────────────────────────────────────────── */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── WATERMARK ───────────────────────────────────────────── */}
      <div className="hero-watermark" aria-hidden="true">
        <span className="watermark-text">TNCNA</span>
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <div className="hero-content">

        {/* Badge — changes with each slide */}
        <span className="hero-badge" key={`badge-${active}`}>
          <span className="badge-dot" />
          {slide.label}
        </span>

        {/* FIXED TITLE — always the same, never animates on slide change */}
        <h1 className="hero-main">
          Tamil Nadu
          <br />
          <em className="hero-main-accent">Construction</em>
          <br />
          Network Association
        </h1>

        {/* Description — re-animates on each slide change */}
        <p className="hero-motto" key={`motto-${active}`}>
          {slide.description}
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <button
            onClick={() =>
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Become a Member <span className="btn-arrow">→</span>
          </button>
          <button
            onClick={() =>
              document.getElementById("members")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-secondary"
          >
            Explore Network
          </button>
        </div>

        {/* Slide dots — only 2 */}
        <div className="hero-dots" role="tablist" aria-label="Slide navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={`hero-dot ${i === active ? "hero-dot--active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        

      </div>
      <div className="hero-end" />
    </section>
  );
}