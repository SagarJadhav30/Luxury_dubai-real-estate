"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown } from "lucide-react"
import { Phone, Mail, MapPin, Calendar, Crown } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "24/7 Premium Support",
    contact: "+971 4 123 4567",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Quick Response Guaranteed",
    contact: "luxury@dubai.com",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "DIFC, Dubai",
    contact: "Gate Avenue, Level 14",
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: Crown,
    title: "VIP Service",
    description: "Exclusive Concierge",
    contact: "VIP Hotline Available",
    color: "from-amber-400 to-yellow-500",
  },
]

export default function ContactSection() {
  const [activeForm, setActiveForm] = useState("quick")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    preferredTime: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSelectChange = (field: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 70% 60%, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience personalized luxury service with multiple ways to connect with our expert team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Methods */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Methods</h3>

            <div className="space-y-6 flex-grow">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group cursor-pointer"
                  >
                    <Card className="p-6 bg-white/5 backdrop-blur-lg border-white/10 hover:border-amber-400/30 transition-all duration-300 overflow-hidden">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                          <p className="text-amber-400 font-medium mt-1">{method.contact}</p>
                        </div>
                      </div>

                      {/* Animated Particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
                            animate={{
                              y: [0, -30],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.3,
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col"
          >
            <Card className="p-8 bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>

              {/* Form Type Selector */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-2 mb-8">
                <Button
                  variant={activeForm === "quick" ? "default" : "outline"}
                  onClick={() => setActiveForm("quick")}
                  className={`flex-1 text-sm ml-2 sm:ml-0 ${
                    activeForm === "quick"
                      ? "bg-amber-600 text-black"
                      : "border-amber-400/50 text-amber-400 hover:bg-amber-400/10"
                  }`}
                >
                  Quick Inquiry
                </Button>
                <Button
                  variant={activeForm === "detailed" ? "default" : "outline"}
                  onClick={() => setActiveForm("detailed")}
                  className={`flex-1 text-sm ${
                    activeForm === "detailed"
                      ? "bg-amber-600 text-black"
                      : "border-amber-400/50 text-amber-400 hover:bg-amber-400/10"
                  }`}
                >
                  Detailed Consultation
                </Button>
                <Button
                  variant={activeForm === "vip" ? "default" : "outline"}
                  onClick={() => setActiveForm("vip")}
                  className={`flex-1 text-sm ${
                    activeForm === "vip"
                      ? "bg-amber-600 text-black"
                      : "border-amber-400/50 text-amber-400 hover:bg-amber-400/10"
                  }`}
                >
                  VIP Service
                </Button>
              </div>

              <div className="flex-grow flex flex-col">
                <motion.div
                  key={activeForm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 flex-grow flex flex-col"
                >
                  {/* Quick Inquiry Form */}
                  {activeForm === "quick" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                        <Input
                          placeholder="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                      />
                      <Textarea
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400 min-h-[120px] flex-grow"
                      />
                    </>
                  )}

                  {/* Detailed Consultation Form */}
                  {activeForm === "detailed" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                        <Input
                          placeholder="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                        <div className="relative">
                          <select
                            value={formData.service}
                            onChange={(e) => handleSelectChange("service", e)}
                            className="w-full h-10 rounded-md border border-amber-400/30 bg-white/10 text-white px-3 py-2 appearance-none"
                          >
                            <option value="" disabled>
                              Service Interest
                            </option>
                            <option value="real-estate">Real Estate</option>
                            <option value="investment">Investment Advisory</option>
                            <option value="management">Property Management</option>
                            <option value="legal">Legal Services</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white opacity-50 pointer-events-none" />
                        </div>
                      </div>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => handleSelectChange("budget", e)}
                          className="w-full h-10 rounded-md border border-amber-400/30 bg-white/10 text-white px-3 py-2 appearance-none"
                        >
                          <option value="" disabled>
                            Budget Range
                          </option>
                          <option value="1-5m">$1M - $5M</option>
                          <option value="5-10m">$5M - $10M</option>
                          <option value="10-25m">$10M - $25M</option>
                          <option value="25m+">$25M+</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white opacity-50 pointer-events-none" />
                      </div>
                      <Textarea
                        placeholder="Detailed requirements and preferences..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400 min-h-[120px] flex-grow"
                      />
                    </>
                  )}

                  {/* VIP Service Form */}
                  {activeForm === "vip" && (
                    <>
                      <div className="text-center mb-6">
                        <Crown className="w-12 h-12 text-amber-400 mx-auto mb-2" />
                        <h4 className="text-xl font-semibold text-amber-400">VIP Concierge Service</h4>
                        <p className="text-gray-300 text-sm">Exclusive access to our premium services</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                        <Input
                          placeholder="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Private Phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                        <Input
                          placeholder="Preferred Contact Time"
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                          className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <Textarea
                        placeholder="Describe your luxury requirements and how we can serve you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400 min-h-[120px] flex-grow"
                      />
                    </>
                  )}

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-black font-semibold py-3 text-lg transition-all duration-300">
                      {activeForm === "quick" && "Send Inquiry"} 
                      {activeForm === "detailed" && "Schedule Consultation"}
                      {activeForm === "vip" && "Request VIP Service"}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Animated Calendar Icon */}
              <motion.div
                animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-6 right-6 text-amber-400/20"
              >
                <Calendar className="w-16 h-16" />
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
