import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const brandData = [
  {
    id: 'parker',
    name: 'Parker Hannifin',
    logo: '/images/brands/parker.jpg',
    isImg: true,
    description: 'Fortune 250 · Motion & Control',
    href: '/products/parker',
    bg: 'bg-white dark:bg-gray-900',
    border: 'border-gray-200 dark:border-gray-800 hover:border-yellow-300 dark:hover:border-yellow-700',
  },
  {
    id: 'kaishan',
    name: 'Kaishan',
    logo: '/images/brands/kaishan.png',
    isImg: true,
    description: 'World-Class Air Compressors',
    href: '/products/kaishan',
    bg: 'bg-white dark:bg-gray-900',
    border: 'border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-800',
  },
  {
    id: 'chicago-pneumatic',
    name: 'Chicago Pneumatic',
    logo: '/images/brands/chicago-pneumatic.svg',
    isImg: true,
    isSvg: true,
    description: '100+ Years of Reliability',
    href: '/products/chicago-pneumatic',
    bg: 'bg-white dark:bg-gray-900',
    border: 'border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-800',
  },
  {
    id: 'tubacex',
    name: 'Tubacex',
    logo: '/images/brands/tubacex.png',
    isImg: true,
    description: 'Premium SS Tubes & Pipes',
    href: '/products/tubacex',
    bg: 'bg-white dark:bg-gray-900',
    border: 'border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-800',
  },
  {
    id: 'trident',
    name: 'Trident',
    logo: '/images/brands/trident.png',
    isImg: true,
    description: 'Air Purification Systems',
    href: '/products/trident',
    bg: 'bg-white dark:bg-gray-900',
    border: 'border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-800',
  },
];

export default function BrandBar() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding-sm border-b border-[var(--color-border)] bg-gray-50 dark:bg-gray-900/40">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {/* Label */}
          <motion.p
            variants={staggerItem}
            className="text-center text-[11px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-[0.18em] mb-8"
          >
            Authorized Distributor & Representative for
          </motion.p>

          {/* Brand cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {brandData.map((brand) => (
              <motion.div key={brand.id} variants={staggerItem}>
                <Link
                  to={brand.href}
                  className={`group flex flex-col items-center justify-center gap-3 px-4 py-5 rounded-2xl border
                    ${brand.bg} ${brand.border}
                    transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5`}
                >
                  {/* Logo image */}
                  <div className="h-20 flex items-center justify-center w-full px-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className={`max-w-full object-contain transition-all duration-300 opacity-100
                        ${brand.isSvg ? 'group-hover:opacity-100' : 'group-hover:opacity-100'}
                        ${brand.id === 'tubacex' ? 'max-h-20 scale-[1.7]' : 'max-h-16 scale-110'}
                      `}
                      onError={(e) => {
                        // Fallback to text if image fails
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <span
                      className="hidden text-lg font-black text-gray-700 dark:text-gray-300 tracking-tight"
                    >
                      {brand.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[10px] text-gray-400 dark:text-gray-600 font-medium text-center leading-tight group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {brand.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
