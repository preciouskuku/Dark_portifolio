import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Entry",
    description:
      "Secure microfinance platform connecting individuals to financial institutions. Handling 10k+ daily transactions with Python & Django.",
    tags: ["Python", "Django", "Next.js"],
    tagColor: "#38bdf8",
    image: null,
    bgGradient:
      "linear-gradient(135deg, #0f1f35 0%, #0d1b2e 50%, #111827 100%)",
    iconBg: "rgba(59,130,246,0.15)",
    accentColor: "#3b82f6",
    github: "https://github.com",
    live: "#",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Gumi's Shine & Thrive",
    description:
      "Modern wellness platform featuring booking systems and mobile-first design for a Personal Coaching Service in Australia.",
    tags: ["React", "Tailwind", "Node"],
    tagColor: "#c084fc",
    image: null,
    bgGradient:
      "linear-gradient(135deg, #1a0a2e 0%, #160d28 50%, #1e0a35 100%)",
    iconBg: "rgba(168,85,247,0.15)",
    accentColor: "#a855f7",
    github: "https://github.com",
    live: "#",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "EduTrack",
    description:
      "Student management system for tracking academic progress, assignments, and performance analytics across institutions.",
    tags: ["Next.js", "PostgreSQL", "Python"],
    tagColor: "#f97316",
    image: null,
    bgGradient:
      "linear-gradient(135deg, #1a0a0a 0%, #2a1010 50%, #1f0f0a 100%)",
    iconBg: "rgba(249,115,22,0.15)",
    accentColor: "#f97316",
    github: "https://github.com",
    live: "#",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "AutoFlow AI",
    description:
      "Business automation platform powered by LangChain and GPT. Reduces manual workflows by 70% for SMEs using AI agents.",
    tags: ["LangChain", "Python", "React"],
    tagColor: "#22c55e",
    image: null,
    bgGradient:
      "linear-gradient(135deg, #021a0f 0%, #041f12 50%, #071a10 100%)",
    iconBg: "rgba(34,197,94,0.15)",
    accentColor: "#22c55e",
    github: "https://github.com",
    live: "#",
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
];

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "#0d1524",
        border: `1px solid ${hovered ? project.accentColor + "55" : "rgba(255,255,255,0.08)"}`,
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.3s ease",
        animation: "fadeSlideUp 0.6s ease both",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* TOP */}
      <div
        style={{
          height: "220px",
          background: project.bgGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: project.iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {project.icon}
        </div>

        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            display: "flex",
            gap: "8px",
            opacity: hovered ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          <a href={project.github} target="_blank" rel="noreferrer">
            <Github size={18} color="white" />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer">
            <ExternalLink size={18} color="white" />
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "24px" }}>
        <h3 style={{ color: "#fff", marginBottom: "10px" }}>{project.title}</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "16px" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ color: project.tagColor, fontSize: "13px" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorks() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&family=Space+Mono:wght@700&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-wrapper {
          padding: 72px 64px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .section-wrapper {
            padding: 48px 20px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="section-wrapper" style={{ minHeight: "100vh", background: "#040d1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
            <span style={{ color: "#38bdf8", fontFamily: "Space Mono" }}>03.</span>
            <h2 style={{ color: "#fff", fontFamily: "DM Sans" }}>Featured Works</h2>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
