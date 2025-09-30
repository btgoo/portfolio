"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const headerRef = useRef<HTMLElement | null>(null);

  const handleGo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", "/");
    setIsOpen(false);
  };

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight ?? 72;
    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${headerHeight + 8}px 0px -60% 0px`,
      threshold: 0,
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const id = e.target.getAttribute("id");
        if (e.isIntersecting && id) setActiveId(id);
      });
    }, opts);
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const desktopLinks = useMemo(
    () =>
      SECTIONS.map((s) => (
        <li key={s.id}>
          <button
            type="button"
            onClick={() => handleGo(s.id)}
            className={activeId === s.id ? "nav-link-active" : "nav-link"}
            aria-current={activeId === s.id ? "page" : undefined}
            aria-controls={s.id}
          >
            {s.label}
          </button>
        </li>
      )),
    [activeId]
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-12 lg:px-32">
        {/* Left: Logo */}
        <div className="text-lg font-bold">MyPortfolio</div>

        {/* Right controls on mobile: show ThemeToggle + burger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle /> {/* ← now visible on mobile */}
          <button
            className="text-2xl"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {isOpen ? "x" : "☰"}
          </button>
        </div>

        {/* Desktop nav (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-2">{desktopLinks}</ul>
          <ThemeToggle /> {/* ← desktop toggle */}
        </nav>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-2 text-white">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => handleGo(s.id)}
                  className="nav-link w-full text-left"
                  aria-controls={s.id}
                >
                  {s.label}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10">
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
