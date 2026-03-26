import { Award } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../App";

const certifications = [
  {
    org: "Deloitte",
    name: "Data Analytics Virtual Experience",
    color: "#86efac",
  },
  {
    org: "British Airways",
    name: "Data Science Job Simulation",
    color: "#93c5fd",
  },
  { org: "Cisco", name: "Introduction to Data Science", color: "#67e8f9" },
  {
    org: "Tata",
    name: "Data Visualisation: Empowering Business",
    color: "#fca5a5",
  },
  {
    org: "HP",
    name: "Life Skills & Professional Development",
    color: "#c4b5fd",
  },
  { org: "IBM", name: "Python for Data Science & AI", color: "#fdba74" },
  { org: "Google", name: "Advanced Data Analytics", color: "#86efac" },
  { org: "Microsoft", name: "Azure Data Fundamentals", color: "#93c5fd" },
  { org: "Meta", name: "Introduction to Machine Learning", color: "#a5b4fc" },
  {
    org: "Amazon",
    name: "AWS Cloud Practitioner Essentials",
    color: "#fcd34d",
  },
  {
    org: "Coursera",
    name: "Machine Learning Specialization",
    color: "#67e8f9",
  },
  { org: "HackerRank", name: "SQL (Advanced) Certificate", color: "#86efac" },
  { org: "KPMG", name: "Data Analytics Consulting Virtual", color: "#c4b5fd" },
  {
    org: "Accenture",
    name: "Data Analytics & Visualization",
    color: "#93c5fd",
  },
  { org: "PwC", name: "Power BI Job Simulation", color: "#fdba74" },
  {
    org: "JPMorgan",
    name: "Quantitative Research Virtual Experience",
    color: "#fca5a5",
  },
];

// Duplicate for seamless loop
const doubled = [...certifications, ...certifications];

export default function CertificationCarousel() {
  const { isDark } = useTheme();

  return (
    <section
      id="certifications"
      className="py-20 lg:py-28"
      data-ocid="certifications.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{
              background: "rgba(59,130,246,0.1)",
              color: "#60a5fa",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            CERTIFICATIONS
          </div>
          <h2
            className={`font-display text-3xl lg:text-4xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Credentials &amp;{" "}
            <span className="text-gradient-blue">Recognition</span>
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: isDark ? "#64748b" : "#94a3b8" }}
          >
            16 certifications from industry-leading organizations
          </p>
        </motion.div>
      </div>

      {/* Carousel - full width */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to right, #0f172a, transparent)"
              : "linear-gradient(to right, #f1f5f9, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to left, #0f172a, transparent)"
              : "linear-gradient(to left, #f1f5f9, transparent)",
          }}
        />

        <div className="carousel-track py-2">
          {doubled.map((cert, i) => (
            <div
              key={`${cert.org}-${i}`}
              data-ocid={
                i < certifications.length
                  ? `certifications.item.${i + 1}`
                  : undefined
              }
              className={`flex-shrink-0 mx-3 p-4 rounded-2xl w-56 ${
                isDark ? "glass-card" : "glass-card-light"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${cert.color}20`,
                    border: `1px solid ${cert.color}40`,
                  }}
                >
                  <Award size={14} style={{ color: cert.color }} />
                </div>
                <span
                  className="text-xs font-bold"
                  style={{ color: cert.color }}
                >
                  {cert.org}
                </span>
              </div>
              <p
                className={`text-xs leading-tight font-medium ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
