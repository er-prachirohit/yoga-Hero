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
import AnimatedSection from '@/components/common/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1E7]">
      <Navbar />
      <Hero />
      <AnimatedSection><AboutTrainer /></AnimatedSection>
      <AnimatedSection><YogaPoses /></AnimatedSection>
      <AnimatedSection><Benefits /></AnimatedSection>
      <AnimatedSection><Services /></AnimatedSection>
      <AnimatedSection><BatchTimings /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><ContactCTA /></AnimatedSection>
      <Footer />
    </main>
  );
}
