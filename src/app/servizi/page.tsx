import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Implantologia",
    description: "L'arte di trasformare i sorrisi attraverso la moderna tecnologia dentale.",
    image: "/images/implantology.png",
    url: "/servizi/implantologia",
  },
  {
    id: 2,
    title: "Chirurgia",
    description: "Interventi avanzati per risolvere problemi dentali complessi con precisione e cura.",
    image: "/images/surgery.png",
    url: "/servizi/chirurgia",
  },
  {
    id: 3,
    title: "Ortopedia",
    description: "Laboratorio odontoiatrico specializzato nella realizzazione di protesi e restauri dentali.",
    image: "/images/orthopaedics.png",
    url: "/servizi/ortopedia",
  },
  {
    id: 4,
    title: "Cosmetica",
    description: "Ottieni un sorriso hollywoodiano oggi con i nostri trattamenti estetici all'avanguardia!",
    image: "/images/cosmetic.png",
    url: "/servizi/cosmetica",
  },
];

export const metadata = {
  title: "I nostri servizi - Queen Dental",
  description: "I nostri servizi odontoiatrici professionali - Implantologia, Chirurgia, Ortopedia e Cosmetica dentale di alta qualità",
};

export default function ServicesPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 text-center">
          I nostri servizi
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-gray-600 mb-4">
            Benvenuti nella sezione dedicata ai nostri servizi odontoiatrici. Queen Dental offre una gamma completa di trattamenti dentali per soddisfare tutte le vostre esigenze, dalle cure di base ai trattamenti più avanzati.
          </p>
          <p className="text-center text-gray-600">
            Il nostro team di professionisti altamente qualificati utilizza le tecnologie più moderne per garantire la massima qualità e comfort durante ogni trattamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    asChild
                    className="bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    <Link href={service.url}>Leggi di più</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contatta Sezione */}
        <div className="bg-primary-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hai bisogno di maggiori informazioni?
          </h2>
          <p className="text-gray-600 mb-6">
            Il nostro team è a tua disposizione per rispondere a tutte le tue domande e aiutarti a scegliere il trattamento più adatto alle tue esigenze.
          </p>
          <Button asChild className="bg-primary-500 hover:bg-primary-600 text-white px-8">
            <Link href="/book">Prenota un appuntamento</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
