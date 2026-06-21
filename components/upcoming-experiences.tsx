const upcomingExperiences = [
  {
    id: 1,
    title: 'Contemporary Printmaking',
    date: 'September 14-15',
    location: 'Brooklyn, NY',
    host: 'Sarah Johnson',
    price: '$280',
  },
  {
    id: 2,
    title: 'Sustainable Fashion Workshop',
    date: 'September 21-22',
    location: 'Copenhagen, Denmark',
    host: 'Anna Nielsen',
    price: '€350',
  },
  {
    id: 3,
    title: 'Fermentation & Preservation',
    date: 'September 28-29',
    location: 'Portland, OR',
    host: 'James Chen',
    price: '$240',
  },
  {
    id: 4,
    title: 'Photography Fundamentals',
    date: 'October 5-6',
    location: 'Berlin, Germany',
    host: 'Klaus Mueller',
    price: '€320',
  },
  {
    id: 5,
    title: 'Pottery & Ceramic Arts',
    date: 'October 12-14',
    location: 'Oaxaca, Mexico',
    host: 'Maria Garcia',
    price: '$420',
  },
  {
    id: 6,
    title: 'Urban Foraging Walk',
    date: 'October 19',
    location: 'London, UK',
    host: 'Robert Williams',
    price: '£95',
  },
]

export default function UpcomingExperiences() {
  return (
    <section className="w-full bg-background py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-light text-foreground mb-3">
            Upcoming Experiences
          </h2>
          <p className="text-lg font-serif text-foreground/70 max-w-2xl">
            Browse our full calendar of upcoming workshops and experiences.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {upcomingExperiences.map((exp) => (
            <div
              key={exp.id}
              className="group p-6 border border-border hover:border-accent/50 transition-all cursor-pointer hover:bg-card/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-light text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-serif text-foreground/70">
                    <span>{exp.date}</span>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <span>{exp.location}</span>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <span className="text-accent">with {exp.host}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4">
                  <span className="text-lg font-serif font-light text-foreground">
                    {exp.price}
                  </span>
                  <button className="px-6 py-2 text-sm font-serif text-accent border border-accent/30 hover:border-accent hover:bg-accent/5 transition-all whitespace-nowrap">
                    View Experience
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-accent font-serif text-sm hover:gap-3 transition-all">
            View all experiences
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
