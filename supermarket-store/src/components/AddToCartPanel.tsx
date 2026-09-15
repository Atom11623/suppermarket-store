"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

type AddToCartPanelProps = {
  product: Product;
  isOutOfStock: boolean;
};

export default function AddToCartPanel({
  product,
  isOutOfStock,
}: AddToCartPanelProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  function handleQuantityChange(value: string) {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) return;

    const clamped = Math.min(Math.max(parsed, 1), product.stock);
    setQuantity(clamped);
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    showToast(`${quantity} × ${product.name} added to cart`);
  }

  return (
    <>
      {/* Quantity */}
      <div className="mt-6">
        <label htmlFor="quantity" className="block text-sm font-semibold">
          Quantity
        </label>

        <div className="mt-2 flex w-32 items-center overflow-hidden rounded-lg border border-gray-300">
          <button
            type="button"
            onClick={() => handleQuantityChange(String(quantity - 1))}
            disabled={isOutOfStock}
            className="flex-1 py-2 text-lg font-bold text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <input
            id="quantity"
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            disabled={isOutOfStock}
            onChange={(event) => handleQuantityChange(event.target.value)}
            className="w-12 border-x border-gray-300 py-2 text-center outline-none"
          />

          <button
            type="button"
            onClick={() => handleQuantityChange(String(quantity + 1))}
            disabled={isOutOfStock}
            className="flex-1 py-2 text-lg font-bold text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {quantity >= product.wholesaleMinimum && (
          <p className="mt-2 text-xs font-semibold text-green-600">
            ✓ Wholesale price applied at this quantity
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className="flex-1 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

        <Link
          href="/cart"
          className="flex-1 rounded-xl border border-gray-300 px-6 py-4 text-center font-bold transition hover:border-green-600 hover:text-green-600"
        >
          View Cart
        </Link>
      </div>
    </>
  );
}
