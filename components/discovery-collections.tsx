import Image from 'next/image'

const collections = [
  {
    id: 1,
    name: 'Culinary Arts',
    image: '/hero-workshop.png',
  },
  {
    id: 2,
    name: 'Art & Design',
    image: '/hero-workshop.png',
  },
  {
    id: 3,
    name: 'Music & Culture',
    image: '/hero-workshop.png',
  },
  {
    id: 4,
    name: 'Craftsmanship',
    image: '/hero-workshop.png',
  },
  {
    id: 5,
    name: 'Wellness',
    image: '/hero-workshop.png',
  },
  {
    id: 6,
    name: 'Literature',
    image: '/hero-workshop.png',
  },
  {
    id: 7,
    name: 'Philosophy',
    image: '/hero-workshop.png',
  },
]

export default function DiscoveryCollections() {
  return (
    <section className="w-full bg-card/30 py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-light text-foreground mb-3">
            Explore By Interest
          </h2>
          <p className="text-lg font-serif text-foreground/70 max-w-2xl">
            Discover the collection that speaks to your curiosity.
          </p>
        </div>

        {/* Collections Grid - 7 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.slice(0, 4).map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer relative h-64 overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
              <div className="absolute inset-0 flex items-end justify-start p-6">
                <h3 className="text-2xl font-display font-light text-white">
                  {collection.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {collections.slice(4).map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer relative h-64 overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
              <div className="absolute inset-0 flex items-end justify-start p-6">
                <h3 className="text-2xl font-display font-light text-white">
                  {collection.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
