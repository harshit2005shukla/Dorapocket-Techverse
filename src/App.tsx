import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Technologies from "@/pages/Technologies";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

function ScrollToTop() {
  const loc = useLocation();
  useEffect(() => { window.scrollTo(0,0); }, [loc.pathname]);
  return null;
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
          className="fixed bottom-6 right-5 z-40 h-11 w-11 rounded-full glass flex items-center justify-center text-zinc-200 hover:text-white light:text-zinc-800"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: [0.22,1,0.36,1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function LayoutRoutes() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-[#070810] light:bg-[#f7f5fc] text-[15.3px]">
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 opacity-[0.35]" style={{background:"radial-gradient(1200px 700px at 50% -10%, rgba(123,93,255,0.085), transparent 60%)"}} />
        <Navbar />
        <main className="relative">
          <PageShell>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageShell>
        </main>
        <Newsletter />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

function Newsletter() {
  const [email,setEmail] = useState("");
  const [done,setDone] = useState(false);
  return (
    <section className="border-t border-white/[0.085] light:border-zinc-200">
      <div className="container-1280 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-[18.5px] font-[600] text-heading tracking-tight">Product notes from Dorapocket TechVerse</div>
          <div className="text-[14.6px] text-muted mt-1">Monthly engineering, AI, and SaaS growth learnings. No spam.</div>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); setDone(true);}} className="flex gap-2 w-full md:w-auto">
          <input
            value={email}
            onChange={e=>setEmail(e.target.value)}
            type="email"
            required
            placeholder="you@company.com"
            className="w-full md:w-[300px] bg-white/[0.045] border border-white/[0.17] rounded-full px-4 h-11 outline-none focus:border-violet-400/60 text-[14.3px] light:bg-white light:border-zinc-300"
          />
          <button className="rounded-full px-4 h-11 bg-white text-[#121526] font-[600] text-[13.9px] whitespace-nowrap">
            {done ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LayoutRoutes />
    </BrowserRouter>
  );
}
