"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Al-Mansouri",
    title: "CEO, Emirates Investment Group",
    image: "/images/modern-kitchen.jpg",
    rating: 5,
    text: "Exceptional service and unparalleled expertise. They helped us find the perfect penthouse in Downtown Dubai. The attention to detail and personalized approach exceeded all expectations.",
    property: "Burj Khalifa Penthouse",
  },
  {
    id: 2,
    name: "James Richardson",
    title: "International Investor",
    image: "/images/client-4.jpg",
    rating: 5,
    text: "Working with this team was a game-changer for our Dubai property portfolio. Their market insights and professional guidance resulted in exceptional returns on our investments.",
    property: "Palm Jumeirah Villa",
  },
  {
    id: 3,
    name: "Dr. Amira Hassan",
    title: "Medical Director",
    image: "/images/client-3.jpg",
    rating: 5,
    text: "From the initial consultation to the final handover, every step was seamless. The luxury concierge service made relocating to Dubai effortless and enjoyable.",
    property: "Marina Luxury Apartment",
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Tech Entrepreneur",
    image: "/images/client-1.jpg",
    rating: 5,
    text: "The VIP service is truly world-class. They understood our unique requirements and delivered beyond expectations. Dubai's luxury market is in excellent hands with this team.",
    property: "DIFC Executive Suite",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section
      id="testimonials-section"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Client <span className="text-amber-400">Testimonials</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Hear from our distinguished clients about their exceptional experiences with our luxury services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Card className="p-8 md:p-12 bg-white/5 backdrop-blur-lg border-white/10 relative overflow-hidden">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-6 left-6 text-amber-400/20"
                  >
                    <Quote className="w-16 h-16" />
                  </motion.div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-center justify-center mb-6"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-amber-400 fill-current mx-1" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-8 italic"
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>

                    {/* Client Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex items-center justify-center space-x-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-16 h-16 rounded-full border-2 border-amber-400/50 overflow-hidden"
                      >
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={`${testimonials[currentIndex].name} - ${testimonials[currentIndex].property}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </motion.div>
                      <div className="text-center">
                        <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-400 text-sm">{testimonials[currentIndex].title}</p>
                        <p className="text-amber-400 text-sm font-medium">{testimonials[currentIndex].property}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.4,
                        }}
                        style={{
                          left: `${10 + i * 10}%`,
                          bottom: "10%",
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-amber-400" : "bg-white/30"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Testimonial Grid Preview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
              >
                <Card className="p-4 bg-white/5 backdrop-blur-lg border-white/10 hover:border-amber-400/30 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-12 h-12 rounded-full border border-amber-400/30 overflow-hidden mb-3">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name} - ${testimonial.property}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="mb-3">
                      <h5 className="text-white text-sm font-medium">{testimonial.name}</h5>
                      <p className="text-gray-400 text-xs">{testimonial.title}</p>
                      <p className="text-amber-400 text-xs font-medium">{testimonial.property}</p>
                    </div>
                    <p className="text-gray-300 text-xs line-clamp-3">"{testimonial.text}"</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-black font-semibold px-12 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/25"
          >
            Share Your Experience
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
