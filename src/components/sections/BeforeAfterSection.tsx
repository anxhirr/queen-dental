"use client";

import Image from "next/image";
import { useState } from "react";

const beforeAfterImages = [
  {
    id: 1,
    image: "/images/teeth-before-after1.png",
  },
  {
    id: 2,
    image: "/images/teeth-before-after2.png",
  },
  {
    id: 3,
    image: "/images/teeth-before-after3.png",
  },
  {
    id: 4,
    image: "/images/teeth-before-after4.png",
  },
];

const BeforeAfterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to show next image
  const showNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to show previous image
  const showPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? beforeAfterImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 lg:py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-gray-800 text-center">
          Prima e dopo
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {beforeAfterImages.map((item, index) => (
            <div
              key={item.id}
              className="flex-1 max-w-xs mx-auto relative overflow-hidden rounded-lg"
            >
              <Image
                src={item.image}
                alt={`Before and After Case ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
