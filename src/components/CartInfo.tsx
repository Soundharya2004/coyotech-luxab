import { ChevronDown, Minus, Plus } from 'lucide-react'
export default function CartInfo() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
            <br /> <br /> <br /><br /> <br /> <br />
          <h1 className="text-2xl font-bold text-gray-900">Cart</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">Home</a>
            <span>/</span>
            <span className="text-gray-900">Cart</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white shadow">
              <div className="p-6">
                <div className="flow-root">
                  <div className="divide-y divide-gray-200">
                    <div className="flex items-center justify-between py-4">
                      <div className="flex items-start">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Sparkling Water"
                          className="h-20 w-20 rounded-md object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-base font-medium text-gray-900">
                            Sparkling Water - 500 ml
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            12-Pack of 500 ml Luxab Alkaline Sparkling Water
                          </p>
                          <button 
                            className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                            onClick={() => console.log('Remove item')}
                          >
                            Remove item
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-base font-medium text-gray-900">د.إ 36.00</p>
                        <div className="mt-2 flex items-center border rounded-md">
                          <button 
                            className="p-2 text-gray-600 hover:text-blue-600"
                            onClick={() => console.log('Decrease quantity')}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value="1"
                            className="w-12 border-x text-center text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            readOnly
                          />
                          <button 
                            className="p-2 text-gray-600 hover:text-blue-600"
                            onClick={() => console.log('Increase quantity')}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white shadow divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">Cart Totals</h2>
                <div className="mt-6 space-y-4">
                  <button className="flex w-full items-center justify-between rounded-md border p-3 text-sm text-gray-900 hover:bg-gray-50">
                    <span>Add a coupon</span>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </button>

                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">د.إ 36.00</dd>
                  </div>

                  <div className="flex justify-between border-t pt-4">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Delivery</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-600">FREE</dd>
                  </div>

                  <div className="text-sm text-gray-500">
                    Delivers to United Arab Emirates
                  </div>

                  <div className="flex items-center">
                    <div className="flex h-5 items-center">
                      <input
                        type="radio"
                        checked
                        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div className="ml-3">
                      <label className="text-sm font-medium text-gray-700">
                        Free shipping
                      </label>
                      <p className="text-sm text-gray-500">FREE</p>
                    </div>
                  </div>

                  <div className="flex justify-between border-t pt-4">
                    <dt className="text-base font-medium text-gray-900">Total</dt>
                    <dd className="text-base font-medium text-gray-900">د.إ 36.00</dd>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-md bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}