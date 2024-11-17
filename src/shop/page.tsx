import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import ShopProduct from "../components/ShopProduct";


function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<br /><br /> <br /> 
<ShopProduct />
      <FAQ />

    </div>
  );
}

export default Shop;