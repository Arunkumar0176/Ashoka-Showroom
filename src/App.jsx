import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Hardware from "./components/Hardware";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import SanitarywarePage from "./components/SanitarywarePage";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Hardware />
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:slug" element={<CategoryPage />} />
        <Route path="/sanitaryware/:slug" element={<SanitarywarePage />} />
      </Routes>
    </BrowserRouter>
  );
}
