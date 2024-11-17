import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import AboutHero from "../components/AboutHero";
import OurTeamSection from "../components/OurTeamSection";
import Reviews from "../components/Reviews";

function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<br /><br /> <br /> 
     <AboutHero />
     <OurTeamSection />

     <Reviews />
      <FAQ />

    </div>
  );
}

export default About;