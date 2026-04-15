"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/cases", label: "Кейсы" },
  { href: "/about", label: "Обо мне" },
  { href: "/contacts", label: "Контакты" },
];

const glassStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(32px) saturate(200%)",
  WebkitBackdropFilter: "blur(32px) saturate(200%)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: [
    "inset 0 1.5px 0 rgba(255,255,255,0.22)",
    "inset 0 -0.5px 0 rgba(0,0,0,0.25)",
    "inset 1px 0 0 rgba(255,255,255,0.06)",
    "inset -1px 0 0 rgba(255,255,255,0.06)",
    "0 0 0 0.5px rgba(255,255,255,0.06)",
    "0 12px 40px rgba(0,0,0,0.6)",
    "0 4px 12px rgba(0,0,0,0.35)",
  ].join(", "),
};

export default function BottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop / Tablet pill nav (md+) ── */}
      <nav
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        aria-label="Основная навигация"
      >
        <div
          className="flex items-center gap-[10px] p-[4px] rounded-[82px]"
          style={glassStyle}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center rounded-[82px] transition-all duration-200"
                style={{
                  padding: "19px 28px",
                  color: "#EDEDF0",
                  background: isActive ? "rgba(255,255,255,0.04)" : "transparent",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.14)"
                    : "1px solid transparent",
                  boxShadow: isActive
                    ? [
                        "inset 0 1.5px 0 rgba(255,255,255,0.3)",
                        "inset 0 -0.5px 0 rgba(0,0,0,0.18)",
                        "0 2px 8px rgba(0,0,0,0.35)",
                      ].join(", ")
                    : "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "16px",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── Mobile: fullscreen menu overlay ── */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-end"
        style={{
          background: menuOpen ? "rgba(8,8,9,0.97)" : "transparent",
          backdropFilter: menuOpen ? "blur(28px) saturate(160%)" : "none",
          WebkitBackdropFilter: menuOpen ? "blur(28px) saturate(160%)" : "none",
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className="px-6 pb-32 pt-8"
          onClick={(e) => e.stopPropagation()}
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(32px)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {navItems.map((item, i) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "18px 0",
                  color: isActive ? "#EDEDF0" : "rgba(237,237,240,0.35)",
                  fontSize: "clamp(2.25rem, 10vw, 3rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  borderBottom:
                    i < navItems.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                  touchAction: "manipulation",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ── Mobile hamburger button (bottom-right, glass circle) ── */}
      <button
        className="fixed bottom-5 right-5 z-50 md:hidden flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          ...glassStyle,
          padding: 0,
          cursor: "pointer",
          touchAction: "manipulation",
        }}
      >
        <div style={{ position: "relative", width: "18px", height: "12px" }}>
          <span
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "1.5px",
              background: "#EDEDF0",
              borderRadius: "1px",
              top: menuOpen ? "50%" : 0,
              transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "none",
              transition: "top 0.25s ease, transform 0.25s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "1.5px",
              background: "#EDEDF0",
              borderRadius: "1px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.15s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "1.5px",
              background: "#EDEDF0",
              borderRadius: "1px",
              bottom: menuOpen ? "50%" : 0,
              transform: menuOpen ? "translateY(50%) rotate(-45deg)" : "none",
              transition: "bottom 0.25s ease, transform 0.25s ease",
            }}
          />
        </div>
      </button>
    </>
  );
}
