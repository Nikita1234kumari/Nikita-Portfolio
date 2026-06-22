"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "PowerGuard AI",
    subtitle: "CNN-based Disturbance Classifier",
    emoji: "⚡",
    color: "#fbbf24",
    tags: ["Python", "TensorFlow", "CNN", "Signal Processing"],
    description:
      "Deep learning model achieving 99.71% accuracy for classifying power quality disturbances. Presented at IEEE SeFet 2025 and published in IJSCI journal.",
    highlights: [
      "99.71% classification accuracy",
      "IEEE Conference presentation",
      "IJSCI journal published",
      "Custom data preprocessing pipeline",
    ],
    github: "https://github.com/Nikita1234kumari/PowerGuard-AI",
    demo: "#",
    type: "ML / Research",
  },
  {
    id: 2,
    title: "Wanderlust",
    subtitle: "Airbnb-Inspired Rental Platform",
    emoji: "🏡",
    color: "#ff6b9d",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
    description:
      "Full-stack Airbnb clone with complete CRUD, authentication, RESTful routing, server-side rendering and Mongoose-powered DB operations.",
    highlights: [
      "Full CRUD functionality",
      "RESTful API design",
      "MongoDB + Mongoose ODM",
      "Responsive Bootstrap UI",
    ],
    github:
      "https://github.com/Nikita1234kumari/Airbnb-inspired-rental-platform",
    demo: "https://airbnb-inspired-rental-platform.vercel.app",
    type: "Full Stack",
  },
  {
    id: 3,
    title: "Devbhoomi Trekker",
    subtitle: "Travel & Trekking Booking Site",
    emoji: "🏔️",
    color: "#67e8f9",
    tags: ["React", "Tailwind CSS", "React Router"],
    description:
      "Responsive trekking booking site with dynamic routing, reusable UI components, destination showcase and smooth navigation.",
    highlights: [
      "Dynamic React routing",
      "Reusable component library",
      "Tailwind responsive design",
      "Rich destination catalog",
    ],
    github: "https://github.com/Nikita1234kumari/Devbhoomi-Trekker",
    demo: "https://devbhoomi-trekker.vercel.app",
    type: "Frontend",
  },
  {
    id: 4,
    title: "Java Game Suite",
    subtitle: "4 Interactive Mini-Games",
    emoji: "🎮",
    color: "#c084fc",
    tags: ["Java", "OOP", "Swing"],
    description:
      "A collection of 4 interactive games including Tic Tac Toe and Rock Paper Scissors, built with OOP principles and modular Java architecture.",
    highlights: [
      "Tic Tac Toe with AI",
      "Rock Paper Scissors",
      "OOP design patterns",
      "User-friendly UI",
    ],
    github: "https://github.com/Nikita1234kumari/Java-Projects",
    demo: "#",
    type: "Desktop App",
  },
  {
    id: 5,
    title: "DevPortfolio Pro",
    subtitle: "Portfolio Template System",
    emoji: "✨",
    color: "#ff6b9d",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    description:
      "A dynamic portfolio generator with configurable themes, animations, and sections. Supports multiple layouts and color palettes.",
    highlights: [
      "Next.js App Router",
      "TypeScript throughout",
      "Framer Motion animations",
      "Dark/light themes",
    ],
    github: "#",
    demo: "#",
    type: "Frontend",
  },
  {
    id: 6,
    title: "JavaScript Mini Projects Collection",
    subtitle: "Interactive Web Apps & Games",
    emoji: "🚀",
    color: "#34d399",
    tags: ["JavaScript", "HTML", "CSS"],
    description:
      "A collection of JavaScript-based web applications and games showcasing front-end development skills, user interaction, and responsive design.",
    highlights: [
      "Calculator",
      "Connect Four Game",
      "E-commerce Website",
      "To-Do List App",
    ],
    github: "https://github.com/Nikita1234kumari/JavaScript-Mini-Projects",
    demo: "#",
    type: "Project Collection",
  },
];

