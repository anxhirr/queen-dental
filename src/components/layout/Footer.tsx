import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Queen Dental Logo"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 mt-4 text-sm">
              Benvenuti in Queen Dental, il vostro accesso ai servizi odontoiatrici di classe mondiale e alla straordinaria bellezza dell'Albania
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com/queendental.al/" target="_blank" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/queendental.al/" target="_blank" className="text-pink-600 hover:text-pink-800">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@queendental.al/" target="_blank" className="text-gray-800 hover:text-gray-600">
                <FaTiktok className="h-5 w-5" />
              </Link>
              <Link href="http://wa.me/+355697010705" target="_blank" className="text-green-600 hover:text-green-800">
                <FaWhatsapp className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h6 className="text-gray-900 font-semibold mb-4 text-sm uppercase">Servizi</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/servizi" className="text-gray-600 hover:text-primary-500 text-sm">
                  Tutti i servizi
                </Link>
              </li>
              <li>
                <Link href="/turismo-dentale" className="text-gray-600 hover:text-primary-500 text-sm">
                  Turismo Dentale
                </Link>
              </li>
              <li>
                <Link href="/servizi/implantologia" className="text-gray-600 hover:text-primary-500 text-sm">
                  Implantologia
                </Link>
              </li>
              <li>
                <Link href="/servizi/ortopedia" className="text-gray-600 hover:text-primary-500 text-sm">
                  Ortopedia
                </Link>
              </li>
              <li>
                <Link href="/servizi/cosmetica" className="text-gray-600 hover:text-primary-500 text-sm">
                  Cosmetica
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h6 className="text-gray-900 font-semibold mb-4 text-sm uppercase">Mettiti in contatto</h6>
            <address className="not-italic">
              <p className="text-gray-600 mb-2 text-sm">
                Bulevardi Zhan Dark Shkalla 2, Kati 1, Tirana 1001
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:info@queendental.al" className="text-gray-600 hover:text-primary-500 text-sm">
                    Email: info@queendental.al
                  </Link>
                </li>
                <li>
                  <Link href="http://wa.me/+355696020066" className="text-gray-600 hover:text-primary-500 text-sm">
                    Phone: 355 69 60 200 66
                  </Link>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 py-6 bg-primary-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>© 2025 All Rights Reserved.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/termini-di-servizio" className="hover:text-primary-500">
              Termini di Servizio
            </Link>
            <Link href="/politica-sulla-riservatezza" className="hover:text-primary-500">
              Politica Sulla Riservatezza
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <Link
        href="http://wa.me/+355696020066"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 flex items-center justify-center"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="sr-only">Contatta direttamente!</span>
      </Link>
    </footer>
  );
};

export default Footer;
