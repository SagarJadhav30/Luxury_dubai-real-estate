"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Large Floating Orbs */} 
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-violet-500/10 rounded-full blur-xl"
      />

      {/* Small Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/3 left-1/2 w-16 h-16 border border-amber-400/20 rotate-45"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-blue-400/20 rounded-full"
      />

      {/* Flowing Lines */}
      <motion.div
        animate={{
          pathLength: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full">
          <motion.path
            d="M 0,50 Q 50,0 100,50 T 200,50"
            stroke="rgba(251, 191, 36, 0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
