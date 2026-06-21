import Image from 'next/image'

export default function Community() {
  return (
    <section className="relative w-full h-96 sm:h-[500px] overflow-hidden bg-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/community-gathering.png"
          alt="Community gathering"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-light text-white mb-6 max-w-3xl">
          Join Thousands of Curious Minds
        </h2>
        <p className="text-lg sm:text-xl font-serif text-white/90 mb-10 max-w-2xl">
          People across the world are discovering new skills, meeting interesting people, and spending their weekends differently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-accent text-background font-serif hover:bg-accent/90 transition-colors">
            Explore Experiences
          </button>
          <button className="px-8 py-3 border border-white text-white font-serif hover:bg-white/10 transition-colors">
            Join Community
          </button>
        </div>
      </div>
    </section>
  )
}
