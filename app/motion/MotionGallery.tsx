"use client";

import { useEffect, useRef } from "react";

interface VideoItem {
  src: string;
}

function MotionVideo({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    // IntersectionObserver: play when ≥30% visible, pause otherwise
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  // Staggered entrance delay for the first few videos
  const delay = Math.min(index * 80, 320);

  return (
    <div
      ref={wrapRef}
      className="anim-in w-full"
      style={{
        animationDelay: `${delay}ms`,
        // Prevent layout shift before video dimensions are known
        minHeight: "200px",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "24px",
          // Subtle shadow for depth
          boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}

export default function MotionGallery({ videos }: { videos: VideoItem[] }) {
  return (
    <main className="px-6 md:px-10 lg:px-14 pb-24 md:pb-[80px]">
      <div
        className="mx-auto flex flex-col"
        style={{
          maxWidth: "1280px",
          gap: "clamp(2rem, 5vw, 5rem)",
        }}
      >
        {videos.map((v, i) => (
          <MotionVideo key={v.src} src={v.src} index={i} />
        ))}
      </div>
    </main>
  );
}
