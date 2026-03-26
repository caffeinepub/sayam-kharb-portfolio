import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../App";

export default function ContactFooter() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Contact CTA Section */}
      <section
        id="contact"
        className="py-20 lg:py-28"
        data-ocid="contact.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden ${
              isDark ? "glass-card" : "glass-card-light"
            }`}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest mb-4"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                GET IN TOUCH
              </div>
              <h2
                className={`font-display text-3xl lg:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Let&apos;s Build Something{" "}
                <span className="text-gradient-blue">Together</span>
              </h2>
              <p
                className="text-base mb-8 max-w-xl mx-auto"
                style={{ color: isDark ? "#94a3b8" : "#475569" }}
              >
                I&apos;m always open to discussing data analyst roles,
                collaborative projects, or just a good conversation about data
                and business strategy.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="mailto:kharbsayam@gmail.com"
                  data-ocid="contact.email.link"
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-slate-300 hover:border-cyber-blue hover:text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-slate-900"
                  }`}
                >
                  <Mail size={16} className="text-cyber-blue" />
                  <span className="text-sm">kharbsayam@gmail.com</span>
                </a>
                <a
                  href="tel:+918368694296"
                  data-ocid="contact.phone.link"
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-slate-300 hover:border-cyber-blue hover:text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-slate-900"
                  }`}
                >
                  <Phone size={16} className="text-cyber-blue" />
                  <span className="text-sm">+91-8368694296</span>
                </a>
                <div
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-slate-300"
                      : "bg-white border border-slate-200 text-slate-600"
                  }`}
                >
                  <MapPin size={16} className="text-cyber-blue" />
                  <span className="text-sm">New Delhi, India</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/say454545"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.github.link"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all glow-blue hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  }}
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sayam-kharb-839086340/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.linkedin.link"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                  }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t py-10 ${
          isDark ? "border-white/5" : "border-slate-200"
        }`}
        data-ocid="footer.panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="font-display font-bold mb-2">
                <span className={isDark ? "text-white" : "text-slate-900"}>
                  SAYAM KHARB
                </span>
                <br />
                <span className="text-cyber-blue text-xs tracking-widest">
                  DATA ANALYST
                </span>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: isDark ? "#64748b" : "#94a3b8" }}
              >
                Transforming raw data into strategic decisions for modern
                businesses.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: isDark ? "#64748b" : "#94a3b8" }}
              >
                Navigation
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-xs transition-colors ${
                        isDark
                          ? "text-slate-400 hover:text-white"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: isDark ? "#64748b" : "#94a3b8" }}
              >
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:kharbsayam@gmail.com"
                    className={`text-xs flex items-center gap-1.5 transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <Mail size={11} /> kharbsayam@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918368694296"
                    className={`text-xs flex items-center gap-1.5 transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <Phone size={11} /> +91-8368694296
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/say454545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs flex items-center gap-1.5 transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <Github size={11} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sayam-kharb-839086340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs flex items-center gap-1.5 transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <Linkedin size={11} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Tagline */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: isDark ? "#64748b" : "#94a3b8" }}
              >
                Mission
              </h4>
              <p
                className="text-xs leading-relaxed font-display font-bold"
                style={{ color: isDark ? "#3b82f6" : "#2563eb" }}
              >
                DATA DRIVEN
                <br />
                SOLUTIONS
              </p>
              <p
                className="text-xs mt-3"
                style={{ color: isDark ? "#475569" : "#94a3b8" }}
              >
                New Delhi, India
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{
              borderColor: isDark
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.06)",
            }}
          >
            <p
              className="text-xs"
              style={{ color: isDark ? "#475569" : "#94a3b8" }}
            >
              © {year} Sayam Kharb. All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: isDark ? "#475569" : "#94a3b8" }}
            >
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-blue hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
