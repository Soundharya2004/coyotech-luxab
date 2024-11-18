import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Banner from "./components/banner";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import FeaturedProducts from "./components/FeaturedProduct";
import LatestPosts from "./components/LatestPosts";
import LuxabSection from "./components/LuxabSection";
import LuxabHighlightSection from "./components/LuxabHighlightSection";
import Footer from "./components/Footer";

// Import individual page components (if applicable)
import About from "./about/page";
import Contact from "./contact/page";
import Shipping from "./shipping/page";
import Cart from "./cart/page"
import Shop from "./shop/page"
import Account from "./account/page"
import Gallery from "./gallery/page";
import CheckoutPage from "./checkout/page";
import WaterPage from "./water/page";
import BlogPage from "./blog/page";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Banner />
                <Products />
                <FeaturedProducts />
                <LatestPosts />
                <LuxabSection />
                <LuxabHighlightSection />
                <FAQ />
              </>
            }
          />

          {/* Individual Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/checkout" element={<CheckoutPage />}/>
          <Route path="/water" element={<WaterPage />} />
          <Route path="/blog" element={<BlogPage />} />




        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
