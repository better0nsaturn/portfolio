"use client";

import { useState } from "react";

export default function HeroKeyVisual() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute hidden md:block"
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
