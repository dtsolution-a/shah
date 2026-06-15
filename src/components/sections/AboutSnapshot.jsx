import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Users } from 'lucide-react';
import { useScrollAnimation, slideInLeft, slideInRight, staggerContainer, staggerItem, fadeUpVariants } from '../../hooks/useScrollAnimation';

const values = [
  {
    icon: Heart,
    title: 'Ethics Over Profit',
    description: 'Finances are important, but never at the expense of ethics. Our guiding principle since day one.',
    accent: '#ef4444',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Improving customer efficiency through quality products, services and solutions that earn trust and build lifetime relationships.',
    accent: '#2563EB',
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'Making a difference through dedicated professionals who deliver on promises and contribute to sustainable growth.',
    accent: '#16a34a',
  },
];

export default function AboutSnapshot() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">

          {/* ── Left — Story text + values ── */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            className="flex flex-col justify-center"
          >
            <p className="badge-blue mb-5">Our Story</p>
            <h2 className="heading-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-gray-900 dark:text-white mb-6 leading-tight">
              30 Years of Trust,{' '}
              <span className="text-gradient">Built on Integrity</span>
            </h2>

            <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed text-base">
              <p>
                Founded in 1995 with a clear vision to contribute to Surat's growing industrial landscape,
                Shah Group has grown steadily over three decades into a trusted name in delivering
                energy-efficient compressed air, gas generation, and fluid power solutions.
              </p>
              <p>
                Led by{' '}
                <strong className="text-gray-900 dark:text-white font-semibold">Kaushik Shah</strong>,
                whose 30+ years of deep-rooted experience have redefined technical excellence and ethical
                standards within India's industrial landscape. He believes the true measure of success
                is not profit margins, but the enduring trust of every customer.
              </p>
            </div>

            {/* Guiding principle callout */}
            <div className="mt-7 p-5 rounded-2xl border-l-4 border-accent bg-accent/5 dark:bg-accent/10">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Guiding Principle</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white italic">"Ethics Over Profit"</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">The heartbeat of Shah Group since 1995</p>
            </div>

            {/* Value cards */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="mt-6 space-y-3"
            >
              {values.map(({ icon: Icon, title, description, accent }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary group">
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to Us
              </Link>
            </div>
          </motion.div>

          {/* ── Right — Big Kaushik Shah portrait (same as About page) ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInRight}
            className="relative"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-400/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Portrait frame */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl w-full"
              style={{ aspectRatio: '4/5', maxHeight: '560px' }}
            >
              <img
                src="/images/kaushik-shah.png"
                alt="Kaushik Shah — Founder & Director, Shah Group"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)';
                  e.target.parentElement.innerHTML += '<div class="absolute inset-0 flex items-center justify-center"><span style="font-size:8rem;font-weight:900;color:rgba(255,255,255,0.15)">KS</span></div>';
                }}
              />

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

              {/* Name + title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7 pt-20">
                <p className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-1">Founder & Director</p>
                <h3 className="text-2xl font-bold text-white mb-0.5">Kaushik Shah</h3>
                <p className="text-gray-400 text-sm">Shah Engineers & Consultants Pvt. Ltd.</p>
              </div>

              {/* Since 1995 badge */}
              <div className="absolute top-5 left-5 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-glow">
                Since 1995
              </div>

              {/* Quick stats — overlay top-right */}
              <div className="absolute top-5 right-5 flex flex-col gap-2">
                {[
                  { val: '30+', label: 'Yrs' },
                  { val: '1000+', label: 'Clients' },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-black/50 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2 text-center">
                    <div className="text-white font-bold text-sm">{val}</div>
                    <div className="text-white/60 text-[10px]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card below portrait */}
            <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-soft">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "The true measure of a business's success is not just its profit margins, but the enduring
                trust and lifelong relationships built with every customer."
              </p>
              <p className="text-xs font-bold text-gray-900 dark:text-white mt-3">— Kaushik Shah, Founder</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
