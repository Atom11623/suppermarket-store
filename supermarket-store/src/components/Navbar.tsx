"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-extrabold tracking-tight sm:text-xl"
        >
          🛒 <span className="text-green-600">NASSER</span> ENTERPRISE
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/" className="font-medium transition hover:text-green-600">
            Home
          </Link>

          <Link
            href="/products"
            className="font-medium transition hover:text-green-600"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="font-medium transition hover:text-green-600"
          >
            Categories
          </Link>

          <Link
            href="/wholesale"
            className="font-medium transition hover:text-green-600"
          >
            Wholesale
          </Link>

          <Link
            href="/about"
            className="font-medium transition hover:text-green-600"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/admin"
            className="hidden rounded-lg px-4 py-2 font-medium transition hover:bg-gray-100 sm:block"
          >
            Admin
          </Link>

          <Link
            href="/cart"
            className="relative rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            🛒 Cart
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-950 px-1 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border px-3 py-2 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-5">
            <Link href="/" onClick={closeMenu} className="border-b py-3 font-medium">
              Home
            </Link>

            <Link
              href="/products"
              onClick={closeMenu}
              className="border-b py-3 font-medium"
            >
              Products
            </Link>

            <Link
              href="/categories"
              onClick={closeMenu}
              className="border-b py-3 font-medium"
            >
              Categories
            </Link>

            <Link
              href="/wholesale"
              onClick={closeMenu}
              className="border-b py-3 font-medium"
            >
              Wholesale
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b py-3 font-medium"
            >
              About
            </Link>

            <Link href="/admin" onClick={closeMenu} className="py-3 font-medium">
              Admin Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
