"use client"

import { motion } from "framer-motion"
import { FlutterLogo } from "@/components/flutter-logo"
import { FirebaseIcon, DartIcon, RestApiIcon, AiIcon } from "@/components/brand-icons"
import { GithubIcon } from "@/components/social-icons"

const floatingLogos = [
  {
    Icon: FlutterLogo,
    className: "absolute -left-12 top-[10%] z-20",
    size: 42,
    color: "text-sky-400",
    duration: 6,
    delay: 0,
    title: "Flutter"
  },
  {
    Icon: DartIcon,
    className: "absolute -right-10 top-[5%] z-20",
    size: 40,
    color: "text-cyan-400",
    duration: 7,
    delay: 1.5,
    title: "Dart"
  },
  {
    Icon: FirebaseIcon,
    className: "absolute -right-14 top-[35%] z-20",
    size: 42,
    color: "text-amber-500",
    duration: 6.5,
    delay: 0.8,
    title: "Firebase"
  },
  {
    Icon: RestApiIcon,
    className: "absolute -left-16 top-[40%] z-20",
    size: 38,
    color: "text-indigo-400",
    duration: 8,
    delay: 2.2,
    title: "REST APIs"
  },
  {
    Icon: GithubIcon,
    className: "absolute -left-10 bottom-[20%] z-20",
    size: 38,
    color: "text-white",
    duration: 7.5,
    delay: 1.2,
    title: "Git / GitHub"
  },
  {
    Icon: AiIcon,
    className: "absolute -right-12 bottom-[15%] z-20",
    size: 40,
    color: "text-pink-400",
    duration: 7,
    delay: 0.4,
    title: "AI Integrations"
  }
]

export function FloatingFlutterIcons() {
  return (
    <>
      {floatingLogos.map(({ Icon, className, size, color, duration, delay, title }) => (
        <motion.div
          key={title}
          className={`${className} hidden md:block pointer-events-auto`}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
            rotate: [0, 6, -6, 0]
          }}
          transition={{
            opacity: { duration: 0.8, delay: delay * 0.3 },
            scale: { duration: 0.8, delay: delay * 0.3 },
            y: {
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: delay
            },
            rotate: {
              duration: duration + 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: delay
            }
          }}
        >
          {/* High-end luxury glassmorphic card wrapping the icon */}
          <div 
            className="group relative rounded-2xl border border-white/10 bg-zinc-900/60 p-3 shadow-lg shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-zinc-950/80 hover:shadow-indigo-500/20"
            title={title}
          >
            {/* Soft inner glow hover state */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:from-indigo-600/10 group-hover:to-cyan-600/10 group-hover:opacity-100" />
            
            <Icon 
              className={`transition-transform duration-300 group-hover:scale-110 ${color}`} 
              style={{ width: size, height: size }} 
            />
          </div>
        </motion.div>
      ))}
    </>
  )
}
