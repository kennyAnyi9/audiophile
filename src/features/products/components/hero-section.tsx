import Header from "@/components/layout/header";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/assets/home/mobile/image-header.jpg')] sm:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center min-h-screen flex items-start justify-center flex-col mb-36">
      <Header />
      <section className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto w-full text-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="w-full py-12 lg:py-20 items-center">
            <div className="space-y-8 flex items-center justify-center lg:items-start flex-col">
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-white mix-blend-normal opacity-50 text-sm font-medium tracking-[10px] uppercase">
                  New Product
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase">
                  XX99 Mark II
                  <br />
                  Headphones
                </h1>
                <p className="text-lg text-white mix-blend-normal opacity-75 max-w-[349px]">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
              </div>
              <Link href="/products/xx99-mark-two-headphones">
                <Button size="lg">See Product</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
