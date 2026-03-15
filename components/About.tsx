'use client'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '20+', label: 'Years Fire Service' },
  { value: 'EFO', label: 'Executive Fire Officer' },
  { value: 'CPSE', label: 'Peer Assessor' },
]

const credentials = [
  {
    title: 'Executive Fire Officer (EFO)',
    org: 'National Fire Academy',
  },
  {
    title: 'CPSE Peer Assessor',
    org: 'Center for Public Safety Excellence',
  },
  {
    title: 'M.S. Public Safety',
    org: 'Liberty University',
  },
  {
    title: 'Licensed Paramedic',
    org: 'State Certified',
  },
  {
    title: 'FESSAM 11th Edition Steering Committee',
    org: 'Standards Development',
  },
  {
    title: 'U.S. Marine Corps Veteran',
    org: 'Honorable Service',
  },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* Left: Bio */}
        <div>
          <div className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">About</span>
            </div>
            <h2 className="font-playfair text-navy text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your Consultant
              <span className="block text-gold text-2xl lg:text-3xl font-normal italic mt-1">
                Chief Officer
              </span>
            </h2>
          </div>

          <div className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} delay-100`}>
            <p className="text-navy/70 text-base leading-relaxed mb-5">
              The principal consultant at Apex Fire Consulting serves as a Chief Officer with a
              metro fire department, where a career has been built on advancing organizational
              excellence through accreditation and continuous improvement. As the department&rsquo;s
              accreditation manager, the agency was led through the full CFAI accreditation process
              — and has since guided other agencies as an active CPSE peer assessor.
            </p>
            <p className="text-navy/70 text-base leading-relaxed mb-5">
              Holding the distinction of Executive Fire Officer (EFO) from the National Fire
              Academy, a Master of Science in Public Safety from Liberty University, and licensed
              as a paramedic — plus service on the FESSAM 11th Edition Steering Committee —
              this is someone who has helped shape the very standards fire agencies are measured
              against.
            </p>
            <p className="text-navy/70 text-base leading-relaxed mb-10">
              A proud U.S. Marine Corps veteran, the discipline, precision, and commitment to
              excellence that defines military service carries through every client engagement
              in the fire service.
            </p>
          </div>

          {/* Stat boxes */}
          <div className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} delay-200 grid grid-cols-3 gap-4`}>
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-navy text-center p-5 border-b-2 border-gold"
              >
                <div className="font-playfair text-gold text-2xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-cream/60 text-xs tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Credentials */}
        <div className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} delay-200`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Credentials</span>
          </div>
          <div className="flex flex-col gap-4">
            {credentials.map((cred, i) => (
              <div
                key={cred.title}
                className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} border-l-[3px] border-gold bg-white px-6 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                style={{ transitionDelay: `${200 + i * 60}ms` }}
              >
                <div className="font-playfair text-navy font-bold text-base">{cred.title}</div>
                <div className="text-navy/50 text-sm mt-0.5">{cred.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
