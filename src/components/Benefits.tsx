import React from "react";
import { GlassWater, Droplet, Waves, Droplets } from "lucide-react"; // Ensure lucide-react is installed

const benefitsData = [
  {
    icon: <GlassWater size={24} />,
    title: "Increasing Energy",
    description: "Boosts energy during physical activities",
  },
  {
    icon: <Droplets size={24} />,
    title: "Detoxification",
    description: "Improves nutrient absorption",
  },
  {
    icon: <Droplet size={24} />,
    title: "Prevents Osteoporosis",
    description: "Maintains healthy pH levels",
  },
  {
    icon: <Waves size={24} />,
    title: "Improves Digestion",
    description: "Prevents acid-related disorders",
  },
];

const Benefits: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-black mb-8">Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] group"
          >
            {/* Icon with Circular Background */}
            <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-500 transition-transform duration-300 group-hover:rotate-180">
              {benefit.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mt-16 mb-2 group-hover:text-blue-600">
              {benefit.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
