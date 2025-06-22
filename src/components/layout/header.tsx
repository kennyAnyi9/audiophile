"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/features/cart/stores/cart-store";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartIcon from "@/features/cart/components/cart-icon";
import { usePathname } from "next/navigation";
import CategoriesSection from "@/features/products/components/categories-section";
import CartModal from "@/features/cart/components/cart-modal";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  const { getTotalItems } = useCart();
  const cartItemsCount = getTotalItems();

  // Watch for cart changes
  useEffect(() => {
    if (cartItemsCount > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [cartItemsCount]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/products?category=headphones" },
    { name: "Speakers", href: "/products?category=speakers" },
    { name: "Earphones", href: "/products?category=earphones" },
  ];

  return (
    <header
      className={`text-white w-full ${
        pathname === "/" ? "absolute top-0" : "relative bg-black"
      }`}
    >
      <div
        className="max-w-7xl mx-auto border-b border-white"
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <div className="flex items-center justify-between py-8 px-6">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Logo */}
          <Link href="/">
            <Image
              alt="audiophile logo"
              src="/assets/shared/desktop/logo.svg"
              width={143}
              height={25}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors duration-200 uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`relative text-white hover:bg-gray-800 ${
                cartBounce ? "cart-bounce" : ""
              }`}
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu Content */}
          <div
            className="fixed left-0 top-24 right-0 bg-white z-50 lg:hidden"
            style={{ height: "calc(100vh - 6rem)" }}
          >
            <div className="h-full overflow-y-auto">
              <div className="pb-16">
                <CategoriesSection
                  onCategoryClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </>
      )}

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}