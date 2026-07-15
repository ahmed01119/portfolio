"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  GraduationCap, 
  UserCheck, 
  Briefcase,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Database,
  ArrowUpRight,
  Compass,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"
import { FloatingFlutterIcons } from "@/components/floating-flutter-icons"
import { GithubIcon, LinkedinIcon, GmailIcon, TelegramIcon, WhatsappIcon } from "@/components/social-icons"

const socials = [
  { 
    icon: GithubIcon, 
    label: "GitHub", 
    href: "https://github.com/ahmed01119",
    hoverColor: "hover:text-white hover:border-white/30",
    glowColor: "rgba(255, 255, 255, 0.15)"
  },
  { 
    icon: LinkedinIcon, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/ahmed-mostafa-54ab80308",
    hoverColor: "hover:text-blue-400 hover:border-blue-500/30",
    glowColor: "rgba(59, 130, 246, 0.2)"
  },
  { 
    icon: GmailIcon, 
    label: "Email", 
    href: "mailto:ahmedmost020508@gmail.com",
    hoverColor: "hover:text-red-400 hover:border-red-500/30",
    glowColor: "rgba(239, 68, 68, 0.15)"
  },
  { 
    icon: WhatsappIcon, 
    label: "WhatsApp", 
    href: "https://wa.me/201148489095",
    hoverColor: "hover:text-emerald-400 hover:border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.2)"
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const phoneContainerRef = useRef<HTMLDivElement>(null)

  // 3D Parallax Tilt for PhoneMockup
  const phoneX = useMotionValue(0)
  const phoneY = useMotionValue(0)
  const rotateX = useTransform(phoneY, [-200, 200], [12, -12])
  const rotateY = useTransform(phoneX, [-200, 200], [-12, 12])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handlePhoneMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneContainerRef.current) return
    const rect = phoneContainerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    phoneX.set(mouseX)
    phoneY.set(mouseY)
  }

  const handlePhoneMouseLeave = () => {
    phoneX.set(0)
    phoneY.set(0)
  }

  // Deterministic floating particle coords
  const particlePositions = [
    { top: "12%", left: "10%", size: 4 },
    { top: "28%", left: "82%", size: 3 },
    { top: "42%", left: "95%", size: 5 },
    { top: "60%", left: "4%", size: 4 },
    { top: "75%", left: "90%", size: 3 },
    { top: "82%", left: "48%", size: 4 },
    { top: "15%", left: "65%", size: 3 },
    { top: "52%", left: "12%", size: 5 },
    { top: "32%", left: "75%", size: 4 }
  ]

  return (
    <section 
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden pt-28 pb-16"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(85% 65% at 50% 8%, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.03) 50%, transparent 80%), radial-gradient(45% 45% at 85% 25%, rgba(99,102,241,0.05) 0%, transparent 70%), radial-gradient(55% 55% at 15% 75%, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Spotlight cursor glow */}
      <div
        className="pointer-events-none absolute -inset-px -z-20 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(700px circle at ${coords.x}px ${coords.y}px, rgba(99,102,241,0.04), transparent 70%)`
        }}
      />

      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(80% 80% at 50% 50%, black, transparent)",
        }}
      />

      {/* SVG Circuit lines */}
      <div className="absolute inset-0 -z-30 overflow-hidden opacity-[0.06] pointer-events-none">
        <svg className="h-full w-full stroke-indigo-500 stroke-[1.5] fill-none" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <motion.path 
            d="M -100 150 L 500 150 L 620 270 L 1100 270 L 1220 390 L 1600 390"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.path 
            d="M 300 -100 L 300 350 L 420 470 L 420 800 L 540 920"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
          />
        </svg>
      </div>

      {/* Floating Ambient Particles */}
      {mounted && (
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
          {particlePositions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-500/10"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top,
              }}
              animate={{
                y: [0, -35, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 9 + (i % 3) * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.4
              }}
            />
          ))}
        </div>
      )}

      {/* Hero grid */}
      <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8 flex-1">
        
        {/* Left column */}
        <div className="text-center lg:text-left lg:col-span-7 space-y-6">
          {/* Badge: Open to Work */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open To Work
          </motion.div>

          {/* Typography head */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Ahmed Mostafa</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-450 to-blue-500">
                Flutter Developer
              </span>
            </motion.p>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mx-auto lg:mx-0 max-w-2xl text-balance text-sm sm:text-base leading-relaxed text-zinc-400"
          >
            Flutter Developer with hands-on experience building scalable cross-platform mobile applications using Flutter, Firebase, REST APIs, and Bloc/Cubit.
            <span className="block mt-2 font-medium text-zinc-300">
              Passionate about creating clean, responsive, and high-performance mobile experiences.
            </span>
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            {/* Premium primary button */}
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="group/btn w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg shadow-indigo-600/30 border border-indigo-500/40 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
            
            {/* Premium glass secondary button */}
            <Button
              render={<a href="/Ahmed_Mostafa_CV.pdf" download="Ahmed_Mostafa_CV.pdf" />}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-white/10 bg-white/5 text-zinc-200 font-semibold shadow-inner backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="flex items-center justify-center gap-4 pt-4 lg:justify-start"
          >
            <span className="text-xs uppercase tracking-wider font-bold text-zinc-500">Connect</span>
            <div className="h-px w-8 bg-zinc-850" />
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href, hoverColor, glowColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-zinc-900/40 text-zinc-400 transition-all duration-300 hover:-translate-y-1 ${hoverColor}`}
                  style={{
                    boxShadow: isHovered ? `0 0 15px ${glowColor}` : "none"
                  }}
                >
                  {/* Glowing background bubble */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
                    style={{
                      background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
                    }}
                  />
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column (Tilt Phone mockup + floating stack) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div 
            ref={phoneContainerRef}
            className="relative cursor-pointer"
            onMouseMove={handlePhoneMouseMove}
            onMouseLeave={handlePhoneMouseLeave}
            style={{ perspective: 1000 }}
          >
            {/* Parallax wrapper */}
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
            >
              <PhoneMockup mouseX={phoneX} mouseY={phoneY} />
            </motion.div>
            
            {/* Staggered brand logos floating */}
            <FloatingFlutterIcons />
          </div>
        </div>

      </div>

      {/* Qualifications Section: Beautiful Bento Grid layout */}
      <div className="w-full max-w-6xl px-6 mt-28">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-16" />
        
        {/* Section title */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> Resume Brief
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Qualifications & Highlights
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: CS Graduate (Ain Shams University) - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 md:col-span-2 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/30"
          >
            <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Education</span>
                  <h3 className="text-lg font-bold text-white leading-tight">Computer Science Graduate</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 max-w-xl">
                Graduated with a Bachelor of Computer Science from <strong>Ain Shams University</strong>, Cairo, Egypt. Formed a deep foundation in software engineering theories and core computing principles.
              </p>
            </div>

            {/* University Core courses tag deck */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Algorithms", "Data Structures", "OOP", "Database Systems", "Software Engineering"].map((tag) => (
                <span key={tag} className="text-[10px] font-semibold bg-zinc-950/40 border border-white/5 text-zinc-300 px-2.5 py-1 rounded-full group-hover:border-indigo-500/15 group-hover:text-indigo-300 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: 5+ Projects built - Spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/30"
          >
            <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Applications</span>
                <h3 className="text-lg font-bold text-white leading-tight">5+ Featured Projects</h3>
              </div>
            </div>

            <div className="my-3">
              <p className="text-3xl font-extrabold text-white tracking-tight">5+ Built</p>
              <p className="text-xs text-zinc-400 mt-1 leading-normal">
                Including GeoGuide (Smart Tourism App with AI features), Tunes player, and language learning apps.
              </p>
            </div>

            <a href="#projects" className="text-xs font-bold text-cyan-400 inline-flex items-center gap-1 hover:text-cyan-300 group-hover:underline">
              Explore works <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Card 3: ITI Flutter Training - Spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/30"
          >
            <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors" />

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                <Terminal className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Specialization</span>
                <h3 className="text-lg font-bold text-white leading-tight">ITI Mobile Training</h3>
              </div>
            </div>

            <div className="my-2">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">120</span>
                <span className="text-sm font-semibold text-zinc-400">Hours</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal mt-1">
                Completed mobile development training using Flutter and Dart at the <strong>Information Technology Institute</strong>.
              </p>
            </div>

            <span className="text-[10px] font-bold text-blue-400 bg-blue-950/30 border border-blue-900/40 px-2.5 py-1 rounded-full self-start">
              Verified Certificate
            </span>
          </motion.div>

          {/* Card 4: Tech Stack Integration - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 md:col-span-2 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/30"
          >
            <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-colors" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Ecosystem</span>
                  <h3 className="text-lg font-bold text-white leading-tight">Full-Stack Mobile Stack</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 max-w-xl">
                Expertise in cross-platform mobile frameworks using <strong>Flutter</strong>, clean architecture paradigms, asynchronous network programming using REST APIs, state management via <strong>Bloc/Cubit</strong>, and Google Cloud integrations (<strong>Firebase/Firestore</strong>).
              </p>
            </div>

            {/* Stack grid visualization */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Flutter/Dart", icon: Cpu, color: "text-sky-400 bg-sky-950/20 border-sky-900/30" },
                { name: "Firebase", icon: Database, color: "text-amber-400 bg-amber-950/20 border-amber-900/30" },
                { name: "Bloc/Cubit", icon: Layers, color: "text-indigo-400 bg-indigo-950/20 border-indigo-900/30" },
                { name: "REST APIs", icon: Compass, color: "text-emerald-400 bg-emerald-950/20 border-emerald-900/30" }
              ].map((tech) => {
                const TechIcon = tech.icon
                return (
                  <div key={tech.name} className={`flex items-center gap-2 rounded-xl border p-2 ${tech.color}`}>
                    <TechIcon className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold tracking-wide uppercase">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
