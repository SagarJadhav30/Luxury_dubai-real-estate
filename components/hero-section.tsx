"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Phone } from "lucide-react"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-amber-900/10" />
        <img src="/images/dubai-skyline.jpg" alt="Dubai Skyline" className="w-full h-full object-cover" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-light mb-6 tracking-wider"
        >
          <span className="text-amber-400">LUXURY</span>
          <br />
          <span className="text-white">DUBAI</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl mb-8 font-light text-gray-300"
        >
          Experience the pinnacle of luxury living in the world's most prestigious city
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Explore Properties
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-amber-400 cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
