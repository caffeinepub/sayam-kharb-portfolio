import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../App";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Tech Analytics Co.",
    period: "2024 – Present",
    type: "Full-time Internship",
    color: "#3b82f6",
    icon: Briefcase,
    bullets: [
      "Cleaned and preprocessed large datasets reducing data errors by 35%",
      "Built interactive Power BI dashboards for real-time KPI tracking",
      "Automated weekly reporting workflows using Python, saving 8+ hours/week",
      "Performed exploratory data analysis to surface actionable business insights",
    ],
    tags: ["Python", "Power BI", "SQL", "Automation"],
  },
  {
    role: "Marketing Intern",
    company: "Digital Growth Agency",
    period: "2023 – 2024",
    type: "Summer Internship",
    color: "#22d3ee",
    icon: TrendingUp,
    bullets: [
      "Analyzed sales data to identify high-performing campaigns across regions",
      "Mapped customer behavior patterns using Excel pivot tables and dashboards",
      "Contributed to strategy reports that improved conversion rates by 18%",
      "Collaborated cross-functionally to align data findings with marketing goals",
    ],
    tags: ["Excel", "Tableau", "Market Analysis", "Strategy"],
  },
];

export default function ExperienceTimeline() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className="py-20 lg:py-28"
      data-ocid="experience.section"
    >
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
            EXPERIENCE
          </div>
          <h2
            className={`font-display text-3xl lg:text-4xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Professional <span className="text-gradient-blue">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #3b82f6, #22d3ee, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-12">
            {experiences.map(
              (
                {
                  role,
                  company,
                  period,
                  type,
                  color,
                  icon: Icon,
                  bullets,
                  tags,
                },
                i,
              ) => (
                <motion.div
                  key={role}
                  data-ocid={`experience.item.${i + 1}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    i % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-white top-6 z-10 -translate-x-1/2"
                    style={{
                      background: color,
                      boxShadow: `0 0 12px ${color}80`,
                    }}
                  />

                  {/* Left column: Role info */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      i % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: `${color}20`,
                          border: `1px solid ${color}40`,
                        }}
                      >
                        <Icon size={14} style={{ color }} />
                      </div>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          background: `${color}15`,
                          color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {type}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-display font-bold mb-1 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {role}
                    </h3>
                    <p className="font-medium" style={{ color }}>
                      {company}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 md:justify-end">
                      <Calendar
                        size={12}
                        style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                      >
                        {period}
                      </span>
                    </div>
                  </div>

                  {/* Right column: Details */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pl-12"
                        : "md:col-start-1 md:row-start-1 md:text-right md:pr-12"
                    }`}
                  >
                    <div
                      className={`p-5 rounded-2xl ${
                        isDark ? "glass-card" : "glass-card-light"
                      }`}
                    >
                      <ul className="space-y-2 mb-4">
                        {bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: isDark ? "#94a3b8" : "#475569" }}
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                              style={{ background: color }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: `${color}15`,
                              color,
                              border: `1px solid ${color}25`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
