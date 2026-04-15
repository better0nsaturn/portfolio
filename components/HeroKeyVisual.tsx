"use client";

import { useState } from "react";

// ─── Desktop version — absolute, hover-triggered star animation ───────────────
export default function HeroKeyVisual() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute hidden lg:block"
      style={{
        left: "51.2%",
        top: "252px",
        width: "542px",
        height: "470px",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {/* Stars — jitter on hover */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/star.svg"
        alt=""
        className="absolute"
        style={{
          width: "52px",
          top: "-10px",
          right: "55px",
          animation: hovered ? "starJitter 1.8s steps(1) infinite" : "none",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/star.svg"
        alt=""
        className="absolute"
        style={{
          width: "66px",
          top: "210px",
          left: "10px",
          animation: hovered ? "starJitter 1.8s steps(1) infinite 0.6s" : "none",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/star.svg"
        alt=""
        className="absolute"
        style={{
          width: "86px",
          bottom: "30px",
          right: "30px",
          animation: hovered ? "starJitter 1.8s steps(1) infinite 0.3s" : "none",
        }}
      />

      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ME.png"
        alt="Арина Бражникова"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />

      {/* Hover zone */}
      <div
        style={{
          position: "absolute",
          left: "12%",
          top: "4%",
          width: "76%",
          height: "88%",
          zIndex: 20,
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
}

// ─── Mobile / tablet version — in-flow, stars animate on load then stop ───────
export function MobileHeroVisual() {
  // Animation: 3 iterations × 1.8 s = 5.4 s, then stays at final (neutral) frame
  const anim = (delay: string) =>
    `starJitter 1.8s steps(1) ${delay} 3 normal forwards`;

  return (
    <div
      className="flex justify-center lg:hidden"
      style={{
        marginTop: "clamp(2rem, 7vw, 3.5rem)",
        pointerEvents: "none",
      }}
    >
      <div
        className="relative"
        style={{ width: "clamp(220px, 70vw, 460px)" }}
      >
        {/* Star — top right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/star.svg"
          alt=""
          className="absolute"
          style={{
            width: "clamp(26px, 7vw, 52px)",
            top: "-6%",
            right: "6%",
            animation: anim("0s"),
          }}
        />
        {/* Star — left middle */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/star.svg"
          alt=""
          className="absolute"
          style={{
            width: "clamp(34px, 9vw, 66px)",
            top: "42%",
            left: "-8%",
            animation: anim("0.6s"),
          }}
        />
        {/* Star — bottom right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/star.svg"
          alt=""
          className="absolute"
          style={{
            width: "clamp(42px, 11vw, 86px)",
            bottom: "-5%",
            right: "-5%",
            animation: anim("0.3s"),
          }}
        />

        {/* Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ME.png"
          alt="Арина Бражникова"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}
