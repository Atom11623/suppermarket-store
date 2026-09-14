import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  "All",
  "Groceries",
  "Household",
  "Beverages",
  "Personal Care",
  "Kitchen",
  "Baby Products",
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Navbar />

      {/* Page Header */}
      <section className="bg-green-700 text-white">

        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">

          <p className="font-semibold text-green-200">
            SUPERSTORE
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Our Products
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-green-50">
            Browse quality groceries, household essentials,
            beverages, personal care products and more.
          </p>

        </div>

      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

        {/* Search */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Shop All Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {products.length} products available
            </p>

          </div>

          <div className="w-full lg:max-w-md">

            <input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

          </div>

        </div>

        {/* Category Filters */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">

          {categories.map((category, index) => (

            <button
              key={category}
              type="button"
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                index === 0
                  ? "bg-green-600 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-green-600 hover:text-green-600"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}