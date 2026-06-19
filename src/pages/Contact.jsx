import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation, slideInLeft, slideInRight } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', product: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          subject: form.product,
          message: form.message
        })
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' });
    } catch (err) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-padding-sm bg-white dark:bg-gray-950 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="badge-blue mb-4">Contact Us</p>
            <h1 className="heading-display text-[clamp(2rem,4vw,3.5rem)] text-gray-900 dark:text-white mb-4">
              Let's Talk About Your Requirements
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Our technical team is ready to help you find the right product or design the right system. 
              Get a response within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left — Contact info */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info cards */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Office Address</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      4, "Rushabh", Near Sita Hospital,<br />
                      Old Subjail Gali, Khatodara,<br />
                      Ring Road, Surat – 395002<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    <a href="tel:+919898989898" className="text-accent text-sm hover:underline block">
                      +91 98980 00000
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Mon–Sat, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <a href="mailto:info@shahgroup.co" className="text-accent text-sm hover:underline block">
                      info@shahgroup.co
                    </a>
                    <a href="mailto:shahgroupsurat@gmail.com" className="text-accent text-sm hover:underline block mt-1">
                      shahgroupsurat@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Monday – Saturday</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">9:00 AM – 6:00 PM IST</p>
                    <p className="text-xs text-gray-400 mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="card overflow-hidden h-48 relative">
                <iframe
                  title="Shah Group Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3!2d72.8311!3d21.2170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzAxLjIiTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80"
                />
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideInRight}
              className="lg:col-span-3"
            >
              <div className="card p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                      Thank you for reaching out. Our team will get back to you within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Company Name
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company / Organization"
                          className="input"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Product / Category of Interest
                      </label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Select a category...</option>
                        <option>Pneumatics (Parker)</option>
                        <option>Distribution & Control (Parker)</option>
                        <option>Instrumentation (Parker)</option>
                        <option>Hydraulic Connectors (Parker)</option>
                        <option>Hydraulic Filtration (Parker)</option>
                        <option>Gas Generator (Parker)</option>
                        <option>Filtration & Separation (Parker)</option>
                        <option>Clean Energy / CNG / Hydrogen (Parker)</option>
                        <option>Air Compressors (Kaishan)</option>
                        <option>Screw Compressors (Chicago Pneumatic)</option>
                        <option>SS Tubes & Pipes (Tubacex)</option>
                        <option>Air Drying Systems (Trident)</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Requirements *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Please describe your requirements, quantities, specifications, or any questions..."
                        className="input resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3.5">
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </button>
                    <p className="text-xs text-center text-gray-400">
                      We respect your privacy. Your information is never shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
