"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Implantologia",
    image: "/images/implantology.png",
    url: "/servizi/implantologia",
  },
  {
    id: 2,
    title: "Chirurgia",
    image: "/images/surgery.png",
    url: "/servizi/chirurgia",
  },
  {
    id: 3,
    title: "Ortopedia",
    image: "/images/orthopaedics.png",
    url: "/servizi/ortopedia",
  },
  {
    id: 4,
    title: "Cosmetica",
    image: "/images/cosmetic.png",
    url: "/servizi/cosmetica",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-800 text-center">
          I nostri servizi odontoiatrici
        </h2>
        <p className="text-center text-gray-600 mb-8">Eccezionale</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.url}
              className="group block bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105 hover:shadow-md"
            >
              <div className="aspect-video w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Services Button */}
        <div className="mt-8 text-center">
          <Link
            href="/servizi"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
          >
            <span className="mr-2">Più servizi</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
