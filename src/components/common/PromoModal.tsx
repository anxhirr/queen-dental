"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const PromoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission
    // For now, just close the modal
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 border-none bg-transparent shadow-none">
        <DialogTitle />
        <div className="relative bg-primary-500 text-white rounded-md overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full bg-white/20 hover:bg-white/30 z-10"
          >
            <X className="h-4 w-4 text-white" />
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Left side - Content */}
            <div className="p-6 md:p-8">
              <Image
                src="/images/logo.png"
                alt="Queen Dental Logo"
                width={150}
                height={40}
                className="mb-6"
              />

              <h2 className="text-2xl font-bold mb-4">RISPARMI 65%</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Odontoiatri specializzati
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Allogio e transferta gratuita
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Assistenza e garanzia
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Input
                    type="text"
                    placeholder="Nome"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="tel"
                    placeholder="Tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-primary-500 hover:bg-white/90"
                >
                  Inviare
                </Button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative w-full md:w-1/3 h-48 md:h-auto">
              <Image
                src="/images/tooth-bg.png"
                alt="Dental Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoModal;
