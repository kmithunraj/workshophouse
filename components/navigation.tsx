export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Logo */}
      <div className="text-2xl font-display font-light tracking-wider text-foreground">
        Only Workshops
      </div>

      {/* Center Navigation */}
      <div className="hidden md:flex items-center gap-12">
        <a href="#" className="text-sm font-serif text-foreground hover:text-accent transition-colors">
          Experiences
        </a>
        <a href="#" className="text-sm font-serif text-foreground hover:text-accent transition-colors">
          Hosts
        </a>
        <a href="#" className="text-sm font-serif text-foreground hover:text-accent transition-colors">
          Journal
        </a>
        <a href="#" className="text-sm font-serif text-foreground hover:text-accent transition-colors">
          About
        </a>
      </div>

      {/* Sign In Button */}
      <button className="text-sm font-serif text-accent border border-accent/30 px-6 py-2 hover:border-accent hover:bg-accent/5 transition-colors">
        Sign In
      </button>
    </nav>
  )
}
