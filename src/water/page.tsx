import React from 'react'
import { Droplet, Zap, Smile, Shield, Award, Coffee } from 'lucide-react'
import LatestPosts from '../components/LatestPosts'
import FAQ from '../components/FAQ'

export default function WaterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Alkaline Water</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the Benefits of Alkaline Ionized Water
          </p>
          <p className="mt-4 text-gray-500">
            Experience the pure, refreshing qualities of alkaline ionized water, designed to support your health and elevate your daily life.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Droplet className="h-8 w-8 text-blue-500" />,
              title: "Promotes a Balanced Body",
              description: "Combat the effects of modern living! Alkaline ionized water helps neutralize the body's tendency toward acidity caused by stress and acidic foods, promoting a healthier, more balanced state."
            },
            {
              icon: <Zap className="h-8 w-8 text-yellow-500" />,
              title: "Enhanced Cellular Hydration",
              description: "Thanks to its finer particle structure compared to tap water, alkaline ionized water penetrates cells more effectively. This supports better hydration, helping flush out salt, toxins, and waste through urine and sweat."
            },
            {
              icon: <Smile className="h-8 w-8 text-green-500" />,
              title: "Mild, Soft, and Delicious",
              description: "This water features an exceptionally low hardness level of 2 or less, making it among the softest waters in Japan. Its mild, light, and slightly sweet flavor is easy to drink, even at room temperature."
            },
            {
              icon: <Shield className="h-8 w-8 text-red-500" />,
              title: "Anti-Oxidation Properties",
              description: "Compared to tap water, alkaline ionized water resists oxidation, as evidenced by its ability to keep a paper clip from rusting as quickly. The slower oxidation rate enhances its freshness and purity."
            },
            {
              icon: <Award className="h-8 w-8 text-purple-500" />,
              title: "Unmatched Quality Assurance",
              description: "We take quality seriously with perfect health standards, award-winning facilities, and daily inspections to ensure every bottle meets the highest hygiene standards."
            },
            {
              icon: <Coffee className="h-8 w-8 text-brown-500" />,
              title: "Enhances Culinary Delights",
              description: "Bring out the best in your coffee, tea, and recipes! Alkaline ionized water enhances the natural taste and aroma of ingredients, elevating your cooking and beverages."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">What is alkaline water?</h2>
          <p className="text-gray-600 mb-4">
            Alkaline water has a higher pH level than regular tap water, typically ranging from 7.5 to 9.5. This increased alkalinity is believed to help neutralize excess acidity in the body, supporting better hydration, detoxification, and overall health.
          </p>
          <p className="text-gray-600">
            Many people choose alkaline water for its potential to improve energy levels, support bone health, and aid digestion. Whether you're looking to enhance your wellness routine or simply enjoy a refreshing drink, alkaline water offers a natural and beneficial choice for hydration.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img src="https://luxab.ae/wp-content/uploads/2024/10/image-18.png" alt="Alkaline Water" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">What are some benefits of drinking alkaline water?</h2>
            <ul className="space-y-4">
              {[
                "Improved Hydration",
                "Balances pH Levels",
                "Antioxidant Properties",
                "Supports Detoxification",
                "Aids Digestion",
                "Boosts Bone Health",
                "May Enhance Energy Levels",
                "Supports Immune Function"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Why should you switch to alkaline water?</h2>
          <p className="text-gray-700 mb-4">
            Switching to alkaline water can offer a variety of health benefits that support overall wellness. By helping to neutralize excess acidity in the body, alkaline water promotes a more balanced pH, which may reduce discomfort from issues like acid reflux and indigestion.
          </p>
          <p className="text-gray-700 mb-4">
            Its smaller molecular structure also allows for better hydration, allowing your cells to absorb and retain water more efficiently. This improved hydration can enhance energy levels, boost vitality, and support detoxification by flushing out toxins.
          </p>
          <p className="text-gray-700">
            Whether you're looking to improve digestion, support immune function, or simply stay hydrated, making the switch to alkaline water is an easy way to improve your daily health routine.
          </p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Sparkling Water</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is sparkling water?</h3>
            <p className="text-gray-600 mb-6">
              Sparkling water is essentially water supercharged with carbon dioxide gas, creating those refreshing bubbles that tingle on your tongue. It can either be naturally carbonated, like the kind that comes from mineral springs, or artificially made by infusing CO2 under pressure.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Health benefits of sparkling water:</h4>
                <ul className="text-left space-y-2">
                  {[
                    "Enhanced Hydration",
                    "Aid in Digestion",
                    "Satiates Thirst",
                    "Improved Swallowing and Oral Health",
                    "Alkalizing Effect",
                    "Potential Mineral Benefits",
                    "Boosts Mood and Energy"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Why you should try sparkling water:</h4>
                <p className="text-gray-600">
                  You should try sparkling water for a refreshing twist on your daily hydration routine. Its effervescent bubbles not only make it more exciting to drink, but they also help promote better digestion by stimulating gastric motility, which can reduce bloating and discomfort.
                </p>
                <p className="text-gray-600 mt-4">
                  If you're looking to cut back on sugary sodas, sparkling water offers a deliciously fizzy, calorie-free alternative that still satisfies your craving for something bubbly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestPosts />
      <FAQ />
    </div>
  )
}