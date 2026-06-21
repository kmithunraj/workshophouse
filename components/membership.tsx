const benefits = [
  'Early Access to new experiences',
  'Priority Booking',
  'Curated Recommendations',
  'Community Gatherings',
]

export default function Membership() {
  return (
    <section className="w-full bg-card/40 py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-6">
            Membership Benefits
          </h2>
          <p className="text-base font-serif text-foreground/70 mb-10">
            Membership amplifies your experience with early access, priority booking, and exclusive community events.
          </p>

          {/* Benefits List - Simple */}
          <div className="space-y-3 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center border border-accent rounded-full">
                  <span className="text-xs text-accent font-light">✓</span>
                </div>
                <p className="text-base font-serif text-foreground/80">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#" className="inline-flex items-center gap-2 text-accent font-serif text-sm hover:gap-3 transition-all">
            Learn about membership
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
