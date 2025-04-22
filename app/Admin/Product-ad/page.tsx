import Image from "next/image";

const ProductPage = () => {
    return (
      <div className="min-h-screen p-8">
        {/* Product Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Product</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Add+</button>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <img
              src="/RusticBloomBox.png"
              alt="Rustic Bloom Box"
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4 text-lg font-semibold">Rustic Bloom Box</div>
            <div className="text-sm text-gray-500">Rp 800.000</div>
            <div className="mt-4 flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">In Stock</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full">Out of Stock</button>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <img
              src="/LavenderSerenity (1).png"
              alt="Lavender Serenity"
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4 text-lg font-semibold">Lavender Serenity</div>
            <div className="text-sm text-gray-500">Rp 650.000</div>
            <div className="mt-4 flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">In Stock</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full">Out of Stock</button>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <img
              src="/BlushingElegance.png"
              alt="Blushing Elegance"
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4 text-lg font-semibold">Blushing Elegance</div>
            <div className="text-sm text-gray-500">Rp 850.000</div>
            <div className="mt-4 flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">In Stock</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full">Out of Stock</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProductPage
  