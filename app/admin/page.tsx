// // app/admin/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import {
//   SITE_STATS,
//   EVENTS,
//   CHAPTERS,
//   FAQS,
//   DISTRICT_CONTACTS,
// } from "@/lib/siteData";

// // ── Types ────────────────────────────────────────────────
// type Stats    = typeof SITE_STATS;
// type Event    = (typeof EVENTS)[0];
// type Chapter  = (typeof CHAPTERS)[0];
// type Faq      = (typeof FAQS)[0];
// type Contact  = (typeof DISTRICT_CONTACTS)[0];

// const STORAGE_KEY = "tncna_admin_data";

// export default function AdminPage() {
//   const [tab,      setTab]      = useState<"stats"|"events"|"chapters"|"faqs"|"contacts">("stats");
//   const [stats,    setStats]    = useState<Stats>(SITE_STATS);
//   const [events,   setEvents]   = useState<Event[]>(EVENTS);
//   const [chapters, setChapters] = useState<Chapter[]>(CHAPTERS);
//   const [faqs,     setFaqs]     = useState<Faq[]>(FAQS);
//   const [contacts, setContacts] = useState<Contact[]>(DISTRICT_CONTACTS);
//   const [saved,    setSaved]    = useState(false);
//   const [modal,    setModal]    = useState<{ type: string; index: number } | null>(null);

//   // ── Load from localStorage ──
//   useEffect(() => {
//     const raw = localStorage.getItem(STORAGE_KEY);
//     if (!raw) return;
//     try {
//       const d = JSON.parse(raw);
//       if (d.stats)    setStats(d.stats);
//       if (d.events)   setEvents(d.events);
//       if (d.chapters) setChapters(d.chapters);
//       if (d.faqs)     setFaqs(d.faqs);
//       if (d.contacts) setContacts(d.contacts);
//     } catch {}
//   }, []);

//   // ── Save to localStorage ──
//   function save(patch?: Partial<{
//     stats: Stats; events: Event[]; chapters: Chapter[]; faqs: Faq[]; contacts: Contact[];
//   }>) {
//     const data = {
//       stats:    patch?.stats    ?? stats,
//       events:   patch?.events   ?? events,
//       chapters: patch?.chapters ?? chapters,
//       faqs:     patch?.faqs     ?? faqs,
//       contacts: patch?.contacts ?? contacts,
//     };
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2000);
//   }

//   // ── Helpers ──
//   function updateStats(key: keyof Stats, value: string) {
//     const next = { ...stats, [key]: value };
//     setStats(next);
//     save({ stats: next });
//   }

//   function deleteItem<T>(arr: T[], setArr: (v: T[]) => void, i: number, key: string) {
//     if (!confirm("Remove this item?")) return;
//     const next = arr.filter((_, idx) => idx !== i);
//     setArr(next);
//     save({ [key]: next } as any);
//   }

//   const TABS = ["stats","events","chapters","faqs","contacts"] as const;

//   return (
//     <div style={{ minHeight: "100vh", background: "#F2F5F4" }}>

//       {/* HEADER */}
//       <div style={{
//         background: "#061e1d", padding: "0 28px",
//         display: "flex", alignItems: "center", gap: 14, height: 64,
//       }}>
//         <div style={{
//           width: 36, height: 36, borderRadius: 8, background: "#38E0D2",
//           color: "#061e1d", display: "flex", alignItems: "center",
//           justifyContent: "center", fontWeight: 700, fontSize: 13,
//         }}>TN</div>
//         <h1 style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
//           TNCNA Admin
//           <span style={{ fontWeight: 300, opacity: .5, marginLeft: 8, fontSize: 13 }}>
//             Content Manager
//           </span>
//         </h1>
//         {saved && (
//           <span style={{
//             marginLeft: "auto", background: "rgba(56,224,210,.15)",
//             color: "#38E0D2", fontSize: 12, padding: "4px 12px",
//             borderRadius: 99, border: "1px solid rgba(56,224,210,.25)",
//           }}>
//             ✓ Saved
//           </span>
//         )}
//       </div>

//       {/* TABS */}
//       <div style={{ background: "#0C3F3D", display: "flex", gap: 0, padding: "0 28px", overflowX: "auto" }}>
//         {TABS.map(t => (
//           <button key={t} onClick={() => setTab(t)} style={{
//             padding: "13px 18px", background: "none", border: "none",
//             borderBottom: tab === t ? "2px solid #38E0D2" : "2px solid transparent",
//             color: tab === t ? "#38E0D2" : "rgba(255,255,255,.5)",
//             fontSize: 13, fontWeight: tab === t ? 600 : 400, cursor: "pointer",
//             textTransform: "capitalize", whiteSpace: "nowrap",
//           }}>
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 20px" }}>

