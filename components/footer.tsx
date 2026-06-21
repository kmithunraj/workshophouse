export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-16 border-b border-background/20">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-light mb-4">
              Only Workshops
            </h3>
            <p className="text-sm font-serif text-background/70">
              Curated experiences for the culturally curious.
            </p>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wide mb-4 text-background/90">
              Experiences
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Browse All
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  By Category
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Hosts */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wide mb-4 text-background/90">
              Hosts
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Featured Hosts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Become a Host
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Host Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Journal */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wide mb-4 text-background/90">
              Journal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wide mb-4 text-background/90">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-serif text-background/60 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-serif text-background/50">
          <p>&copy; 2024 Only Workshops. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
