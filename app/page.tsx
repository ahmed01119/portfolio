import { SiteNavbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay fixed inset-0 z-50 opacity-[0.015] pointer-events-none" />
      
      {/* Navigation Menu */}
      <SiteNavbar />
      
      {/* Portfolio Sections */}
      <Hero />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <TimelineSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  )
}
