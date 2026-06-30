"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Copy } from "lucide-react"
import { useState } from "react"

export default function InstrukcjePage() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(text)
        setTimeout(() => setCopySuccess(null), 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      {/* Background image - dark overlay - MADE LIGHTER */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/dark-overlay.png" alt="Dark Overlay" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Changed from 80% to 50% opacity */}
      </div>

      {/* Page content */}
      <div className="container mx-auto px-4 py-16 flex-grow relative z-10 max-w-5xl">
        {/* Main content box with gold border */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border-2 border-[#d4af37]">
          {/* Background image with overlay - MADE LIGHTER */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gold-bars-legiano.jpeg"
              alt="Background"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-[#131313]/70"></div> {/* Changed from FA (98%) to 70% opacity */}
            <Image src="/images/dark-overlay.png" alt="Dark Overlay" fill className="object-cover opacity-18" />
          </div>

          {/* Title inside the box */}
          <div className="px-8 py-16 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
              Jak omijać <span className="gold-texture">blokady</span>
              <br />
              dostawcy internetu
            </h2>
          </div>
        </div>

        {/* Methods title */}
        <h3 className="text-2xl md:text-3xl font-normal text-center mb-8 font-montserrat">
          Dwie metody <span className="gold-texture">omijania</span> blokad
        </h3>

        {/* Two methods grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* DNS Method - MADE LIGHTER */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37] bg-[#131313]/80 angled-container">
            {/* Dark overlay background - MADE LIGHTER */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[#131313]/80"></div> {/* Changed from FA (98%) to 80% opacity */}
              <Image src="/images/dark-overlay.png" alt="Dark Overlay" fill className="object-cover opacity-18" />
            </div>

            {/* Number indicator */}
            <div className="absolute top-4 left-4 bg-[#d4af37] text-black font-bold text-xl w-10 h-10 flex items-center justify-center rounded">
              1.
            </div>

            <div className="p-8 pt-16 relative z-10">
              <h4 className="text-4xl font-bold gold-texture text-center mb-6">DNS</h4>

              <p className="text-white mb-4">
                Najłatwiejszym rozwiązaniem w tej sytuacji jest zmiana domyślnych serwerów DNS na inne. Można to zrobić
                bezpośrednio w ustawieniach routera – wtedy każde urządzenie podłączone do sieci automatycznie będzie
                korzystać z nowych DNS – albo indywidualnie na wybranym urządzeniu.
              </p>

              <p className="text-white mb-6">
                Po takiej zmianie, w zdecydowanej większości przypadków, korzystanie z VPN nie będzie już konieczne.
              </p>

              <div className="mb-4">
                <h5 className="text-white font-medium mb-2">Rekomendowane DNS (cloudflare):</h5>
                <div className="bg-black/30 p-3 rounded">
                  <div
                    className="flex items-center justify-center cursor-pointer hover:bg-black/50 p-2 rounded transition-colors mb-2"
                    onClick={() => copyToClipboard("1.1.1.1")}
                  >
                    <span className="text-white mr-2">1.1.1.1</span>
                    <Copy size={16} className="text-[#d4af37]" />
                    {copySuccess === "1.1.1.1" && <span className="text-green-500 ml-2">Skopiowano!</span>}
                  </div>
                  <div
                    className="flex items-center justify-center cursor-pointer hover:bg-black/50 p-2 rounded transition-colors"
                    onClick={() => copyToClipboard("1.0.0.1")}
                  >
                    <span className="text-white mr-2">1.0.0.1</span>
                    <Copy size={16} className="text-[#d4af37]" />
                    {copySuccess === "1.0.0.1" && <span className="text-green-500 ml-2">Skopiowano!</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VPN Method - MADE LIGHTER */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37] bg-[#131313]/80 angled-container">
            {/* Dark overlay background - MADE LIGHTER */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[#131313]/80"></div> {/* Changed from FA (98%) to 80% opacity */}
              <Image src="/images/dark-overlay.png" alt="Dark Overlay" fill className="object-cover opacity-18" />
            </div>

            {/* Number indicator */}
            <div className="absolute top-4 left-4 bg-[#d4af37] text-black font-bold text-xl w-10 h-10 flex items-center justify-center rounded">
              2.
            </div>

            <div className="p-8 pt-16 relative z-10">
              <h4 className="text-4xl font-bold gold-texture text-center mb-6">VPN</h4>

              <p className="text-white mb-4">
                Jeśli wolicie korzystać z VPN, to również jest to dobra opcja. VPN (wirtualna sieć prywatna) pozwala
                zmienić lokalizację IP, szyfruje połączenia, dzięki czemu możecie omijać blokady regionalne i zwiększyć
                swoją prywatność online. Wystarczy zainstalować aplikację wybranego dostawcy (np. NordVPN, Surfshark,
                ProtonVPN), zalogować się, wybrać kraj i połączyć – to wszystko.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer - MADE LIGHTER */}
        <div className="text-sm text-gray-300 text-center max-w-4xl mx-auto p-6 bg-[#131313]/70 rounded-xl border border-[#d4af37]/20 mb-20">
          <p>
            Ta strona internetowa prezentuje informacje o ekskluzywnych kasynach oraz zawiera odnośniki partnerskie,
            które są przeznaczone wyłącznie dla osób przebywających w regionach, gdzie internetowe gry losowe są
            dozwolone przez prawo.
          </p>
          <p className="mt-2">
            Obowiązkiem użytkowników jest upewnienie się, że ich aktywność jest zgodna z lokalnymi przepisami. Nie
            zachęcamy ani nie popieramy nielegalnych form hazardu.
          </p>
          <p className="mt-2">
            Zanim skorzystasz z jakichkolwiek ofert przedstawionych na tej stronie, gorąco rekomendujemy zweryfikowanie
            legalności hazardu online w Twojej lokalizacji.
          </p>
          <p className="mt-2">
            Strona ta, ani jej właściciel, nie mają żadnego związku z marką luksusowych zegarków wysadzanych złotem. Tu
            tworzy się imperia finansowe i pomnaża złoto.
          </p>
        </div>

        {/* Back button moved to bottom right with additional padding */}
        <div className="fixed bottom-12 right-12 z-20">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-[#d4af37] transition-colors bg-black/50 px-8 py-4 rounded-full text-lg border border-[#d4af37]/30 hover:border-[#d4af37]"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <ArrowLeft className="mr-2" size={24} />
            <span className="font-extrabold">Powrót</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
