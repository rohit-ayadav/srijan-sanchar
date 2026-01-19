import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowSection from '@/components/HowSection';
import WhatSection from '@/components/WhatSection';
import WhySection from '@/components/WhySection';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Hero />
      <WhatSection />
      <WhySection />
      <HowSection />
      <CTASection />
      <Footer />
    </main>
  );
}
