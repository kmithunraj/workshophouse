import Image from 'next/image'

const hosts = [
  {
    id: 1,
    name: 'Chef Marie Leclerc',
    specialty: 'Culinary Arts',
    bio: 'Master chef with 30 years of heritage cooking expertise',
    image: '/hero-workshop.png',
  },
  {
    id: 2,
    name: 'Professor Giovanni Rossi',
    specialty: 'Architecture & History',
    bio: 'Renowned historian and architectural conservationist',
    image: '/hero-workshop.png',
  },
  {
    id: 3,
    name: 'Akiko Yamamoto',
    specialty: 'Traditional Arts',
    bio: 'Certified tea master and cultural practitioner',
    image: '/hero-workshop.png',
  },
  {
    id: 4,
    name: 'Isabella Forte',
    specialty: 'Visual Arts',
    bio: 'Contemporary artist and classical technique instructor',
    image: '/hero-workshop.png',
  },
]

export default function FeaturedHosts() {
  return (
    <section className="w-full bg-background py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-light text-foreground">
            Meet the Experts
          </h2>
        </div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {hosts.map((host) => (
            <div key={host.id} className="group">
              {/* Host Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-card">
                <Image
                  src={host.image}
                  alt={host.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={100}
                />
              </div>

              {/* Host Info */}
              <div className="space-y-2">
                <p className="text-xs font-serif text-accent uppercase tracking-widest">
                  {host.specialty}
                </p>
                <h3 className="text-2xl font-display font-light text-foreground">
                  {host.name}
                </h3>
                <p className="text-base font-serif text-foreground/70 leading-relaxed">
                  {host.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
