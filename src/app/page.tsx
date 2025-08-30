import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemsSection } from '@/components/landing/ProblemsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';

import { CtaSection } from '@/components/landing/CtaSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
