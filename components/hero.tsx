'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-foreground pt-24">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 top-24"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/hero-workshop.png"
          alt="Luxury workshop experience"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Dark Overlay - lighter for discovery feel */}
      <div className="absolute inset-0 top-24 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-20 sm:py-32">
        {/* Main Headline */}
        <h1 className="text-balance text-center mb-6 text-5xl sm:text-6xl lg:text-6xl font-display font-light text-white leading-tight max-w-4xl">
          Discover Extraordinary Ways to Spend Your Weekend
        </h1>

        {/* Subheadline */}
        <p className="text-center max-w-2xl mb-12 text-lg sm:text-xl text-white/95 font-serif">
          Curated workshops in art, food, culture, craftsmanship, creativity, and lifelong learning.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative flex items-center bg-background rounded-sm shadow-lg">
            <input
              type="text"
              placeholder="What would you like to learn today?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-6 py-3 sm:py-4 bg-background text-foreground font-serif text-base placeholder-muted-foreground focus:outline-none"
            />
            <button className="px-6 py-3 sm:py-4 text-accent hover:text-accent/80 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm font-serif text-white/70 tracking-wide">
          Handpicked workshops from world-class hosts
        </p>
      </div>
    </section>
  )
}
