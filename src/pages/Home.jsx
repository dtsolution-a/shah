import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import BrandBar from '../components/sections/BrandBar';
import AboutSnapshot from '../components/sections/AboutSnapshot';
import ProductCategories from '../components/sections/ProductCategories';
import WhyShah from '../components/sections/WhyShah';
import StatsSection from '../components/sections/StatsSection';
import CTASection from '../components/sections/CTASection';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shah Group — Industrial Fluid Power Solutions, Surat</title>
        <meta name="description" content="Shah Engineers & Consultants Pvt. Ltd. — 30+ years of delivering precision pneumatic, hydraulic, instrumentation & compressed air systems. Authorized Parker, Kaishan & more." />
        <meta property="og:title" content="Shah Group — Industrial Fluid Power Solutions" />
        <meta property="og:description" content="Authorized distributors for Parker, Kaishan, Chicago Pneumatic, Tubacex & Trident. Based in Surat, Gujarat, India." />
      </Helmet>
      <main>
        <Hero />
        <BrandBar />
        <ProductCategories />
        <AboutSnapshot />
        <WhyShah />
        <StatsSection />
        <Testimonials />
        <CTASection />
      </main>
    </>
  );
}
