'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import FeaturedCollections from '@/components/featured-collections'
import DiscoveryCollections from '@/components/discovery-collections'
import Philosophy from '@/components/philosophy'
import FeaturedHosts from '@/components/featured-hosts'
import UpcomingExperiences from '@/components/upcoming-experiences'
import Journal from '@/components/journal'
import Community from '@/components/community'
import Membership from '@/components/membership'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <DiscoveryCollections />
      <Philosophy />
      <FeaturedHosts />
      <UpcomingExperiences />
      <Journal />
      <Community />
      <Membership />
      <Footer />
    </main>
  )
}
