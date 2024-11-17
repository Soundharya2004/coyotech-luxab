import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import ShippingInfo from "../components/ShippingInfo";
import ShippingCover from "../components/ShippingCover";

function Shipping() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ShippingCover />
      <ShippingInfo />
      <FAQ />

    </div>
  );
}

export default Shipping;