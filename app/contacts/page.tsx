import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Арина Бражникова",
  description: "Связаться с продуктовым дизайнером Ариной Бражниковой.",
};

export default function ContactsPage() {
  return (
    <div className="relative content-with-nav min-h-[calc(100dvh-160px)]">
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
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(80,80,120,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <section className="px-6 md:px-10 lg:px-14 pt-20 md:pt-28 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <h1
            className="font-semibold text-[#EDEDF0] anim-in"
            style={{
              fontSize: "clamp(2rem, 6vw, 5.375rem)",
              lineHeight: "1.047",
              letterSpacing: "-0.03em",
            }}
          >
            Давайте
            <br />
            познакомимся
          </h1>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-6 md:px-10 lg:px-14 pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4 anim-in anim-delay-2">
            {/* Email */}
            <a
              href="mailto:brazhnikova0212@gmail.com"
              className="group block rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(14,14,18,0.55)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 0.5px rgba(255,255,255,0.04), 0 12px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(150,150,200,0.08) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#A7A7B6] mb-4">
                  Email
                </div>
                <div
                  className="font-semibold text-[#EDEDF0] mb-4 break-all"
                  style={{
                    fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  brazhnikova0212@gmail.com
                </div>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#A8A8B4] transition-colors duration-200 group-hover:text-[#EDEDF0]">
                  <span>Написать письмо</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/brazhnikovva"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(14,14,18,0.55)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 0.5px rgba(255,255,255,0.04), 0 12px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(100,160,210,0.07) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#A7A7B6] mb-4">
                  Telegram
                </div>
                <div
                  className="font-semibold text-[#EDEDF0] mb-4"
                  style={{
                    fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  @brazhnikovva
                </div>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#A8A8B4] transition-colors duration-200 group-hover:text-[#EDEDF0]">
                  <span>Написать в Telegram</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <section className="px-6 md:px-10 lg:px-14 pb-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="divider mb-10" />
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-2">
                Локация
              </div>
              <div className="text-[14px] text-[#EDEDF0]">
                Москва, Россия
              </div>
              <div className="text-[14px] text-[#8A8A96]">
                Готова к работе удалённо
              </div>
            </div>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-2">
                Часовой пояс
              </div>
              <div className="text-[14px] text-[#EDEDF0]">
                GMT+3 (MSK)
              </div>
              <div className="text-[14px] text-[#8A8A96]">
                Гибкий график
              </div>
            </div>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-2">
                Языки
              </div>
              <div className="text-[14px] text-[#EDEDF0]">
                Русский (родной)
              </div>
              <div className="text-[14px] text-[#EDEDF0]">
                English (C1)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
