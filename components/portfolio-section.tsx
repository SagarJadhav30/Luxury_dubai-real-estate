"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Share2, MapPin, Bed, Bath, Square } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Burj Khalifa Penthouse",
    location: "Downtown Dubai",
    price: "$15,000,000",
    image: "/images/burj-khalifa-penthouse.jpg",
    category: "penthouse",
    bedrooms: 4,
    bathrooms: 5,
    area: "5,000 sq ft",
    status: "Available",
    featured: true,
  },
  {
    id: 2,
    title: "Palm Jumeirah Villa",
    location: "Palm Jumeirah",
    price: "$8,500,000",
    image: "/images/palm-jumeirah-villa.jpg",
    category: "villa",
    bedrooms: 6,
    bathrooms: 7,
    area: "8,500 sq ft",
    status: "Sold",
    featured: true,
  },
  {
    id: 3,
    title: "Marina Luxury Apartment",
    location: "Dubai Marina",
    price: "$2,200,000",
    image: "/images/marina-apartment.jpg",
    category: "apartment",
    bedrooms: 3,
    bathrooms: 4,
    area: "2,800 sq ft",
    status: "Available",
    featured: false,
  },
  {
    id: 4,
    title: "DIFC Executive Suite",
    location: "DIFC",
    price: "$3,800,000",
    image: "/images/difc-executive-suite.jpg",
    category: "apartment",
    bedrooms: 2,
    bathrooms: 3,
    area: "2,200 sq ft",
    status: "Reserved",
    featured: false,
  },
  {
    id: 5,
    title: "Emirates Hills Mansion",
    location: "Emirates Hills",
    price: "$25,000,000",
    image: "/images/emirates-hills-mansion.jpg",
    category: "villa",
    bedrooms: 8,
    bathrooms: 10,
    area: "15,000 sq ft",
    status: "Available",
    featured: true,
  },
  {
    id: 6,
    title: "Jumeirah Beach Residence",
    location: "JBR",
    price: "$4,200,000",
    image: "/images/jbr-penthouse.jpg",
    category: "penthouse",
    bedrooms: 4,
    bathrooms: 5,
    area: "4,200 sq ft",
    status: "Available",
    featured: false,
  },
]

const categories = [
  { id: "all", label: "All Properties" },
  { id: "penthouse", label: "Penthouses" },
  { id: "villa", label: "Villas" },
  { id: "apartment", label: "Apartments" },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = portfolioItems.filter((item) => activeCategory === "all" || item.category === activeCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500"
      case "Sold":
        return "bg-red-500"
      case "Reserved":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="portfolio-section" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
            Luxury <span className="text-amber-400">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our exclusive collection of Dubai's most prestigious properties, each offering unparalleled luxury
            and sophistication
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-amber-600 text-black hover:bg-amber-700"
                  : "border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Enhanced for consistent card heights and better image display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group cursor-pointer h-full"
              >
                <Card className="overflow-hidden bg-white/5 backdrop-blur-lg border-white/10 hover:border-amber-400/50 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container with Fixed Height */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>

                    {/* Status Badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold ${getStatusColor(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </div>

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-amber-600 text-black rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-colors duration-300"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-colors duration-300"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-colors duration-300"
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Content Container with Flex Grow to Fill Available Space */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-gray-300 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.location}</span>
                    </div>

                    <div className="text-2xl font-bold text-amber-400 mb-4">{item.price}</div>

                    {/* Property Details */}
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{item.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{item.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{item.area}</span>
                      </div>
                    </div>

                    {/* Push button to bottom with margin-top auto */}
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        onClick={() => {
                          // Scroll to contact for inquiries about specific properties
                          document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                          // You could also set a specific property in contact form state here
                        }}
                        className="w-full border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
                      >
                        Inquire Now
                      </Button>
                    </div>
                  </div>

                  {/* Floating Elements on Hover */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: -20 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="absolute w-2 h-2 bg-amber-400/50 rounded-full"
                            style={{
                              left: `${30 + i * 20}%`,
                              bottom: "20%",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })}
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-12 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Search All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