//         {/* ── STATS TAB ── */}
//         {tab === "stats" && (
//           <Card title="Global Statistics" desc="These numbers appear across all pages. Change here, save once — every page stays consistent.">
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14, marginBottom: 20 }}>
//               {(["members","chapters","districts","years"] as const).map(k => (
//                 <div key={k} style={{
//                   background: "#F2F5F4", borderRadius: 10,
//                   padding: "14px 16px", border: "1px solid rgba(12,63,61,.08)",
//                 }}>
//                   <label style={{ fontSize: 11, color: "#6B7880", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>
//                     {stats[`${k}_label` as keyof Stats] || k}
//                   </label>
//                   <input
//                     value={stats[k]}
//                     onChange={e => updateStats(k, e.target.value)}
//                     style={inputStyle({ fontSize: 22, fontWeight: 700, border: "none", background: "transparent", padding: 0 })}
//                   />
//                   <div style={{ marginTop: 6 }}>
//                     <span style={{ fontSize: 10, color: "#aaa" }}>Label: </span>
//                     <input
//                       value={stats[`${k}_label` as keyof Stats] || ""}
//                       onChange={e => updateStats(`${k}_label` as keyof Stats, e.target.value)}
//                       style={inputStyle({ fontSize: 11, border: "none", background: "transparent", padding: 0, color: "#6B7880" })}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <Row>
//               <Field label="Main Email">
//                 <input value={stats.email} onChange={e => updateStats("email", e.target.value)} style={inputStyle()} />
//               </Field>
//               <Field label="WhatsApp Number">
//                 <input value={stats.whatsapp} onChange={e => updateStats("whatsapp", e.target.value)} style={inputStyle()} />
//               </Field>
//             </Row>
//             <Row>
//               <Field label="Founded Year">
//                 <input value={stats.founded} onChange={e => updateStats("founded", e.target.value)} style={inputStyle()} />
//               </Field>
//             </Row>
//           </Card>
//         )}

//         {/* ── EVENTS TAB ── */}
//         {tab === "events" && (
//           <Card
//             title={`Events (${events.length})`}
//             desc="Add, edit or remove upcoming events."
//             action={<BtnPrimary onClick={() => setModal({ type: "event", index: -1 })}>+ Add Event</BtnPrimary>}
//           >
//             {events.map((ev, i) => (
//               <ListRow
//                 key={ev.id}
//                 left={<DateBlock month={ev.month} day={ev.day} />}
//                 title={ev.title}
//                 sub={`${ev.location} · ${ev.category} · ${ev.seats} · ${ev.type}`}
//                 onEdit={() => setModal({ type: "event", index: i })}
//                 onDelete={() => deleteItem(events, setEvents, i, "events")}
//               />
//             ))}
//           </Card>
//         )}

//         {/* ── CHAPTERS TAB ── */}
//         {tab === "chapters" && (
//           <Card
//             title={`Chapters (${chapters.length})`}
//             desc="District chapters shown on Chapters page and footer."
//             action={<BtnPrimary onClick={() => setModal({ type: "chapter", index: -1 })}>+ Add Chapter</BtnPrimary>}
//           >
//             {chapters.map((ch, i) => (
//               <ListRow
//                 key={ch.city}
//                 left={<Avatar label={ch.city.slice(0,2).toUpperCase()} />}
//                 title={ch.city}
//                 sub={`${ch.region} Region · Est. ${ch.est} · ${ch.members} members`}
//                 onEdit={() => setModal({ type: "chapter", index: i })}
//                 onDelete={() => deleteItem(chapters, setChapters, i, "chapters")}
//               />
//             ))}
//           </Card>
//         )}

//         {/* ── FAQS TAB ── */}
//         {tab === "faqs" && (
//           <Card
//             title={`FAQs (${faqs.length})`}
//             desc="Questions shown on the homepage FAQ section."
//             action={<BtnPrimary onClick={() => setModal({ type: "faq", index: -1 })}>+ Add FAQ</BtnPrimary>}
//           >
//             {faqs.map((f, i) => (
//               <ListRow
//                 key={i}
//                 title={f.q}
//                 sub={f.a.slice(0, 100) + (f.a.length > 100 ? "…" : "")}
//                 onEdit={() => setModal({ type: "faq", index: i })}
//                 onDelete={() => deleteItem(faqs, setFaqs, i, "faqs")}
//               />
//             ))}
//           </Card>
//         )}

