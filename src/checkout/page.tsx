import React, { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'
import LatestPosts from '../components/LatestPosts'
import FAQ from '../components/FAQ'

export default function CheckoutPage() {
  const [isNoteOpen, setIsNoteOpen] = useState(false)
  const [isCouponOpen, setIsCouponOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <a href="/" className="hover:text-gray-700">Home</a>
            <ChevronRightIcon className="h-4 w-4" />
            <span>Checkout</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Contact information</h2>
              <p className="text-gray-600 mb-4">We'll use this email to send you details and updates about your order.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <p className="text-sm text-gray-500">You are currently checking out as a guest.</p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping address</h2>
              <p className="text-gray-600 mb-4">Enter the address where you want your order delivered.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country/Region
                  </label>
                  <select
                    id="country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>United Arab Emirates</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                    Apartment, suite, etc.
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State/County (optional)
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="sameAddress"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sameAddress" className="ml-2 block text-sm text-gray-900">
                    Use same address for billing
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping options</h2>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <input
                    id="freeShipping"
                    name="shippingOption"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    defaultChecked
                  />
                  <label htmlFor="freeShipping" className="ml-3 block text-sm font-medium text-gray-700">
                    Free shipping
                  </label>
                </div>
                <span className="text-sm font-medium text-gray-900">FREE</span>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Payment options</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      There are no payment methods available. This may be an error on our side. Please contact us if you
                      need any help placing your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <button
                onClick={() => setIsNoteOpen(!isNoteOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-medium text-gray-900">Add a note to your order</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transform ${isNoteOpen ? 'rotate-180' : ''}`} />
              </button>
              {isNoteOpen && (
                <div className="mt-4">
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add any special instructions or notes here..."
                  ></textarea>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-500">
              By proceeding with your purchase you agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>

            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
              Place Order
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Order summary</h2>
              <div className="border-t border-gray-200 pt-4 pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                    <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <img src='https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-13-300x300.png' className='' />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Alkaline Water - 300 ml
                    </p>
                    <p className="text-sm text-gray-500">
                      12-Pack of 300 ml Luxab Alkaline Water
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm font-medium text-gray-900">د.إ 18.00</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setIsCouponOpen(!isCouponOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium text-gray-900">Add a coupon</span>
                  <ChevronDownIcon className={`h-5 w-5 text-gray-500 transform ${isCouponOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCouponOpen && (
                  <div className="mt-4 flex space-x-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter coupon code"
                    />
                    <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                      Apply
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium text-gray-900">د.إ 18.00</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">Delivery</span>
                  <span className="text-sm font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-base font-medium text-gray-900">د.إ 18.00</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">Delivers to United Arab Emirates</p>
            </div>
          </div>
        </div>
      </div>
      <LatestPosts />
      <FAQ />
    </div>
  )
}