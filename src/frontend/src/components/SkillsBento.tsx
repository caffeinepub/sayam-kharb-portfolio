import { Code2, FlaskConical, Library, Users } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../App";

const skillGroups = [
  {
    icon: Code2,
    title: "Core Tools",
    color: "#3b82f6",
    skills: ["Python", "SQL", "Power BI", "Tableau", "Excel"],
    span: "lg:col-span-2",
    desc: "Primary data stack for analysis and visualization",
  },
  {
    icon: Library,
    title: "Libraries & Frameworks",
    color: "#22d3ee",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    span: "",
    desc: "Python ecosystem for data science",
  },
  {
    icon: FlaskConical,
    title: "Methods & Techniques",
    color: "#a78bfa",
    skills: [
      "EDA",
      "Data Cleaning",
      "Forecasting",
      "Automation",
      "K-Means Clustering",
      "NLP",
    ],
    span: "",
    desc: "Analytical approaches I apply regularly",
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "#34d399",
    skills: [
      "Problem-solving",
      "Communication",
      "Team Collaboration",
      "Strategic Thinking",
      "Presentation",
    ],
    span: "lg:col-span-2",
    desc: "Bridging technical depth with business communication",
  },
];

export default function SkillsBento() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-20 lg:py-28" data-ocid="skills.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{
              background: "rgba(59,130,246,0.1)",
              color: "#60a5fa",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            THE DATA LAB
          </div>
          <h2
            className={`font-display text-3xl lg:text-4xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            My <span className="text-gradient-blue">Skill Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map(
            ({ icon: Icon, title, color, skills, span, desc }, i) => (
              <motion.div
                key={title}
                data-ocid={`skills.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`${
                  isDark ? "glass-card" : "glass-card-light"
                } p-6 rounded-2xl cursor-default ${span}`}
              >
                {/* Icon badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${color}20`,
                      border: `1px solid ${color}40`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-semibold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        color: isDark ? color : color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
