// "use client";

// const BENEFITS = [
//   {
//     title: "Get More Projects",
//     desc: "Receive direct leads from verified network members.",
//   },
//   {
//     title: "Build Trusted Connections",
//     desc: "Connect with contractors, engineers, and suppliers.",
//   },
//   {
//     title: "Increase Visibility",
//     desc: "Showcase your work across Tamil Nadu network.",
//   },
//   {
//     title: "Grow Your Revenue",
//     desc: "Turn connections into consistent business flow.",
//   },
//   {
//     title: "Access Verified Network",
//     desc: "Work only with trusted professionals.",
//   },
//   {
//     title: "Expand Across Districts",
//     desc: "Reach new markets through chapter expansion.",
//   },
// ];

// export default function Benefits() {
//   return (
//     <section className="benefits-section" id="benefits">
//       <div className="benefits-container">

//         {/* HEADER */}
//         <div className="benefits-head">
//           <span className="benefits-label">WHY JOIN TNCNA</span>
//           <h2 className="benefits-title">
//             Real Benefits for
//             <br />
//             <span>Construction Professionals</span>
//           </h2>
//         </div>

//         {/* GRID */}
//         <div className="benefits-grid">
//           {BENEFITS.map((item, i) => (
//             <div key={i} className="benefit-card">
//               <div className="benefit-number">0{i + 1}</div>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }










"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   DATA — swap `image` strings for real URLs
───────────────────────────────────────────── */
const BENEFITS = [
  {
    title: "Get More Projects",
    category: "Lead Generation",
    desc: "Receive verified leads directly from active network members — no cold calls, no middlemen, no wasted time.",
    image: "/images/benefits/benefit-1.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Build Trusted Connections",
    category: "Networking",
    desc: "Forge lasting partnerships with contractors, engineers, and suppliers who are verified and committed to quality.",
    image: "/images/benefits/benefit-2.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Increase Your Visibility",
    category: "Brand Growth",
    desc: "Showcase your work, credentials, and expertise across India's most active professional network.",
    image: "/images/benefits/benefit-3.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Grow Your Revenue",
    category: "Business",
    desc: "Turn professional connections into consistent, predictable business flow — month after month.",
    image: "/images/benefits/benefit-4.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Access Verified Professionals",
    category: "Trust & Safety",
    desc: "Work exclusively with background-checked professionals who uphold TNCNA's strict standards of excellence.",
    image: "/images/benefits/benefit-5.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Expand Across Districts",
    category: "Reach",
    desc: "Reach new markets through our 4+ district circles — grow your business far beyond your home base.",
    image: "/images/benefits/benefit-6.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   HELPER — Cards per page based on breakpoint
───────────────────────────────────────────── */
function getCardsPerPage(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Benefits() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [animDir, setAnimDir] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const headRef = useRef<HTMLDivElement>(null);

  /* Responsive cardsPerPage */
  useEffect(() => {
    const update = () => {
      const cpp = getCardsPerPage();
      setCardsPerPage(cpp);
      setCurrentPage(0);
    };
    update();

    let timer: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(update, 120);
    };
    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(timer);
    };
  }, []);

  /* Intersection observer for header */
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("ben-head--in");
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const totalPages = Math.ceil(BENEFITS.length / cardsPerPage);

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      setAnimDir(dir);
      setAnimKey((k) => k + 1);
      setCurrentPage((p) => {
        if (dir === "next") return Math.min(p + 1, totalPages - 1);
        return Math.max(p - 1, 0);
      });
    },
    [totalPages]
  );

  const visibleBenefits = BENEFITS.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const canPrev = currentPage > 0;
  const canNext = currentPage < totalPages - 1;

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">

        {/* ── HEADER ── */}
        <div className="benefits-head ben-head" ref={headRef}>
          <div className="benefits-eyebrow">
            <span className="benefits-eyebrow-pip" />
            <span>Why Join TNCNA</span>
          </div>
          <h2 className="benefits-title">
            Real Benefits for
            <br />
            <em>Construction Professionals</em>
          </h2>
          <p className="benefits-subtitle">
            Membership isn&apos;t a fee — it&apos;s an investment that pays back
            in connections, contracts, and credibility.
          </p>
        </div>

        {/* ── PAGINATED GRID ── */}
        <div
          className="benefits-carousel-grid"
          data-cards={cardsPerPage}
          key={`${animKey}-${animDir}`}
          data-dir={animDir}
        >
          {visibleBenefits.map((item, i) => (
            <article className="ben-card" key={`${currentPage}-${i}`}>

              {/* IMAGE / VISUAL AREA */}
              <div className="ben-card-media">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="ben-card-img"
                    loading="lazy"
                  />
                ) : (
                  /* Gradient placeholder — remove once real images are added */
                  <div className="ben-card-placeholder" aria-hidden="true">
                    <div className="ben-placeholder-icon">{item.icon}</div>
                  </div>
                )}
                <span className="ben-card-category">{item.category}</span>
              </div>

              {/* TEXT AREA */}
              <div className="ben-card-body">
                <div className="ben-card-icon-row">
                  <span className="ben-card-icon-wrap">{item.icon}</span>
                  <span className="ben-card-index">
                    {String(currentPage * cardsPerPage + i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="ben-card-title">{item.title}</h3>
                <p className="ben-card-desc">{item.desc}</p>
              </div>

            </article>
          ))}
        </div>

        {/* ── NAV ROW (arrows + dots) ── */}
        <div className="benefits-nav">
          <div className="benefits-nav-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`ben-dot${i === currentPage ? " ben-dot--active" : ""}`}
                onClick={() => {
                  setAnimDir(i > currentPage ? "next" : "prev");
                  setAnimKey((k) => k + 1);
                  setCurrentPage(i);
                }}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <div className="benefits-nav-arrows">
            <button
              className={`ben-arrow-btn${!canPrev ? " ben-arrow-btn--disabled" : ""}`}
              onClick={() => canPrev && navigate("prev")}
              disabled={!canPrev}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="ben-nav-count">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              className={`ben-arrow-btn${!canNext ? " ben-arrow-btn--disabled" : ""}`}
              onClick={() => canNext && navigate("next")}
              disabled={!canNext}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div className="benefits-bottom">
          <p className="benefits-bottom-text">
            Ready to grow with India&apos;s most trusted construction network?
          </p>
          <a href="#register" className="benefits-bottom-cta">
            Become a Member
            <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}