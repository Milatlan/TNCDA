// lib/siteData.ts

// export const SITE_STATS = {
//   members:   "760+",
//   chapters:  "12",
//   districts: "38",
//   years:     "5+",
//   email:     "hello@TNCNA.in",
//   whatsapp:  "+919000000000",
//   founded:   "2025",
// };



export const EVENTS = [
  {
    id:       "ev01",
    title:    "Construction Networking Meet",
    subtitle: "Regional professionals meet to discuss project pipelines and form strategic alliances.",
    location: "Madurai",
    district: "Madurai District",
    month:    "JUN",
    day:      "14",
    year:     "2025",
    category: "Networking",
    seats:    "120 Seats",
    type:     "In-Person",
  },
  {
    id:       "ev02",
    title:    "Policy & Legal Workshop",
    subtitle: "Deep-dive into Tamil Nadu construction law updates, contract compliance, and dispute resolution.",
    location: "Salem",
    district: "Salem District",
    month:    "JUL",
    day:      "08",
    year:     "2025",
    category: "Workshop",
    seats:    "60 Seats",
    type:     "In-Person",
  },
  {
    id:       "ev03",
    title:    "TNCNA Annual Summit 2026",
    subtitle: "The flagship gathering of all chapter heads, contractors, and industry leaders across Tamil Nadu.",
    location: "Chennai",
    district: "Greater Chennai",
    month:    "SEP",
    day:      "20",
    year:     "2025",
    category: "Summit",
    seats:    "400+ Seats",
    type:     "In-Person",
  },
];

export const CHAPTERS = [
  { city: "Chennai",     region: "Northern", est: "2019", members: "30+" },
  { city: "Coimbatore", region: "Western",  est: "2019", members: "22+" },
  { city: "Villupuram", region: "Eastern",  est: "2021", members: "16+" },
  { city: "Erode",      region: "Western",  est: "2021", members: "18+" },
  { city: "Cuddalore",  region: "Eastern",  est: "2022", members: "14+" },
];

export const SITE_STATS = [
  { num: "05",   label: "Active Circles" },
  { num: "100+", label: "Total Members" },
  { num: "5",    label: "Regions Covered" },
];
export const FAQS = [
  {
    q: "Who can join TNCNA?",
    a: "TNCNA is open to all construction professionals in India — builders, civil contractors, electrical contractors, plumbers, structural engineers, architects, material suppliers, and real estate developers.",
  },
  {
    q: "Is there a membership fee?",
    a: "Applying is completely free. Membership fees vary by circle and are discussed transparently during onboarding. There are no hidden charges.",
  },
  {
    q: "How does the referral and lead system work?",
    a: "Members connect within district circles and exchange verified business opportunities through our structured referral system. Every referral is logged and members are accountable to each other.",
  },
  {
    q: "What is a TNCNA Circle?",
    a: "Circles are district-level units of TNCNA. Each circle has local networking meetings, a dedicated coordinator, and a referral system.",
  },
  {
    q: "Can new professionals or beginners join?",
    a: "Absolutely. TNCNA provides mentorship connections, access to experienced members, and structured opportunities to build your reputation.",
  },
  {
    q: "Do you provide legal or policy support?",
    a: "TNCNA hosts regular workshops, industry briefings, and advisory sessions on legal and regulatory matters affecting India's construction sector.",
  },
  {
    q: "How quickly can I expect business results?",
    a: "Most active members report receiving their first quality referral within 30–60 days of joining. Results depend on how actively you engage with your circle.",
  },
];

export const DISTRICT_CONTACTS = [
  { city: "Chennai",      phone: "+91 90000 00000" },
  { city: "Coimbatore",  phone: "+91 90000 00001" },
  { city: "Madurai",     phone: "+91 90000 00002" },
  { city: "Salem",       phone: "+91 90000 00003" },
  { city: "Trichy",      phone: "+91 90000 00004" },
  { city: "Tirunelveli", phone: "+91 90000 00005" },
  { city: "Vellore",     phone: "+91 90000 00006" },
];

// Districts shown in footer tag strip
export const ALL_DISTRICTS = [
  "Chennai", "Coimbatore", "Villupuram", "Erode", "Cuddalore",
];



export type Tier = "founder" | "executive" | "chapter";

export interface Leader {
  name:    string;
  role:    string;
  tier:    Tier;
  initial: string;
  tag:     string;
  image?:  string;   // ← add this line
}

/* ─────────────────────────────────────────────
   LEADERS
───────────────────────────────────────────── */
export const LEADERS: Leader[] = [
  {
    name: "Mr. DSB Rangesh",
    role: "Founder",
    tier: "founder",
    initial: "F",
    tag: "Founder",
    image: "/images/founders/founder.png", 
  },
  {
    name: "Mr. Feroz",
    role: "Vice President",
    tier: "executive",
    initial: "VP",
    tag: "Executive",
  },
  {
    name: "Mr. Murugappan",
    role: "Secretary",
    tier: "executive",
    initial: "S",
    tag: "Executive",
  },
  {
    name: "Mr. Yesuraja",
    role: "Joint Secretary",
    tier: "chapter",
    initial: "JS",
    tag: "Chapter",
  },
  {
    name: "Mr. Gangadharan",
    role: "Treasurer",
    tier: "chapter",
    initial: "T",
    tag: "Chapter",
  },
];

