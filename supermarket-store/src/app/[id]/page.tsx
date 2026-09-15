import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartPanel from "@/components/AddToCartPanel";
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

            <AddToCartPanel product={product} isOutOfStock={isOutOfStock} />

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