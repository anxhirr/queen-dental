"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  acceptTerms: boolean;
}

const ContactFormSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="py-12 lg:py-16 bg-primary-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-gray-800 text-center">
          Prendi un appuntamento oggi!
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <Input
                  type="text"
                  placeholder="Nome *"
                  {...register("name", { required: "Nome è richiesto" })}
                  className={`border-gray-300 focus:border-primary-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  {...register("email", {
                    required: "Email è richiesto",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Indirizzo email non valido"
                    }
                  })}
                  className={`border-gray-300 focus:border-primary-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Date Field */}
              <div className="relative">
                <Input
                  type="date"
                  placeholder="Date"
                  {...register("date")}
                  className="border-gray-300 focus:border-primary-500 w-full"
                />
                <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>

              {/* Phone Field */}
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  {...register("phone", { required: "Numero di telefono è richiesto" })}
                  className={`border-gray-300 focus:border-primary-500 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Accept Terms Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="acceptTerms"
                {...register("acceptTerms", { required: "È necessario accettare i termini" })}
                className="mt-1"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                Accetto che i miei dati inviati vengano raccolti e archiviati.
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="mt-1 text-sm text-red-500">{errors.acceptTerms.message}</p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-2 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Invio in corso..." : "Inviare"}
              </Button>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Grazie! Il tuo messaggio è stato inviato con successo.</span>
              </div>
            )}
          </form>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800 text-center">
            Perché i clienti ci scelgono?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Decennio di dedizione</h4>
                  <p className="text-gray-600 text-sm">
                    Con oltre 10 anni di fornitura di cure dentistiche a Tirana, in Albania, Queen Dental ha costruito solide basi di fiducia e competenza.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Team esperto</h4>
                  <p className="text-gray-600 text-sm">
                    Il nostro team esperto e premuroso di professionisti dentistici si impegna a garantire il vostro comfort e benessere durante ogni visita.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cura personalizzata</h4>
                  <p className="text-gray-600 text-sm">
                    Comprendiamo che ogni sorriso è unico, ecco perché offriamo soluzioni su misura per soddisfare le vostre specifiche esigenze dentali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
