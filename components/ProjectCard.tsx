import type { Case } from "@/lib/cases";
import { typograph } from "@/lib/typograph";

export default function ProjectCard({ project }: { project: Case }) {
  const href = project.href ?? `/cases/${project.slug}`;

  return (
    <a
      href={href}
      className="group block"
      aria-label={project.title}
    >
      {/* Visual block */}
      <div
        className="rounded-[28px] overflow-hidden mb-5 relative"
        style={{ background: project.cardBg, aspectRatio: "16/9" }}
      >
        {/* Preview video (autoplays silently as a living thumbnail) */}
        {project.previewVideo && (
          <video
            src={project.previewVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}

        {/* Fallback static image */}
        {project.previewImage && !project.previewVideo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.previewImage}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Tags */}
        <div className="absolute top-2 left-2 md:top-5 md:left-5 flex flex-wrap gap-1 md:gap-2">
          {project.tags.map((tag) => (
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
        </div>

        {project.award && (
          <div
            className="absolute bottom-5 left-5"
            style={{
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
            🏆 {project.award}
          </div>
        )}
        {project.note && !project.award && (
          <div
            className="absolute bottom-5 left-5"
            style={{
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
            ⚠️ {project.note}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="px-1">
        <h3
          className="font-semibold text-[#EDEDF0] mb-6"
          style={{
            fontSize: "clamp(1.75rem, 4.2vw, 3.375rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {typograph(project.title)}
        </h3>
        <p
          style={{
            color: "#D0D0D0",
            fontSize: "16px",
            lineHeight: "18px",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          {typograph(project.subtitle)}
        </p>
      </div>
    </a>
  );
}
