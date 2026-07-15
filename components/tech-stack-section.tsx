"use client"

import { motion } from "framer-motion"
import { Sparkles, Terminal, Cpu, Database, Settings, Code, ShieldCheck } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const rawTechGroups = JSON.parse(process.env.NEXT_PUBLIC_TECH_STACK_DATA || "[]");

const iconMap: Record<string, any> = {
  Cpu,
  Terminal,
  Database,
  Settings
};

const techGroups = rawTechGroups.map((g: any) => ({
  ...g,
  icon: iconMap[g.iconName] || Code
}));

export function TechStackSection() {
  return (
    <section 
      id="tech-stack" 
      className="relative w-full py-24 overflow-hidden border-t border-white/5 bg-zinc-950/20"
    >
      {/* Glow Backdrop */}
      <div 
        className="pointer-events-none absolute right-[10%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 80%)"
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Core Technology Stack
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm mt-2 max-w-md">
            A comprehensive list of technologies and skills I use to build scalable mobile solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techGroups.map((group, index) => {
            const GroupIcon = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/25"
              >
                {/* Glow Backdrop overlay */}
                <div className={`absolute -right-16 -top-16 -z-10 h-36 w-36 rounded-full bg-gradient-to-br ${group.glow} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-colors">
                    <GroupIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Group items */}
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div 
                      key={item.name}
                      className="flex items-start justify-between gap-4 p-2.5 rounded-xl transition-colors hover:bg-white/5"
                    >
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-zinc-150 flex items-center gap-1.5">
                          <Code className="h-3 w-3 text-indigo-400" /> {item.name}
                        </h4>
                        <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Badge level */}
                      <span className="text-[8.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border border-white/5 bg-zinc-950/40 text-zinc-400 flex items-center gap-1 whitespace-nowrap">
                        <ShieldCheck className="h-3 w-3 text-indigo-500" /> {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
