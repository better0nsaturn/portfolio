import Link from "next/link";
import type { Metadata } from "next";
import { typograph } from "@/lib/typograph";

export const metadata: Metadata = {
  title: "Обо мне — Арина Бражникова",
  description:
    "Middle Product Designer из Москвы. Опыт работы, навыки и образование.",
};

const experience = [
  {
    period: "ноябрь 2025 — настоящее время",
    role: "Motion / Visual Designer",
    company: "АНО «Верхняя Волга медиа»",
    bullets: [
      "Развиваю экспертизу в моушен-дизайне: разрабатываю анимационные заставки, эфирную графику и визуальный контент для ТВ- и digital-форматов; выстраиваю иерархию, ритм и акценты для удержания внимания. Контент способствовал росту вовлечённости аудитории.",
      "Привлечена медиахолдингом к продуктовому проекту на этапе запуска — поддерживаю экспертизу продуктового дизайнера параллельно с моушен-задачами.",
    ],
  },
  {
    period: "декабрь 2023 — ноябрь 2025",
    role: "Middle Product Designer",
    company: "Дизайн-студия AIC",
    bullets: [
      "Проектировала web и mobile продукты для лидеров рынка в automotive, финтехе, медтехе и G2C: вела задачи end-to-end — research → CJM/JTBD → user flows → wireframes → prototyping → UI → handoff. Параллельно работала со стратегическими концептами и тестовыми задачами от крупных компаний.",
      "Дизайн-системы и масштабирование: собирала UI-киты и шаблоны страниц для продукта, работающего в 5+ рынках СНГ, что сокращало время запуска новых страниц и упрощало локализацию.",
      "Спроектировала с нуля единое приложение настроек для электромобиля АТОМ — объединила 7 разрозненных модулей и десятки функций в единую ИА; концепция главного экрана на руле прошла юзабилити-тест в реальном тест-драйве и была утверждена в разработку. Целевые метрики: ↑ Settings Discoverability, ↓ Time-to-Setting.",
      "Сайт Радиомедсинтеза (B2B-медтех), в концепции которого я участвовала, получил две награды Tagline Awards 2024: золото («Лучший сайт об услугах») и бронзу («Лучший корпоративный сайт»).",
      "За 3 недели провела CJM, дизайн-аудит (15 UX-проблем), валидацию гипотез интервью и конкурентный анализ для финтех-проекта в сжатых сроках; работала с G2C-продуктами Правительства Москвы — от исследования до новой ИА и UX-концепции с целевыми метриками ↑ Trust Score и ↑ Auth Conversion.",
      "Менторила джуниор-дизайнеров; участвовала в развитии дизайн-культуры юнита.",
    ],
  },
  {
    period: "апрель 2023 — декабрь 2023",
    role: "UI/UX Designer",
    company: "Фриланс",
    bullets: [
      "Разрабатывала web-интерфейсы для клиентов из разных индустрий: исследовала сценарии, создавала вайрфреймы, прототипы и UI.",
    ],
  },
  {
    period: "ноябрь 2021 — сентябрь 2022",
    role: "Designer",
    company: "BCNL Foundation",
    bullets: [
      "Создавала дизайн для digital-каналов (Instagram, LinkedIn, Twitter); помогала формировать визуальный стиль НКО.",
    ],
  },
];

const education = [
  {
    period: "сентябрь 2020 — июнь 2023",
    institution: "Maastricht University",
    degree: "BA · Digital Society",
    description:
      "Программа изучает влияние цифровых технологий на общество, культуру и политику, обучая критически оценивать как преимущества, так и вызовы цифровизации.",
  },
  {
    period: "сентябрь 2022 — январь 2023",
    institution: "Yonsei University",
    degree: "Study Abroad · Media Communications",
    description:
      "Программа академического обмена в одном из ведущих университетов Южной Кореи. Изучала медиакоммуникации, углубилась в особенности цифрового дизайна и кросс-культурных коммуникаций.",
  },
];

const skills = [
  "Product Design",
  "UX/UI Design",
  "User Research",
  "Юзер тесты",
  "CJM",
  "JTBD",
  "User Flows",
  "Информационная архитектура",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "UI киты",
  "UX Writing",
  "Работа с продуктовыми метриками",
  "Web и Mobile (iOS / Android)",
  "Motion Design",
  "Коммуникация со стейкхолдерами",
  "Менторинг",
];

const tools = [
  "Figma",
  "Miro",
  "Jira",
  "Notion",
  "Sketch",
  "Readymag",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "ClickUp",
  "Codex",
  "Claude Code",
];

