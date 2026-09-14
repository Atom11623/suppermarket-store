import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Groceries",
    icon: "🛒",
    description: "Rice, beans, pasta and more",
  },
  {
    name: "Household",
    icon: "🧹",
    description: "Cleaning and home essentials",
  },
  {
    name: "Beverages",
    icon: "🥤",
    description: "Drinks and refreshments",
  },
  {
    name: "Personal Care",
    icon: "🧴",
    description: "Everyday personal products",
  },
  {
    name: "Kitchen",
    icon: "🍳",
    description: "Kitchen and cooking essentials",
  },
  {
    name: "Baby Products",
    icon: "👶",
    description: "Products for babies and families",
  },
];

const products = [
  {
    name: "Premium Rice",
    category: "Groceries",
    price: "₦45,000",
    unit: "25kg",
    icon: "🍚",
  },
  {
    name: "Vegetable Oil",
    category: "Groceries",
    price: "₦12,000",
    unit: "5 Litres",
    icon: "🫗",
  },
  {
    name: "Laundry Detergent",
    category: "Household",
    price: "₦8,500",
    unit: "Carton",
    icon: "🧼",
  },
  {
    name: "Tissue Paper",
    category: "Household",
    price: "₦7,500",
    unit: "Pack",
    icon: "🧻",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Navbar />

      {/* HERO */}
      <section className="bg-green-700 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              Retail & Wholesale Shopping
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

              Everything You Need,

              <span className="block text-green-200">
                All in One Place.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              Shop quality groceries, household products and everyday
              essentials at competitive prices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/products"
                className="rounded-xl bg-white px-7 py-4 text-center font-bold text-green-700 transition hover:bg-gray-100"
              >
                Shop Now →
              </Link>

              <Link
                href="/wholesale"
                className="rounded-xl border border-white/40 px-7 py-4 text-center font-bold transition hover:bg-white/10"
              >
                Wholesale
              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white/10 text-8xl shadow-2xl sm:h-96 sm:w-96">
              🛒
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="border-b bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          {[
            ["🚚", "Fast Delivery", "Convenient delivery options"],
            ["✓", "Quality Products", "Carefully selected products"],
            ["💰", "Great Prices", "Competitive retail prices"],
            ["📦", "Wholesale", "Better prices for bulk orders"],
          ].map(([icon, title, description]) => (

            <div key={title} className="flex gap-4">

              <span className="text-3xl">
                {icon}
              </span>

              <div>

                <h3 className="font-bold">
                  {title}
                </h3>

                <p className="text-sm text-gray-500">
                  {description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">

        <div>

          <p className="font-semibold text-green-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-3 text-gray-500">
            Find everything you need for your home and business.
          </p>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => (

            <Link
              href="/categories"
              key={category.name}
              className="group rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
            >

              <div className="text-5xl transition group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-4 font-bold">
                {category.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {category.description}
              </p>

            </Link>

          ))}

        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-gray-50">

        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">

          <p className="font-semibold text-green-600">
            Popular
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Featured Products
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {products.map((product) => (

              <div
                key={product.name}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-48 items-center justify-center bg-gray-100 text-7xl">
                  {product.icon}
                </div>

                <div className="p-5">

                  <p className="text-xs font-medium text-green-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.unit}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="font-bold">
                      {product.price}
                    </span>

                    <button
                      type="button"
                      className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
                    >
                      Add
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHOLESALE */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">

        <div className="rounded-3xl bg-gray-950 px-6 py-14 text-white sm:px-12 lg:px-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="font-semibold text-green-400">
                FOR BUSINESSES
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Buy More. Save More.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                Buying for your shop, restaurant, office or business?
                Access competitive wholesale prices and convenient bulk
                ordering.
              </p>

              <Link
                href="/wholesale"
                className="mt-8 inline-block rounded-xl bg-green-600 px-7 py-4 font-bold hover:bg-green-500"
              >
                Explore Wholesale →
              </Link>

            </div>

            <div className="text-center text-8xl">
              📦
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}