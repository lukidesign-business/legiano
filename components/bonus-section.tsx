"use client"
import Image from "next/image"
import { InfoIcon, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BonusSection() {
  // Add state for tooltip visibility
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  // Get a reference to the recommendations section
  const scrollToPlusy = () => {
    // Find the element with id "najwieksze-plusy"
    const element = document.getElementById("najwieksze-plusy")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  return (
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
            <div className="bonus-container p-8 h-full angled-container relative shadow-xl bg-[#131313FA] z-10 rounded-[30px] overflow-hidden">
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

              {/* Euro bills positioned behind the text - INCREASED INITIAL SIZE */}
              <div className="absolute bottom-[18%] right-[40%] z-0">
                <img
                  src="/images/euro-bills.png"
                  alt="Euro Bills"
                  id="euro-bills-image"
                  className="money-image"
                  style={{
                    maxWidth: "200%", // Increased from 160% to 200%
                    transform: "rotate(0deg)",
                    marginBottom: "-100px",
                    marginRight: "-100px",
                    transition: "transform 0.7s ease",
                  }}
                />
              </div>

              <div className="text-left relative z-10 flex flex-col h-full justify-center">
                <h3 className="text-2xl font-medium mb-0">Co zrobić aby wygrać</h3>
                <h2 className="text-6xl font-bold mb-6 tracking-wide font-montserrat">
                  <span className="gold-texture">HAJS</span>
                </h2>
                <p className="mb-10 text-gray-300">Kliknij "Odbierz bonus" a następnie zarejestruj konto.</p>
                <div>
                  <button
                    onClick={scrollToPlusy}
                    className="gold-button scroll-button uppercase font-extrabold"
                    style={{
                      backgroundImage: "url('/images/gold-texture-1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <span className="font-extrabold text-white">Zacznij tutaj</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right containers - SOCIALE and WAGER RACE */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
            {/* SOCIALE container - IMPROVED RESPONSIVE CENTERING */}
            <div
              className="social-container angled-container relative shadow-xl bg-[#131313FA] rounded-[30px] overflow-hidden md:px-10 md:py-6"
              style={{ minHeight: "120px" }}
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

              {/* Social Media Icons - IMPROVED MOBILE ALIGNMENT & PUSHED TEXT RIGHT */}
              <div className="flex flex-col sm:flex-row justify-between items-center h-full w-full px-6 py-6 relative z-10 gap-4 sm:gap-0 text-center">
                <h2 className="text-4xl font-bold tracking-wide font-montserrat mb-4 sm:mb-0 sm:mr-auto">SOCIALE</h2>
                <div className="flex gap-4 sm:gap-6 ml-0">
                  {/* Discord icon - No redirect yet */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden cursor-pointer social-icon-zoom"
                    onClick={() => console.log("Discord clicked")}
                    role="button"
                    tabIndex={0}
                    aria-label="Discord"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        console.log("Discord clicked via keyboard")
                      }
                    }}
                  >
                    <Image
                      src="/images/discord-icon.png"
                      alt="Discord"
                      width={42}
                      height={42}
                      className="object-cover w-full h-full transition-transform duration-300"
                    />
                  </div>

                  {/* Instagram icon - With redirect */}
                  <Link
                    href="https://www.instagram.com/mr_cios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden social-icon-zoom"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/images/instagram-icon.png"
                      alt="Instagram"
                      width={42}
                      height={42}
                      className="object-cover w-full h-full transition-transform duration-300"
                    />
                  </Link>

                  {/* Kick icon - With redirect */}
                  <Link
                    href="https://kick.com/mr-cios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden social-icon-zoom"
                    aria-label="Kick"
                  >
                    <Image
                      src="/images/kick-icon.png"
                      alt="Kick"
                      width={42}
                      height={42}
                      className="object-cover w-full h-full transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* WAGER RACE container - IMPROVED RESPONSIVE CENTERING */}
            <div
              className="social-container angled-container flex-grow relative shadow-xl bg-[#131313FA] rounded-[30px] md:px-10 md:py-6"
              style={{ minHeight: "180px", position: "relative", overflow: "visible" }}
            >
              {/* Dark overlay background */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[30px]">
                <div className="absolute inset-0 bg-[#131313FA]"></div>
                <Image
                  src="/images/dark-overlay.png"
                  alt="Background"
                  fill
                  className="object-cover opacity-18"
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Info icon moved to top left with improved tooltip - UPDATED TO CLICK-BASED */}
              <div className="absolute top-4 left-4 z-50">
                <button
                  onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                  className="bg-[#d4af37] rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Informacja"
                >
                  <InfoIcon size={20} className="text-black" />
                </button>

                {/* Tooltip positioned at the top-left of the icon - ENSURED SINGLE LINE */}
                {isTooltipVisible && (
                  <div className="absolute top-[-40px] left-0 bg-black border border-[#d4af37] text-white text-sm px-3 py-1 rounded shadow-lg flex items-center z-[9999] whitespace-nowrap">
                    <span>Dostępne wkrótce</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsTooltipVisible(false)
                      }}
                      className="ml-2 text-gray-400 hover:text-white focus:outline-none"
                      aria-label="Zamknij"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Centered content - IMPROVED RESPONSIVE CENTERING */}
              <div className="flex flex-col sm:flex-row justify-center items-center h-full w-full px-4 sm:px-6 md:px-8 py-6 relative z-10 disabled-content gap-4 sm:gap-8 md:gap-16 text-center">
                <h2 className="text-4xl font-bold tracking-wide font-montserrat whitespace-nowrap opacity-10 mb-4 sm:mb-0">
                  WAGER RACE
                </h2>
                <div>
                  <button
                    className="gold-button uppercase font-extrabold white-dotted-border opacity-10 cursor-not-allowed"
                    style={{
                      backgroundImage: "url('/images/gold-texture-1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                    }}
                    disabled
                  >
                    <span className="font-extrabold text-white">Wkrótce</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
