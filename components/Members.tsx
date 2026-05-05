// "use client";

// const MEMBERS = [
//   { name: "Arun Builders", role: "Contractor" },
//   { name: "Siva Constructions", role: "Builder" },
//   { name: "Kumar Associates", role: "Engineer" },
//   { name: "Vijay Traders", role: "Supplier" },
//   { name: "Ravi Developers", role: "Builder" },
// ];

// export default function Members() {
//   return (
//     <section id="members" className="members-section">

//       <div className="members-container">

//         {/* HEADER */}
//         <div className="members-header">
//           <span className="members-label">OUR NETWORK</span>
//           <h2 className="members-title">
//             Trusted by Professionals
//             <br />
//             <span>Across Tamil Nadu</span>
//           </h2>
//         </div>

//         {/* TRUST ROW */}
//         <div className="members-trust">

//           {/* AVATAR STACK */}
//           <div className="members-avatars">
//             {MEMBERS.map((m, i) => (
//               <div key={i} className="avatar">
//                 {m.name.charAt(0)}
//               </div>
//             ))}
//             <div className="avatar-more">+200</div>
//           </div>

//           {/* TEXT */}
//           <p className="members-trust-text">
//             200+ verified professionals actively collaborating across 45+ chapters
//           </p>

//         </div>

//         {/* STATS */}
//         <div className="members-stats">

//           <div className="stat-card">
//             <h3>200+</h3>
//             <p>Active Members</p>
//           </div>

//           <div className="stat-card">
//             <h3>45+</h3>
//             <p>Chapters</p>
//           </div>

//           <div className="stat-card">
//             <h3>₹30Cr+</h3>
//             <p>Business Generated</p>
//           </div>

//         </div>

//         {/* MEMBER TYPES */}
//         <div className="members-types">

//           <div className="type-card">
//             <h4>Builders</h4>
//             <span>80+</span>
//           </div>

//           <div className="type-card">
//             <h4>Contractors</h4>
//             <span>65+</span>
//           </div>

//           <div className="type-card">
//             <h4>Suppliers</h4>
//             <span>35+</span>
//           </div>

//           <div className="type-card">
//             <h4>Engineers</h4>
//             <span>20+</span>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";

import {
  MEMBER_STATS,
  MEMBER_TYPES,
  TESTIMONIALS,
  MEMBER_TRUST
} from "@/lib/siteData";

export default function Members() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  /* Auto rotate testimonials */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  /* Reveal animation */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".mem-reveal").forEach((node, i) => {
            node.style.transitionDelay = `${i * 80}ms`;
            node.classList.add("mem-reveal--in");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="members" className="members-section" ref={sectionRef}>
      <div className="members-container">

        {/* HEADER */}
        <div className="members-header mem-reveal">
          <div className="members-eyebrow">
            <span className="members-eyebrow-pip" />
            Our Network
          </div>

          <h2 className="members-title">
            Trusted by Professionals
            <br />
            <em>Across India</em>
          </h2>

          <p className="members-subtitle">
            A growing community of verified construction professionals who choose TNCNA for growth, trust, and opportunity.
          </p>
        </div>

        {/* STATS */}
        <div className="members-stats mem-reveal">
          {MEMBER_STATS.map((s) => (
            <div key={s.label} className="members-stat-card">
              <div className="members-stat-accent" />
              <div className="members-stat-value">{s.value}</div>
              <div className="members-stat-label">{s.label}</div>
              <div className="members-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* MEMBER TYPES */}
        <div className="members-types mem-reveal">
          {MEMBER_TYPES.map((t) => (
            <div key={t.label} className="members-type-card">
              <div className="members-type-emoji">{t.icon}</div>
              <div className="members-type-count">{t.count}</div>
              <div className="members-type-label">{t.label}</div>

              <div className="members-type-bar">
                <div
                  className="members-type-bar-fill"
                  style={{ width: `${t.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <div className="members-testimonials mem-reveal">

          <div className="members-testimonial-label">
            <span className="members-eyebrow-pip" />
            What Members Say
          </div>

          <div className="members-testimonial-track">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`members-testimonial-card ${
                  i === activeTestimonial
                    ? "members-testimonial-card--active"
                    : ""
                }`}
              >
                <div className="members-testimonial-quote">&ldquo;</div>

                <p className="members-testimonial-text">{t.text}</p>

                <div className="members-testimonial-author">
                  <div className="members-testimonial-avatar">
                    {t.initials}
                  </div>
                  <div>
                    <div className="members-testimonial-name">{t.name}</div>
                    <div className="members-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="members-testimonial-dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                className={`members-t-dot ${
                  i === activeTestimonial ? "members-t-dot--active" : ""
                }`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* TRUST ROW */}
        <div className="members-trust-row mem-reveal">

          <div className="members-avatars">
            {MEMBER_TRUST.avatars.map((l) => (
              <div key={l} className="members-avatar">{l}</div>
            ))}

            <div className="members-avatar members-avatar--more">
              {MEMBER_TRUST.total}
            </div>
          </div>

          <p className="members-trust-text">
            {MEMBER_TRUST.text}
          </p>

          <a href="#register" className="members-trust-cta">
            Join Them →
          </a>

        </div>

      </div>
    </section>
  );
}