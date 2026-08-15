import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Hardware from "./components/Hardware";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";

function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Hardware />
        <Pricing />
        <WhyChooseUs />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:slug" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
