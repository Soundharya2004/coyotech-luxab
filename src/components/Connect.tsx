import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Connect() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-full md:w-1/2">
          <div className="w-full h-0 pb-[75%] relative max-w-md mx-auto">
            <img
              src="https://luxab.ae/wp-content/uploads/2024/10/image-15-768x973.png"
              alt="CEO Portrait"
              className="absolute top-0 left-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-600">
              Experience LUXAB, where premium alkaline water meets wellness. Enjoy enhanced hydration, support your balance, and refresh with every sip. Perfect for rejuvenation, vitality, and recovery.
            </p>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">Reza Faryabi</h3>
              <p className="text-sm text-gray-500">CEO of LUXAB UAE</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 w-full md:w-1/2 flex items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Connect with LUXAB</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p>Latifa tower, Sheikh zayed road</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <a href="tel:+97154376808" className="hover:text-blue-600 transition-colors">
                  +971 54 376 8080
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <a href="mailto:info@luxab.ae" className="hover:text-blue-600 transition-colors">
                  info@luxab.ae
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}