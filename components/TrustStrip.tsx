export default function TrustStrip() {
  const items = [
    'Executive Fire Officer (EFO)',
    'CPSE Peer Assessor',
    'CFAI & CAAS',
    '20 Years Fire Service',
    'U.S. Marine Corps Veteran',
  ]

  return (
    <div id="trust" className="bg-gold py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-6">
              <span className="text-navy text-sm font-bold tracking-wider uppercase whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="text-navy/40 text-lg font-thin hidden sm:block">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
