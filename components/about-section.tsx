"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Sparkles, MapPin, GraduationCap, Heart, Clock, Code } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-150, 150], [10, -10])
  const rotateY = useTransform(x, [-150, 150], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section 
      id="about" 
      className="relative w-full py-24 overflow-hidden border-t border-white/5"
    >
      {/* Background soft ambient glowing light */}
      <div 
        className="pointer-events-none absolute left-[-10%] top-[30%] -z-10 h-96 w-96 rounded-full opacity-30 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 80%)"
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Side: Premium Image Container with Parallax and Float */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease }
              }}
              className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-3 shadow-2xl backdrop-blur-md cursor-pointer group"
            >
              {/* Glowing decorative gradient behind portrait frame */}
              <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Double border highlight */}
              <div className="absolute inset-1 rounded-[2.2rem] border border-white/5 pointer-events-none z-20" />

              {/* Portrait Frame */}
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-zinc-950 border border-zinc-800/80 z-10">
                {/* Profile Image with high quality cropping */}
                <img 
                  src="/profile.jpg" 
                  alt="Ahmed Mostafa"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />

                {/* Glass Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Small specs badge inside photo card */}
                <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/5 bg-black/40 py-2 px-3 flex items-center justify-between text-zinc-300 text-[9px] font-mono backdrop-blur-md">
                  <span>LOC: CAIRO, EG</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CS GRADUATE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Summary & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease }}
              className="space-y-4 text-center lg:text-left"
            >
              <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center justify-center lg:justify-start gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Professional Summary
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Crafting High-Performance Mobile Experiences
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I am a passionate <strong>Flutter Developer</strong> holding a Bachelor of Computer Science from <strong>Ain Shams University</strong>. I specialize in creating pixel-perfect, highly responsive, and high-performance cross-platform mobile applications for iOS and Android.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Through my intensive <strong>120-hour mobile development training at the Information Technology Institute (ITI)</strong>, I have mastered clean code practices, mobile architectural patterns, state management via Bloc/Cubit, and seamless cloud services integration with Firebase. I love translating beautiful layouts into fully functional products that load instantly.
              </p>
            </motion.div>

            {/* Quick Details grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Location", val: "Cairo, Egypt", icon: MapPin, color: "text-emerald-400 bg-emerald-950/20 border-emerald-900/30" },
                { label: "Degree", val: "Bachelor of CS", icon: GraduationCap, color: "text-blue-400 bg-blue-950/20 border-blue-900/30" },
                { label: "Training", val: "ITI (120 Hours)", icon: Clock, color: "text-amber-400 bg-amber-950/20 border-amber-900/30" },
                { label: "Open For", val: "Internship & Junior roles", icon: Code, color: "text-purple-400 bg-purple-950/20 border-purple-900/30" }
              ].map((item) => {
                const ItemIcon = item.icon
                return (
                  <div 
                    key={item.label} 
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-zinc-900/20 p-4 transition-all duration-300 hover:border-indigo-500/10 hover:bg-zinc-900/30"
                  >
                    <div className={`rounded-xl border p-2 ${item.color}`}>
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">{item.label}</span>
                      <p className="text-xs font-bold text-zinc-200 mt-0.5 leading-tight">{item.val}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
