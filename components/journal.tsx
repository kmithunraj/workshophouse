import Image from 'next/image'

const articles = [
  {
    id: 1,
    title: 'The Lost Art of Slow Learning',
    excerpt: 'In an age of rapid consumption, we explore why deliberate, immersive learning produces the most meaningful insights.',
    date: 'June 2024',
    image: '/hero-workshop.png',
  },
  {
    id: 2,
    title: 'Why Craftsmanship Matters',
    excerpt: 'From woodworking to gastronomy, we examine how mastery of craft creates profound personal fulfillment.',
    date: 'May 2024',
    image: '/hero-workshop.png',
  },
  {
    id: 3,
    title: 'The Renaissance of Community',
    excerpt: 'Discovering how intimate gatherings and intellectual discourse are reshaping modern connection.',
    date: 'April 2024',
    image: '/hero-workshop.png',
  },
]

export default function Journal() {
  return (
    <section className="w-full bg-background py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-light text-foreground">
            From the Journal
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden mb-6 bg-card">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={100}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-xs font-serif text-accent uppercase tracking-widest">
                  {article.date}
                </p>
                <h3 className="text-2xl font-display font-light text-foreground leading-tight group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-base font-serif text-foreground/70 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-serif text-accent hover:gap-4 transition-all">
                    Read Article
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
