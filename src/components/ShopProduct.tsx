import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  size: string
  price: number
  image: string
}

export default function ShopProduct() {
  const products: Product[] = [
    {
      id: 1,
      name: "Alkaline Water",
      size: "1500 ml",
      price: 12.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-12-1024x1024.png"
    },
    {
      id: 2,
      name: "Alkaline Water",
      size: "300 ml",
      price: 8.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-13-1024x1024.png"
    },
    {
      id: 3,
      name: "Alkaline Water",
      size: "400 ml",
      price: 9.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-14-1024x1024.png"
    },
    {
      id: 4,
      name: "Alkaline Water",
      size: "500 ml",
      price: 10.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-11-1024x1024.png"
    },
    {
      id: 5,
      name: "Alkaline water cartoon",
      size: "330 ml",
      price: 8.50,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-15-1024x1024.png"
    },
    {
      id: 6,
      name: "Sparkling Water",
      size: "1500 ml",
      price: 14.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-17-1024x1024.png"
    },
    {
      id: 7,
      name: "Sparkling Water",
      size: "220 ml",
      price: 7.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-10-1024x1024.png"
    },
    {
      id: 8,
      name: "Sparkling Water",
      size: "500 ml",
      price: 11.00,
      image: "https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-17-1024x1024.png"
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <nav className="flex space-x-4 text-sm">
            <br /> <br /><br /><br /><br /><br /> 
            <a href="/" className="text-gray-500 hover:text-blue-600">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Shop</span>
          </nav>
          <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Default sorting</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
            <option>Sort by name</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-h-4 aspect-w-3">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.size}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.size}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    د.إ {product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => console.log(`Add ${product.name} to cart`)}
                    className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}