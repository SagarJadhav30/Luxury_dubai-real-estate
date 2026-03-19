"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Crown,
  Building,
  Award,
} from "lucide-react"

const footerLinks = {
  properties: [
    { name: "Luxury Penthouses", href: "#penthouses" },
    { name: "Beachfront Villas", href: "#villas" },
    { name: "Premium Apartments", href: "#apartments" },
    { name: "Commercial Properties", href: "#commercial" },
    { name: "Investment Opportunities", href: "#investments" },
  ],
  services: [
    { name: "Real Estate Sales", href: "#sales" },
    { name: "Property Management", href: "#management" },
    { name: "Investment Advisory", href: "#advisory" },
    { name: "Legal Services", href: "#legal" },
    { name: "VIP Concierge", href: "#vip" },
  ],
  locations: [
    { name: "Downtown Dubai", href: "#downtown" },
    { name: "Palm Jumeirah", href: "#palm" },
    { name: "Dubai Marina", href: "#marina" },
    { name: "DIFC", href: "#difc" },
    { name: "Emirates Hills", href: "#emirates" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Press & Media", href: "#press" },
    { name: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const achievements = [
  { icon: Award, text: "Best Luxury Real Estate 2024" },
  { icon: Crown, text: "VIP Service Excellence" },
  { icon: Building, text: "500+ Premium Properties" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-amber-400/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
              Stay Updated with <span className="text-amber-400">Luxury Dubai</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Get exclusive access to new properties, market insights, and VIP events
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-amber-400/30 text-white placeholder:text-gray-400 focus:border-amber-400"
              />
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-black font-semibold px-8">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">LD</span>
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white">
                    <span className="text-amber-400">Luxury</span> Dubai
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Dubai's premier luxury real estate agency, specializing in exclusive properties and personalized VIP
                services for discerning clients worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>Gate Avenue, Level 14, DIFC, Dubai</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>luxury@dubai.com</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 hover:bg-amber-400 rounded-lg flex items-center justify-center text-white hover:text-black transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Properties Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Properties</h4>
              <ul className="space-y-3">
                {footerLinks.properties.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Locations Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Locations</h4>
              <ul className="space-y-3">
                {footerLinks.locations.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-8 border-t border-b border-amber-400/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-3 text-center"
                >
                  <Icon className="w-6 h-6 text-amber-400" />
                  <span className="text-white font-medium">{achievement.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Luxury Dubai. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Licensed by RERA</span>
              <span>•</span>
              <span>Member of Dubai Real Estate Institute</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </footer>
  )
}
