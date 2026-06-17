import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, GraduationCap, Heart, ArrowRight, Clock } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const openings = [
  {
    id: 1,
    title: 'Sales Engineer — Compressed Air & Gas',
    type: 'Full-time',
    location: 'Surat, Gujarat',
    experience: '2–5 years',
    description: 'Drive sales of Parker, Kaishan, and Chicago Pneumatic products to industrial customers. Strong technical background in compressed air systems preferred.',
  },
  {
    id: 2,
    title: 'Technical Service Engineer',
    type: 'Full-time',
    location: 'Surat, Gujarat',
    experience: '3–7 years',
    description: 'Handle installation, commissioning, and maintenance of pneumatic, hydraulic, and instrumentation systems at customer sites.',
  },
  {
    id: 3,
    title: 'Application Engineer — Instrumentation',
    type: 'Full-time',
    location: 'Surat, Gujarat',
    experience: '2–5 years',
    description: 'Technical support and application engineering for Parker instrumentation components. Experience with oil & gas or chemical industries preferred.',
  },
];

const perks = [
  { icon: Heart, text: 'Ethical work culture' },
  { icon: GraduationCap, text: 'Technical training & growth' },
  { icon: Briefcase, text: 'Premium brand portfolio' },
  { icon: Clock, text: 'Stable, long-term employment' },
];

export default function Career() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="badge-blue mb-5">Careers</p>
            <h1 className="heading-display text-[clamp(2rem,4vw,3.5rem)] text-gray-900 dark:text-white mb-5">
              Build Your Career at{' '}
              <span className="text-gradient">Shah Group</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Join a team that's been delivering technical excellence and ethical service to India's 
              industrial sector for 30+ years. We invest in our people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why join */}
      <section className="section-padding-sm bg-gray-50 dark:bg-gray-900/30">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="card p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            className="mb-10"
          >
            <h2 className="heading-display text-[clamp(1.6rem,3vw,2.5rem)] text-gray-900 dark:text-white mb-2">
              Current Openings
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{openings.length} positions available</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-4"
          >
            {openings.map((job) => (
              <motion.div
                key={job.id}
                variants={staggerItem}
                className="card p-6 group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge-gray">{job.type}</span>
                      <span className="badge-gray">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="badge-gray">{job.experience}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={`mailto:info@shahgroup.co?subject=Application: ${job.title}`}
                      className="btn-primary py-2.5 px-5 text-sm"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Open application */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 card p-8 bg-gray-50 dark:bg-gray-900 border-dashed text-center"
          >
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
              Don't see your role?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-md mx-auto">
              We're always looking for talented engineers and sales professionals. Send us your resume 
              and we'll reach out when the right opportunity arises.
            </p>
            <a
              href="mailto:info@shahgroup.co?subject=Open Application — Shah Group"
              className="btn-secondary inline-flex"
            >
              Send Open Application
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <Testimonials
        badge="Employee Reviews"
        heading="What Our Team Says"
        description="Meet the talented engineers and professionals who drive Shah Group's mission every day."
        ratingDescription="Join a team of 50+ dedicated professionals across India"
      />

      <CTASection />
    </div>
  );
}
