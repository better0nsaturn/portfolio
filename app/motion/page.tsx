import type { Metadata } from "next";
import MotionGallery from "./MotionGallery";

export const metadata: Metadata = {
  title: "Motion Design — Арина Бражникова",
  description:
    "Визуальный архив моушен-работ: анимации, эфирная графика, моушен-эксперименты.",
};

const videos: { src: string }[] = [
  { src: "/motion/vesna-preview.mp4" },
  { src: "/motion/spring.mp4" },
  { src: "/motion/theater1.mp4" },
  { src: "/motion/theater2.mp4" },
  { src: "/motion/theater3.mp4" },
];

export default function MotionPage() {
  return (
    <div className="relative content-with-nav">
      {/* Subtle background */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{ background: "#080809" }}
      />

      {/* Back link */}
      <div className="px-6 md:px-10 lg:px-14 pt-8 md:pt-10">
        <a
          href="/cases"
          className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A7A7B6] hover:text-[#EDEDF0] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Все проекты</span>
        </a>
      </div>

      {/* Minimal header */}
      <header className="px-6 md:px-10 lg:px-14 pt-16 md:pt-20 pb-14 md:pb-20">
        <h1
          className="font-semibold text-[#EDEDF0] anim-in"
          style={{
            fontSize: "clamp(2rem, 6vw, 5.375rem)",
            lineHeight: "1.047",
            letterSpacing: "-0.03em",
          }}
        >
          Motion Design
        </h1>
      </header>

      {/* Gallery */}
      <MotionGallery videos={videos} />
    </div>
  );
}
