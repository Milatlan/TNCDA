// "use client";
// import { useState } from "react";

// const FAQS = [
//   {
//     q: "Who can join TNCNA?",
//     a: "Builders, contractors, engineers, architects, suppliers, and real estate professionals across India.",
//   },
//   {
//     q: "Is there a membership fee?",
//     a: "Fees vary by chapter. Application is free and details are shared during onboarding.",
//   },
//   {
//     q: "How does the referral system work?",
//     a: "Members connect within district chapters and exchange verified business opportunities.",
//   },
//   {
//     q: "What is a TNCNA Chapter?",
//     a: "District-level units with local networking, meetings, and referral systems.",
//   },
//   {
//     q: "Can beginners join?",
//     a: "Yes. We provide mentorship and connections to help you grow.",
//   },
//   {
//     q: "Do you provide legal support?",
//     a: "We offer workshops and advisory sessions, not direct legal representation.",
//   },
// ];

// export default function FAQ() {
//   const [open, setOpen] = useState<number | null>(0);

//   return (
//     <section id="faq" className="faq-section">

//       <div className="faq-container">

//         {/* LEFT */}
//         <div className="faq-left">
//           <span className="faq-label">FAQ</span>

//           <h2 className="faq-title">
//             Questions
//             <br />
//             <span>You Might Have</span>
//           </h2>

//           <p className="faq-desc">
//             Quick answers before you join the TNCNA network.
//           </p>

//           <a href="mailto:hello@TNCNA.in" className="faq-cta">
//             Contact Us →
//           </a>
//         </div>

//         {/* RIGHT */}
//         <div className="faq-right">
//           {FAQS.map((faq, i) => (
//             <div
//               key={i}
//               className={`faq-item ${open === i ? "active" : ""}`}
//             >
//               <button
//                 onClick={() => setOpen(open === i ? null : i)}
//                 className="faq-question"
//               >
//                 {faq.q}
//                 <span className="faq-icon" />
//               </button>

//               <div className="faq-answer">
//                 <p>{faq.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";
import { useState } from "react";

import { FAQS } from "@/lib/siteData";
const FAQS_LIST = FAQS;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">
          <div className="faq-eyebrow">
            <span className="faq-eyebrow-pip" />
            FAQ
          </div>

          <h2 className="faq-title">
            Questions
            <br />
            <em>You Might Have</em>
          </h2>

          <p className="faq-desc">
            Everything you need to know before joining India&apos;s most trusted construction network.
          </p>

          <div className="faq-contact-card">
            <div className="faq-contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <div className="faq-contact-label">Still have questions?</div>
              <a href="mailto:hello@TNCNA.in" className="faq-contact-link">hello@TNCNA.in</a>
            </div>
          </div>

          <a href="https://wa.me/7825901439" className="faq-whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          {FAQS_LIST.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "faq-item--open" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="faq-question"
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-icon-wrap">
                  <svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d={open === i ? "M5 12l5-5 5 5" : "M5 8l5 5 5-5"} />
                  </svg>
                </span>
              </button>
              <div className="faq-answer" style={{ maxHeight: open === i ? "300px" : "0" }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}