const typeColors: Record<string, string> = {
  "ML / Research": "#fbbf24",
  "Full Stack": "#ff6b9d",
  Frontend: "#67e8f9",
  "Desktop App": "#c084fc",
};

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "Frontend",
    "Full Stack",
    "ML / Research",
    "Desktop App",
  ];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(255,107,157,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--rose)",
              fontWeight: 600,
            }}
          >
            What I&apos;ve built
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginTop: "12px",
              letterSpacing: "-1px",
            }}
          >
            <span style={{ color: "var(--text)" }}>Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              marginTop: "12px",
            }}
          >
            Hover cards to flip — click to see full details ✨
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  filter === f ? "rgba(255,107,157,0.15)" : "transparent",
                border: `1px solid ${filter === f ? "rgba(255,107,157,0.4)" : "rgba(255,255,255,0.08)"}`,
                color: filter === f ? "#ff6b9d" : "var(--text-muted)",
                padding: "7px 18px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flip-card"
                style={{ height: "280px", cursor: "pointer" }}
                onClick={() => setSelected(project)}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div
                    className="flip-card-front"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background glow */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-30px",
                        right: "-30px",
                        width: "120px",
                        height: "120px",
                        background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`,
                        borderRadius: "50%",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "16px",
                        }}
                      >
                        <span style={{ fontSize: "36px" }}>
                          {project.emoji}
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontWeight: 600,
                            background: `${typeColors[project.type] ?? "#fff"}18`,
                            color: typeColors[project.type] ?? "#fff",
                            border: `1px solid ${typeColors[project.type] ?? "#fff"}30`,
                          }}
                        >
                          {project.type}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "var(--text)",
                          marginBottom: "6px",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                          marginBottom: "16px",
                          lineHeight: 1.5,
                        }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "11px",
                            padding: "3px 10px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "4px",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "16px",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.2)",
                      }}
                    >
                      hover to flip →
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="flip-card-back"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}18, rgba(10,10,15,0.98))`,
                      border: `1px solid ${project.color}40`,
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: project.color,
                          marginBottom: "10px",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                          marginBottom: "14px",
                        }}
                      >
                        {project.description}
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {project.highlights.slice(0, 3).map((h) => (
                          <li
                            key={h}
                            style={{
                              fontSize: "12px",
                              color: "var(--text-muted)",
                              display: "flex",
                              gap: "8px",
                              alignItems: "flex-start",
                            }}
                          >
                            <span style={{ color: project.color }}>✓</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(project);
                        }}
                        style={{
                          flex: 1,
                          background: project.color,
                          color: "#000",
                          border: "none",
                          padding: "9px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--surface)",
                border: `1px solid ${selected.color}30`,
                borderRadius: "24px",
                padding: "40px",
                maxWidth: "560px",
                width: "100%",
                position: "relative",
                boxShadow: `0 0 60px ${selected.color}20`,
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "none",
                  color: "var(--text-muted)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>

              <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                {selected.emoji}
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  background: `${selected.color}18`,
                  color: selected.color,
                  border: `1px solid ${selected.color}30`,
                  marginBottom: "12px",
                }}
              >
                {selected.type}
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--text)",
                  marginBottom: "6px",
                }}
              >
                {selected.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: selected.color,
                  marginBottom: "16px",
                }}
              >
                {selected.subtitle}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {selected.description}
              </p>
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--rose)",
                    fontWeight: 600,
                    marginBottom: "12px",
                    letterSpacing: "0.5px",
                  }}
                >
                  KEY HIGHLIGHTS
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {selected.highlights.map((h) => (
                    <div
                      key={h}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        background: "rgba(255,255,255,0.03)",
                        padding: "8px 14px",
                        borderRadius: "8px",
                      }}
                    >
                      <span style={{ color: selected.color }}>▹</span> {h}
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "28px",
                }}
              >
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      padding: "5px 12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "6px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={selected.github}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "var(--text)",
                    padding: "12px",
                    borderRadius: "10px",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  GitHub →
                </a>
                {selected.demo && selected.demo !== "#" && (
                  <a
                    href={selected.demo}
                    style={{
                      flex: 1,
                      background: selected.color,
                      color: "#000",
                      padding: "12px",
                      borderRadius: "10px",
                      textAlign: "center",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
