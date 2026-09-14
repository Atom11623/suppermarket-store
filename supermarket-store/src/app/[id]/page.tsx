import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/data/products";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const isOutOfStock = product.stock <= 0;

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">

        <div className="flex flex-wrap gap-2 text-sm text-gray-500">

          <Link
            href="/"
            className="hover:text-green-600"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/products"
            className="hover:text-green-600"
          >
            Products
          </Link>

          <span>/</span>

          <span className="text-gray-900">
            {product.name}
          </span>

        </div>

      </div>

      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-gray-100">

            <span className="text-[150px]">
              {product.icon}
            </span>

          </div>

          {/* Product Information */}
          <div>

            <p className="font-semibold text-green-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-gray-500">
              {product.unit}
            </p>

            <div className="mt-8 rounded-2xl border bg-gray-50 p-6">

              <div className="flex items-center justify-between">

                <span className="text-gray-500">
                  Retail Price
                </span>

                <span className="text-2xl font-extrabold">
                  ₦{product.price.toLocaleString()}
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-gray-500">
                  Wholesale Price
                </span>

                <span className="text-xl font-bold text-green-600">
                  ₦{product.wholesalePrice.toLocaleString()}
                </span>

              </div>

              <div className="mt-3 text-right text-xs text-gray-500">
                Minimum wholesale quantity:{" "}
                {product.wholesaleMinimum} units
              </div>

            </div>

            {/* Description */}
            <div className="mt-8">

              <h2 className="text-lg font-bold">
                Product Description
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {product.description}
              </p>

            </div>

            {/* Stock */}
            <div className="mt-6">

              {isOutOfStock ? (
                <span className="font-semibold text-red-600">
                  Out of stock
                </span>
              ) : (
                <span className="font-semibold text-green-600">
                  ✓ In stock
                </span>
              )}

            </div>

            {/* Quantity */}
            <div className="mt-6">

              <label
                htmlFor="quantity"
                className="block text-sm font-semibold"
              >
                Quantity
              </label>

              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                max={product.stock}
                disabled={isOutOfStock}
                className="mt-2 w-24 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-600"
              />

            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                disabled={isOutOfStock}
                className="flex-1 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {isOutOfStock
                  ? "Out of Stock"
                  : "Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="flex-1 rounded-xl border border-gray-300 px-6 py-4 text-center font-bold transition hover:border-green-600 hover:text-green-600"
              >
                View Cart
              </Link>

            </div>

            {/* Wholesale Notice */}
            <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">

              <h3 className="font-bold text-green-800">
                Buying in bulk?
              </h3>

              <p className="mt-2 text-sm leading-6 text-green-700">
                Get our wholesale price when you meet
                the minimum quantity requirement.
              </p>

              <Link
                href="/wholesale"
                className="mt-3 inline-block text-sm font-bold text-green-700 hover:underline"
              >
                Learn about wholesale →
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}