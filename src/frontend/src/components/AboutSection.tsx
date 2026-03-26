import { Brain, Database, LineChart, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../App";

const highlights = [
  {
    icon: Brain,
    label: "Strategic Thinking",
    desc: "Business intelligence meets analytical depth",
  },
  {
    icon: Database,
    label: "Data Engineering",
    desc: "SQL, Python, ETL pipelines & automation",
  },
  {
    icon: LineChart,
    label: "Visual Storytelling",
    desc: "Power BI, Tableau & interactive dashboards",
  },
  {
    icon: Zap,
    label: "Fast Execution",
    desc: "Turning insights into decisions rapidly",
  },
];

export default function AboutSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28"
      data-ocid="about.section"
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
            ABOUT ME
          </div>
          <h2
            className={`font-display text-3xl lg:text-4xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            The Bridge Between Data &amp;{" "}
            <span className="text-gradient-blue">Decisions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: isDark ? "#94a3b8" : "#475569" }}
            >
              I bridge the gap between raw data and real decisions. With a
              foundation in Business Intelligence &amp; Analytics and hands-on
              expertise in Python, SQL, Power BI, and Tableau, I transform messy
              datasets into clear, actionable narratives.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: isDark ? "#94a3b8" : "#475569" }}
            >
              Whether it&apos;s automating workflows, building interactive
              dashboards, or uncovering hidden customer patterns, I combine
              technical precision with strategic business thinking to deliver
              insights that matter to the boardroom.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Python",
                "SQL",
                "Power BI",
                "Tableau",
                "Data Science",
                "Machine Learning",
              ].map((tag) => (
                <span
                  key={tag}
                  className={
                    isDark ? "skill-pill" : "skill-pill skill-pill-light"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-5 rounded-2xl cursor-default ${
                  isDark ? "glass-card" : "glass-card-light"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.3)",
                  }}
                >
                  <Icon size={18} className="text-cyber-blue" />
                </div>
                <h3
                  className={`text-sm font-semibold mb-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {label}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
