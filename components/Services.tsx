'use client'
import { useInView } from '@/hooks/useInView'

const services = [
  {
    num: '01',
    title: 'Accreditation Readiness Assessment',
    desc: 'A comprehensive gap analysis of your agency\'s current standing against CFAI or CAAS standards. We identify strengths, surface gaps, and deliver a clear picture of where you stand before the journey begins.',
    tag: 'CFAI · CAAS',
    featured: false,
  },
  {
    num: '02',
    title: 'Full-Cycle Accreditation Guidance',
    desc: 'From initial self-assessment to peer visit and beyond. Comprehensive, hands-on support through every phase of the accreditation process — tailored to your agency\'s size, structure, and timeline.',
    tag: 'Most Comprehensive',
    featured: true,
  },
  {
    num: '03',
    title: 'Peer Visit Preparation',
    desc: 'Thorough preparation for your on-site peer visit, including mock interviews, documentation review, and site walkthrough coaching to ensure your team presents with confidence.',
    tag: 'High Impact',
    featured: false,
  },
  {
    num: '04',
    title: 'Community Risk Assessment & SOC',
    desc: 'Expert assistance developing your Standards of Cover (SOC) and Community Risk Assessment — the cornerstone documents of any CFAI accreditation submission.',
    tag: 'CFAI Core',
    featured: false,
  },
  {
    num: '05',
    title: 'Reaccreditation Support',
    desc: 'Already accredited? We help your agency maintain compliance, address deficiencies, and navigate the reaccreditation cycle efficiently and effectively.',
    tag: 'Ongoing',
    featured: false,
  },
  {
    num: '06',
    title: 'Training & Internal Capacity Building',
    desc: 'Workshops and coaching to build your team\'s internal accreditation knowledge — so your agency develops lasting institutional capability beyond the engagement.',
    tag: 'Team Development',
    featured: false,
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} text-center mb-16`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Services</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-playfair text-navy text-4xl lg:text-5xl font-bold">
            How We Help Your Agency
          </h2>
          <p className="text-navy/60 mt-4 max-w-xl mx-auto text-base">
            Tailored accreditation support at every stage — from first assessment to
            sustained excellence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} relative group cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                svc.featured
                  ? 'bg-navy border-2 border-gold shadow-[0_8px_32px_rgba(201,151,43,0.2)]'
                  : 'bg-cream border border-navy/10 hover:border-gold/60 hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Faded number */}
              <div
                className={`absolute -top-4 -right-2 font-playfair text-8xl font-bold select-none pointer-events-none ${
                  svc.featured ? 'text-gold/10' : 'text-navy/6'
                }`}
              >
                {svc.num}
              </div>

              <div className="relative p-8">
                {/* Tag */}
                <span
                  className={`inline-block text-xs tracking-widest uppercase font-bold px-3 py-1 mb-5 ${
                    svc.featured
                      ? 'bg-gold text-navy'
                      : 'bg-navy/8 text-navy/60 border border-navy/15'
                  }`}
                >
                  {svc.tag}
                </span>

                <h3
                  className={`font-playfair text-xl font-bold mb-3 leading-snug ${
                    svc.featured ? 'text-cream' : 'text-navy'
                  }`}
                >
                  {svc.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    svc.featured ? 'text-cream/65' : 'text-navy/60'
                  }`}
                >
                  {svc.desc}
                </p>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 mt-6 text-xs tracking-widest uppercase font-bold transition-colors ${
                    svc.featured
                      ? 'text-gold hover:text-gold-light'
                      : 'text-navy/40 hover:text-gold group-hover:text-gold'
                  }`}
                >
                  Learn More
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
