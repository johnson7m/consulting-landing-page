import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import Services from "./sections/Services";
import Results from "./sections/Results";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
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