import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WebScrapper",
    description: "My project using Python to scrape job data.",
    code: "https://github.com/preciouskuku/web-scrapper.git",
    demo: "",
    image: "/imgs/web scrapper.jpg",
    tags: ["Python", "BeautifulSoup", "Pandas"],
    accentColor: "#38bdf8",
  },
  {
    title: "Buildlink Zimbabwe",
    description: "A construction website for services and suppliers.",
    code: "https://github.com/preciouskuku/buildlink-website.git",
    demo: "",
    image: "/imgs/buildlnk.jpg",
    tags: ["React", "CSS", "JavaScript"],
    accentColor: "#c084fc",
  },
  {
    title: "Crop Detection App",
    description:
      "A smart farming app that detects crop diseases using AI and provides treatment suggestions.",
    code: "https://github.com/preciouskuku/plant-iq",
    demo: "https://plant-iq-rho.vercel.app/",
    image: "/imgs/PlantIQ - Google Chrome 9_3_2025 1_21_25 PM.png",
    tags: ["React", "AI", "TensorFlow", "Python"],
    accentColor: "#22c55e",
  },
 
  {
    title: "Zimsisters Mobile App",
    description:
      "A mobile application for supporting girls during their menstrual journey.",
    code: "https://github.com/preciouskuku/Zimsisters",
    demo: "",
    image: "/imgs/Rectangle 4371.png",
    tags: ["React Native", "Expo"],
    accentColor: "#ec4899",
  },
  {
    title: "Parking Space Finder",
    description:
      "A web application that helps drivers find available parking spaces.",
    code: "https://github.com/preciouskuku/parking-finder",
    demo: "https://ty-6959.vercel.app/",
    image: "/imgs/parking.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#3b82f6",
  },
  {
    title: "Agrimo",
    description: "A agriculture website for a company called Agrimo.",
    code: "https://github.com/preciouskuku/agric",
    demo: "https://agric-flax.vercel.app/",
    image: "/imgs/agric.png",
    tags: ["React", "Node.js", "Tailwind"],
    accentColor: "#16a34a",
  },
  {
    title: "Buildit",
    description: "A construction website for services and suppliers.",
    code: "https://github.com/preciouskuku/buildit",
    demo: "https://agric-flax.vercel.app/",
    image: "/imgs/blue.png",
    tags: ["React", "Node.js", "Tailwind"],
    accentColor: "#0ea5e9",
  },
];

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    const link = project.demo || project.code;
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "#0d1524",
        border: `1px solid ${
          hovered
            ? project.accentColor + "66"
            : "rgba(255,255,255,0.08)"
        }`,
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.3s ease",
        animation: "fadeSlideUp 0.6s ease both",
        animationDelay: `${delay}ms`,
        cursor: "pointer",
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          height: "220px",
          background: `url(${project.image}) center/cover no-repeat`,
          position: "relative",
        }}
      >
        {/* ICON LINKS */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            display: "flex",
            gap: "10px",
            opacity: hovered ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} color="white" />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} color="white" />
            </a>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "24px" }}>
        <h3 style={{ color: "#fff", marginBottom: "10px" }}>
          {project.title}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            marginBottom: "16px",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                color: project.accentColor,
                fontSize: "13px",
              }}
            >
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

      <section className="section-wrapper" style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <span style={{ color: "#38bdf8" }}>03.</span>
            <h2 style={{ color: "#fff" }}>Featured Works</h2>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
