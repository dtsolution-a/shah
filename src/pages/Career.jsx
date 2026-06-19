import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Heart, ArrowRight, Clock, Loader2 } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants } from '../hooks/useScrollAnimation';
import { useJobs } from '../hooks/useSiteData';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const perks = [
  { icon: Heart, text: 'Ethical work culture' },
  { icon: GraduationCap, text: 'Technical training & growth' },
  { icon: Briefcase, text: 'Premium brand portfolio' },
  { icon: Clock, text: 'Stable, long-term employment' },
];

export default function Career() {
  const { ref, isInView } = useScrollAnimation();
  const { jobs, loading } = useJobs();

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
                  <Icon className="w-4 h-4 text-accent" />
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
            <p className="text-gray-500 dark:text-gray-400">
              {loading ? 'Loading...' : `${jobs.length} positions available`}
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : jobs.length === 0 ? (
            <div className="card p-10 text-center">
              <p className="text-gray-500 dark:text-gray-400">No openings at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="card p-6 group hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.type && <span className="badge-gray">{job.type}</span>}
                        {job.location && (
                          <span className="badge-gray flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        )}
                        {job.experience && <span className="badge-gray">{job.experience}</span>}
                        {job.department && <span className="badge-blue">{job.department}</span>}
                      </div>
                      {job.description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {job.description}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      {job.apply_url ? (
                        <a
                          href={job.apply_url}
                          target={job.apply_url.startsWith('mailto') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="btn-primary py-2.5 px-5 text-sm"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <a
                          href={`mailto:info@shahgroup.co?subject=Application: ${job.title}`}
                          className="btn-primary py-2.5 px-5 text-sm"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

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

      {/* Employee Testimonials — Career page only */}
      <Testimonials
        page="career"
        badge="Employee Reviews"
        heading="What Our Team Says"
        description="Meet the talented engineers and professionals who drive Shah Group's mission every day."
        ratingDescription="Join a team of 50+ dedicated professionals across India"
      />

      <CTASection />
    </div>
  );
}
