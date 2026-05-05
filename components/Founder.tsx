// "use client";

// import { useEffect, useRef } from "react";

// export default function Founder() {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.querySelectorAll<HTMLElement>(".fd-reveal").forEach((node, i) => {
//             node.style.transitionDelay = `${i * 90}ms`;
//             node.classList.add("fd-reveal--in");
//           });
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="founder" className="founder-section" ref={ref}>
//       <div className="founder-inner">

//         {/* ── PORTRAIT ───────────────────────────── */}
//         <div className="founder-img-col fd-reveal">
//           <div className="founder-portrait">

//             {/* Glow */}
//             <div className="founder-portrait-glow" aria-hidden="true" />

//             {/* Placeholder — remove when real photo added */}
//             <div className="founder-portrait-center" aria-hidden="true">
//               <div className="founder-portrait-ring">
//                 <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
//                   <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
//                 </svg>
//               </div>
//               <span className="founder-portrait-soon">Photo coming soon</span>
//             </div>

//             {/* Gradient tint — sits over photo, under name plate */}
//             <div className="founder-portrait-tint" aria-hidden="true" />

//             {/* ✦ NAME PLATE — inside the image ✦ */}
//             <div className="founder-name-plate">
//               <p className="founder-name">Mr. [Founder Name]</p>
//               <p className="founder-role">Founder &amp; President, TNCNA</p>
//               <span className="founder-plate-rule" />
//             </div>

//           </div>
//         </div>

//         {/* ── CONTENT ────────────────────────────── */}
//         <div className="founder-content">

//           <span className="founder-eyebrow fd-reveal">
//             <span className="founder-eyebrow-dash" />
//             Founder
//           </span>

//           <blockquote className="founder-quote fd-reveal">
//             <span className="founder-qm">&ldquo;</span>
//             India's builders deserved more than word of mouth.
//             They deserved a system.
//           </blockquote>

//           <p className="founder-body fd-reveal">
//             With over two decades in India's construction sector, our
//             founder saw a clear gap — skilled contractors and engineers who
//             lacked access to the right networks, the right clients, and the
//             right policies. TNCNA was created to change that.
//           </p>

//           <p className="founder-body fd-reveal">
//             Today, the association is a trusted platform for 200+ verified
//             professionals across 45+ chapters — built on the principle that
//             credibility and community go hand in hand.
//           </p>

//           <div className="founder-sig fd-reveal">
//             <span className="founder-sig-line" aria-hidden="true" />
//             <span className="founder-sig-text">
//               Building India's construction future, since 2019
//             </span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }













"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";

export default function Founder() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".fd-reveal").forEach((node, i) => {
            node.style.transitionDelay = `${i * 100}ms`;
            node.classList.add("fd-reveal--in");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="founder" className="founder-section" ref={ref}>
      {/* BG ACCENT */}
      <div className="founder-bg-accent" aria-hidden="true" />

      <div className="founder-inner">

        {/* ── PORTRAIT ───────────────────────────── */}
        <div className="founder-img-col fd-reveal">
          <div className="founder-portrait">

            {/* Ambient glow */}
            <div className="founder-portrait-glow" aria-hidden="true" />

            {/* Placeholder — swap for <Image> when photo is ready */}
            <div className="founder-portrait-center" aria-hidden="true">
              <Image
                src="/images/founders/founder.png"
                alt="Founder"
                fill
                className="founder-image"
                priority
              />
              {/* <span className="founder-portrait-soon">Photo coming soon</span> */}
            </div>

            <div className="founder-portrait-tint" aria-hidden="true" />

            {/* NAME PLATE */}
            <div className="founder-name-plate">
              <div className="founder-name-plate-inner">
                <span className="founder-plate-rule" aria-hidden="true" />
                <div>
                  <p className="founder-name">Mr.DSB Rangesh</p>
                  <p className="founder-role">Founder, TNCNA</p>
                </div>
              </div>
            </div>

          </div>

          {/* CREDENTIAL BADGES */}
          <div className="founder-badges fd-reveal">
            <div className="founder-badge">
              <span className="founder-badge-num">10+</span>
              <span className="founder-badge-lbl">Years in Construction</span>
            </div>
            <div className="founder-badge">
              <span className="founder-badge-num">2026</span>
              <span className="founder-badge-lbl">Founded TNCNA</span>
            </div>
          </div>
        </div>

        {/* ── CONTENT ────────────────────────────── */}
        <div className="founder-content">

          <div className="founder-eyebrow fd-reveal">
            <span className="founder-eyebrow-dash" />
            <span>Founder&apos;s Vision</span>
          </div>

          <blockquote className="founder-quote fd-reveal">
            <span className="founder-qm">&ldquo;</span>
            India&apos;s builders deserved more than word of mouth.
            They deserved a system.
          </blockquote>

          <div className="founder-body-group fd-reveal">
            <p className="founder-body">
              With over two decades in India&apos;s construction sector, our founder witnessed a persistent gap — skilled contractors and engineers who lacked access to the right networks, the right clients, and the right policies. TNCNA was created to bridge that divide, permanently.
            </p>

            <p className="founder-body">
              Today, the association is a trusted platform for 100+ verified professionals across 4+ Circles — built on the founding principle that credibility and community must go hand in hand to create lasting impact.
            </p>
          </div>

          {/* PILLARS */}
          <div className="founder-pillars fd-reveal">
            {[
              { label: "Vision", text: "A unified construction ecosystem across India" },
              { label: "Mission", text: "Fair access, fair pay, and fair recognition for all" },
              { label: "Value", text: "Every builder — big or small — deserves respect" },
            ].map((p) => (
              <div key={p.label} className="founder-pillar">
                <span className="founder-pillar-label">{p.label}</span>
                <span className="founder-pillar-text">{p.text}</span>
              </div>
            ))}
          </div>

          <div className="founder-sig fd-reveal">
            <div className="founder-sig-mark">
              <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15 C8 5, 14 18, 20 10 S32 3, 38 14" stroke="#38E0D2" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
              </svg>
            </div>
            <span className="founder-sig-text">
              Building India&apos;s construction future, since 2026
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}