"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Mic, Star, X } from "lucide-react"
import { ChevronDown } from "lucide-react"

const searchSuggestions = [
  "Penthouse at Burj Khalifa",
  "Villa at Palm Jumeirah",
  "Apartment at Marina",
  "DIFC Executive Suite",
  "Emirates Hills Mansion", 
  "JBR Beachfront Penthouse",
]

const allProperties = [
  {
    id: 1,
    title: "Penthouse at Burj Khalifa",
    location: "Downtown Dubai",
    price: "$15,000,000",
    image: "/images/burj-khalifa-penthouse-new.jpg",
    rating: 5,
    features: ["3 Bedrooms", "Sky Lounge", "Private Elevator"],
    type: "penthouse",
    priceRange: "10m+",
    bedrooms: "3",
  },
  {
    id: 2,
    title: "Villa at Palm Jumeirah",
    location: "Palm Jumeirah",
    price: "$8,500,000",
    image: "/images/luxury-villa-exterior.jpg",
    rating: 5,
    features: ["5 Bedrooms", "Private Beach", "Infinity Pool"],
    type: "villa",
    priceRange: "5-10m",
    bedrooms: "5",
  },
  {
    id: 3,
    title: "Apartment at Marina",
    location: "Dubai Marina",
    price: "$2,200,000",
    image: "/images/modern-apartment-interior.jpg",
    rating: 4,
    features: ["2 Bedrooms", "Marina View", "Gym Access"],
    type: "apartment",
    priceRange: "1-5m",
    bedrooms: "2",
  },
  {
    id: 4,
    title: "DIFC Executive Suite",
    location: "DIFC",
    price: "$3,800,000",
    image: "/images/difc-executive-suite.jpg",
    rating: 5,
    features: ["2 Bedrooms", "City View", "Premium Finishes"],
    type: "apartment",
    priceRange: "1-5m",
    bedrooms: "2",
  },
  {
    id: 5,
    title: "Emirates Hills Mansion",
    location: "Emirates Hills",
    price: "$25,000,000",
    image: "/images/emirates-hills-mansion.jpg",
    rating: 5,
    features: ["8 Bedrooms", "Golf Course View", "Private Pool"],
    type: "villa",
    priceRange: "10m+",
    bedrooms: "4+",
  },
  {
    id: 6,
    title: "JBR Beachfront Penthouse",
    location: "JBR",
    price: "$4,200,000",
    image: "/images/jbr-penthouse.jpg",
    rating: 4,
    features: ["4 Bedrooms", "Beach Access", "Panoramic Views"],
    type: "penthouse",
    priceRange: "1-5m",
    bedrooms: "4+",
  },
]

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showVoiceModal, setShowVoiceModal] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: "",
    priceRange: "",
    location: "",
    bedrooms: "",
  })

  // Filter properties based on search query and filters
  const filteredProperties = useMemo(() => {
    let filtered = allProperties

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by property type
    if (selectedFilters.propertyType) {
      filtered = filtered.filter((property) => property.type === selectedFilters.propertyType)
    }

    // Filter by price range
    if (selectedFilters.priceRange) {
      filtered = filtered.filter((property) => property.priceRange === selectedFilters.priceRange)
    }

    // Filter by location
    if (selectedFilters.location) {
      const locationMap: { [key: string]: string } = {
        downtown: "Downtown Dubai",
        marina: "Dubai Marina",
        palm: "Palm Jumeirah",
        difc: "DIFC",
        jbr: "JBR",
        emirates: "Emirates Hills",
      }
      filtered = filtered.filter((property) => property.location === locationMap[selectedFilters.location])
    }

    // Filter by bedrooms
    if (selectedFilters.bedrooms) {
      if (selectedFilters.bedrooms === "4+") {
        filtered = filtered.filter((property) => property.bedrooms === "4+" || Number.parseInt(property.bedrooms) >= 4)
      } else {
        filtered = filtered.filter((property) => property.bedrooms === selectedFilters.bedrooms)
      }
    }

    return filtered
  }, [searchQuery, selectedFilters])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedFilters({
      propertyType: "",
      priceRange: "",
      location: "",
      bedrooms: "",
    })
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
  }

  const handleVoiceSearch = () => {
    setShowVoiceModal(true)
    // Simulate voice search
    setTimeout(() => {
      setSearchQuery("Luxury Penthouses Downtown")
      setShowVoiceModal(false)
    }, 2000)
  }

  return (
    <section id="search-section" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Fluid Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Find Your <span className="text-amber-400">Dream Property</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Advanced search with intelligent filters to discover luxury properties that match your exact preferences
          </p>
        </motion.div>

        {/* Advanced Search Bar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-amber-400/20">
            <div className="relative mb-6">
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                  <Input
                    placeholder="Search luxury properties, locations, or amenities..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSuggestions(e.target.value.length > 0)
                    }}
                    onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                    className="pl-10 pr-12 py-3 bg-white/20 border-amber-400/30 text-white placeholder:text-gray-400 focus:border-amber-400"
                  />
                  {searchQuery && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSearchQuery("")
                        setShowSuggestions(false)
                      }}
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    size="sm"
                    onClick={handleVoiceSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-black"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-black px-6">
                  Search ({filteredProperties.length})
                </Button>
              </div>

              {/* Search Suggestions with Higher Z-Index */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-2xl z-[100] border border-amber-400/20"
                  >
                    <div className="p-2">
                      <div className="text-xs text-gray-400 px-3 py-2 border-b border-gray-700">Popular Searches</div>
                      {searchSuggestions
                        .filter((suggestion) => suggestion.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((suggestion, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                            className="p-3 cursor-pointer text-white hover:text-amber-400 transition-colors duration-200 rounded-md mx-1"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <div className="flex items-center space-x-2">
                              <Search className="h-4 w-4 text-gray-400" />
                              <span>{suggestion}</span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <select
                  value={selectedFilters.propertyType}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, propertyType: e.target.value })}
                  className="w-full h-10 rounded-md border border-amber-400/30 bg-gray-800 text-white px-3 py-2 appearance-none focus:border-amber-400 focus:outline-none"
                  style={{
                    backgroundImage: "none",
                  }}
                >
                  <option value="" className="bg-gray-800 text-white">
                    Property Type
                  </option>
                  <option value="penthouse" className="bg-gray-800 text-white hover:bg-gray-700">
                    Penthouse
                  </option>
                  <option value="villa" className="bg-gray-800 text-white hover:bg-gray-700">
                    Villa
                  </option>
                  <option value="apartment" className="bg-gray-800 text-white hover:bg-gray-700">
                    Apartment
                  </option>
                  <option value="townhouse" className="bg-gray-800 text-white hover:bg-gray-700">
                    Townhouse
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white opacity-50 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedFilters.priceRange}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, priceRange: e.target.value })}
                  className="w-full h-10 rounded-md border border-amber-400/30 bg-gray-800 text-white px-3 py-2 appearance-none focus:border-amber-400 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">
                    Price Range
                  </option>
                  <option value="1-5m" className="bg-gray-800 text-white hover:bg-gray-700">
                    $1M - $5M
                  </option>
                  <option value="5-10m" className="bg-gray-800 text-white hover:bg-gray-700">
                    $5M - $10M
                  </option>
                  <option value="10m+" className="bg-gray-800 text-white hover:bg-gray-700">
                    $10M+
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white opacity-50 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
                  className="w-full h-10 rounded-md border border-amber-400/30 bg-gray-800 text-white px-3 py-2 appearance-none focus:border-amber-400 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">
                    Location
                  </option>
                  <option value="downtown" className="bg-gray-800 text-white hover:bg-gray-700">
                    Downtown Dubai
                  </option>
                  <option value="marina" className="bg-gray-800 text-white hover:bg-gray-700">
                    Dubai Marina
                  </option>
                  <option value="palm" className="bg-gray-800 text-white hover:bg-gray-700">
                    Palm Jumeirah
                  </option>
                  <option value="difc" className="bg-gray-800 text-white hover:bg-gray-700">
                    DIFC
                  </option>
                  <option value="jbr" className="bg-gray-800 text-white hover:bg-gray-700">
                    JBR
                  </option>
                  <option value="emirates" className="bg-gray-800 text-white hover:bg-gray-700">
                    Emirates Hills
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white opacity-50 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedFilters.bedrooms}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, bedrooms: e.target.value })}
                  className="w-full h-10 rounded-md border border-amber-400/30 bg-gray-800 text-white px-3 py-2 appearance-none focus:border-amber-400 focus:outline-none"
                >
                  <option value="" className="bg-gray-800 text-white">
                    Bedrooms
                  </option>
                  <option value="1" className="bg-gray-800 text-white hover:bg-gray-700">
                    1 Bedroom
                  </option>
                  <option value="2" className="bg-gray-800 text-white hover:bg-gray-700">
                    2 Bedrooms
                  </option>
                  <option value="3" className="bg-gray-800 text-white hover:bg-gray-700">
                    3 Bedrooms
                  </option>
                  <option value="4+" className="bg-gray-800 text-white hover:bg-gray-700">
                    4+ Bedrooms
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white opacity-50 pointer-events-none" />
              </div>
            </div>

            {/* Clear Filters Button */}
            {(searchQuery || Object.values(selectedFilters).some((filter) => filter !== "")) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex justify-center"
              >
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 text-sm"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>

        {/* Search Results Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-white">
              Search Results ({filteredProperties.length} properties)
            </h3>
            {(searchQuery || Object.values(selectedFilters).some((filter) => filter !== "")) && (
              <div className="text-gray-400 text-sm">
                {searchQuery && `Searching for: "${searchQuery}"`}
                {Object.values(selectedFilters).some((filter) => filter !== "") && " • Filters applied"}
              </div>
            )}
          </div>
        </motion.div>

        {/* Search Results */}
        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <motion.div
              key="results"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer h-full"
                >
                  <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 h-full flex flex-col">
                    {/* Image Container with Fixed Height */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-white text-sm">{property.rating}</span>
                      </div>
                    </div>

                    {/* Content Container with Flex Grow to Fill Available Space */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-gray-300 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="text-2xl font-bold text-amber-400 mb-4">{property.price}</div>

                      {/* Features with margin-top auto to push to bottom */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {property.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-amber-400/20 text-amber-400 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          onClick={() => {
                            document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                            // Could pre-fill contact form with property details
                          }}
                          className="w-full border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
                        >
                          Inquire About This Property
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold text-white mb-4">No Properties Found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search criteria or clearing some filters to see more results.
              </p>
              <Button onClick={clearFilters} className="bg-amber-600 hover:bg-amber-700 text-black px-8">
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Voice Search Modal */}
        <AnimatePresence>
          {showVoiceModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-lg p-8 text-center border border-amber-400/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Mic className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Listening...</h3>
                <p className="text-gray-400">Speak your search query</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
