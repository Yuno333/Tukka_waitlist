import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg antialiased selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
