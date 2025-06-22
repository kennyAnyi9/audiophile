"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/features/cart/stores/cart-store";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <CartProvider>
      {!isHomePage && <Header />}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </CartProvider>
  );
}