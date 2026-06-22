"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "ML Research Intern",
    company: "NIT Silchar",
    period: "Dec 2024 – Jan 2025",
    type: "Internship",
    color: "#fbbf24",
    emoji: "🔬",
    certificateLink: "/certificates/nit-silchar-certificate.pdf",
    description:
      "Selected as a CS student for an interdisciplinary internship in the Electrical Engineering domain at one of India's premier NIT institutions.",
    points: [
      "Worked on data analysis and problem-solving using Python",
      "Applied computational techniques to real-world electrical systems",
      "Built a CNN model achieving 99.71% accuracy for power quality classification",
      "Presented research at IEEE SeFet 2025 international conference",
  ,
    ],
  },
  {
    id: 2,
    role: "Java Developer Intern",
    company: "InternPe",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    color: "#ff6b9d",
    emoji: "☕",
    certificateLink: "/certificates/internpe-certificate.pdf",
    description:
      "Developed multiple interactive Java-based applications, strengthening OOP skills and understanding of user-focused application design.",
    points: [
      "Built 4 interactive games using Java including Tic Tac Toe & Rock Paper Scissors",
      "Applied OOP principles to create modular, reusable code",
      "Improved debugging and problem-solving skills",
      "Designed intuitive user interfaces for game applications",
    ],
  },
];

const achievements = [
  {
    emoji: "🏆",
    title: "IEEE Conference ",
    desc: "Presented at SeFet 2025 International Conference",
    color: "#fbbf24",
  },
  {
    emoji: "📄",
    title: "Published Researcher",
    desc: "Paper published in IJSCI Journal, 2025",
    color: "#67e8f9",
  },
  {
    emoji: "🎓",
    title: "Academic Excellence",
    desc: "Scored 93.8% in Class X Boards",
    color: "#c084fc",
  },
  {
    emoji: "🤖",
    title: "ML Achievement",
    desc: "99.71% accuracy on CNN classification model",
    color: "#ff6b9d",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 0",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
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
            My Journey
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginTop: "12px",
              letterSpacing: "-1px",
            }}
          >
            <span style={{ color: "var(--text)" }}>Experience & </span>
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
          className="exp-grid"
        >
          {/* Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: "32px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              Work Experience
            </motion.h3>

            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background:
                    "linear-gradient(to bottom, #ff6b9d, #c084fc, transparent)",
                }}
              />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{
                    paddingLeft: "56px",
                    paddingBottom: "40px",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "8px",
                      width: "20px",
                      height: "20px",
                      background: exp.color,
                      borderRadius: "50%",
                      boxShadow: `0 0 16px ${exp.color}80`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      border: "2px solid var(--surface)",
                    }}
                  >
                    <span style={{ fontSize: "8px" }}>{exp.emoji}</span>
                  </div>

                  <motion.div
                    whileHover={{ x: 6 }}
                    style={{
                      background: "var(--bg)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      padding: "20px",
                      transition: "border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        `${exp.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "8px",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "var(--text)",
                          }}
                        >
                          {exp.role}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: exp.color,
                            fontWeight: 500,
                            marginTop: "2px",
                          }}
                        >
                          {exp.company}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "4px 10px",
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                          borderRadius: "6px",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        marginBottom: "14px",
                      }}
                    >
                      {exp.description}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {exp.points.map((p) => (
                        <li
                          key={p}
                          style={{
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            display: "flex",
                            gap: "8px",
                            alignItems: "flex-start",
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: exp.color, marginTop: "1px" }}>
                            ▹
                          </span>{" "}
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: "16px" }}>
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "10px 16px",
                          background: exp.color,
                          color: "#000",
                          textDecoration: "none",
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        📜 View Certificate
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: "32px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Achievements & Awards
            </motion.h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ x: -4, scale: 1.02 }}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "14px",
                    padding: "18px 20px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      flexShrink: 0,
                      background: `${ach.color}18`,
                      border: `1px solid ${ach.color}30`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    {ach.emoji}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: "3px",
                      }}
                    >
                      {ach.title}
                    </div>
                    <div
                      style={{ fontSize: "12px", color: "var(--text-muted)" }}
                    >
                      {ach.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,107,157,0.1) 0%, rgba(192,132,252,0.1) 100%)",
                border: "1px solid rgba(255,107,157,0.2)",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div style={{ fontSize: "18px", marginBottom: "12px" }}>🎓</div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "6px",
                }}
              >
                Quantum University, Roorkee
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#ff6b9d",
                  marginBottom: "8px",
                }}
              >
                B.Tech — Computer Science Engineering
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                2023 – 2027 · Currently in final year
                <br />
                Focused on full-stack development.
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
