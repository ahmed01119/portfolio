import { motion, MotionValue, useTransform, useMotionValue } from "framer-motion"
import { Search, Sparkles, Compass, Heart, Calendar, Star } from "lucide-react"

export function PhoneMockup({ mouseX, mouseY }: { mouseX?: MotionValue<number>, mouseY?: MotionValue<number> }) {
  const fallbackVal = useMotionValue(0)
  const glareX = useTransform(mouseX || fallbackVal, [-200, 200], [-40, 40])
  const glareY = useTransform(mouseY || fallbackVal, [-200, 200], [-40, 40])
  const glowX = useTransform(mouseX || fallbackVal, [-200, 200], [20, -20])
  const glowY = useTransform(mouseY || fallbackVal, [-200, 200], [20, -20])

  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px] select-none">
      {/* Luxury radial glow behind the phone */}
      <motion.div 
        style={{ 
          x: glowX, 
          y: glowY,
          background: "radial-gradient(circle, oklch(0.62 0.19 255 / 0.25) 0%, oklch(0.7 0.16 230 / 0.1) 50%, transparent 100%)"
        }}
        className="pointer-events-none absolute -inset-20 -z-10 rounded-[3.5rem] opacity-70 blur-[80px] transition-all duration-1000"
      />

      {/* iPhone 16 Pro Titanium Chassis */}
      <div className="relative rounded-[3.25rem] border border-zinc-700/80 bg-zinc-950 p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10 backdrop-blur-3xl">
        {/* Sleek metallic outer border highlight */}
        <div className="absolute inset-0 rounded-[3.25rem] border border-white/15 pointer-events-none" />

        {/* Titanium side buttons */}
        {/* Action Button */}
        <div className="absolute -left-[2px] top-28 h-7 w-[3px] rounded-l-md bg-zinc-700" />
        {/* Volume Up */}
        <div className="absolute -left-[2px] top-40 h-12 w-[3px] rounded-l-md bg-zinc-700" />
        {/* Volume Down */}
        <div className="absolute -left-[2px] top-56 h-12 w-[3px] rounded-l-md bg-zinc-700" />
        {/* Power Button */}
        <div className="absolute -right-[2px] top-44 h-16 w-[3px] rounded-r-md bg-zinc-700" />
        {/* Camera Control Button */}
        <div className="absolute -right-[2px] top-72 h-10 w-[3px] rounded-r-md bg-zinc-800" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.65rem] border-2 border-black bg-zinc-950">
          
          {/* Screen glare reflection */}
          <motion.div 
            style={{ x: glareX, y: glareY }}
            className="pointer-events-none absolute -left-1/2 top-0 z-30 h-[250%] w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" 
          />

          {/* Dynamic Island */}
          <motion.div 
            className="absolute left-1/2 top-3.5 z-40 h-7 w-26 -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-2.5 shadow-md"
            initial={{ width: 104 }}
            animate={{ width: [104, 114, 104] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
          >
            {/* Small camera dot */}
            <div className="h-2 w-2 rounded-full bg-zinc-900 ring-1 ring-zinc-800" />
            {/* Pulsing indicator */}
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[8px] font-semibold text-indigo-400 font-mono">GeoGuide</span>
            </div>
          </motion.div>

          {/* Status Bar */}
          <div className="flex h-12 items-end justify-between px-6 pb-2 text-[10px] font-medium text-zinc-300">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal Strength */}
              <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 100 100">
                <rect x="10" y="70" width="12" height="30" rx="2" />
                <rect x="30" y="50" width="12" height="50" rx="2" />
                <rect x="50" y="30" width="12" height="70" rx="2" />
                <rect x="70" y="10" width="12" height="90" rx="2" />
              </svg>
              <span>5G</span>
              {/* Battery */}
              <div className="h-3 w-6 rounded-md border border-zinc-400 p-0.5 flex items-center">
                <div className="h-full w-4/5 rounded bg-zinc-200" />
              </div>
            </div>
          </div>

          {/* GeoGuide App Shell */}
          <div className="flex h-[550px] flex-col bg-zinc-950 text-zinc-100 font-sans pb-14">
            
            {/* App Header */}
            <div className="px-4 pt-1 pb-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Explore Egypt</span>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                  GeoGuide <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400/20" />
                </h3>
              </div>
              {/* Notification / Profile */}
              <div className="h-8 w-8 rounded-full border border-white/10 bg-zinc-900/80 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-zinc-950 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
                  alt="User avatar" 
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Premium Search Bar */}
            <div className="px-4 mb-3">
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-3.5 w-3.5 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search pyramids, temples, cities..." 
                  disabled
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 py-2 pl-9 pr-4 text-xs text-zinc-300 placeholder:text-zinc-500 outline-none"
                />
                <button className="absolute right-2 h-6 w-6 rounded-lg bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center">
                  <Compass className="h-3.5 w-3.5 text-indigo-400" />
                </button>
              </div>
            </div>

            {/* Quick Categories */}
            <div className="px-4 mb-4 flex gap-1.5 overflow-hidden">
              {[
                { name: "All", active: true },
                { name: "Cairo", active: false },
                { name: "Luxor", active: false },
                { name: "Aswan", active: false }
              ].map((cat) => (
                <span 
                  key={cat.name} 
                  className={`text-[10px] font-medium px-3 py-1 rounded-full border transition-all ${
                    cat.active 
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20" 
                      : "bg-zinc-900/40 border-zinc-800 text-zinc-400"
                  }`}
                >
                  {cat.name}
                </span>
              ))}
            </div>

            {/* Scrolling Landmarks Container */}
            <div className="flex-1 px-4 space-y-3 overflow-y-auto max-h-[300px] scrollbar-none">
              
              {/* Pyramids of Giza Card (with AI scanner overlay!) */}
              <div className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-2 flex flex-col overflow-hidden">
                {/* SVG Landmark Graphic */}
                <div className="relative h-28 w-full rounded-xl bg-gradient-to-br from-amber-950/40 to-orange-950/60 border border-zinc-800/80 overflow-hidden flex items-center justify-center">
                  {/* Dynamic Pyramids drawing */}
                  <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full object-cover opacity-90" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="pyr-grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.75" />
                      </linearGradient>
                      <linearGradient id="pyr-grad-back" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#78350f" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#451a03" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {/* Sand ground */}
                    <path d="M0 54 Q35 50 70 54 T100 52 V60 H0 Z" fill="#78350f" opacity="0.6" />
                    {/* Left pyramid */}
                    <polygon points="5,54 25,28 45,54" fill="url(#pyr-grad-back)" />
                    {/* Right pyramid */}
                    <polygon points="35,54 65,18 90,54" fill="url(#pyr-grad-main)" />
                    {/* Central smaller pyramid */}
                    <polygon points="20,54 40,36 60,54" fill="url(#pyr-grad-back)" opacity="0.8" />
                    {/* Sun */}
                    <circle cx="80" cy="18" r="4" fill="#fef08a" opacity="0.4" filter="blur(0.5px)" />
                  </svg>

                  {/* AI Scanning Beam Overlay */}
                  <motion.div 
                    className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] z-20"
                    animate={{ top: ["10%", "90%", "10%"] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  />

                  {/* Laser mesh lines for AI recognition representation */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4))] pointer-events-none" />

                  {/* Live AI Landmark Match Indicator */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 text-[8px] font-semibold text-cyan-400 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    AI Scanned: Pyramids (98.4%)
                  </div>

                  <span className="absolute bottom-2 right-2 rounded-md bg-zinc-950/80 border border-white/10 px-2 py-0.5 text-[8px] font-medium text-zinc-300 backdrop-blur-sm">
                    Giza, Cairo
                  </span>
                </div>

                {/* Card description */}
                <div className="mt-2.5 px-1 pb-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white tracking-wide">Great Pyramids of Giza</h4>
                    <span className="flex items-center gap-0.5 text-[10px] font-semibold text-amber-400">
                      <Star className="h-2.5 w-2.5 fill-amber-400" /> 4.9
                    </span>
                  </div>
                  <p className="mt-1 text-[9px] text-zinc-400 leading-normal line-clamp-1">
                    The only remaining wonder of the ancient world.
                  </p>
                  
                  {/* Card Badges */}
                  <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[7.5px] font-medium bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded">
                      Ancient Wonder
                    </span>
                    <span className="text-[7.5px] font-medium bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 px-1.5 py-0.5 rounded">
                      ⚡ AI Recommended
                    </span>
                  </div>
                </div>
              </div>

              {/* Karnak Temple / Luxor pillars card */}
              <div className="group relative rounded-2xl border border-zinc-850 bg-zinc-900/20 p-2 flex flex-col overflow-hidden">
                {/* SVG Temple Graphic */}
                <div className="relative h-20 w-full rounded-xl bg-gradient-to-br from-indigo-950/30 to-slate-950/50 border border-zinc-900 overflow-hidden flex items-center justify-center">
                  <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full object-cover opacity-90" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="temple-grad-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    {/* Ground */}
                    <rect x="0" y="48" width="100" height="12" fill="#1e1b4b" />
                    {/* Columns */}
                    <rect x="12" y="16" width="5" height="32" fill="url(#temple-grad-fill)" />
                    <rect x="23" y="16" width="5" height="32" fill="url(#temple-grad-fill)" />
                    <rect x="34" y="16" width="5" height="32" fill="url(#temple-grad-fill)" />
                    <rect x="45" y="16" width="5" height="32" fill="url(#temple-grad-fill)" />
                    <rect x="56" y="16" width="5" height="32" fill="url(#temple-grad-fill)" opacity="0.6" />
                    <rect x="67" y="16" width="5" height="32" fill="url(#temple-grad-fill)" opacity="0.4" />
                    {/* Roof slab */}
                    <rect x="8" y="10" width="70" height="6" fill="#312e81" rx="0.5" />
                    <path d="M0 60 Q30 55 60 60 T100 58" stroke="#4f46e5" strokeWidth="1" fill="none" opacity="0.4" />
                  </svg>
                  
                  <span className="absolute bottom-2 right-2 rounded-md bg-zinc-950/80 border border-white/10 px-2 py-0.5 text-[8px] font-medium text-zinc-300 backdrop-blur-sm">
                    Luxor
                  </span>
                </div>

                {/* Card description */}
                <div className="mt-2 px-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white tracking-wide">Karnak Temple complex</h4>
                    <span className="flex items-center gap-0.5 text-[10px] font-semibold text-amber-400">
                      <Star className="h-2.5 w-2.5 fill-amber-400" /> 4.85
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom floating interactive AI Assistant pill */}
            <div className="absolute bottom-16 inset-x-4">
              <div className="rounded-xl border border-indigo-500/30 bg-zinc-900/90 p-2.5 shadow-lg shadow-indigo-950/40 backdrop-blur-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-inner">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-white flex items-center gap-1">
                      GeoGuide AI Assistant
                    </h5>
                    <p className="text-[8px] text-zinc-400 font-medium">
                      &quot;I can generate a 3-day itinerary...&quot;
                    </p>
                  </div>
                </div>
                <button className="rounded-lg bg-indigo-600 px-2 py-1 text-[8.5px] font-bold text-white hover:bg-indigo-500 transition-colors">
                  Plan Trip
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute inset-x-0 bottom-1 flex items-center justify-center py-2 bg-zinc-950">
            <div className="h-1 w-28 rounded-full bg-zinc-600" />
          </div>

          {/* Navigation Bar inside application */}
          <div className="absolute inset-x-4 bottom-5 flex items-center justify-around rounded-full border border-zinc-800/80 bg-zinc-900/70 py-2.5 shadow-lg backdrop-blur-md">
            {[
              { icon: Compass, label: "Explore", active: true },
              { icon: Calendar, label: "Plans", active: false },
              { icon: Sparkles, label: "AI Guide", active: false },
              { icon: Heart, label: "Saved", active: false }
            ].map(({ icon: Icon, label, active }) => (
              <button 
                key={label}
                className="flex flex-col items-center gap-0.5 text-zinc-400 hover:text-white transition-colors"
              >
                <Icon className={`h-4 w-4 ${active ? "text-indigo-400" : "text-zinc-400"}`} />
                <span className="text-[7.5px] font-medium leading-none">{label}</span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
