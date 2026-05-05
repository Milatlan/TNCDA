// "use client";

// const DISTRICTS = [
//   "Chennai", "Coimbatore", "Madurai", "Salem",
//   "Trichy", "Tirunelveli", "Vellore"
// ];

// export default function Footer() {
//   return (
//     <footer className="footer">

//       <div className="footer-container">

//         {/* TOP */}
//         <div className="footer-top">

//           {/* BRAND */}
//           <div className="footer-brand">
//             <h3>TNCNA</h3>
//             <p>Tamil Nadu Construction Development Association</p>
//             <span>
//               Connecting Tamil Nadu’s construction professionals into one trusted network.
//             </span>
//           </div>

//           {/* LINKS */}
//           <div className="footer-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#about">About</a></li>
//               <li><a href="#benefits">Policies</a></li>
//               <li><a href="#members">Chapters</a></li>
//               <li><a href="#founder">Leaders</a></li>
//               <li><a href="#gallery">Events</a></li>
//               <li><a href="#faq">FAQ</a></li>
//               <li><a href="#register">Become a Member</a></li>
//               <li><a href="#">Terms & Conditions</a></li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div className="footer-contact">
//             <h4>Contact</h4>

//             <p>Email: <a href="mailto:hello@TNCNA.in">hello@TNCNA.in</a></p>
//             <p>Main Office: Chennai, Tamil Nadu</p>

//             <div className="footer-phones">
//               {DISTRICTS.map((d, i) => (
//                 <p key={i}>
//                   {d}: <a href="tel:+919000000000">+91 90000 00000</a>
//                 </p>
//               ))}
//             </div>

//             <a
//               href="https://wa.me/919000000000"
//               target="_blank"
//               className="footer-whatsapp"
//             >
//               WhatsApp →
//             </a>
//           </div>

//         </div>

//         {/* DISTRICTS */}
//         <div className="footer-districts">
//           {DISTRICTS.map((d, i) => (
//             <span key={i}>{d}</span>
//           ))}
//         </div>

//         {/* DIVIDER */}
//         <div className="footer-divider" />

//         {/* BOTTOM */}
//         <div className="footer-bottom">

//           <p>© 2025 TNCNA. All rights reserved.</p>

//           {/* ✅ SOCIALS RESTORED */}
//           <div className="footer-socials">
//             <a href="#" aria-label="Facebook">Facebook</a>
//             <a href="#" aria-label="Instagram">Instagram</a>
//             <a href="#" aria-label="YouTube">YouTube</a>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }



"use client";

/* ─────────────────────────────────────────────
   FOOTER — TNCNA Premium Association Footer
   Dark teal theme, 3-column desktop layout,
   single-column mobile stack
───────────────────────────────────────────── */

// import Link from "next/link";

const NAV_LINKS = [
  { label: "About TNCNA",       href: "/#about" },
  { label: "Policies",          href: "/policies" },
  { label: "District Circles", href: "/#members" },
  { label: "Leadership",        href: "/#founder" },
  { label: "Events & Gallery",  href: "/#gallery" },
  { label: "FAQ",               href: "/#faq" },
  { label: "Become a Member",   href: "/#register" },
  { label: "Terms & Conditions",href: "/terms" },
];

import { ALL_DISTRICTS } from "@/lib/siteData";

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tncna2026/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  // {
  //   label: "YouTube",
  //   href: "#",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.96-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
  //       <polygon fill="#061e1d" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  //     </svg>
  //   ),
  // },
  {
    label: "WhatsApp",
    href: "https://wa.me/7825901439",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.49-4.5-1.33l-.32-.19-3.02.79.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">

      {/* ── TOP ACCENT LINE ── */}
      <div className="footer-top-rule" aria-hidden="true" />

      <div className="footer-container">

        {/* ── MAIN GRID: Brand | Links | Contact ── */}
        <div className="footer-grid">

          {/* BRAND COL */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark">TNCNA</span>
              <span className="footer-logo-sub">
                Tamil Nadu Construction<br />Network Association
              </span>
            </div>
            <p className="footer-brand-desc">
              Connecting India&apos;s construction professionals into
              one trusted, verified network — built on integrity, growth,
              and community.
            </p>
            <div className="footer-socials" role="list" aria-label="Social media links">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="footer-social-btn"
                  aria-label={s.label}
                  role="listitem"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS COL */}
          <nav className="footer-links-col" aria-label="Footer navigation">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links-list" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label} role="listitem">
                  <a href={link.href} className="footer-link">
                    <span className="footer-link-arrow" aria-hidden="true">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT COL */}
          <div className="footer-contact-col">
            <h4 className="footer-col-heading">Get In Touch</h4>

            <div className="footer-contact-items">

              {/* Email */}
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2.5 6.5l7.5 5 7.5-5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="1" y="4" width="18" height="12" rx="2" />
                  </svg>
                </span>
                <div>
                  <p className="footer-contact-label">Email</p>
                  <a href="mailto:hello@TNCNA.in" className="footer-contact-value">
                    hello@TNCNA.in
                  </a>
                </div>
              </div>

              {/* HQ */}
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" strokeLinejoin="round" />
                    <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="footer-contact-label">46/89, coral merchant street, mannady, george town</p>
                  <p className="footer-contact-value">Chennai - 600001, Tamil Nadu</p>
                </div>
              </div>

            </div>

            {/* District Phone Grid */}
            {/* <div className="footer-district-phones">
              <p className="footer-phones-heading">District Contacts</p>
              <div className="footer-phones-grid">
                {DISTRICT_CONTACTS.map((d) => (
                  <div key={d.city} className="footer-phone-row">
                    <span className="footer-phone-district">{d.city}</span>
                    <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="footer-phone-num">
                      {d.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div> */}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/7825901439"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.49-4.5-1.33l-.32-.19-3.02.79.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* ── DISTRICTS TAG STRIP ── */}
        <div className="footer-districts-strip" aria-label="Districts served">
          <span className="footer-districts-label">Districts We Serve</span>
          <div className="footer-districts-tags">
            {ALL_DISTRICTS.map((d) => (
              <span key={d} className="footer-district-tag">{d}</span>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="footer-divider" role="separator" aria-hidden="true" />

        {/* ── BOTTOM ROW ── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} TNCNA. All rights reserved. Registered Association of Tamil Nadu.
          </p>
          <p className="footer-made-with">
            Building India, one connection at a time.
          </p>
        </div>

      </div>
    </footer>
  );
}