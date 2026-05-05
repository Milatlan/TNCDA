// "use client";

// const GALLERY_ITEMS = [
//   {
//     label: "Annual Summit 2024",
//     image: "/images/gallery/1.jpg",
//     tall: true,
//   },
//   {
//     label: "Chennai Chapter Meet",
//     image: "/images/gallery/2.jpg",
//     tall: false,
//   },
//   {
//     label: "Members Award Night",
//     image: "/images/gallery/3.jpg",
//     tall: false,
//   },
//   {
//     label: "Policy Workshop",
//     image: "/images/gallery/4.jpg",
//     tall: true,
//   },
//   {
//     label: "Networking Gala",
//     image: "/images/gallery/5.jpg",
//     tall: false,
//   },
//   {
//     label: "Coimbatore Launch",
//     image: "/images/gallery/6.jpg",
//     tall: false,
//   },
// ];

// export default function Gallery() {
//   return (
//     <section id="gallery" className="gallery-section">

//       <div className="gallery-container">

//         {/* HEADER */}
//         <div className="gallery-header">
//           <div>
//             <span className="gallery-label">GALLERY</span>
//             <h2 className="gallery-title">
//               Real Moments
//               <br />
//               <span>Real Connections</span>
//             </h2>
//           </div>

//           <p className="gallery-sub">
//             Events, meetings, and milestones that shape the TNCNA network.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="gallery-grid">
//           {GALLERY_ITEMS.map((item, i) => (
//             <div
//               key={i}
//               className={`gallery-card ${item.tall ? "tall" : ""}`}
//             >
//               <img src={item.image} alt={item.label} />

//               {/* overlay */}
//               <div className="gallery-overlay" />

//               {/* text */}
//               <div className="gallery-caption">
//                 <p>{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




















"use client";
import Image from "next/image";
import { useState } from "react";

const GALLERY_ITEMS = [
  { label: "Annual Summit", category: "Event", image: "/images/gallery/1.jpg", tall: true },
  { label: "Chennai Circle Meet", category: "Circle", image: "/images/gallery/2.jpg", tall: false },
  { label: "Members Award Night", category: "Ceremony", image: "/images/gallery/3.jpg", tall: false },
  { label: "Policy Workshop", category: "Workshop", image: "/images/gallery/4.jpg", tall: true },
  { label: "Networking Gala", category: "Event", image: "/images/gallery/5.jpg", tall: false },
  { label: "Circle Meet", category: "Circle", image: "/images/gallery/6.jpg", tall: false },
];

const CATEGORIES = ["All", "Event", "Circle", "Ceremony", "Workshop"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">

        {/* HEADER */}
        <div className="gallery-head">
          <div className="gallery-head-left">
            <div className="gallery-eyebrow">
              <span className="gallery-eyebrow-pip" />
              Gallery
            </div>
            <h2 className="gallery-title">
              Real Moments.
              <br />
              <em>Real Connections.</em>
            </h2>
          </div>
          <p className="gallery-sub">
            Events, circle meets, and milestones that shape the TNCNA community across Tamil Nadu.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="gallery-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${active === cat ? "gallery-filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div
              key={item.label}
              className={`gallery-card ${item.tall ? "gallery-card--tall" : ""}`}
            >
              {/* Placeholder gradient bg when no image */}
              <div className="gallery-card-bg" />
              <Image
                src={item.image.replace(".jpg", ".webp")}
                alt={item.label}
                fill
                className="gallery-card-img"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={70}
              />
              <div className="gallery-overlay" />
              <div className="gallery-caption">
                <span className="gallery-caption-cat">{item.category}</span>
                <p className="gallery-caption-label">{item.label}</p>
              </div>
              <div className="gallery-card-hover-ring" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        {/* <div className="gallery-view-more">
          <button className="gallery-view-btn">
            View All Photos
            <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </button>
        </div> */}

      </div>
    </section>
  );
}