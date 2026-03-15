export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-cream/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-playfair text-lg font-bold text-cream tracking-wide flex-shrink-0">
            Apex <span className="text-gold">Fire</span> Consulting
          </a>

          {/* Tagline */}
          <p className="text-cream/40 text-sm text-center tracking-wide">
            Serving fire agencies nationwide — CFAI &amp; CAAS accreditation guidance
          </p>

          {/* Copyright */}
          <p className="text-cream/30 text-xs tracking-wide flex-shrink-0">
            &copy; {currentYear} Apex Fire Consulting
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/8 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['#about', '#services', '#process', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-cream/30 hover:text-cream/70 text-xs tracking-widest uppercase transition-colors"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
