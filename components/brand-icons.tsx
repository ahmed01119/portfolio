type IconProps = { className?: string; style?: React.CSSProperties }

export function FirebaseIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 256 351" className={className} style={style} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC24A" d="M1.253 280.732 44.816 4.056C46.212-.53 52.7-1.19 55.014 3.15l46.7 87.53z" />
      <path fill="#FFA712" d="m1.253 280.732 43.563-276.676c1.396-4.586 7.884-5.246 10.198-.906l46.7 87.53z" opacity=".8" />
      <path fill="#F4BD62" d="M134.417 148.974 178.63 96.15l-44.216-84.3c-4.03-7.69-15.3-7.72-19.37 0L91.06 56.11z" />
      <path fill="#FFA50E" d="M134.417 148.974 91.06 56.11l-89.807 224.62z" opacity=".9" />
      <path fill="#F6820C" d="m0 280.732 1.253-.006 130.61-58.16 37.256-17.674-93.09-87.98z" />
      <path fill="#FDE068" d="m139.121 350.532 116.507-65.02-33.28-204.845c-1.04-6.402-8.9-8.938-13.5-4.36L0 280.732z" />
      <path fill="#FCCA3F" d="M254.402 285.269 221.599 82.052c-1.032-6.353-8.514-9.005-13.29-4.51L1.618 280.542l114.72 64.01a24.16 24.16 0 0 0 23.573.011z" opacity=".7" />
      <path fill="#EEAB37" d="M139.121 349.235a24.16 24.16 0 0 1-23.573-.01L1.792 285.516l-.54 1.216 114.297 63.76a24.16 24.16 0 0 0 23.573.01l116.508-65.02-.288-1.772z" />
    </svg>
  )
}

export function DartIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} style={style} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path fill="#01579B" d="M62.99 40.72 40.71 63l.02 128.14 33.9 61.62 20.1-16.16-.03-115.44z" />
      <path fill="#40C4FF" d="M62.99 40.72 189.7 84.5l35.9-14.14L94.7 24.56z" />
      <path fill="#40C4FF" d="M119.34 231.55 231.4 231.6l-6.28-19.5-93.14-33.06-56.65 3.94z" opacity=".8" />
      <path fill="#29B6F6" d="m74.63 74.63 111.5 111.5 45.27 45.47V84.5L189.7 84.5z" />
      <path fill="#01579B" d="M119.34 231.55 231.4 231.6l-.03-45.47-45.24-.02z" opacity=".8" />
      <path fill="#0288D1" d="M74.63 74.63 189.7 84.5l-3.57 101.63-66.87 45.42-45.15-45.42z" opacity=".5" />
    </svg>
  )
}

export function RestApiIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M4 7h12a4 4 0 0 1 0 8H8" />
      <path d="m8 11-4 4 4 4" />
      <circle cx="19" cy="7" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function AiIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" />
      <rect x="8" y="8" width="8" height="8" rx="2" />
      <path d="M11 11h2M11 13.5h2" />
    </svg>
  )
}
