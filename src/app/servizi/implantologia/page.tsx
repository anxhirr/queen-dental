import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Implantologia Dentale - Queen Dental",
  description: "Scopri i nostri servizi avanzati di implantologia dentale. Restituiamo il tuo sorriso con la tecnologia più moderna e i trattamenti personalizzati.",
};

export default function ImplantologyPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800">
            Implantologia
          </h1>

          {/* Hero Section */}
          <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/implantology.png"
              alt="Implantologia Dentale"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">
                  L'arte di trasformare i sorrisi
                </h2>
                <p>attraverso la moderna tecnologia dentale</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-10">
            <p className="text-gray-700 mb-4">
              L'implantologia dentale è una specialità odontoiatrica che si occupa del ripristino di denti mancanti mediante l'inserimento chirurgico di impianti in titanio nella mascella o nella mandibola. Questi impianti fungono da radici artificiali per sostenere corone, ponti o protesi, restituendo al paziente estetica e funzionalità masticatoria.
            </p>

            <p className="text-gray-700 mb-4">
              Gli impianti dentali offrono numerosi vantaggi rispetto alle protesi tradizionali, tra cui maggiore stabilità, preservazione dell'osso mascellare, aspetto più naturale e una durata potenzialmente illimitata se adeguatamente mantenuti.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-8">I nostri trattamenti di implantologia includono:</h3>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                <strong>Impianti singoli</strong> - Sostituzione di un singolo dente mancante con un impianto e una corona.
              </li>
              <li className="mb-2">
                <strong>Impianti multipli</strong> - Sostituzione di più denti mancanti con impianti e corone individuali.
              </li>
              <li className="mb-2">
                <strong>Impianti a carico immediato</strong> - Posizionamento di impianti e protesi provvisoria nella stessa seduta.
              </li>
              <li className="mb-2">
                <strong>All-on-4 / All-on-6</strong> - Riabilitazione completa dell'arcata con soli 4-6 impianti.
              </li>
              <li className="mb-2">
                <strong>Rialzo del seno mascellare</strong> - Procedura per aumentare il volume osseo nella mascella superiore.
              </li>
              <li className="mb-2">
                <strong>Innesti ossei</strong> - Tecniche per rigenerare l'osso nelle aree deficitarie.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-8">Perché scegliere Queen Dental per i tuoi impianti dentali?</h3>

            <p className="text-gray-700 mb-4">
              A Queen Dental, il nostro team di chirurghi implantari altamente qualificati utilizza le più recenti tecnologie e tecniche per garantire risultati ottimali. Offriamo consulenze personalizzate, pianificazione digitale del trattamento e procedure minimamente invasive per ridurre i tempi di recupero.
            </p>

            <p className="text-gray-700 mb-4">
              Tutti i nostri impianti sono realizzati con materiali di altissima qualità e sono coperti da garanzia. Inoltre, offriamo opzioni di finanziamento flessibili per rendere accessibili questi trattamenti avanzati.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary-100 p-8 rounded-lg text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pronto a trasformare il tuo sorriso?
            </h2>
            <p className="text-gray-600 mb-6">
              Prenota oggi stesso una consulenza gratuita con i nostri specialisti in implantologia per scoprire le opzioni di trattamento più adatte alle tue esigenze.
            </p>
            <Button asChild className="bg-primary-500 hover:bg-primary-600 text-white px-8">
              <Link href="/book">Prenota una consulenza</Link>
            </Button>
          </div>

          {/* Back to Services */}
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600"
            >
              <Link href="/servizi">
                Torna a tutti i servizi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
