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
  service: string;
  message: string;
  acceptTerms: boolean;
}

export default function BookingPage() {
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
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 text-center">
            Prenota un appuntamento
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Compila il modulo sottostante per prenotare un appuntamento presso la nostra clinica.
            Ti contatteremo il prima possibile per confermare la tua prenotazione.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nome completo*</label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: "Nome è richiesto" })}
                  className={`border-gray-300 focus:border-primary-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email*</label>
                  <Input
                    id="email"
                    type="email"
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

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Telefono*</label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "Numero di telefono è richiesto" })}
                    className={`border-gray-300 focus:border-primary-500 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Field */}
                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Data preferita</label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      {...register("date")}
                      className="border-gray-300 focus:border-primary-500 w-full pr-10"
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Service Field */}
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">Servizio</label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="implantologia">Implantologia</option>
                    <option value="chirurgia">Chirurgia</option>
                    <option value="ortopedia">Ortopedia</option>
                    <option value="cosmetica">Cosmetica</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Messaggio (opzionale)</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Descrivici brevemente il trattamento di cui hai bisogno..."
                ></textarea>
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
                  Accetto che i miei dati inviati vengano raccolti e archiviati per essere contattato riguardo alla mia richiesta.*
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
                  {isSubmitting ? "Invio in corso..." : "Prenota ora"}
                </Button>
              </div>

              {/* Success Message */}
              {isSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Grazie! La tua richiesta è stata inviata con successo. Ti contatteremo presto per confermare l'appuntamento.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contattaci direttamente</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Indirizzo</h3>
                <p className="text-gray-600">
                  Bulevardi Zhan Dark Shkalla 2, Kati 1<br />
                  Tirana 1001, Albania
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Contatti</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Email:</span> info@queendental.al
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Telefono:</span> +355 69 60 200 66
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Orari di apertura</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
                <div>
                  <p><span className="font-medium">Lunedì - Venerdì:</span> 9:00 - 19:00</p>
                  <p><span className="font-medium">Sabato:</span> 9:00 - 14:00</p>
                </div>
                <div>
                  <p><span className="font-medium">Domenica:</span> Chiuso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