/* ─────────────────────────────────────────────
   FOUNDER STATS (important)
───────────────────────────────────────────── */
export const FOUNDER_STATS = [
  { num: "05+", label: "Chapters Founded" },
  { num: "100+", label: "Members United" },
  { num: "5+", label: "Years of Leadership" },
];

/* ─────────────────────────────────────────────
   LEADERSHIP PILLARS
───────────────────────────────────────────── */
export const LEADERSHIP_PILLARS = [
  { icon: "◈", label: "Vision", desc: "Long-term sector strategy" },
  { icon: "◇", label: "Integrity", desc: "Ethics at every decision" },
  { icon: "◉", label: "Service", desc: "Member-first governance" },
];




export const NETWORK_STATS = [
  { num: "100+", label: "Professionals" },
  { num: "5+",   label: "Circles" },
  { num: "15+",  label: "Trades" },
];

/* ─────────────────────────────────────────────
   PROFESSIONS (broad categories)
───────────────────────────────────────────── */
export const PROFESSIONS = [
  "Civil Engineers",
  "Architects",
  "Builders",
  "Contractors",
  "Interior Designers",
  "Project Managers",
];

/* ─────────────────────────────────────────────
   TRADES (execution level)
───────────────────────────────────────────── */
export const TRADES = [
  "Masonry",
  "Electrical",
  "Plumbing",
  "Carpentry",
  "Painting",
  "Tiling",
  "Welding",
  "Fabrication",
  "Roofing",
  "False Ceiling",
  "Flooring",
  "Glass Work",
  "Waterproofing",
  "Landscaping",
  "HVAC",
];

/* ─────────────────────────────────────────────
   CIRCLES (district-level network)
───────────────────────────────────────────── */
export const CIRCLES = [
  { name: "Chennai Circle",      district: "Chennai" },
  { name: "Coimbatore Circle",  district: "Coimbatore" },
  { name: "Madurai Circle",     district: "Madurai" },
  { name: "Salem Circle",       district: "Salem" },
  { name: "Trichy Circle",      district: "Trichy" },
  { name: "Tirunelveli Circle", district: "Tirunelveli" },
  { name: "Vellore Circle",     district: "Vellore" },
];



/* ─────────────────────────────────────────────
   MEMBERS — CORE STATS
───────────────────────────────────────────── */
export const MEMBER_STATS = [
  { value: "100+", label: "Active Members", sub: "and growing monthly" },
  { value: "05+",  label: "Circles", sub: "across India" },
  { value: "₹10Cr+", label: "Business Generated", sub: "last 6 months" },
];

/* ─────────────────────────────────────────────
   MEMBER TYPES (segments)
───────────────────────────────────────────── */
export const MEMBER_TYPES = [
  { label: "Builders",     count: "30+", icon: "🏗", percent: 80 },
  { label: "Contractors",  count: "30+", icon: "🔧", percent: 65 },
  { label: "Suppliers",    count: "15+", icon: "📦", percent: 35 },
  { label: "Engineers",    count: "25+", icon: "📐", percent: 20 },
];

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    name: "Arjun Rajan",
    role: "Civil Contractor, Chennai",
    text: "TNCNA connected me with 3 major projects in my first month. The network is real and referrals are genuine.",
    initials: "AR",
  },
  {
    name: "Priya Selvam",
    role: "Structural Engineer, Villupuram",
    text: "Finally a platform built for Tamil Nadu's construction community. The trust here is different.",
    initials: "PS",
  },
  {
    name: "Murugan Builders",
    role: "Builder, Erode",
    text: "We sourced materials cheaper and found our best subcontractor through TNCNA.",
    initials: "MB",
  },
];

/* ─────────────────────────────────────────────
   TRUST STRIP
───────────────────────────────────────────── */
export const MEMBER_TRUST = {
  avatars: ["A", "S", "K", "V", "R"],
  total: "100+",
  text: "100+ verified professionals actively collaborating across 07+ chapters statewide",
};





// ─── ADD THESE TO lib/siteData.ts ───────────────────────────────────────────

/* ─────────────────────────────────────────────
   CONTACT PAGE — FORM SUBJECTS
───────────────────────────────────────────── */
export const CONTACT_SUBJECTS = [
  "Membership Enquiry",
  "Business Collaboration",
  "Events & Training",
  "Media & Press",
  "Other Enquiry",
];

/* ─────────────────────────────────────────────
   CONTACT PAGE — DISTRICTS DROPDOWN
   (full list for the form select)
───────────────────────────────────────────── */
export const CONTACT_DISTRICTS = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupattur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar"
];

/* ─────────────────────────────────────────────
   CONTACT PAGE — PRIMARY CONTACT INFO
───────────────────────────────────────────── */
export const CONTACT_INFO = {
  email:       "hello@TNCNA.in",
  phone:       "+91 7825901439",
  whatsapp:    "https://wa.me/7825901439",
  headquarters: "46/89, coral merchant street, mannady, george town, Chennai - 600001, Tamil Nadu",
};

/* ─────────────────────────────────────────────
   CONTACT PAGE — TRUST STRIP ITEMS
───────────────────────────────────────────── */
export const CONTACT_TRUST_ITEMS = [
  "Verified network",
  "05 active chapters",
  "Nation-level advocacy",
];

// NOTE: DISTRICT_CONTACTS already exists in siteData.ts — reuse it for the
//       "District Chapter Contacts" block in the contact page. No duplicate needed.
