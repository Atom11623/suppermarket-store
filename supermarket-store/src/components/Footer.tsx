import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold">
            🛒 <span className="text-green-500">SUPER</span>STORE
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Your trusted destination for quality groceries,
            household products and everyday essentials.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold">Shop</h3>

          <div className="mt-4 flex flex-col gap-3 text-gray-400">

            <Link href="/products" className="hover:text-white">
              Products
            </Link>

            <Link href="/categories" className="hover:text-white">
              Categories
            </Link>

            <Link href="/wholesale" className="hover:text-white">
              Wholesale
            </Link>

            <Link href="/cart" className="hover:text-white">
              Cart
            </Link>

          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold">Company</h3>

          <div className="mt-4 flex flex-col gap-3 text-gray-400">

            <Link href="/about" className="hover:text-white">
              About Us
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>

            <Link href="/delivery" className="hover:text-white">
              Delivery
            </Link>

            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold">Contact</h3>

          <div className="mt-4 space-y-3 text-gray-400">

            <p>📍 Nigeria</p>

            <p>📞 +234 800 000 0000</p>

            <p>✉️ hello@superstore.com</p>

            <p>💬 WhatsApp available</p>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-center text-sm text-gray-500 sm:flex-row sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Superstore. All rights reserved.
          </p>

          <p>
            Retail & Wholesale Shopping
          </p>

        </div>

      </div>

    </footer>
  );
}