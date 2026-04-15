import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { cases, getCase, getCaseSlugs, type CaseSection } from "@/lib/cases";
import { typograph } from "@/lib/typograph";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseData = getCase(slug);
  if (!caseData) return { title: "Кейс не найден" };
  return {
    title: `${caseData.title} — Арина Бражникова`,
    description: caseData.subtitle,
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = getCase(slug);

  if (!caseData) {
    notFound();
  }

  // Gallery-style cases have a custom href — redirect rather than render the standard layout
  if (caseData.href) {
    redirect(caseData.href);
  }

  const currentIndex = cases.findIndex((c) => c.slug === slug);
  const nextCase = cases[(currentIndex + 1) % cases.length];

  return (
    <div className="relative">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 dot-grid"
        style={{
          maskImage: "radial-gradient(ellipse at center top, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center top, black 10%, transparent 70%)",
        }}
      />

      {/* Back link */}
      <div className="px-6 md:px-10 lg:px-14 pt-8 md:pt-10">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A7A7B6] hover:text-[#EDEDF0] transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M12 7H2M6 3L2 7L6 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Все проекты</span>
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-14 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="anim-in">
            <div className="flex flex-wrap gap-2 mb-6">
              {caseData.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    background: "rgba(14, 14, 18, 0.72)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: "100px",
                  }}
                >
                  {tag}
                </span>
              ))}
              {caseData.award && (
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(14, 14, 18, 0.72)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: "100px",
                  }}
                >
                  🏆 {caseData.award}
                </span>
              )}
              {caseData.note && (
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(14, 14, 18, 0.72)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(232,168,124,0.2)",
                    color: "#E8A87C",
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: "100px",
                  }}
                >
                  ⚠️ {caseData.note}
                </span>
              )}
            </div>
          </div>

          <h1
            className="font-semibold text-[#EDEDF0] anim-in anim-delay-1"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.75rem)",
              lineHeight: "1",
              letterSpacing: "-0.035em",
              maxWidth: "12ch",
            }}
          >
            {caseData.title}
          </h1>

          <p
            className="mt-7 md:mt-9 max-w-[640px] text-[#D0D0D0] anim-in anim-delay-2"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              lineHeight: "1.55",
              letterSpacing: "-0.01em",
            }}
          >
            {typograph(caseData.subtitle)}
          </p>
        </div>
      </section>

      {/* Hero visual */}
      <section className="px-6 md:px-10 lg:px-14 pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="rounded-3xl overflow-hidden anim-in anim-delay-3"
            style={{
              background: caseData.cardBg,
              height: caseData.previewImage ? "auto" : "clamp(280px, 44vw, 540px)",
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
            }}
          >
            {caseData.previewImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={caseData.previewImage}
                alt={caseData.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            ) : (
              <>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40 mb-2">
                      {caseData.client}
                    </div>
                    <div
                      className="text-white/85 font-semibold"
                      style={{
                        fontSize: "clamp(1rem, 1.6vw, 1.375rem)",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {caseData.direction}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* META INFO */}
      <section className="px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="divider mb-12 md:mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {[
              { label: "Клиент", value: caseData.client },
              { label: "Роль", value: caseData.role },
              { label: "Тип", value: caseData.type },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-2">
                  {item.label}
                </div>
                <div className="text-[16px] font-medium text-[#EDEDF0]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="divider mt-12 md:mt-16" />
        </div>
      </section>

      {/* CONTEXT + TASK */}
      <section className="px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-3">
                Контекст
              </div>
            </div>
            <div className="md:col-span-9">
              <p
                className="text-[#EDEDF0]"
                style={{
                  fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                  lineHeight: "1.75",
                  letterSpacing: "-0.005em",
                }}
              >
                {typograph(caseData.context)}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-12 md:mt-16">
            <div className="md:col-span-3">
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-3">
                Команда
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="text-[#EDEDF0] text-[16px] leading-[1.7]">
                {typograph(caseData.team)}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-12 md:mt-16">
            <div className="md:col-span-3">
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-3">
                Задача
              </div>
            </div>
            <div className="md:col-span-9">
              <p
                className="text-[#EDEDF0]"
                style={{
                  fontSize: "clamp(1.125rem, 1.7vw, 1.375rem)",
                  lineHeight: "1.55",
                  letterSpacing: "-0.012em",
                  fontWeight: 400,
                }}
              >
                {typograph(caseData.task)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="px-6 md:px-10 lg:px-14 pb-20 md:pb-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3" />
            <div className="md:col-span-9 prose-case">
              {caseData.sections.map((section, i) => (
                <CaseSectionRenderer key={i} section={section} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT CASE */}
      <section className="px-6 md:px-10 lg:px-14 pb-24 md:pb-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="divider mb-12" />
          <Link
            href={nextCase.href ?? `/cases/${nextCase.slug}`}
            className="group block rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: nextCase.cardBg,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="p-10 md:p-16 lg:p-20 relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4">
                  Следующий проект
                </div>
                <h3
                  className="font-semibold text-white mb-3"
                  style={{
                    fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  {nextCase.title}
                </h3>
                <p className="text-white/55 text-[16px] md:text-[16px] max-w-[520px] leading-relaxed mb-7">
                  {typograph(nextCase.subtitle)}
                </p>
                <div className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 transition-all duration-200 group-hover:text-white">
                  <span>Открыть кейс</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M2 7H12M8 3L12 7L8 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function CaseSectionRenderer({ section }: { section: CaseSection }) {
  if (section.type === "heading") {
    if (section.level === 2) return <h2>{typograph(section.text)}</h2>;
    return <h3>{typograph(section.text)}</h3>;
  }

  if (section.type === "paragraph") {
    return <p>{typograph(section.text)}</p>;
  }

  if (section.type === "image") {
    return (
      <div className="my-10 not-prose">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.src}
            alt={section.alt}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        {section.caption && (
          <div className="mt-3 text-[12px] text-[#7A7A86] tracking-[0.04em]">
            {typograph(section.caption)}
          </div>
        )}
      </div>
    );
  }

  if (section.type === "list") {
    return (
      <ul className="not-prose my-6 flex flex-col gap-3">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-[6px] shrink-0 rounded-full"
              style={{ width: "6px", height: "6px", background: "#A7A7B6" }}
            />
            <span style={{ color: "#D0D0D0", fontSize: "16px", lineHeight: "1.65", letterSpacing: "-0.015em" }}>
              {typograph(item)}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (section.type === "image-pair") {
    return (
      <div
        className="my-10 not-prose"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        {section.images.map((img, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "video") {
    return (
      <div className="my-10 not-prose">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={section.src}
            poster={section.poster}
            controls
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        {section.caption && (
          <div className="mt-3 text-[12px] text-[#7A7A86] tracking-[0.04em]">
            {typograph(section.caption)}
          </div>
        )}
      </div>
    );
  }

  if (section.type === "metrics") {
    return (
      <div className="my-10 not-prose">
        {section.title && (
          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-4">
            {typograph(section.title)}
          </div>
        )}
        <div className="grid sm:grid-cols-3 gap-3">
          {section.items.map((item, i) => (
            <div key={i} className="metric-block">
              <div className="flex items-start gap-2.5 mb-1.5">
                <span
                  className="text-[16px] font-bold leading-none mt-0.5"
                  style={{
                    color: item.arrow === "up" ? "#7AC982" : "#E8A87C",
                  }}
                >
                  {item.arrow === "up" ? "↑" : "↓"}
                </span>
                <span className="text-[14px] font-semibold text-[#EDEDF0] leading-snug">
                  {typograph(item.metric)}
                </span>
              </div>
              <div className="text-[12px] text-[#6A6A76] leading-snug pl-6">
                {typograph(item.note)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
