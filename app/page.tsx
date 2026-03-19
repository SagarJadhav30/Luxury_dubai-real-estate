"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import SearchSection from "@/components/search-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FloatingElements from "@/components/floating-elements"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <FloatingElements />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div id="hero-section">
          <HeroSection />
        </div>
        <div id="search-section">
          <SearchSection />
        </div>
        <div id="services-section">
          <ServicesSection />
        </div>
        <div id="portfolio-section">
          <PortfolioSection />
        </div>
        <div id="testimonials-section">
          <TestimonialsSection />
        </div>
        <div id="contact-section">
          <ContactSection />
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
