import { useState, useEffect } from "react";

const categories = [
  {
    id: "languages",
    label: "Languages",
    color: "#3b82f6",
    skills: ["Python", "TypeScript", "JavaScript",  "SQL"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    color: "#a855f7",
    skills: [ "React Native", "React", "Next.js", "Spring Boot", "Node.js"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#f97316",
    skills: ["AWS", "Docker",  "GitLab CI", ],
  },
 
  {
    id: "ai",
    label: "AI & Emerging",
    color: "#22c55e",
    skills: [
      "Business AI Automations",
      "Prompt Engineering",
      "Machine Learning",
    ],
  },
];

function SkillPill({ label, accentColor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 18px",
        borderRadius: "8px",
        border: `1px solid ${
          hovered ? accentColor : "rgba(255,255,255,0.1)"
        }`,
        borderLeft: `3px solid ${accentColor}`,
        background: hovered
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.04)",
        color: "#e5e7eb",
        fontSize: "14px",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </div>
  );
}

function CategoryBlock({ category }) {
  return (
    <div
      style={{
        padding: "32px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(6px)",
        transition: "all 0.3s ease",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: 600,
          color: "#ffffff",
        }}
      >
        {category.label}
      </h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {category.skills.map((skill) => (
          <SkillPill
            key={skill}
            label={skill}
            accentColor={category.color}
          />
        ))}
      </div>
    </div>
  );
}

export default function TechnicalArsenal() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "120px 40px",
       
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "70px",
            color: "#ffffff",
          }}
        >
          Technical Arsenal
        </h2>

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(3, 1fr)",
            gap: "60px",
          }}
        >
          {categories.map((category) => (
            <CategoryBlock
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
