"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Key, TrendingUp, Shield, Users, Award } from "lucide-react"

const services = [
  {
    icon: Building,
    title: "Luxury Real Estate",
    description: "Exclusive access to Dubai's most prestigious properties and developments",
    features: ["Premium Locations", "Investment Guidance", "Market Analysis"],
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Comprehensive management services for your luxury property portfolio",
    features: ["24/7 Concierge", "Maintenance", "Tenant Relations"],
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment guidance for maximum returns in Dubai's market",
    features: ["Market Research", "ROI Analysis", "Portfolio Optimization"],
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Legal Services",
    description: "Expert legal support for all your property transactions and investments",
    features: ["Contract Review", "Due Diligence", "Compliance"],
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: Users,
    title: "VIP Concierge",
    description: "Personalized luxury services tailored to your lifestyle needs",
    features: ["Personal Assistant", "Lifestyle Management", "Exclusive Access"],
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Award,
    title: "Luxury Consulting",
    description: "Bespoke consulting services for high-net-worth individuals",
    features: ["Wealth Management", "Lifestyle Planning", "Investment Strategy"],
    color: "from-indigo-400 to-blue-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-transparent rounded-full blur-3xl"
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
            Premium <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive luxury services designed to exceed expectations and deliver unparalleled experiences in
            Dubai's elite market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full p-8 bg-white/5 backdrop-blur-lg border-white/10 hover:border-amber-400/50 transition-all duration-500 relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}
                  />

                  <div className="relative z-10">
                    {/* Icon with Animated Background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-amber-400/25`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                    </Button>
                  </div>

                  {/* Hover Effect Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
                        animate={{
                          y: [0, -50],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          bottom: "20%",
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
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
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