//         {/* ── CONTACTS TAB ── */}
//         {tab === "contacts" && (
//           <Card
//             title={`District Contacts (${contacts.length})`}
//             desc="Phone numbers shown in footer and contact page."
//             action={<BtnPrimary onClick={() => setModal({ type: "contact", index: -1 })}>+ Add Contact</BtnPrimary>}
//           >
//             {contacts.map((ct, i) => (
//               <ListRow
//                 key={ct.city}
//                 title={ct.city}
//                 sub={ct.phone}
//                 onEdit={() => setModal({ type: "contact", index: i })}
//                 onDelete={() => deleteItem(contacts, setContacts, i, "contacts")}
//               />
//             ))}
//           </Card>
//         )}

//       </div>

//       {/* ── MODAL ── */}
//       {modal && (
//         <ModalForm
//           type={modal.type}
//           index={modal.index}
//           events={events}   setEvents={e => { setEvents(e); save({ events: e }); }}
//           chapters={chapters} setChapters={e => { setChapters(e); save({ chapters: e }); }}
//           faqs={faqs}       setFaqs={e => { setFaqs(e); save({ faqs: e }); }}
//           contacts={contacts} setContacts={e => { setContacts(e); save({ contacts: e }); }}
//           onClose={() => setModal(null)}
//         />
//       )}
//     </div>
//   );
// }

// // ── Sub-components ────────────────────────────────────────

// function Card({ title, desc, children, action }: any) {
//   return (
//     <div style={{
//       background: "#fff", border: "1px solid rgba(12,63,61,.08)",
//       borderRadius: 16, padding: 24, marginBottom: 16,
//     }}>
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
//         <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2e2d" }}>{title}</h2>
//         {action}
//       </div>
//       <p style={{ fontSize: 12, color: "#6B7880", marginBottom: 20 }}>{desc}</p>
//       {children}
//     </div>
//   );
// }

// function Row({ children }: any) {
//   return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>{children}</div>;
// }

// function Field({ label, children }: any) {
//   return (
//     <div>
//       <label style={{ fontSize: 11, color: "#6B7880", display: "block", marginBottom: 4 }}>{label}</label>
//       {children}
//     </div>
//   );
// }

// function ListRow({ left, title, sub, onEdit, onDelete }: any) {
//   return (
//     <div style={{
//       display: "flex", alignItems: "center", gap: 12, padding: 12,
//       border: "1px solid rgba(12,63,61,.07)", borderRadius: 10,
//       background: "#F8FAF9", marginBottom: 8,
//     }}>
//       {left}
//       <div style={{ flex: 1, minWidth: 0 }}>
//         <div style={{ fontSize: 13, fontWeight: 600, color: "#1a2e2d", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
//         <div style={{ fontSize: 11, color: "#6B7880", marginTop: 2 }}>{sub}</div>
//       </div>
//       <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
//         <button onClick={onEdit} style={btnStyle()}>Edit</button>
//         <button onClick={onDelete} style={btnStyle("danger")}>Remove</button>
//       </div>
//     </div>
//   );
// }

// function DateBlock({ month, day }: any) {
//   return (
//     <div style={{
//       width: 40, height: 40, borderRadius: 8, background: "#0C3F3D",
//       display: "flex", flexDirection: "column", alignItems: "center",
//       justifyContent: "center", flexShrink: 0,
//     }}>
//       <span style={{ fontSize: 9, color: "#38E0D2", fontWeight: 600 }}>{month}</span>
//       <span style={{ fontSize: 14, color: "#fff", fontWeight: 700 }}>{day}</span>
//     </div>
//   );
// }

// function Avatar({ label }: any) {
//   return (
//     <div style={{
//       width: 36, height: 36, borderRadius: "50%",
//       background: "rgba(56,224,210,.12)", border: "1px solid rgba(56,224,210,.3)",
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontSize: 12, fontWeight: 600, color: "#0C3F3D", flexShrink: 0,
//     }}>
//       {label}
//     </div>
//   );
// }

// function BtnPrimary({ onClick, children }: any) {
//   return (
//     <button onClick={onClick} style={{
//       padding: "7px 14px", background: "#0C3F3D", color: "#fff",
//       border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600,
//       cursor: "pointer",
//     }}>
//       {children}
//     </button>
//   );
// }

// // ── Modal form ────────────────────────────────────────────

