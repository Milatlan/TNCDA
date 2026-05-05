"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home",     type: "scroll", id: "home" },
  { name: "About",    type: "scroll", id: "about" },
  { name: "Founder",  type: "scroll", id: "founder" },
  { name: "Benefits", type: "scroll", id: "benefits" },
  { name: "Members",  type: "scroll", id: "members" },
  { name: "Gallery",  type: "scroll", id: "gallery" },
  { name: "Register", type: "scroll", id: "register", highlight: true },

  { name: "Policies", type: "route", href: "/policies" },
  { name: "Circles", type: "route", href: "/chapters" },
  { name: "Leaders",  type: "route", href: "/leaders" },
  // { name: "Legal",    type: "route", href: "/legal" },
  { name: "Terms",    type: "route", href: "/terms" },
  { name: "Events",   type: "route", href: "/events" },
  { name: "Contact",  type: "route", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("home");

  const router   = useRouter();
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHome) return; // only spy sections on homepage

      navItems.forEach((item) => {
        if (item.type === "scroll" && item.id) {
          const el = document.getElementById(item.id);
          if (el) {
            const top    = el.offsetTop - 120;
            const bottom = top + el.offsetHeight;
            if (window.scrollY >= top && window.scrollY < bottom) {
              setActive(item.id);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // After navigating to homepage, scroll to the target section
  useEffect(() => {
    if (!isHome) return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Small delay so the page has rendered
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);

    return () => clearTimeout(timer);
  }, [isHome]);

  const handleScrollLink = (id: string) => {
    setOpen(false);

    if (isHome) {
      // Already on homepage — just scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On another page — navigate to homepage with hash
      router.push(`/#${id}`);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <button
          onClick={() => handleScrollLink("home")}
          className="logo"
          aria-label="TNCNA Home"
        >
          <div className="logo-wrapper">
            <Image
              src="/logo.png"
              alt="TNCNA Logo"
              width={40}
              height={40}
              className="logo-img"
              priority
            />
          </div>
          <div className="logo-text">
            <span>TNCNA</span>
            <small>Tamil Nadu Construction Network Association</small>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          {navItems.map((item, i) => {
            if (item.type === "scroll") {
              return (
                <button
                  key={i}
                  onClick={() => handleScrollLink(item.id!)}
                  className={`nav-link
                    ${isHome && active === item.id ? "active" : ""}
                    ${item.highlight ? "highlight" : ""}`}
                >
                  {item.name}
                </button>
              );
            }
            return (
              <Link
                key={i}
                href={item.href!}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navItems.map((item, i) => {
          if (item.type === "scroll") {
            return (
              <button
                key={i}
                onClick={() => handleScrollLink(item.id!)}
                className={`mobile-link ${item.highlight ? "highlight" : ""}`}
              >
                {item.name}
              </button>
            );
          }
          return (
            <Link
              key={i}
              href={item.href!}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}