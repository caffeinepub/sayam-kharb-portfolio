import { BarChart3, Bot, ExternalLink, GitBranch, Users } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../App";

const projects = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    subtitle: "Power BI",
    desc: "Interactive KPIs and regional trend analysis using advanced DAX formulas. Real-time drill-down capabilities across product categories and geographies.",
    tags: ["Power BI", "DAX", "Data Modeling", "SQL"],
    icon: BarChart3,
    color: "#3b82f6",
    gradient: "from-blue-600/20 to-blue-900/20",
    chartType: "bar",
  },
  {
    id: 2,
    title: "Customer Behavior Analysis",
    subtitle: "Python & SQL",
    desc: "Deep-dive user segmentation and retention analysis. Identified high-value cohorts and churn risk factors using SQL aggregations and Python visualizations.",
    tags: ["Python", "SQL", "Pandas", "Matplotlib"],
    icon: Users,
    color: "#22d3ee",
    gradient: "from-cyan-500/20 to-teal-900/20",
    chartType: "line",
  },
  {
    id: 3,
    title: "Customer Segmentation",
    subtitle: "Machine Learning",
    desc: "K-Means clustering implementation to segment customers into behavioral groups. Enabled targeted marketing campaigns with 24% higher engagement.",
    tags: ["Scikit-learn", "K-Means", "NumPy", "EDA"],
    icon: GitBranch,
    color: "#a78bfa",
    gradient: "from-violet-500/20 to-purple-900/20",
    chartType: "scatter",
  },
  {
    id: 4,
    title: "ChatGPT Python Assistant",
    subtitle: "NLP & Automation",
    desc: "NLP-driven automation tool leveraging OpenAI API to streamline repetitive analytical queries. Reduced manual reporting time by 60%.",
    tags: ["Python", "OpenAI API", "NLP", "Automation"],
    icon: Bot,
    color: "#34d399",
    gradient: "from-emerald-500/20 to-green-900/20",
    chartType: "area",
  },
];

const barHeights = [20, 45, 30, 60, 40, 55, 35, 50];
const scatterPts: [number, number][] = [
  [10, 45],
  [25, 20],
  [40, 38],
  [55, 15],
  [65, 30],
  [80, 10],
  [90, 25],
  [105, 40],
  [30, 50],
  [70, 48],
];

function MiniChart({
  type,
  color,
  title,
}: { type: string; color: string; title: string }) {
  if (type === "bar") {
    return (
      <svg
        viewBox="0 0 120 60"
        className="w-full h-full"
        role="img"
        aria-label={title}
      >
        {barHeights.map((h, i) => (
          <rect
            // biome-ignore lint/suspicious/noArrayIndexKey: static immutable chart data
            key={`bar-${i}`}
            x={i * 14 + 4}
            y={60 - h}
            width="10"
            height={h}
            fill={color}
            opacity={0.6 + i * 0.05}
            rx="2"
          />
        ))}
      </svg>
    );
  }
  if (type === "line") {
    return (
      <svg
        viewBox="0 0 120 60"
        className="w-full h-full"
        role="img"
        aria-label={title}
      >
        <polyline
          points="0,50 20,35 40,42 60,20 80,28 100,15 120,22"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.8"
        />
        <polyline
          points="0,50 20,35 40,42 60,20 80,28 100,15 120,22 120,60 0,60"
          fill={color}
          opacity="0.1"
        />
      </svg>
    );
  }
  if (type === "scatter") {
    return (
      <svg
        viewBox="0 0 120 60"
        className="w-full h-full"
        role="img"
        aria-label={title}
      >
        {scatterPts.map(([x, y], i) => (
          <circle
            key={`pt-${x}-${y}`}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 5 : 3}
            fill={color}
            opacity={0.7}
          />
        ))}
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 120 60"
      className="w-full h-full"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,55 C20,35 40,45 60,25 S90,10 120,20 L120,60 L0,60 Z"
        fill="url(#areaGrad)"
      />
      <path
        d="M0,55 C20,35 40,45 60,25 S90,10 120,20"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.9"
      />
    </svg>
  );
}

export default function ProjectsBento() {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className="py-20 lg:py-28"
      data-ocid="projects.section"
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
            PROJECTS
          </div>
          <h2
            className={`font-display text-3xl lg:text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Data Projects &amp;{" "}
            <span className="text-gradient-blue">Case Studies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(
            (
              {
                id,
                title,
                subtitle,
                desc,
                tags,
                icon: Icon,
                color,
                gradient,
                chartType,
              },
              i,
            ) => (
              <motion.div
                key={id}
                data-ocid={`projects.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group ${isDark ? "glass-card" : "glass-card-light"} rounded-2xl overflow-hidden cursor-default`}
              >
                <div
                  className={`h-32 bg-gradient-to-br ${gradient} flex items-end justify-center px-4 pb-2 overflow-hidden`}
                  style={{ borderBottom: `1px solid ${color}20` }}
                >
                  <div className="w-full h-20 opacity-80">
                    <MiniChart type={chartType} color={color} title={title} />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${color}20`,
                          border: `1px solid ${color}40`,
                        }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <h3
                          className={`text-sm font-semibold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
                        >
                          {title}
                        </h3>
                        <span className="text-xs" style={{ color }}>
                          {subtitle}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-ocid={`projects.link.button.${i + 1}`}
                      className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `${color}15`, color }}
                      aria-label={`View ${title}`}
                    >
                      <ExternalLink size={14} />
                    </button>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: isDark ? "#94a3b8" : "#475569" }}
                  >
                    {desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          background: `${color}12`,
                          color,
                          border: `1px solid ${color}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
