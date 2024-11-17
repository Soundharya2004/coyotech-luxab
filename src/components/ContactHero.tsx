
const ContactHero = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat h-[400px] lg:h-[500px]" 
      style={{ 
        backgroundImage: "url('https://luxab.ae/wp-content/uploads/2024/10/woah-2-1024x473.jpg')"
      }}
    >
      {/* Overlay to dull the image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Increase opacity to dull the image */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-lg font-semibold uppercase tracking-wide mb-4">LUXAB</h1>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
        Get in Touch with Us !
        </h2>
      </div>
    </section>
  );
};

export default ContactHero;
