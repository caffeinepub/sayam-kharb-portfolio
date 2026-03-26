import { createContext, useContext, useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CertificationCarousel from "./components/CertificationCarousel";
import ContactFooter from "./components/ContactFooter";
import ExperienceTimeline from "./components/ExperienceTimeline";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsBento from "./components/ProjectsBento";
import SkillsBento from "./components/SkillsBento";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={isDark ? "hero-bg" : "hero-bg-light"}
        style={{ minHeight: "100vh" }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsBento />
          <ExperienceTimeline />
          <ProjectsBento />
          <CertificationCarousel />
          <ContactFooter />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
