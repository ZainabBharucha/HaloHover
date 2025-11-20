import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;