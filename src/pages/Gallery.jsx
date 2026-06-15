import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';

// Real photo paths from Shah folder
const galleryData = {
  all: [],
  office: [
    { id: 'o1', src: '/images/gallery/office/office-1.jpg', alt: 'Shah Group Office' },
    { id: 'o2', src: '/images/gallery/office/office-2.jpg', alt: 'Office workspace' },
    { id: 'o3', src: '/images/gallery/office/office-3.jpg', alt: 'Reception area' },
    { id: 'o4', src: '/images/gallery/office/office-4.jpg', alt: 'Conference room' },
    { id: 'o5', src: '/images/gallery/office/office-5.jpg', alt: 'Office interior' },
    { id: 'o6', src: '/images/gallery/office/office-6.jpg', alt: 'Office view' },
  ],
  machinery: [
    { id: 'm1',  src: '/images/gallery/machinery/machinery-1.jpg',  alt: 'Industrial machinery' },
    { id: 'm2',  src: '/images/gallery/machinery/machinery-2.jpg',  alt: 'Equipment display' },
    { id: 'm3',  src: '/images/gallery/machinery/machinery-3.jpg',  alt: 'Compressor systems' },
    { id: 'm4',  src: '/images/gallery/machinery/machinery-4.jpg',  alt: 'Hydraulic systems' },
    { id: 'm5',  src: '/images/gallery/machinery/machinery-5.jpg',  alt: 'Pneumatic components' },
    { id: 'm6',  src: '/images/gallery/machinery/machinery-6.jpg',  alt: 'Industrial equipment' },
    { id: 'm7',  src: '/images/gallery/machinery/machinery-7.jpg',  alt: 'Machine setup' },
    { id: 'm8',  src: '/images/gallery/machinery/machinery-8.jpg',  alt: 'Technical equipment' },
    { id: 'm9',  src: '/images/gallery/machinery/machinery-9.jpg',  alt: 'Compressor unit' },
    { id: 'm10', src: '/images/gallery/machinery/machinery-10.jpg', alt: 'Air system' },
    { id: 'm11', src: '/images/gallery/machinery/machinery-11.jpg', alt: 'Equipment panel' },
    { id: 'm12', src: '/images/gallery/machinery/machinery-12.jpg', alt: 'Industrial setup' },
    { id: 'm13', src: '/images/gallery/machinery/machinery-13.jpg', alt: 'Machinery floor' },
    { id: 'm14', src: '/images/gallery/machinery/machinery-14.jpg', alt: 'Technical display' },
    { id: 'm15', src: '/images/gallery/machinery/machinery-15.jpg', alt: 'Engineering equipment' },
  ],
  store: [
    { id: 's1', src: '/images/gallery/store/store-1.jpg', alt: 'Product store' },
    { id: 's2', src: '/images/gallery/store/store-2.jpg', alt: 'Spare parts inventory' },
    { id: 's3', src: '/images/gallery/store/store-3.jpg', alt: 'Stock warehouse' },
    { id: 's4', src: '/images/gallery/store/store-4.jpg', alt: 'Product display' },
    { id: 's5', src: '/images/gallery/store/store-5.jpg', alt: 'Parts shelving' },
  ],
  workshop: [
    { id: 'w1', src: '/images/gallery/workshop/workshop-1.jpg', alt: 'Workshop floor' },
    { id: 'w2', src: '/images/gallery/workshop/workshop-2.jpg', alt: 'Technical workshop' },
    { id: 'w3', src: '/images/gallery/workshop/workshop-3.jpg', alt: 'Service workshop' },
    { id: 'w4', src: '/images/gallery/workshop/workshop-4.jpg', alt: 'Maintenance area' },
  ],
  team: [
    { id: 't1',  src: '/images/gallery/team/team-1.jpg',  alt: 'Shah Group team' },
    { id: 't2',  src: '/images/gallery/team/team-2.jpg',  alt: 'Office staff' },
    { id: 't3',  src: '/images/gallery/team/team-3.jpg',  alt: 'Technical team' },
    { id: 't4',  src: '/images/gallery/team/team-4.jpg',  alt: 'Team meeting' },
    { id: 't5',  src: '/images/gallery/team/team-5.jpg',  alt: 'Kaushik Shah — Founder' },
    { id: 't6',  src: '/images/gallery/team/team-6.jpg',  alt: 'Leadership' },
    { id: 't7',  src: '/images/gallery/team/team-7.jpg',  alt: 'Director' },
    { id: 't8',  src: '/images/gallery/team/team-8.jpg',  alt: 'Management' },
    { id: 't9',  src: '/images/gallery/team/team-9.jpg',  alt: 'Company leadership' },
    { id: 't10', src: '/images/gallery/team/team-10.jpg', alt: 'Team portrait' },
    { id: 't11', src: '/images/gallery/team/team-11.jpg', alt: 'Office team' },
    { id: 't12', src: '/images/gallery/team/team-12.jpg', alt: 'Staff' },
    { id: 't13', src: '/images/gallery/team/team-13.jpg', alt: 'Team members' },
    { id: 't14', src: '/images/gallery/team/team-14.jpg', alt: 'Company team' },
  ],
};

const tabs = [
  { key: 'all', label: 'All Photos' },
  { key: 'office', label: 'Office' },
  { key: 'machinery', label: 'Machinery' },
  { key: 'store', label: 'Store' },
  { key: 'workshop', label: 'Workshop' },
  { key: 'team', label: 'Team' },
];

export default function Gallery() {
  const { ref, isInView } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const getItems = () => {
    if (activeTab === 'all') {
      return Object.entries(galleryData)
        .filter(([k]) => k !== 'all')
        .flatMap(([, items]) => items);
    }
    return galleryData[activeTab] || [];
  };

  const items = getItems();

  return (
    <div>
      {/* Hero */}
      <section className="section-padding-sm bg-white dark:bg-gray-950 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="badge-blue mb-4">Our Facility</p>
            <h1 className="heading-display text-[clamp(2rem,4vw,3.5rem)] text-gray-900 dark:text-white mb-4">
              Inside Shah Group
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              A look at our state-of-the-art office, workshop, product store, machinery and team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-accent text-white shadow-glow'
                    : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-accent/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className={`relative group overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer
                    ${idx % 7 === 0 ? 'col-span-2 row-span-2' : ''}
                  `}
                  style={{ minHeight: '200px' }}
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-shimmer');
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full max-h-[88vh] rounded-xl object-contain"
              />
              <p className="text-center text-white/70 text-sm mt-3">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
