"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Mail, Send, MapPin, Globe, CheckCircle2, ArrowRight } from "lucide-react"
import { GithubIcon, LinkedinIcon, GmailIcon, TelegramIcon } from "@/components/social-icons"

const ease = [0.16, 1, 0.3, 1] as const

const rawSocials = JSON.parse(process.env.NEXT_PUBLIC_SOCIALS_DATA || "[]");

const iconMap: Record<string, any> = {
  GithubIcon,
  LinkedinIcon,
  GmailIcon,
  TelegramIcon
};

const socials = rawSocials.map((s: any) => ({
  ...s,
  icon: iconMap[s.iconName] || GithubIcon
}));

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormState({ name: "", email: "", message: "" })
    
    setTimeout(() => setIsSuccess(false), 4000)
  }

  return (
    <section 
      id="contact" 
      className="relative w-full pt-24 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute left-[-10%] bottom-[20%] -z-10 h-[400px] w-[400px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 80%)"
        }}
      />
      <div 
        className="pointer-events-none absolute right-[-10%] bottom-0 -z-10 h-[300px] w-[300px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 80%)"
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* Section title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Connections
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Get In Touch
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm mt-2 max-w-md">
            Let&apos;s build something beautiful together. Reach out for collaborations or opportunities!
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Contact info details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Direct Channels
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Feel free to message me directly via email or social networks. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Direct email card */}
              <a 
                href="mailto:ahmedmost020508@gmail.com" 
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/10 p-4 transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/20 group"
              >
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-indigo-450 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9.5px] text-zinc-500 font-semibold uppercase tracking-wider">Email Address</span>
                  <p className="text-xs font-bold text-zinc-200 mt-0.5 leading-none">ahmedmost020508@gmail.com</p>
                </div>
              </a>

              {/* Location card */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/10 p-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-emerald-450">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9.5px] text-zinc-500 font-semibold uppercase tracking-wider">Current Location</span>
                  <p className="text-xs font-bold text-zinc-200 mt-0.5 leading-none">Cairo, Egypt</p>
                </div>
              </div>

              {/* Status card */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/10 p-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-blue-455">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9.5px] text-zinc-500 font-semibold uppercase tracking-wider">Open to Work</span>
                  <p className="text-xs font-bold text-zinc-200 mt-0.5 leading-none">Remote / Cairo Hybrid</p>
                </div>
              </div>
            </div>

            {/* Social linkages */}
            <div className="pt-6 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-zinc-500 block">Follow Professional Profiles</span>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-zinc-900/40 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/20 hover:bg-zinc-950 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7 rounded-3xl border border-white/5 bg-zinc-900/10 p-6 md:p-8 shadow-2xl backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                    Full Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 text-xs text-white placeholder:text-zinc-650 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 text-xs text-white placeholder:text-zinc-650 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 text-xs text-white placeholder:text-zinc-650 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Actions & Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                
                {/* Status indicator messages */}
                <div className="h-6 flex items-center">
                  {isSuccess && (
                    <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4.5 w-4.5" /> Message sent successfully!
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/30 hover:from-indigo-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>

        {/* Footer split */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-medium text-zinc-500">
          <div className="text-center md:text-left space-y-1">
            <p className="text-zinc-300 font-bold">© {new Date().getFullYear()} Ahmed Mostafa. All rights reserved.</p>
            <p>Built with Next.js 16, Tailwind CSS 4, and Framer Motion.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
            <a href="#tech-stack" className="hover:text-zinc-300 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </section>
  )
}
