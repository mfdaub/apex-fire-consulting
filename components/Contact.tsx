'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const interests = [
  'Accreditation Readiness Assessment',
  'Full-Cycle Accreditation Guidance',
  'Peer Visit Preparation',
  'Community Risk Assessment & SOC',
  'Reaccreditation Support',
  'Training & Internal Capacity Building',
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    agency: '',
    email: '',
    interest: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submission:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} text-center mb-12`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Contact</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-playfair text-navy text-4xl lg:text-5xl font-bold mb-4">
            Ready to pursue accreditation?
          </h2>
          <p className="text-navy/60 text-base max-w-lg mx-auto">
            Schedule a free 30-minute discovery call. No pressure — just a candid conversation
            about your agency&rsquo;s goals and how we can help you get there.
          </p>
        </div>

        <div className={`fade-up ${inView ? 'fade-up-visible' : 'fade-up-hidden'} delay-100`}>
          {submitted ? (
            <div className="bg-navy text-center px-10 py-16 border-b-4 border-gold">
              <div className="text-gold text-4xl mb-4">✓</div>
              <h3 className="font-playfair text-cream text-2xl font-bold mb-3">
                Message received.
              </h3>
              <p className="text-cream/60 text-base">
                Thank you for reaching out. I&rsquo;ll be in touch within one business day to
                schedule your discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-sm border border-navy/8 p-8 md:p-10 flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase font-bold text-navy/50 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-cream border border-navy/15 px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-bold text-navy/50 mb-2">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    name="agency"
                    required
                    value={form.agency}
                    onChange={handleChange}
                    placeholder="Your fire agency"
                    className="w-full bg-cream border border-navy/15 px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase font-bold text-navy/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-cream border border-navy/15 px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase font-bold text-navy/50 mb-2">
                  Area of Interest
                </label>
                <select
                  name="interest"
                  required
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full bg-cream border border-navy/15 px-4 py-3 text-navy text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  {interests.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase font-bold text-navy/50 mb-2">
                  Tell me about your agency
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share your accreditation goals, current status, timeline, or anything else that would help me understand your agency's situation..."
                  className="w-full bg-cream border border-navy/15 px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-navy text-cream py-4 px-8 text-sm font-bold tracking-widest uppercase hover:bg-navy-light transition-colors duration-200 w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
