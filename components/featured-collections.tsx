import Image from 'next/image'

const experiences = [
  {
    id: 1,
    title: 'The Art of Sourdough',
    host: 'Pierre Moreau',
    location: 'Paris, France',
    date: 'June 15-17, 2024',
    price: '€450',
    image: '/hero-workshop.png',
  },
  {
    id: 2,
    title: 'Philosophy & Wine Evenings',
    host: 'Dr. Catherine Dupont',
    location: 'Bordeaux, France',
    date: 'July 8-10, 2024',
    price: '€520',
    image: '/hero-workshop.png',
  },
  {
    id: 3,
    title: 'Architectural Walks',
    host: 'Marco Rossi',
    location: 'Rome, Italy',
    date: 'July 22-24, 2024',
    price: '€380',
    image: '/hero-workshop.png',
  },
  {
    id: 4,
    title: 'Portrait Sketching Intensive',
    host: 'Isabella Verdi',
    location: 'Florence, Italy',
    date: 'August 5-7, 2024',
    price: '€420',
    image: '/hero-workshop.png',
  },
  {
    id: 5,
    title: 'Classical Music Deep Dive',
    host: 'Wolfgang Mueller',
    location: 'Vienna, Austria',
    date: 'August 19-21, 2024',
    price: '€480',
    image: '/hero-workshop.png',
  },
  {
    id: 6,
    title: 'Japanese Tea Ceremony',
    host: 'Yuki Tanaka',
    location: 'Kyoto, Japan',
    date: 'September 2-4, 2024',
    price: '¥45,000',
    image: '/hero-workshop.png',
  },
]

export default function FeaturedCollections() {
  return (
    <section className="w-full bg-background py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-light text-foreground mb-3">
            Featured Experiences
          </h2>
          <p className="text-lg font-serif text-foreground/70 max-w-2xl">
            Handpicked experiences happening this month. Discover world-class learning with accomplished hosts.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group cursor-pointer transition-all duration-300 hover:translate-y-[-2px]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-card">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={100}
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-display font-light text-foreground leading-tight">
                  {exp.title}
                </h3>
                
                <p className="text-sm font-serif text-accent">
                  {exp.host}
                </p>

                <div className="space-y-2 pt-3 border-t border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-serif text-muted-foreground uppercase tracking-wide">
                        {exp.location}
                      </p>
                      <p className="text-xs font-serif text-foreground/80 mt-1">
                        {exp.date}
                      </p>
                    </div>
                    <p className="text-sm font-serif font-light text-foreground">
                      {exp.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Button */}
              <button className="mt-4 w-full py-2 text-sm font-serif text-accent border border-accent/30 hover:border-accent hover:bg-accent/5 transition-all">
                View Experience
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
