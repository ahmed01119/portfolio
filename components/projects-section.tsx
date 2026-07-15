"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, ExternalLink, ShieldCheck, Heart, Star, Search, Compass, Music, Flame, Award } from "lucide-react"
import { GithubIcon } from "@/components/social-icons"

const ease = [0.16, 1, 0.3, 1] as const

const mainProject = JSON.parse(process.env.NEXT_PUBLIC_MAIN_PROJECT_DATA || "{}");
const rawSecondaryProjects = JSON.parse(process.env.NEXT_PUBLIC_SECONDARY_PROJECTS_DATA || "[]");

const iconMap: Record<string, any> = {
  Compass,
  Music,
  Flame,
  Award
};

const secondaryProjects = rawSecondaryProjects.map((p: any) => ({
  ...p,
  customIcon: iconMap[p.customIconName] || Star
}));

export function ProjectsSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <section 
      id="projects" 
      className="relative w-full py-24 overflow-hidden border-t border-white/5 bg-zinc-950/10"
    >
      {/* Background radial soft light */}
      <div 
        className="pointer-events-none absolute left-[15%] top-[10%] -z-10 h-[500px] w-[500px] rounded-full opacity-15 blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 80%)"
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* Section title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Featured Projects
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm mt-2 max-w-md">
            A showcase of production-quality applications built with Flutter, clean architectures, and modern mobile engineering.
          </p>
        </div>

        {/* Flagship Project Showcase (GeoGuide) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/10 p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-md mb-12 transition-all duration-300 hover:border-indigo-500/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* GeoGuide Left: Slideshow Mockup */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-950 p-2 overflow-hidden aspect-[16/10] flex items-center justify-center shadow-inner">
                {/* Images slide view */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={mainProject.images[activeImageIndex]}
                      alt="GeoGuide Screenshot"
                      className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      onError={(e) => {
                        // fallback to a nice custom visual gradient if path issue
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </AnimatePresence>
                  
                  {/* Visual gradient backup if image not loaded */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-zinc-950/80 to-purple-950/25 -z-10 flex items-center justify-center text-zinc-600 font-mono text-[10px]">
                    GEOGUIDE APP DEMO
                  </div>
                </div>

                {/* AI Laser beam line sweep simulation (similar to mockup) */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee] animate-[bounce_5s_infinite] pointer-events-none" style={{ top: "35%" }} />
              </div>

              {/* Slide Nav Dots */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {mainProject.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-2 rounded-full transition-all duration-350 ${
                      activeImageIndex === i ? "w-6 bg-indigo-500" : "w-2 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* GeoGuide Right: Core Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950/30 border border-indigo-900/40 px-3 py-1 rounded-full uppercase tracking-wider">
                  Flagship Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                  {mainProject.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium tracking-wide mt-1">
                  {mainProject.subtitle}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {mainProject.desc}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2">
                {mainProject.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                    <ShieldCheck className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {mainProject.tech.map((tag) => (
                  <span key={tag} className="text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-950/40 border border-white/5 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={mainProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-200 transition-all hover:bg-white/10 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={mainProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
                >
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project, index) => {
            const ProjectIcon = project.customIcon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 flex flex-col justify-between min-h-[280px] shadow-xl backdrop-blur-md transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/20"
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${project.glow} 0%, transparent 70%)`
                  }}
                />

                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
                      {project.category}
                    </span>
                    <div className={`rounded-xl border p-2 ${project.accent}`}>
                      <ProjectIcon className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white tracking-wide leading-tight transition-colors group-hover:text-indigo-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[10px] text-zinc-300 font-medium">
                        <span className="h-1 w-1 rounded-full bg-indigo-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-950/40 text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-7 w-7 rounded-lg border border-white/5 bg-zinc-950/40 text-zinc-400 flex items-center justify-center hover:text-white hover:border-white/20 transition-all"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-7 w-7 rounded-lg bg-indigo-650/40 border border-indigo-500/20 text-indigo-400 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
