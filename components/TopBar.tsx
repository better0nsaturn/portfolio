"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function MoscowTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Moscow",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-0">
      <span className="topbar-dot">•</span>
      <span style={{ marginLeft: "8px" }}>{time}</span>
      <span style={{ marginLeft: "16px" }}>MOSCOW, RU</span>
    </span>
  );
}

export default function TopBar() {
  return (
    <header
      className="px-6 pt-6 md:pt-8"
      style={{
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        color: "#FFFFFF",
      }}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          style={{ color: "inherit", textDecoration: "none" }}
          className="hover:opacity-70 transition-opacity duration-200"
        >
          Арина Бражникова
        </Link>
        <div className="hidden sm:block">
          <MoscowTime />
        </div>
        <div>©2026</div>
      </div>
    </header>
  );
}
