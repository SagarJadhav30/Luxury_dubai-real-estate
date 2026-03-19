"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero-section" },
  {
    name: "Properties",
    href: "#search-section",
    submenu: [
      { name: "Search Properties", href: "#search-section" },
      { name: "Featured Portfolio", href: "#portfolio-section" },
      { name: "Luxury Penthouses", href: "#search-section" },
      { name: "Beachfront Villas", href: "#search-section" },
    ],
  },
  {
    name: "Services",
    href: "#services-section",
    submenu: [
      { name: "Real Estate", href: "#services-section" },
      { name: "Investment Advisory", href: "#services-section" },
      { name: "Property Management", href: "#services-section" },
      { name: "Legal Services", href: "#services-section" },
    ],
  },
  { name: "Portfolio", href: "#portfolio-section" },
  { name: "About", href: "#services-section" },
  { name: "Contact", href: "#contact-section" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-amber-400/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">LD</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-light text-white">
                  <span className="text-amber-400">Luxury</span> Dubai
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const targetId = item.href.replace("#", "")
                      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-white hover:text-amber-400 transition-colors duration-300 flex items-center space-x-1 py-2"
                    whileHover={{ y: -2 }}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-lg border border-amber-400/20 rounded-lg shadow-xl"
                      >
                        {item.submenu.map((subItem) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault()
                              const targetId = subItem.href.replace("#", "")
                              document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
                              setActiveDropdown(null)
                            }}
                            className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-amber-400/10 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                            whileHover={{ x: 5 }}
                          >
                            {subItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>luxury@dubai.com</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-black font-semibold px-6 transition-all duration-300 hover:scale-105">
                VIP Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-amber-400/20"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <motion.a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          const targetId = item.href.replace("#", "")
                          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
                          setIsMobileMenuOpen(false)
                        }}
                        className="block text-white hover:text-amber-400 transition-colors duration-300 py-2"
                        whileHover={{ x: 10 }}
                      >
                        {item.name}
                      </motion.a>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => {
                                e.preventDefault()
                                const targetId = subItem.href.replace("#", "")
                                document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
                                setIsMobileMenuOpen(false)
                              }}
                              className="block text-gray-400 hover:text-amber-400 transition-colors duration-300 py-1 text-sm"
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-amber-400/20">
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+971 4 123 4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>luxury@dubai.com</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-black font-semibold">
                      VIP Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  )
}
