// "use client";

// export default function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">

//         {/* LEFT — IMAGE */}
//         <div className="about-image-side">
//           <div className="about-image-wrap">
//             <img
//               src="/images/about/constructions.png"
//               alt="Construction professionals working together"
//               className="about-image"
//             />
//           </div>

//           <div className="about-overlay-card">
//             <div className="about-stat">
//               <h3>1000+</h3>
//               <p>Professionals</p>
//             </div>
//             <div className="about-stat">
//               <h3>45+</h3>
//               <p>Chapters</p>
//             </div>
//             <div className="about-stat">
//               <h3>15+</h3>
//               <p>Trades</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT — CONTENT */}
//         <div className="about-content">
//           <span className="about-eyebrow">
//             <span className="about-eyebrow-dot" />
//             About TNCNA
//           </span>

//           <h2 className="about-title">
//             One Network.
//             <br />
//             <span>Every Builder.</span>
//           </h2>

//           <p className="about-text">
//             TNCNA unites everyone in India's construction industry—from plumbers and electricians to civil engineers and developers. We connect builders with reliable talent and give tradespeople steady, respected work.
//           </p>

//           <div className="about-divider" />

//           <p className="about-sub">
//             Built on trust, fair pay, and shared growth across all 12 districts.
//           </p>

//           <div className="about-features">
//             {[
//               { 
//                 title: "Steady Work", 
//                 desc: "Connecting workers directly to active projects.", 
//                 icon: "briefcase" 
//               },
//               { 
//                 title: "Verified Talent", 
//                 desc: "Trusted skilled workers for builders.", 
//                 icon: "users" 
//               },
//               { 
//                 title: "Direct Supply", 
//                 desc: "Quality materials without middleman fees.", 
//                 icon: "shield" 
//               },
//               { 
//                 title: "Unified Voice", 
//                 desc: "Fighting for better industry policies.", 
//                 icon: "landmark" 
//               },
//             ].map((f) => (
//               <div key={f.title} className="about-feat">
//                 <div className="about-feat-icon">
//                   <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
//                 </div>
//                 <div>
//                   <div className="about-feat-title">{f.title}</div>
//                   <div className="about-feat-desc">{f.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";
import { NETWORK_STATS } from "@/lib/siteData";
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT — IMAGE */}
        <div className="about-image-side">
          <div className="about-image-wrap">
            <div className="about-image-shimmer" />
            <Image
              src="/images/about/constructions.png"
              alt="Construction professionals"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
              className="about-image"
            />
            <div className="about-image-tint" />
          </div>

          {/* FLOATING STATS CARD */}
          <div className="about-overlay-card">
            {NETWORK_STATS.map((stat, i) => (
              <div key={stat.label} className="about-stat-item">
                
                <div className="about-stat">
                  <div className="about-stat-accent" />
                  <h3>{stat.num}</h3>
                  <p>{stat.label}</p>
                </div>

                {i !== NETWORK_STATS.length - 1 && (
                  <div className="about-stat-divider" />
                )}

              </div>
            ))}
          </div>

          {/* DECORATIVE ELEMENT */}
          <div className="about-deco-ring" aria-hidden="true" />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="about-content">
          <div className="about-eyebrow">
            <span className="about-eyebrow-pip" />
            <span>About TNCNA</span>
            <span className="about-eyebrow-line" />
          </div>

          <h2 className="about-title">
            One Network.
            <br />
            <em>Every Builder.</em>
          </h2>

          <p className="about-text">
            TNCNA unites everyone in India&apos;s construction industry — from plumbers and electricians to civil engineers and developers. We connect builders with reliable talent and give tradespeople steady, respected work.
          </p>

          <div className="about-rule">
            <span className="about-rule-line" />
            <span className="about-rule-diamond" />
            <span className="about-rule-line about-rule-line--short" />
          </div>

          <p className="about-sub">
            Built on trust, fair pay, and shared growth across all 05 districts of India. Join a community where every trade is valued.
          </p>

          <div className="about-features">
            {[
              {
                title: "Steady Work",
                desc: "Connecting workers directly to active projects with consistent pipeline.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                    <line x1="10" y1="14" x2="14" y2="14" />
                  </svg>
                ),
              },
              {
                title: "Verified Talent",
                desc: "Trusted, background-checked professionals for every project need.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: "Direct Supply",
                desc: "Quality materials at fair prices — no middleman, no markups.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Unified Voice",
                desc: "Advocating for better industry policies and workers&apos; rights.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="22" x2="21" y2="22" />
                    <line x1="6" y1="18" x2="6" y2="11" />
                    <line x1="10" y1="18" x2="10" y2="11" />
                    <line x1="14" y1="18" x2="14" y2="11" />
                    <line x1="18" y1="18" x2="18" y2="11" />
                    <polygon points="12 2 20 7 4 7" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="about-feat">
                <div className="about-feat-icon">
                  {f.icon}
                </div>
                <div className="about-feat-body">
                  <div className="about-feat-title">{f.title}</div>
                  <div className="about-feat-desc" dangerouslySetInnerHTML={{ __html: f.desc }} />
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            <a href="#register" className="about-cta-btn">
              Join the Network
              <svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </a>
            <a href="#members" className="about-cta-ghost">See Members</a>
          </div>
        </div>

      </div>
    </section>
  );
}