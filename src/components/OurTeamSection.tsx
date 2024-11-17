import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Reza Faryabi",
    role: "CEO of LUXAB UAE",
    description: "Fully dedicated to keep LUXAB ready for you.",
    twitter: "#",
    linkedin: "#",
    image: "https://luxab.ae/wp-content/uploads/2024/10/image-40.png", // Replace with actual images
  },
  {
    name: "Maryam Faryabi",
    role: "Chair Manager",
    description: "Taking care of all the things going around LUXAB.",
    twitter: "#",
    linkedin: "#",
    image: "https://luxab.ae/wp-content/uploads/2024/10/image-52.png", // Replace with actual images
  },
  {
    name: "Amirali Faryabi",
    role: "Marketing",
    description: "Focused on anything that goes on online.",
    twitter: "#",
    linkedin: "#",
    image: "https://luxab.ae/wp-content/uploads/2024/10/image-51.png", // Replace with actual images
  },
  {
    name: "Kenneth Karanja",
    role: "Finance Manager",
    description: "Managing all the companies finances.",
    twitter: "#",
    linkedin: "#",
    image: "https://luxab.ae/wp-content/uploads/2024/10/image-47.png", // Replace with actual images
  },
  {
    name: "Michael Williams",
    role: "pH Balance Specialist",
    description: "Skilled in maintaining optimal pH levels for health.",
    twitter: "#",
    linkedin: "#",
    image: "https://luxab.ae/wp-content/uploads/2024/10/image-32.png", // Replace with actual images
  },
  {
    name: "Jessica Brown",
    role: "Antioxidant Guru",
    description: "Focused on providing the best antioxidant-rich waters.",
    twitter: "#",
    linkedin: "#",
    image: "https://luxab.ae/wp-content/uploads/2024/10/image-32.png", // Replace with actual images
  },
];

const OurTeamSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Meet our passionate team who ensure every drop of LUXAB is perfect. Khosh Nooshan Mashreq Zemin company under the Luxab brand is the producer of Luxab alkaline water with PH 8.5.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Located in the pristine environment of Golestan province, near the Shahkoh heights, our factory draws water from underground aquifers, ensuring high-quality alkaline water with minimal nitrates and no nitrites.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-8 lg:px-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-purple-600 font-semibold">{member.role}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Heading */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Alkaline water LUXAB has achieved multiple certifications:
            </h2>
          </div>

          {/* Right Content */}
          <div className="text-left">
            <ul className="text-gray-600 space-y-2">
              <li>• Customer satisfaction with services and products (ISO 10004)</li>
              <li>• Food safety management (ISO 22000)</li>
              <li>• Specialized standard for testing and calibration laboratories (ISO 17025)</li>
            </ul>
            
            <br />
            
            <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            className="water-button group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Certificates
            </span>
          </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
