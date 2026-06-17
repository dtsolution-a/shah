import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Career', href: '/career' },
    { label: 'Contact Us', href: '/contact' },
  ],
  parker: [
    { label: 'Pneumatics', href: '/products/parker/pneumatics' },
    { label: 'Distribution & Control', href: '/products/parker/distribution-control' },
    { label: 'Instrumentation', href: '/products/parker/instrumentation' },
    { label: 'Hydraulic Connectors', href: '/products/parker/hydraulic-connectors' },
    { label: 'Gas Generator', href: '/products/parker/gas-generator' },
    { label: 'Clean Energy / CNG', href: '/products/parker/clean-energy' },
  ],
  brands: [
    { label: 'Parker Hannifin', href: '/products/parker' },
    { label: 'Kaishan Compressors', href: '/products/kaishan' },
    { label: 'Chicago Pneumatic', href: '/products/chicago-pneumatic' },
    { label: 'Tubacex', href: '/products/tubacex' },
    { label: 'Trident', href: '/products/trident' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/shah-logo.png"
                alt="Shah Engineers & Consultants Pvt. Ltd."
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              30+ years of delivering precision industrial solutions. Authorized distributors for Parker, Kaishan, Chicago Pneumatic, Tubacex, and Trident in India.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-600" />
                <span className="text-gray-500">
                  4, "Rushabh", Nr. Sita Hospital,<br />
                  Old Subjail Gali, Khatodara,<br />
                  Ring Road, Surat – 395002, Gujarat
                </span>
              </div>
              <a href="tel:+919898989898" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-gray-600" />
                +91 98980 00000
              </a>
              <a href="mailto:info@shahgroup.co" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0 text-gray-600" />
                info@shahgroup.co
              </a>
              <a href="mailto:shahgroupsurat@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0 text-gray-600" />
                shahgroupsurat@gmail.com
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-tight">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parker Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-tight">Parker Products</h4>
            <ul className="space-y-3">
              {footerLinks.parker.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-tight">Our Brands</h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="mt-8">
              <h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9.5h3.414v1.489h.049c.476-.9 1.637-1.852 3.371-1.852 3.604 0 4.271 2.372 4.271 5.455v6.86zM5.337 8.001c-1.145 0-2.07-.928-2.07-2.073 0-1.145.925-2.073 2.07-2.073 1.144 0 2.07.928 2.07 2.073 0 1.145-.926 2.073-2.07 2.073zm1.777 12.451H3.56V9.5h3.553v10.952zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919898989898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .04 5.34.04 12c0 2.11.55 4.18 1.59 6.01L0 24l6.34-1.66A11.92 11.92 0 0 0 12 24c6.63 0 12-5.38 12-12 0-1.97-.48-3.83-1.48-5.52zM12 21.5c-1.6 0-3.16-.42-4.52-1.22l-.32-.19-3.76.98.97-3.66-.2-.37A9.5 9.5 0 0 1 2.5 12C2.5 6.2 6.7 2 12 2c1.96 0 3.8.56 5.36 1.6A9.44 9.44 0 0 1 21.5 12c0 5.3-4.2 9.5-9.5 9.5z" />
                    <path d="M17.5 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.2.2-.6.7-.8.9-.2.2-.4.2-.6.1-.7-.2-2.3-.9-3.8-2.4-1.4-1.4-2.1-3-2.4-3.7-.1-.2 0-.4.1-.6.1-.2.5-1.2.7-1.4.2-.2.3-.3.5-.3.1 0 .2 0 .4 0 .1 0 .3.1.5.3.1.1.5.6.7.9.2.3.3.4.5.6.2.2.3.3.5.3.2 0 .4-.1.6-.1.2-.1 1.1-.5 1.4-.6.3-.1.5-.1.8 0 .3.1 1 .4 1.2.5.2.1.3.2.4.4.1.2.1.4.1.6 0 .2 0 .4-.1.6-.1.2-.5.7-.8 1-.3.3-.6.6-.8.8-.2.2-.3.4-.2.6.1.2.3.5.6.9.4.5.8.9.9 1 .1.1.2.2.2.3.1.2.1.4 0 .6-.1.2-.4.4-.8.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-900">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 Shah Engineers & Consultants Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Surat, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
