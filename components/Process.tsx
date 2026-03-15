'use client'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'A focused 30-minute conversation to understand your agency, your goals, and where you are in the accreditation journey.',
  },
  {
    num: '02',
    title: 'Gap Analysis',
    desc: 'A thorough review of your existing documentation, policies, and practices against the relevant accreditation standards.',
  },
  {
    num: '03',
    title: 'Custom Roadmap',
    desc: 'A detailed, prioritized action plan built specifically for your agency\'s structure, capacity, and timeline.',
  },
  {
    num: '04',
    title: 'Guided Implementation',
    desc: 'Side-by-side support as your team executes the plan — with ongoing coaching, document review, and progress check-ins.',
  },
  {
    num: '05',
    title: 'Peer Visit & Beyond',
    desc: 'Full preparation for your peer visit, support during the process, and continued guidance through post-accreditation compliance.',
  },
]

export default function Process() {
  const { ref, inView } = useInView()

  return (
    <section id="process" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} text-center mb-16 lg:mb-20`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Process</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-playfair text-cream text-4xl lg:text-5xl font-bold">
            A Clear Path to Accreditation
          </h2>
          <p className="text-cream/50 mt-4 max-w-xl mx-auto text-base">
            Every engagement follows a proven five-phase framework — structured, transparent,
            and built around your agency.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gold/30" />

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-0 flex-1 relative`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 border-gold bg-navy flex flex-col items-center justify-center shadow-[0_0_0_6px_rgba(15,30,46,1)]">
                  <span className="text-gold font-playfair font-bold text-xs tracking-wider">
                    {step.num}
                  </span>
                </div>

                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-0 w-px bg-gold/20 -translate-x-px" />
                )}

                {/* Text */}
                <div className="lg:mt-7 lg:text-center lg:px-4">
                  <h3 className="font-playfair text-cream font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
