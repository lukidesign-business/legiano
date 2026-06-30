"use client"

import Image from "next/image"
import { useState } from "react"
import { Check } from "lucide-react"

export default function AngledImageSection() {
  // Add state to track if code has been copied
  const [copied, setCopied] = useState(false)

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("CIOS").then(() => {
      setCopied(true)
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      className="relative py-6 pb-36 md:py-16 md:pb-24 overflow-hidden"
      style={{ minHeight: "calc(100vh * 0.75)", maxHeight: "1000px" }}
    >
      {/* Dark overlay background */}
      <Image src="/images/dark-overlay.png" alt="Background" fill className="object-cover" priority />

      {/* Money image overlay - FIXED POSITIONING FOR CONSISTENT DISPLAY */}
      <div className="absolute bottom-0 left-0 w-full h-full z-[5] hidden md:block">
        <div
          className="relative w-full h-full"
          style={{
            filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.7))",
          }}
        >
          <div className="absolute bottom-[-5%] left-[2%] w-[600px] h-[600px]">
            <Image
              src="/images/cios-money.png"
              alt="Money Rain"
              fill
              className="object-contain"
              style={{
                objectPosition: "left bottom",
                transform: "scale(1.4)",
                transformOrigin: "bottom left",
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Money image for mobile - MOVED FURTHER RIGHT AND MADE SLIGHTLY SMALLER */}
      <div className="absolute bottom-[-10%] left-[25%] w-full h-[85%] z-[5] block md:hidden mt-8">
        <div
          className="relative w-full h-full"
          style={{
            filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.7))",
          }}
        >
          <Image
            src="/images/cios-money.png"
            alt="Money Rain"
            fill
            className="object-contain"
            style={{
              objectPosition: "center bottom",
              transform: "scale(2.2)",
              transformOrigin: "bottom center",
            }}
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left side - Logo - PUSHED FURTHER LEFT AND HIGHER ON DESKTOP */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start relative z-[6]">
            <div className="relative flex justify-center md:justify-start w-full md:pl-0">
              <div className="md:-mt-24">
                {/* Using the custom CSS class for positioning */}
                <Image
                  src="/images/legiano-logo.png"
                  alt="Legiano Casino"
                  width={500}
                  height={188}
                  className="object-contain w-[35%] md:w-[80%]"
                />
              </div>
            </div>

            {/* Promo code container for desktop - FIXED POSITIONING */}
            <div className="absolute top-[12rem] md:top-[125%] left-[50%] md:left-[40%] transform -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[7] hidden md:block">
              <div
                className="promo-code-container py-2 px-4 md:py-3 md:px-5 rounded-lg shadow-xl cursor-pointer code-hover-effect"
                style={{
                  backgroundImage: "url('/images/gold-texture-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                  width: "200px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={copyToClipboard}
                role="button"
                tabIndex={0}
                aria-label="Copy code CIOS to clipboard"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    copyToClipboard()
                  }
                }}
              >
                {!copied ? (
                  <p className="text-white text-sm md:text-base font-extrabold tracking-wider whitespace-nowrap">
                    USE CODE: CIOS
                  </p>
                ) : (
                  <div className="flex items-center justify-center">
                    <p className="text-white text-sm md:text-base font-extrabold tracking-wide animate-fade-in mr-2">
                      SKOPIOWANO
                    </p>
                    <Check size={16} className="text-white animate-fade-in" />
                  </div>
                )}
              </div>
            </div>

            {/* Promo code container for mobile - MOVED LOWER */}
            <div className="absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[7] block md:hidden mt-8">
              <div
                className="promo-code-container py-2 px-3 rounded-lg shadow-xl cursor-pointer code-hover-effect"
                style={{
                  backgroundImage: "url('/images/gold-texture-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                  width: "150px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={copyToClipboard}
                role="button"
                tabIndex={0}
                aria-label="Copy code CIOS to clipboard"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    copyToClipboard()
                  }
                }}
              >
                {!copied ? (
                  <p className="text-white text-xs font-extrabold tracking-wider whitespace-nowrap">USE CODE: CIOS</p>
                ) : (
                  <div className="flex items-center justify-center">
                    <p className="text-white text-xs font-extrabold tracking-wide animate-fade-in mr-2">SKOPIOWANO</p>
                    <Check size={14} className="text-white animate-fade-in" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Angled image containers - HIDDEN ON MOBILE */}
          <div className="w-full md:w-1/2 hidden md:block">
            <div className="relative h-[350px] md:h-[800px]">
              {/* First angled image container - adjusted position on desktop */}
              <div className="absolute top-[-1rem] md:top-[1rem] right-0 w-full md:w-[90%] h-28 md:h-64 bg-black/80 rounded-lg overflow-hidden md:transform md:-rotate-2 shadow-xl hover-zoom-container">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src="/images/poker-table.jpeg"
                    alt="Poker Table"
                    fill
                    className="object-cover hover-zoom-image"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
              {/* Second angled image container - adjusted position on desktop */}
              <div className="absolute top-[7rem] md:top-[17rem] right-0 md:right-4 w-full md:w-[90%] h-28 md:h-64 bg-black/80 rounded-lg overflow-hidden md:transform md:rotate-2 shadow-xl hover-zoom-container">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src="/images/slot-machine.jpeg"
                    alt="Slot Machine"
                    fill
                    className="object-cover hover-zoom-image"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
              {/* Third angled image container - adjusted position on desktop */}
              <div className="absolute top-[15rem] md:top-[33rem] right-0 w-full md:w-[90%] h-28 md:h-64 bg-black/80 rounded-lg overflow-hidden md:transform md:-rotate-3 shadow-xl hover-zoom-container">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src="/images/playing-cards.jpeg"
                    alt="Playing Cards"
                    fill
                    className="object-cover hover-zoom-image"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Added padding under the image containers on mobile */}
        <div className="h-20 md:h-0"></div>
      </div>
    </section>
  )
}
