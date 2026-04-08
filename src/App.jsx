import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";
import Problems from "./sections/Problems";
import Services from "./sections/Services";
import Results from "./sections/Results";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Ubuntu test //

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Problems />
        <Services />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;