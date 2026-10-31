"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getInitials } from "@/lib/utils";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="wordmark" href="#home" aria-label="Cheswin Vaddi, home">
          {getInitials(profile.name)}
          <span className="wordmark-dot">.</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="nav-resume"
          href={profile.resumePath}
          target="_blank"
          rel="noreferrer"
          aria-label="View résumé PDF"
        >
          <Download size={14} aria-hidden="true" />
          View résumé
        </a>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a
          className="mobile-resume-link"
          href={profile.resumePath}
          target="_blank"
          rel="noreferrer"
          aria-label="View résumé PDF"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        >
          View résumé
          <Download size={14} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
