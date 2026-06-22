import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';
import { useBrands } from '../../hooks/useSiteData';

const brandData = [
  {
    id: 'parker',
    name: 'Parker Hannifin',
    logo: '/images/brands/parker.jpg',
    isImg: true,
    description: 'Fortune 250 · Motion & Control',
    href: '/products/parker',
    bg: 'bg-white',
    border: 'border-gray-200 hover:border-yellow-300',
  },
  {
    id: 'kaishan',
    name: 'Kaishan',
    logo: '/images/brands/kaishan.png',
    isImg: true,
    description: 'World-Class Air Compressors',
    href: '/products/kaishan',
    bg: 'bg-white',
    border: 'border-gray-200 hover:border-red-300',
  },
  {
    id: 'chicago-pneumatic',
    name: 'Chicago Pneumatic',
    logo: '/images/brands/chicago-pneumatic.svg',
    isImg: true,
    isSvg: true,
    description: '100+ Years of Reliability',
    href: '/products/chicago-pneumatic',
    bg: 'bg-white',
    border: 'border-gray-200 hover:border-orange-300',
  },
  {
    id: 'tubacex',
    name: 'Tubacex',
    logo: '/images/brands/tubacex.png',
    isImg: true,
    description: 'Premium SS Tubes & Pipes',
    href: '/products/tubacex',
    bg: 'bg-white',
    border: 'border-gray-200 hover:border-green-300',
  },
  {
    id: 'trident',
    name: 'Trident',
    logo: '/images/brands/trident.png',
    isImg: true,
    description: 'Air Purification Systems',
    href: '/products/trident',
    bg: 'bg-white',
    border: 'border-gray-200 hover:border-blue-300',
  },
];

export default function BrandBar() {
  const { ref, isInView } = useScrollAnimation();
  const { brands: dbBrands } = useBrands();

  const activeBrands = dbBrands && dbBrands.length > 0
    ? dbBrands.filter(b => b.is_active !== 0).map(b => ({
        id: b.id,
        name: b.name,
        logo: b.logo,
        description: b.tagline || b.description || '',
        href: `/products/${b.id}`,
        bg: 'bg-white',
        border: 'border-gray-200 hover:border-accent',
        isImg: true
      }))
    : brandData;

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
            className="flex flex-wrap justify-center gap-3"
          >
            {activeBrands.map((brand) => (
              <motion.div
                key={brand.id}
                variants={staggerItem}
                className="w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(20%-10px)] flex-shrink-0"
              >
                <Link
                  to={brand.href}
                  className={`group flex flex-col items-center justify-center gap-3 px-4 py-5 rounded-2xl border h-full
                    ${brand.bg} ${brand.border}
                    transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5`}
                >
                  {/* Logo image */}
                  <div className="h-20 flex items-center justify-center w-full px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className={`max-w-full object-contain transition-all duration-300 opacity-100
                        ${brand.isSvg ? 'group-hover:opacity-100' : 'group-hover:opacity-100'}
                        ${brand.id === 'tubacex' ? 'max-h-8' : brand.id === 'chicago-pneumatic' ? 'max-h-10' : 'max-h-14'}
                      `}
                      onError={(e) => {
                        // Fallback to text if image fails
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <span
                      className="hidden text-lg font-black text-gray-700 tracking-tight"
                    >
                      {brand.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[10px] text-gray-500 font-medium text-center leading-tight group-hover:text-gray-700 transition-colors">
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

