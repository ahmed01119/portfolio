"use client"

import { motion } from "framer-motion"
import { Sparkles, Award, FileText, CheckCircle2, ShieldCheck, Calendar } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const certificates = JSON.parse(process.env.NEXT_PUBLIC_CERTIFICATES_DATA || "[]");

export function CertificatesSection() {
  return (
    <section 
      id="certificates" 
      className="relative w-full py-24 overflow-hidden border-t border-white/5"
    >
      {/* Background ambient glow */}
      <div 
        className="pointer-events-none absolute right-[10%] top-[20%] -z-10 h-[350px] w-[350px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 80%)"
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* Section title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Certifications & Degrees
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm mt-2 max-w-md">
            Verified academic accomplishments and technological specialization certificates.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-indigo-500/20 hover:bg-zinc-900/20"
            >
              {/* Glow backdrop overlay */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
                style={{
                  background: `radial-gradient(circle at center, ${cert.glow} 0%, transparent 70%)`
                }}
              />

              <div className="space-y-6">
                
                {/* Header info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-indigo-400 uppercase tracking-widest">
                      <Award className="h-3.5 w-3.5" /> Certified Credential
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide leading-snug group-hover:text-indigo-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Seal visual representation */}
                  <div className="h-12 w-12 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/35 group-hover:bg-indigo-500/10 transition-colors shadow-inner shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>

                {/* Issuer details block */}
                <div className="rounded-2xl border border-white/5 bg-zinc-950/40 p-4 space-y-2 text-xs font-semibold text-zinc-300">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">ISSUER:</span>
                    <span className="text-white">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">HOURS/DURATION:</span>
                    <span className="text-white">{cert.hours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">CREDENTIAL ID:</span>
                    <span className="text-indigo-400 font-mono">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-zinc-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Issue: {cert.issueDate}</span>
                    <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 className="h-3.5 w-3.5" /> Verified Status</span>
                  </div>
                </div>

                {/* Sub skill tags covered */}
                <div className="space-y-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Specialized Modules</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900/60 border border-white/5 text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom verification trigger */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-bold">
                <span className="text-zinc-400 inline-flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" /> Secure Database Record
                </span>
                <span className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer">
                  Verify Credentials
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
