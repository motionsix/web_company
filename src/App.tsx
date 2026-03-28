import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-base-100">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
