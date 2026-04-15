import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import HeroKeyVisual, { MobileHeroVisual } from "@/components/HeroKeyVisual";
import { cases } from "@/lib/cases";
import { typograph } from "@/lib/typograph";

export default function HomePage() {
  return (
    <div className="relative content-with-nav">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 dot-grid"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(80,80,120,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ─── HERO — intro text ─── */}
      <section
        className="px-6 pt-14 md:pt-20 lg:min-h-[calc(100dvh-72px)] relative"
        style={{ paddingBottom: "80px" }}
      >
        {/* Desktop key visual — absolute, right side, hover stars */}
        <HeroKeyVisual />

        <div className="relative">
          <h1
            className="font-semibold text-[#EDEDF0] anim-in"
            style={{
              fontSize: "clamp(2rem, 6vw, 5.375rem)",
              lineHeight: "1.047",
              letterSpacing: "-0.03em",
              marginBottom: "clamp(1rem, 2.5vw, 1.75rem)",
            }}
          >
            Привет! Я{"\u00A0"}Арина<br />
            Я{"\u00A0"}Middle продуктовый дизайнер<br />
            из{"\u00A0"}Москвы с{"\u00A0"}3 годами опыта
          </h1>
          <p
            className="text-[#EDEDF0] anim-in anim-delay-1"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              lineHeight: "1.55",
              letterSpacing: "-0.02em",
              maxWidth: "580px",
              fontWeight: 400,
            }}
          >
            {typograph("За время работы я занималась улучшением и развитием дизайна крупных продуктов, проектировала сложные сценарии, проводила исследования и разрабатывала концепции с нуля.")}
          </p>
        </div>

        {/* Mobile / tablet key visual — in-flow below text, load-animated stars */}
        <MobileHeroVisual />
      </section>

      {/* ─── Cases grid ─── */}
      <ScrollReveal className="px-6 pb-[80px]">
        <h2
          className="font-semibold text-[#EDEDF0] mb-10"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: "0.98",
            letterSpacing: "-0.035em",
          }}
        >
          Кейсы
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-[64px]">
          {cases.slice(0, 4).map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link
            href="/cases"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ background: "#EDEDF0", color: "#08080A" }}
          >
            <span className="text-[14px] font-semibold">Все кейсы</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </ScrollReveal>

      {/* ─── About preview ─── */}
      <ScrollReveal className="px-6 pb-[80px]">
        <div
          className="rounded-3xl relative overflow-hidden"
          style={{
            background: "rgba(14,14,18,0.5)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Subtle corner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 70% at 100% 0%, rgba(110,110,170,0.06) 0%, transparent 55%)",
            }}
          />

          <div className="relative grid md:grid-cols-5">
            {/* ── LEFT — bio ── */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col gap-8 md:border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {/* Label + role */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#A7A7B6] mb-5">
                  Обо мне
                </div>
                <div
                  className="font-semibold text-[#EDEDF0]"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  Middle Product Designer
                </div>
                <div className="mt-3 text-[13px] text-[#5A5A66]" style={{ letterSpacing: "-0.01em" }}>
                  Дизайн-студия AIC · дек 2023 — ноя 2025
                </div>
              </div>

              {/* Description — Figma spec: 16/18/−2%/white */}
              <p
                className="text-[#EDEDF0]"
                style={{ fontSize: "16px", lineHeight: "18px", letterSpacing: "-0.02em" }}
              >
                {typograph("Проектировала сложные web и mobile интерфейсы в automotive, медтехе, государственных сервисах и финтехе. Один из проектов получил золото Tagline 2024.")}
              </p>

              {/* Link */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 self-start text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A7A7B6] hover:text-[#EDEDF0] transition-colors duration-200"
              >
                <span>Подробнее об опыте</span>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* ── RIGHT — tools ── */}
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col">
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#A7A7B6] mb-6">
                Инструменты
              </div>

              <p
                className="text-[#EDEDF0]"
                style={{ fontSize: "14px", lineHeight: "1.6", letterSpacing: "-0.015em" }}
              >
                Figma, Adobe After Effects, Adobe Illustrator, Adobe Photoshop, Sketch, Readymag, Miro, Notion, ClickUp
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
