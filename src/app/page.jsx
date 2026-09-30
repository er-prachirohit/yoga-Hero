import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Hero from '@/components/home/Hero';
import AboutTrainer from '@/components/home/AboutTrainer';
import YogaPoses from '@/components/home/YogaPoses';
import Benefits from '@/components/home/Benefits';
import Services from '@/components/home/Services';
import BatchTimings from '@/components/home/BatchTimings';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1E7]">
      <Navbar />
      <Hero />
      <AboutTrainer />
      <YogaPoses />
      <Benefits />
      <Services />
      <BatchTimings />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