export default function AboutPage() {
  return (
    <div className="relative content-with-nav">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 dot-grid"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
        }}
      />

      {/* Header */}
      <section className="px-6 pt-20 md:pt-28 pb-14 md:pb-20">
        {/* Big page heading */}
        <h1
          className="font-semibold text-[#EDEDF0] anim-in"
          style={{
            fontSize: "clamp(2rem, 6vw, 5.375rem)",
            lineHeight: "1.047",
            letterSpacing: "-0.03em",
          }}
        >
          Обо мне
        </h1>

        {/* Photo + Bio side by side, 3-col grid so photo is ~1.5x narrower */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mt-8 items-start">
          {/* Portrait — 1 col (smaller) */}
          <div className="anim-in anim-delay-1 md:col-span-1">
            <div
              className="rounded-3xl overflow-hidden aspect-[4/5]"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/arina.jpg"
                alt="Арина Бражникова"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Bio — 2 cols */}
          <div className="anim-in anim-delay-2 md:col-span-2 flex flex-col justify-center">
            <h2
              className="font-semibold text-[#EDEDF0]"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 3.375rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                marginBottom: "clamp(1rem, 2vw, 1.75rem)",
              }}
            >
              Привет.<br />Я Арина.
            </h2>

            <p
              className="text-[#EDEDF0]"
              style={{
                fontSize: "clamp(1rem, 1.7vw, 1.5rem)",
                lineHeight: "1.167",
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              {typograph("Продуктовый дизайнер с 3 годами опыта в проектировании сложных web и mobile продуктов в automotive, финтехе, медтехе и государственных сервисах. Веду задачи end-to-end: от исследований и информационной архитектуры до прототипирования, UI и передачи в разработку. Опираю решения на исследования и продуктовые гипотезы, мыслю в продуктовых метриках. Сильная сторона — экспертиза в моушен-дизайне: умею проектировать не только статичные интерфейсы, но и поведение системы, переходы и микроанимации, которые усиливают UX и удержание внимания.")}
            </p>

            <div className="mt-8">
              <Link
                href="/contacts"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "#EDEDF0", color: "#08080A" }}
              >
                <span className="text-[14px] font-semibold">Связаться</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-3">
            <span className="block text-[12px] font-semibold tracking-[0.16em] uppercase text-[#A7A7B6]">
              — Опыт работы
            </span>
          </div>
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {experience.map((exp, i) => (
            <div
              key={i}
              className="p-6 md:p-8 grid md:grid-cols-4 gap-4 md:gap-6"
              style={{
                background: "rgba(14,14,18,0.5)",
                borderBottom: i < experience.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div className="md:col-span-1">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#A7A7B6] leading-relaxed">
                  {exp.period}
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="text-[16px] font-semibold text-[#EDEDF0] mb-1">
                  {exp.role}
                </div>
                <div className="text-[14px] text-[#A7A7B6] mb-3">{exp.company}</div>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[#EDEDF0]"
                      style={{ fontSize: "16px", lineHeight: "1.4", letterSpacing: "-0.02em" }}
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full flex-shrink-0 mt-[8px]"
                        style={{ background: "#7A7A86" }}
                      />
                      <span>{typograph(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-3">
            <span className="block text-[12px] font-semibold tracking-[0.16em] uppercase text-[#A7A7B6]">
              — Образование
            </span>
          </div>
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-6 md:p-8 grid md:grid-cols-4 gap-4 md:gap-6"
              style={{
                background: "rgba(14,14,18,0.5)",
                borderBottom: i < education.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div className="md:col-span-1">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#A7A7B6] leading-relaxed">
                  {edu.period}
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="text-[16px] font-semibold text-[#EDEDF0] mb-1">
                  {edu.institution}
                </div>
                <div className="text-[14px] text-[#A7A7B6] mb-3">{edu.degree}</div>
                <div
                  className="text-[#EDEDF0]"
                  style={{ fontSize: "16px", lineHeight: "18px", letterSpacing: "-0.02em" }}
                >
                  {typograph(edu.description)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills + Tools */}
      <section className="px-6 pb-20 md:pb-[80px]">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div
            className="rounded-2xl p-6 md:p-8 flex flex-col"
            style={{
              background: "rgba(14,14,18,0.5)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-4">
              Навыки
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-auto">
              {skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-[#EDEDF0]" style={{ fontSize: "16px", lineHeight: "18px", letterSpacing: "-0.02em" }}>
                  <span
                    className="inline-block w-1 h-1 rounded-full flex-shrink-0 mt-[8px]"
                    style={{ background: "#7A7A86" }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools + Language */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl p-6 md:p-8 flex-1 flex flex-col justify-end"
              style={{
                background: "rgba(14,14,18,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-4">
                Инструменты
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {tools.map((tool) => (
                  <li key={tool} className="flex items-start gap-2.5 text-[#EDEDF0]" style={{ fontSize: "16px", lineHeight: "18px", letterSpacing: "-0.02em" }}>
                    <span
                      className="inline-block w-1 h-1 rounded-full flex-shrink-0 mt-[8px]"
                      style={{ background: "#7A7A86" }}
                    />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(14,14,18,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A7A7B6] mb-3">
                Языки
              </div>
              <div className="text-[#EDEDF0]" style={{ fontSize: "16px", lineHeight: "18px", letterSpacing: "-0.02em" }}>
                Русский — родной
              </div>
              <div className="text-[#EDEDF0] mt-2" style={{ fontSize: "16px", lineHeight: "18px", letterSpacing: "-0.02em" }}>
                Английский (C1) — профессиональное владение
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
