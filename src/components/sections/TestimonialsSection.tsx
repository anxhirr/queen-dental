"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    content: "Queen Dental non è solo una clinica; è una famiglia. Il personale si preoccupa sinceramente del tuo benessere. Ho fatto diversi interventi qui, e i risultati hanno sempre superato le mie aspettative. Mi fido completamente del mio sorriso a loro.",
    author: "Maria P."
  },
  {
    id: 2,
    content: "Ho portato tutta la mia famiglia da Queen Dental, e non potremmo essere più felici. Offrono cure personalizzate per ognuno di noi, dai miei piccoli ai miei nonni. È raro trovare una clinica dentistica che si occupa di tutte le età, ma Queen Dental lo fa in modo impeccabile.",
    author: "Luca C."
  },
  {
    id: 3,
    content: "Avevo bisogno di un lavoro dentistico esteso, e Queen Dental mi è stata consigliata da un amico. Il team ha dedicato il tempo per spiegare tutto, e la tecnologia che hanno utilizzato era impressionante. Sono entusiasta dei risultati e grato per la loro competenza.",
    author: "Giovanna S."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeTestimonial = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <section className="py-12 lg:py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-gray-800 text-center">
          I nostri clienti dicono
        </h2>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
          // Remove the onSelect prop
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm">
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <p className="text-right font-medium text-gray-900">{testimonial.author}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:flex justify-center mt-6 space-x-2">
            <CarouselPrevious className="relative position-static mx-2" />
            <CarouselNext className="relative position-static mx-2" />
          </div>
        </Carousel>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary-500" : "bg-gray-300"}`}
              onClick={() => handleChangeTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
