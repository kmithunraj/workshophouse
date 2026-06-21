import Image from 'next/image'

const values = [
  {
    title: 'Learning',
    description: 'Deep dive into subjects that matter. Our workshops aren\'t superficial. They\'re designed for genuine understanding and growth.',
  },
  {
    title: 'Community',
    description: 'Meet curious people from around the world. Build meaningful friendships with fellow enthusiasts and accomplished experts.',
  },
  {
    title: 'Creativity',
    description: 'Explore your creative potential. Whether you\'re a beginner or advanced, our hosts inspire you to make, create, and experiment.',
  },
  {
    title: 'Meaningful Weekends',
    description: 'Spend your time on what matters. Replace scrolling with skill-building. Replace distraction with depth.',
  },
]

export default function Philosophy() {
  return (
    <section className="w-full bg-background py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/hero-workshop.png"
                alt="Meaningful learning experiences"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="order-1 md:order-2 space-y-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-display font-light text-foreground mb-6 leading-tight">
                More Than Just Workshops
              </h2>
              <p className="text-lg font-serif text-foreground/80 leading-relaxed">
                We believe in the power of hands-on learning, meaningful connection, and spending your time on what truly matters.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-display font-light text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm font-serif text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
