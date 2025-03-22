"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Welcome Text */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
              Benvenuti alla Clinica QueenDental!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Benvenuti in Queen Dental, il vostro accesso ai servizi odontoiatrici di classe mondiale e
              alla straordinaria bellezza dell'Albania. Siamo qui per offrirvi servizi odontoiatrici di
              alta qualità e rendere la vostra visita al nostro splendido paese un'esperienza memorabile.
              Lasciateci occuparci del vostro sorriso mentre godete delle meraviglie dell'Albania. Il vostro
              percorso verso un sorriso sano e splendido inizia qui, a Queen Dental. Benvenuti!
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600"
            >
              <Link href="/chi-siamo">Leggi di più</Link>
            </Button>
          </div>

          {/* Staff Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
              Il nostro staff
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Staff Card 1 */}
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    KA
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Klea Alushani</h4>
                    <p className="text-sm text-gray-600">Stomatolog</p>
                  </div>
                </div>
              </div>

              {/* Staff Card 2 */}
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    IS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Ignadio Saka</h4>
                    <p className="text-sm text-gray-600">Dentista</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center sm:text-right">
              <Button
                asChild
                variant="outline"
                className="border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600"
              >
                <Link href="/our-staff">Vedi Tutto</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
