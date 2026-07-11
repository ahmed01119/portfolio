"use client"

import { motion } from "framer-motion"
import { Sparkles, Calendar, Briefcase, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const experienceItems = [
  {
    role: "Flutter Mobile Developer",
    company: "Freelance",
    duration: "2024 - Present",
    desc: "Developing custom cross-platform applications for clients. Building modular widgets, implementing global state variables via Bloc/Cubit, and integrating authentication servers.",
    skills: ["Flutter", "Dart", "Firebase", "Bloc/Cubit", "Git"]
  },
  {
    role: "Mobile Using Flutter Trainee",
    company: "Information Technology Institute (ITI)",
    duration: "120 Hours Intensive Training",
    desc: "Completed an intensive training program specializing in Mobile Application Development. Focused on clean widget architecture, RESTful API mapping, caching strategies, and performance debugging.",
    skills: ["State Management", "REST APIs", "Unit Testing", "Caching", "UI Design"]
  }
]

const educationItems = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Ain Shams University",
    duration: "Graduated 2024",
    desc: "Acquired deep understanding of computing theory, data modeling, complexity theory, and software methodologies.",
    highlights: ["Algorithms design", "Data Structures", "OOP structures", "Database Systems (SQL)"]
  }
]

export function TimelineSection() {
  return (
    <section 
      id="experience" 
      className="relative w-full py-24 overflow-hidden border-t border-white/5 bg-zinc-950/20"
    >
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute left-[5%] bottom-[15%] -z-10 h-[380px] w-[380px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 80%)"
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* Section title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Timeline & Journey
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm mt-2 max-w-md">
            My professional journey and academic timeline as a software engineer.
          </p>
        </div>

        {/* Timeline Grid splits Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-indigo-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Professional Experience
              </h3>
            </div>

            <div className="relative border-l border-zinc-800/80 pl-6 ml-3 space-y-10">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.role + item.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease, delay: index * 0.1 }}
                  className="group relative space-y-3"
                >
                  {/* Timeline indicator circle */}
                  <span className="absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10">
                    <span className="h-2 w-2 rounded-full bg-zinc-600 transition-colors duration-300 group-hover:bg-indigo-500" />
                  </span>

                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-zinc-500 uppercase tracking-widest">
                      <Calendar className="h-3 w-3" /> {item.duration}
                    </span>
                    <h4 className="text-base font-bold text-white tracking-wide leading-snug group-hover:text-indigo-300 transition-colors">
                      {item.role}
                    </h4>
                    <p className="text-xs text-indigo-400 font-semibold tracking-wide">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  {/* Micro-skills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((skill) => (
                      <span key={skill} className="text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900/60 border border-white/5 text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-indigo-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Academic Background
              </h3>
            </div>

            <div className="relative border-l border-zinc-800/80 pl-6 ml-3 space-y-10">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease, delay: index * 0.1 }}
                  className="group relative space-y-3"
                >
                  {/* Timeline indicator circle */}
                  <span className="absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10">
                    <span className="h-2 w-2 rounded-full bg-zinc-600 transition-colors duration-300 group-hover:bg-indigo-500" />
                  </span>

                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-zinc-500 uppercase tracking-widest">
                      <Calendar className="h-3 w-3" /> {item.duration}
                    </span>
                    <h4 className="text-base font-bold text-white tracking-wide leading-snug group-hover:text-indigo-300 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-xs text-indigo-400 font-semibold tracking-wide">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1 pt-1.5">
                    {item.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-1.5 text-[10px] text-zinc-300 font-semibold">
                        <ShieldCheck className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
