import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Zap, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useHeroSlides } from '../../hooks/useSiteData';

const slides = [
  {
    id: 1,
    image: '/images/hero/slide-1.jpg',
    tag: 'Parker Hannifin · Authorized Distributor',
    headline: "India's Trusted Partner for Industrial Fluid Power",
    sub: 'Pneumatics · Hydraulics · Instrumentation · Compressed Air Systems',
    accent: 'from-blue-600/20 to-indigo-900/60',
  },
  {
    id: 2,
    image: '/images/hero/slide-2.jpg',
    tag: 'Kaishan & Chicago Pneumatic · Distributor',
    headline: 'World-Class Air Compressor Solutions for Every Industry',
    sub: 'Oil-Free · Rotary Screw · Reciprocating · Energy-Efficient Systems',
    accent: 'from-sky-700/20 to-blue-950/60',
  },
  {
    id: 3,
    image: '/images/hero/slide-3.jpg',
    tag: 'Tubacex & Trident · Authorized Representative',
    headline: '30+ Years of Technical Excellence in Surat, Gujarat',
    sub: 'SS Tubes · Air Purification · Gas Generation · Clean Energy',
    accent: 'from-indigo-700/20 to-slate-950/60',
  },
  {
    id: 4,
    image: '/images/hero/slide-4.jpg',
    tag: 'Parker Clean Energy · CNG & Hydrogen',
    headline: "Powering India's Clean Energy Future",
    sub: 'CNG Dispensers · Hydrogen Fueling Infrastructure · Zero-Emission',
    accent: 'from-teal-700/20 to-blue-950/60',
  },
];

const stats = [
  { value: '30+', label: 'Years' },
  { value: '5', label: 'Global Brands' },
  { value: '500+', label: 'Products' },
  { value: '1000+', label: 'Clients' },
];

const badges = [
  { icon: Award, text: 'Authorized Parker Distributor' },
  { icon: Shield, text: 'Genuine · OEM Certified' },
  { icon: Zap, text: 'Est. 1995 · Surat, Gujarat' },
];

export default function Hero() {
  const { slides: dbSlides } = useHeroSlides();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeSlides = dbSlides && dbSlides.length > 0 ? dbSlides : slides;

  useEffect(() => {
    if (!isAutoPlaying || activeSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % activeSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, activeSlides]);

  const goTo = (idx) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 9000);
  };

  const prev = () => goTo((current - 1 + activeSlides.length) % activeSlides.length);
  const next = () => goTo((current + 1) % activeSlides.length);

  const slide = activeSlides[current];

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#0a0f1e]" style={{ minHeight: 'calc(100vh - 112px)' }}>

      {/* ─────── Background image ─────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Dark left-to-right gradient — left heavy for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/70 to-[#0a0f1e]/25" />
          {/* Bottom fade for controls area */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-transparent to-[#0a0f1e]/30" />
          {/* Per-slide accent colour wash on right */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-40 mix-blend-multiply`} />
        </motion.div>
      </AnimatePresence>

      {/* ─────── Shah logo watermark (top-right subtle) ─────── */}
      <div className="absolute top-8 right-8 hidden xl:block opacity-[0.06] pointer-events-none">
        <img src="/images/shah-logo.png" alt="" className="h-16 brightness-0 invert" />
      </div>

      {/* ─────── Main content ─────── */}
      <div className="relative flex-1 flex items-center">
        <div className="container-wide w-full py-16">
          <div className="max-w-[700px]">

            {/* Slide tag pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full
                           bg-white/8 border border-white/12 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-semibold text-white/80 tracking-[0.14em] uppercase">
                  {slide.tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h1-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[clamp(2rem,5.5vw,4rem)] font-black text-white leading-[1.06] mb-5 tracking-tight text-balance"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>

            {/* Sub */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="text-base md:text-lg text-white/65 mb-9 font-medium leading-relaxed"
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold
                           bg-accent hover:bg-accent-light rounded-xl text-white shadow-glow
                           transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-lg"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold
                           border border-white/25 rounded-xl text-white hover:bg-white/10
                           hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-white/8 border border-white/12 backdrop-blur-sm
                             text-[11px] font-semibold text-white/70"
                >
                  <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─────── Bottom controls bar ─────── */}
      <div className="relative z-10 w-full border-t border-white/8 bg-black/25 backdrop-blur-md">
        <div className="container-wide py-5 flex items-center justify-between gap-6">

          {/* Left — slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-white/20 bg-white/8
                         flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5">
              {activeSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="relative rounded-full overflow-hidden transition-all duration-400"
                  style={{
                    height: '4px',
                    width: i === current ? '28px' : '8px',
                    background: i === current ? 'transparent' : 'rgba(255,255,255,0.22)',
                  }}
                >
                  {i === current && (
                    <motion.span
                      className="absolute inset-0 bg-accent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      key={`prog-${current}`}
                      transition={{ duration: 5.5, ease: 'linear' }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-white/20 bg-white/8
                         flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <span className="text-[11px] font-mono text-white/35 ml-1 tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Right — stats */}
          <div className="flex items-center gap-6 md:gap-10">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex flex-col items-end text-right">
                <span className="text-xl md:text-2xl font-black text-white font-mono leading-none tabular-nums">
                  {value}
                </span>
                <span className="text-[10px] text-white/45 mt-0.5 whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────── Scroll hint ─────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-20 right-8 hidden lg:flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
