```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        {/* Business Logo / Name */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-extrabold tracking-tight sm:text-xl"
        >
          🛒{" "}
          <span className="text-green-600">NASSER</span>{" "}
          ENTERPRISE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">

          <Link
            href="/"
            className="font-medium transition hover:text-green-600"
          >
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

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          <Link
            href="/login"
            className="hidden rounded-lg px-4 py-2 font-medium transition hover:bg-gray-100 sm:block"
          >
            Login
          </Link>

          <Link
            href="/cart"
            className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            🛒 Cart
          </Link>

          {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t bg-white md:hidden">

          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-5">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b py-3 font-medium"
            >
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

            <Link
              href="/login"
              onClick={closeMenu}
              className="py-3 font-medium"
            >
              Login
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}
```
