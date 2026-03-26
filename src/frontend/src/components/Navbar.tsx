import { Download, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../App";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? (isDark ? "glass-nav" : "glass-nav-light") : "bg-transparent"
      }`}
      data-ocid="navbar.panel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="font-display font-bold text-sm leading-none">
              <span className={isDark ? "text-white" : "text-slate-900"}>
                SAYAM KHARB
              </span>
              <br />
              <span className="text-cyber-blue text-xs tracking-widest">
                DATA ANALYST
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex">
            <div
              className={`flex items-center gap-1 px-4 py-2 rounded-full ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-slate-100/80 border border-slate-200"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/assets/uploads/resume_2.o_1-019d2b62-3cb8-70dd-a45c-ac09855e95a5-1.pdf"
              download
              data-ocid="navbar.download_cv.button"
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                isDark
                  ? "border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white"
                  : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Download size={14} />
              Download CV
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              data-ocid="navbar.theme.toggle"
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-white/10 text-slate-300 hover:text-white hover:bg-white/20"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-white/10 text-white"
                  : "bg-slate-100 text-slate-900"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 rounded-full ${isDark ? "bg-white" : "bg-slate-800"}`}
                />
                <span
                  className={`block h-0.5 rounded-full ${isDark ? "bg-white" : "bg-slate-800"}`}
                />
                <span
                  className={`block h-0.5 rounded-full ${isDark ? "bg-white" : "bg-slate-800"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className={`lg:hidden py-4 rounded-2xl mb-2 ${isDark ? "glass-nav" : "glass-nav-light"}`}
            data-ocid="navbar.mobile.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