// const SCHEMAS: Record<string, { key: string; label: string; type: string; options?: string[] }[]> = {
//   event: [
//     { key: "title",    label: "Event Title",                  type: "text" },
//     { key: "subtitle", label: "Short Description",            type: "textarea" },
//     { key: "location", label: "City",                         type: "text" },
//     { key: "district", label: "District (full)",              type: "text" },
//     { key: "month",    label: "Month (3 letters e.g. JUN)",   type: "text" },
//     { key: "day",      label: "Day (2 digits e.g. 14)",       type: "text" },
//     { key: "year",     label: "Year",                         type: "text" },
//     { key: "category", label: "Category",                     type: "select", options: ["Networking","Workshop","Summit","Training","Forum","Other"] },
//     { key: "seats",    label: "Seats (e.g. 120 Seats)",       type: "text" },
//     { key: "type",     label: "Type",                         type: "select", options: ["In-Person","Online","Hybrid"] },
//   ],
//   chapter: [
//     { key: "city",    label: "City Name",                type: "text" },
//     { key: "region",  label: "Region",                   type: "select", options: ["Northern","Southern","Western","Central","Delta","Eastern"] },
//     { key: "est",     label: "Established Year",         type: "text" },
//     { key: "members", label: "Member Count (e.g. 95+)", type: "text" },
//   ],
//   faq: [
//     { key: "q", label: "Question", type: "text" },
//     { key: "a", label: "Answer",   type: "textarea" },
//   ],
//   contact: [
//     { key: "city",  label: "District / City", type: "text" },
//     { key: "phone", label: "Phone Number",    type: "text" },
//   ],
// };

// function ModalForm({ type, index, events, setEvents, chapters, setChapters, faqs, setFaqs, contacts, setContacts, onClose }: any) {
//   const schema  = SCHEMAS[type];
//   const arr     = type==="event" ? events : type==="chapter" ? chapters : type==="faq" ? faqs : contacts;
//   const setArr  = type==="event" ? setEvents : type==="chapter" ? setChapters : type==="faq" ? setFaqs : setContacts;
//   const existing = index >= 0 ? arr[index] : {};
//   const [form, setForm] = useState<any>(existing);

//   function handleSave() {
//     const next = index >= 0
//       ? arr.map((x: any, i: number) => i === index ? form : x)
//       : [...arr, { ...form, id: type==="event" ? `ev${Date.now()}` : undefined }];
//     setArr(next);
//     onClose();
//   }

//   return (
//     <div style={{
//       position: "fixed", inset: 0, background: "rgba(0,0,0,.5)",
//       zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center",
//     }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
//       <div style={{
//         background: "#fff", borderRadius: 16, padding: 28,
//         width: 520, maxWidth: "95vw", maxHeight: "85vh", overflowY: "auto",
//       }}>
//         <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: "#1a2e2d" }}>
//           {index >= 0 ? "Edit" : "Add New"} {type.charAt(0).toUpperCase() + type.slice(1)}
//         </h3>

//         {schema.map(f => (
//           <div key={f.key} style={{ marginBottom: 14 }}>
//             <label style={{ fontSize: 11, color: "#6B7880", display: "block", marginBottom: 4 }}>{f.label}</label>
//             {f.type === "textarea" ? (
//               <textarea
//                 value={form[f.key] || ""}
//                 onChange={e => setForm({ ...form, [f.key]: e.target.value })}
//                 rows={3}
//                 style={{ ...inputStyle(), width: "100%", resize: "vertical" }}
//               />
//             ) : f.type === "select" ? (
//               <select
//                 value={form[f.key] || ""}
//                 onChange={e => setForm({ ...form, [f.key]: e.target.value })}
//                 style={{ ...inputStyle(), width: "100%" }}
//               >
//                 <option value="">Select...</option>
//                 {f.options!.map(o => <option key={o} value={o}>{o}</option>)}
//               </select>
//             ) : (
//               <input
//                 value={form[f.key] || ""}
//                 onChange={e => setForm({ ...form, [f.key]: e.target.value })}
//                 style={{ ...inputStyle(), width: "100%" }}
//               />
//             )}
//           </div>
//         ))}

//         <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(12,63,61,.08)" }}>
//           <button onClick={onClose} style={btnStyle()}>Cancel</button>
//           <button onClick={handleSave} style={{ ...btnStyle(), background: "#0C3F3D", color: "#fff", borderColor: "#0C3F3D" }}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Style helpers ─────────────────────────────────────────

// function inputStyle(extra: any = {}): any {
//   return {
//     padding: "9px 12px", borderRadius: 8, border: "1px solid rgba(12,63,61,.13)",
//     fontSize: 13, color: "#1a2e2d", background: "#F8FAF9",
//     fontFamily: "inherit", outline: "none", ...extra,
//   };
// }

// function btnStyle(variant?: string): any {
//   const base: any = {
//     padding: "7px 14px", fontSize: 12, borderRadius: 8, cursor: "pointer",
//     border: "1px solid rgba(12,63,61,.13)", background: "#fff",
//     color: variant === "danger" ? "#c0392b" : "#1a2e2d",
//     borderColor: variant === "danger" ? "rgba(192,57,43,.2)" : "rgba(12,63,61,.13)",
//   };
//   return base;
// }