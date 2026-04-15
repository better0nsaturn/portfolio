import ProjectCard from "@/components/ProjectCard";
import { cases } from "@/lib/cases";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кейсы — Арина Бражникова",
  description: "Кейсы по продуктовому дизайну: B2B, медтех, госуслуги, финтех.",
};

export default function CasesPage() {
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

      {/* Heading */}
      <section className="px-6 pt-20 md:pt-28">
        <h1
          className="font-semibold text-[#EDEDF0] anim-in"
          style={{
            fontSize: "clamp(2rem, 6vw, 5.375rem)",
            lineHeight: "1.047",
            letterSpacing: "-0.03em",
          }}
        >
          Кейсы
        </h1>
      </section>

      {/* Cases grid */}
      <section className="px-6 mt-8 pb-24 md:pb-[80px]">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-[64px]">
          {cases.map((project, i) => (
            <div
              key={project.slug}
              className="anim-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
