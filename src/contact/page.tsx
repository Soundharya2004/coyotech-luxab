import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import ContactHero from "../components/ContactHero";
import Connect from "../components/Connect";
import ContactBanner from "../components/ContactBanner";

function Contact() {
  return (
    <div className="min-h-screen bg-white">
<br /><br /> <br /> 
     <ContactHero />
     <Connect />
<ContactBanner />
      <FAQ />

    </div>
  );
}

export default Contact;