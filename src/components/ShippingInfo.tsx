import { Truck, Clock, MapPin, AlertTriangle, Package } from 'lucide-react'

export default function ShippingInfo() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-lg text-blue-800 font-semibold">As of now, we only deliver within Dubai, United Arab Emirates.</p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipping Options</h3>
        <p className="text-gray-600 mb-6">At LUXAB Dubai, we ensure safe and secure deliveries for our customers satisfaction.</p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Truck className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Free shipping</h4>
              <p className="mt-1 text-gray-600">Get your orders delivered to any location in Dubai for free and receive your product in 1 working day.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Same day shipping</h4>
              <p className="mt-1 text-gray-600">Get your orders shipped to your location within the same (working) day for 10+ AED.</p>
            </div>
          </div>
        </div>

        <div className="my-8 rounded-lg overflow-hidden">
          <img 
            src="https://luxab.ae/wp-content/uploads/2024/11/image-768x432.png"
            alt="LUXAB Delivery Service"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Truck className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-semibold text-gray-700">20+ Vans at your service!</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What do we deliver?</h3>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Package className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-gray-600">
                We deliver premium alkaline water products to homes and businesses across Dubai. Our range includes bottled water in various sizes, water dispensers, and related accessories, ensuring you have access to high-quality, refreshing water whenever you need it.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 rounded-lg overflow-hidden">
          <img 
            src="https://i0.wp.com/luxab.ae/wp-content/uploads/2024/10/woah-1-1024x473.jpg?strip=info&w=1200&ssl=1"
            alt="LUXAB Delivery Fleet"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-12 space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Address Changes</h4>
              <p className="mt-1 text-gray-600">Once an order is placed, we are unable to modify the delivery address or respond to requests for changes. Please ensure all details are correct before completing your purchase.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Shipment Notifications</h4>
              <p className="mt-1 text-gray-600">You will receive notifications with shipment details before and after your order is dispatched.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Shipping Schedule</h4>
              <p className="mt-1 text-gray-600">Please note that we do not process or ship orders on Saturdays, Sundays, or public holidays.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg overflow-hidden">
          <img 
            src="https://luxab.ae/wp-content/uploads/2024/11/image-1-768x432.png"
            alt="LUXAB Delivery Process"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}