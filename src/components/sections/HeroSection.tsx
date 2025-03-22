import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-20 lg:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="Dental Check"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl lg:text-5xl font-light uppercase mb-4 tracking-wide">
            TRUCCO DEL SORRISO
          </h1>
          <p className="text-lg mb-6">
            Non esiste altra clinica come Queen Dental!
          </p>
          <Button asChild className="bg-primary-500 hover:bg-primary-600 text-white rounded-md">
            <Link href="/servizi">I nostri servizi</Link>
          </Button>
        </div>
      </div>

      {/* Slider Controls - Just for visual representation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        <button className="w-6 h-6 rounded-full flex items-center justify-center border border-white/50 text-white">
          &lt;
        </button>
        <button className="w-6 h-6 rounded-full flex items-center justify-center border border-white/50 text-white">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
