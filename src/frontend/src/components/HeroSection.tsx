import {
  OrbitControls,
  PointMaterial,
  Points,
  Sphere,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ArrowDown, FileDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../App";

function GlobeParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.8 + Math.random() * 0.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function WireGlobe({ mousePos }: { mousePos: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { size } = useThree();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.05;
    }
    if (groupRef.current) {
      const targetX = (mousePos.y / size.height - 0.5) * 0.4;
      const targetY = (mousePos.x / size.width - 0.5) * 0.4;
      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y +=
        (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1.65, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
      <Sphere args={[1.4, 32, 32]}>
        <meshBasicMaterial color="#0b1220" transparent opacity={0.85} />
      </Sphere>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.52, 0.005, 8, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
      </mesh>
      <GlobeParticles />
    </group>
  );
}

export default function HeroSection() {
  const { isDark } = useTheme();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border w-fit"
              style={{
                background: "rgba(59,130,246,0.1)",
                borderColor: "rgba(59,130,246,0.3)",
                color: "#60a5fa",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              <span className="text-gradient-blue">Sayam Kharb:</span>
              <br />
              <span className={isDark ? "text-white" : "text-slate-900"}>
                Turning Raw Data into{" "}
                <span className="text-gradient-blue">Strategic Gold.</span>
              </span>
            </h1>

            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: isDark ? "#94a3b8" : "#475569" }}
            >
              BBA (Business Intelligence &amp; Analytics) @ KR Mangalam
              University (2023–2026). Bridging the gap between complex datasets
              and boardroom decisions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/assets/uploads/resume_2.o_1-019d2b62-3cb8-70dd-a45c-ac09855e95a5-1.pdf"
                download
                data-ocid="hero.download_resume.button"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all glow-blue hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                }}
              >
                <FileDown size={16} />
                Download Resume
              </a>
              <a
                href="#projects"
                data-ocid="hero.view_work.button"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium border transition-all hover:scale-105 ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                View My Work
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "15+", label: "Certifications" },
                { value: "4+", label: "Projects" },
                { value: "2+", label: "Internships" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`text-center p-3 rounded-2xl ${isDark ? "glass-card" : "glass-card-light"}`}
                >
                  <div className="text-2xl font-display font-bold text-gradient-blue">
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full"
            style={{ height: "480px" }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 45 }}
              style={{ background: "transparent" }}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
              <pointLight
                position={[-5, -5, 5]}
                intensity={0.5}
                color="#22d3ee"
              />
              <WireGlobe mousePos={mousePos.current} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
              />
            </Canvas>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs"
            style={{ color: isDark ? "#475569" : "#94a3b8" }}
          >
            Scroll to explore
          </span>
          <div
            className="w-6 h-10 rounded-full border flex items-start justify-center pt-1.5"
            style={{
              borderColor: isDark
                ? "rgba(255,255,255,0.15)"
                : "rgba(0,0,0,0.15)",
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full bg-cyber-blue"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
