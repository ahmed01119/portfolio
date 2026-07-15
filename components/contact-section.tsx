"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Mail, Send, MapPin, Globe, CheckCircle2, ArrowRight, AlertCircle, X, Loader2 } from "lucide-react"
import { GithubIcon, LinkedinIcon, GmailIcon, TelegramIcon } from "@/components/social-icons"
import emailjs from "@emailjs/browser"

const ease = [0.16, 1, 0.3, 1] as const

const rawSocials = JSON.parse(process.env.NEXT_PUBLIC_SOCIALS_DATA || "[]")

const iconMap: Record<string, any> = {
  GithubIcon,
  LinkedinIcon,
  GmailIcon,
  TelegramIcon
}

const socials = rawSocials.map((s: any) => ({
  ...s,
  icon: iconMap[s.iconName] || GithubIcon
}))

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "", honeypot: "" })
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | null }>({
    message: "",
    type: null,
  })

  useEffect(() => {
    if (toast.type) {
      const timer = setTimeout(() => {
        setToast({ message: "", type: null })
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [toast.type])

  const getCooldownRemaining = () => {
    if (typeof window === "undefined") return 0
    const lastSubmit = localStorage.getItem("emailjs_last_submit")
    if (!lastSubmit) return 0
    const elapsed = Date.now() - parseInt(lastSubmit, 10)
    const remaining = 60000 - elapsed
    return remaining > 0 ? Math.ceil(remaining / 1000) : 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" }
    let isValid = true

    if (!formState.name.trim()) {
      newErrors.name = "Full Name is required."
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formState.email.trim()) {
      newErrors.email = "Email Address is required."
      isValid = false
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = "Please enter a valid email address."
      isValid = false
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required."
      isValid = false
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    const cooldown = getCooldownRemaining()
    if (cooldown > 0) {
      setToast({
        message: `Please wait ${cooldown} seconds before sending another message.`,
        type: "error",
      })
      return
    }

    if (!validateForm()) return

    setIsSubmitting(true)

    if (formState.honeypot) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setToast({
        message: "Your message has been sent successfully.",
        type: "success",
      })
      setFormState({ name: "", email: "", subject: "", message: "", honeypot: "" })
      return
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS environment configuration.")
      }

      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        reply_to: formState.email,
        subject: formState.subject || `Portfolio Inquiry from ${formState.name}`,
        message: formState.message,
        date_time: new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "long",
        }),
      }

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      if (response.status === 200) {
        setToast({
          message: "Your message has been sent successfully.",
          type: "success",
        })
        localStorage.setItem("emailjs_last_submit", Date.now().toString())
        setFormState({ name: "", email: "", subject: "", message: "", honeypot: "" })
        setErrors({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message via EmailJS.")
      }
    } catch (err) {
      console.error("Failed to send contact message:", err)
      setToast({
        message: "Something went wrong. Please try again.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
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
                {socials.map(({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
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
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Honeypot field for anti-spam (hidden from visual users but accessible to bots) */}
              <div className="absolute opacity-0 pointer-events-none -z-10 w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="form-bot-field">Do not fill this field if you are a human</label>
                <input
                  id="form-bot-field"
                  type="text"
                  name="honeypot"
                  value={formState.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    value={formState.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-2xl bg-zinc-950/60 border p-4 text-xs text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:ring-2
                      ${errors.name 
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10" 
                        : "border-zinc-800 focus:border-indigo-500/60 focus:ring-indigo-500/10"
                      }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span id="name-error" className="text-[10.5px] font-semibold text-red-400 block mt-1 px-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                    Email Address <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={formState.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-2xl bg-zinc-950/60 border p-4 text-xs text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:ring-2
                      ${errors.email 
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10" 
                        : "border-zinc-800 focus:border-indigo-500/60 focus:ring-indigo-500/10"
                      }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span id="email-error" className="text-[10.5px] font-semibold text-red-400 block mt-1 px-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="form-subject" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                    Subject <span className="text-zinc-500 text-[9px] lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 text-xs text-white placeholder:text-zinc-650 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                  Your Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={5}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`w-full rounded-2xl bg-zinc-950/60 border p-4 text-xs text-white placeholder:text-zinc-600 outline-none transition-all duration-300 resize-none focus:ring-2
                    ${errors.message 
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10" 
                      : "border-zinc-800 focus:border-indigo-500/60 focus:ring-indigo-500/10"
                    }`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <span id="message-error" className="text-[10.5px] font-semibold text-red-400 block mt-1 px-1">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Actions & Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="h-6 flex items-center">
                  {/* Cooldown feedback or quick notice (optional) */}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/30 hover:from-indigo-500 hover:to-blue-500 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group/btn cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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

      {/* Premium custom glassmorphic notifications */}
      <AnimatePresence>
        {toast.type && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/85 p-4 shadow-2xl backdrop-blur-xl max-w-sm"
          >
            {toast.type === "success" ? (
              <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            ) : (
              <div className="rounded-xl bg-red-500/10 p-2 text-red-400">
                <AlertCircle className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1">
              <p className="text-xs font-bold text-white">{toast.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setToast({ message: "", type: null })}
              className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
