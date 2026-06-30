"use client"

import { useRef } from "react"
import Image from "next/image"
import { InfoIcon } from "lucide-react"

export default function BonusSection() {
  const recommendationsRef = useRef<HTMLDivElement>(null)

  const scrollToRecommendations = () => {
    recommendationsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="py-16 relative bonus-section-bg">
        {/* Background image - gold bars with Legiano logo */}
        <Image
          src="/images/gold-bars-legiano.jpeg"
          alt="Gold Bars Legiano"
          fill
          className="object-cover z-0"
          style={{ objectFit: "cover", objectPosition: "center", backgroundRepeat: "no-repeat" }}
          priority
        />

        {/* Dark overlay for the entire section */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute inset-0 z-0">
          <Image src="/images/dark-overlay.png" alt="Dark Overlay" fill className="object-cover opacity-18" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Left bonus container - decreased width */}
            <div className="w-full md:w-2/5 lg:w-1/3">
              <div className="bonus-container p-8 h-full angled-container relative shadow-xl bg-[#131313FA] z-10">
                {/* Dark overlay background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image src="/images/dark-overlay.png" alt="Background" fill className="object-cover opacity-18" />
                  <div className="absolute inset-0 bg-[#131313FA]"></div>
                </div>

                <div className="text-left relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Powitalne</h3>
                  <h2 className="text-5xl font-bold mb-6">BONUSY</h2>
                  <p className="mb-8">Koniecznie sprawdź dostępne dla ciebie bonusy na start.</p>
                  <button
                    onClick={scrollToRecommendations}
                    className="gold-button scroll-button"
                    style={{
                      backgroundImage: "url('/images/gold-texture-1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="font-bold text-white">ZACZNIJ TUTAJ</span>
                  </button>
                </div>

                {/* Euro bills positioned at the bottom of the container */}
                <div className="absolute bottom-0 right-0 z-10">
                  <img
                    src="/images/euro-bills.png"
                    alt="Euro Bills"
                    width="168"
                    style={{
                      transform: "rotate(15deg)",
                      marginBottom: "-20px",
                      marginRight: "-20px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right containers - SOCIALE and WAGER RACE */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
              {/* SOCIALE container - fixed padding */}
              <div
                className="social-container angled-container relative shadow-xl bg-[#131313FA]"
                style={{ minHeight: "120px" }}
              >
                {/* Dark overlay background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image src="/images/dark-overlay.png" alt="Background" fill className="object-cover opacity-18" />
                  <div className="absolute inset-0 bg-[#131313FA]"></div>
                </div>

                <div className="flex justify-between items-center h-full px-12 py-6 relative z-10">
                  <h2 className="text-4xl font-bold pr-8">SOCIALE</h2>
                  <div className="flex gap-6 mr-8">
                    {" "}
                    {/* Increased margin-right */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/discord-icon.png"
                        alt="Discord"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                      <Image src="/images/kick-icon.png" alt="Kick" width={48} height={48} className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* WAGER RACE container - fixed padding */}
              <div
                className="social-container angled-container flex-grow relative shadow-xl bg-[#131313FA]"
                style={{ minHeight: "180px" }}
              >
                {/* Dark overlay background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image src="/images/dark-overlay.png" alt="Background" fill className="object-cover opacity-18" />
                  <div className="absolute inset-0 bg-[#131313FA]"></div>
                </div>

                {/* Info icon moved to top left */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-[#d4af37] rounded-full p-1 tooltip-container">
                    <InfoIcon size={20} className="text-black" />
                    <div className="tooltip">Dostępne wkrótce</div>
                  </div>
                </div>

                <div className="flex justify-between items-center h-full px-12 py-6 relative z-10">
                  <h2 className="text-4xl font-bold">WAGER RACE</h2>
                  <div className="mr-12">
                    {" "}
                    {/* Increased margin-right to move button further right */}
                    <button
                      className="gold-button white-dotted-border"
                      style={{
                        backgroundImage: "url('/images/gold-texture-2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span className="font-bold text-white">Sprawdz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden reference for smooth scrolling */}
      <div ref={recommendationsRef} className="scroll-target"></div>
    </>
  )
}
