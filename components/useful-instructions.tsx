"use client"

import Image from "next/image"
import Link from "next/link"
import { InfoIcon, X } from "lucide-react"
import { useState } from "react"

export default function UsefulInstructions() {
  // Add state to track which tooltip is visible
  const [visibleTooltip, setVisibleTooltip] = useState<number | null>(null)

  // Toggle tooltip visibility
  const toggleTooltip = (index: number) => {
    if (visibleTooltip === index) {
      setVisibleTooltip(null)
    } else {
      setVisibleTooltip(index)
    }
  }

  return (
    <section className="py-16 relative">
      {/* Background image - poker table with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/poker-table.jpeg"
          alt="Poker Table Background"
          fill
          className="object-cover"
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 z-0">
          <Image src="/images/dark-overlay.png" alt="Dark Overlay" fill className="object-cover opacity-18" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat pt-8">
          Przydatne <span className="gold-texture">Instrukcje</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 md:px-0">
          {/* First instruction card - COMING SOON - Adjusted opacity */}
          <div className="social-container angled-container relative shadow-xl bg-[#131313]/35 rounded-[30px] overflow-visible">
            {/* Dark overlay background */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[30px]">
              <div className="absolute inset-0 bg-[#131313]/35"></div>
              <Image
                src="/images/dark-overlay.png"
                alt="Background"
                fill
                className="object-cover opacity-18"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* REDESIGNED TOOLTIP - Smaller and centered in container */}
            <div className="absolute top-4 left-4 z-50">
              <button
                onClick={() => toggleTooltip(1)}
                className="bg-[#d4af37] rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Informacja"
              >
                <InfoIcon size={20} className="text-black" />
              </button>
            </div>

            {/* Tooltip positioned in the middle of the container - ENSURED SINGLE LINE */}
            {visibleTooltip === 1 && (
              <div className="absolute inset-0 flex items-center justify-center z-[9999] pointer-events-none">
                <div className="bg-black border border-[#d4af37] text-white text-sm px-3 py-1 rounded shadow-lg flex items-center pointer-events-auto whitespace-nowrap">
                  <span>Dostępne wkrótce</span>
                  <button
                    onClick={() => setVisibleTooltip(null)}
                    className="ml-2 text-gray-400 hover:text-white focus:outline-none"
                    aria-label="Zamknij"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col justify-center items-center h-full w-full px-4 py-10 relative z-10 disabled-content">
              <h3 className="text-xl font-medium text-center opacity-10">Jak wpłacać poprzez krypto</h3>
            </div>
          </div>

          {/* Second instruction card - ACTIVE - Made clickable with link to instrukcje page */}
          <Link href="/instrukcje" className="block">
            <div
              className="social-container angled-container relative shadow-xl bg-[#131313FA] rounded-[30px] overflow-hidden cursor-pointer h-full"
              role="button"
              tabIndex={0}
              aria-label="Jak ominąć blokady dostawcy internetu"
            >
              {/* Dark overlay background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#131313FA]"></div>
                <Image
                  src="/images/dark-overlay.png"
                  alt="Background"
                  fill
                  className="object-cover opacity-18"
                  style={{ objectPosition: "center" }}
                />
              </div>

              <div className="flex flex-col justify-center items-center h-full w-full px-4 py-10 relative z-10">
                <h3 className="text-xl font-medium text-center">Jak ominąć blokady dostawcy internetu</h3>
              </div>
            </div>
          </Link>

          {/* Third instruction card - COMING SOON - Adjusted opacity */}
          <div className="social-container angled-container relative shadow-xl bg-[#131313]/35 rounded-[30px] overflow-visible">
            {/* Dark overlay background */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[30px]">
              <div className="absolute inset-0 bg-[#131313]/35"></div>
              <Image
                src="/images/dark-overlay.png"
                alt="Background"
                fill
                className="object-cover opacity-18"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* REDESIGNED TOOLTIP - Smaller and centered in container */}
            <div className="absolute top-4 left-4 z-50">
              <button
                onClick={() => toggleTooltip(3)}
                className="bg-[#d4af37] rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Informacja"
              >
                <InfoIcon size={20} className="text-black" />
              </button>
            </div>

            {/* Tooltip positioned in the middle of the container - ENSURED SINGLE LINE */}
            {visibleTooltip === 3 && (
              <div className="absolute inset-0 flex items-center justify-center z-[9999] pointer-events-none">
                <div className="bg-black border border-[#d4af37] text-white text-sm px-3 py-1 rounded shadow-lg flex items-center pointer-events-auto whitespace-nowrap">
                  <span>Dostępne wkrótce</span>
                  <button
                    onClick={() => setVisibleTooltip(null)}
                    className="ml-2 text-gray-400 hover:text-white focus:outline-none"
                    aria-label="Zamknij"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col justify-center items-center h-full w-full px-4 py-10 relative z-10 disabled-content">
              <h3 className="text-xl font-medium text-center opacity-10">Jak bezpiecznie wypłacać</h3>
            </div>
          </div>
        </div>

        {/* Updated disclaimer text in Polish - Made smaller */}
        <div className="mt-12 text-sm text-gray-200 text-center max-w-4xl mx-auto disclaimer-box">
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
      </div>
    </section>
  )
}
