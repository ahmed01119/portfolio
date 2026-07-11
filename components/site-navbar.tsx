"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlutterLogo } from "@/components/flutter-logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Timeline", href: "#experience", id: "experience" },
  { label: "Certificates", href: "#certificates", id: "certificates" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Simple Scroll-Spy logic
      const scrollPosition = window.scrollY + 240
      const sections = ["hero", "about", "tech-stack", "projects", "experience", "certificates", "contact"]
      
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:px-5 border border-white/5",
          scrolled 
            ? "glass shadow-xl shadow-black/30 bg-zinc-950/40 backdrop-blur-xl border-white/10" 
            : "bg-transparent border-transparent"
        )}
      >
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300">
            <FlutterLogo className="h-4.5 w-4.5 text-zinc-300 group-hover:text-indigo-400 transition-colors" />
          </div>
          <span className="text-sm font-bold tracking-tight text-white">
            Ahmed<span className="text-zinc-500 font-medium group-hover:text-indigo-400 transition-colors">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1.5 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 block",
                    isActive
                      ? "text-indigo-400 bg-white/5 border border-white/5 shadow-inner"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {/* Subtle pulsing glow for active item */}
                  {isActive && (
                    <motion.span 
                      layoutId="activeGlow" 
                      className="absolute inset-0 rounded-full border border-indigo-500/30 -z-10 shadow-[0_0_10px_rgba(99,102,241,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hire button */}
        <div className="hidden md:block">
          <Button 
            render={<a href="#contact" />} 
            size="sm" 
            className="rounded-full bg-indigo-600 border border-indigo-500/30 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 font-bold transition-all duration-300"
          >
            Hire Me <Sparkles className="h-3 w-3 text-amber-300" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-zinc-300" />}
        </button>
      </nav>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass absolute inset-x-4 top-20 rounded-2xl p-4 md:hidden bg-zinc-950/80 backdrop-blur-2xl border-white/10 shadow-2xl"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                        isActive
                          ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <Button
              render={<a href="#contact" onClick={() => setOpen(false)} />}
              className="mt-3 w-full rounded-xl bg-indigo-600 font-bold hover:bg-indigo-500"
            >
              Hire Me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
