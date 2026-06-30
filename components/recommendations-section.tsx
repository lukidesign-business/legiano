"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export default function RecommendationsSection() {
  return (
    <section className="py-8 md:py-16 pb-20 md:pb-40 relative">
      {/* Background gradient and overlay - flipped horizontally */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A8C] to-[#000000B5]"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark-overlay.png"
          alt="Dark Overlay"
          fill
          className="object-cover"
          style={{
            objectPosition: "bottom right",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 pt-4 md:pt-8 font-montserrat">
          Moje <span className="gold-texture">rekomendacje</span>
        </h2>
        <p className="text-sm md:text-xl text-center text-gray-300 mb-6 md:mb-12">
          Przygotowaliśmy dla was ciekawe bonusy od rejestracji.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dude Spin - 1st position */}
          <div
            className="casino-card p-3 md:p-6 pt-6 md:pt-10 dotted-border md:angled-container transform md:rotate-[-1deg] relative hover-zoom-container-subtle mx-auto md:mx-0 w-full max-w-[95%] md:max-w-none order-1 md:order-1 md:col-span-1 col-span-1"
            style={{ minHeight: "calc(550px)" }}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/background-dudespin.png"
                alt="Dude Spin Background"
                fill
                className="object-cover"
                style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
              />
              <div className="absolute inset-0 bg-[#0C0C0C]/70"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4 pt-3 md:pt-0">Dude Spin</h3>
                <div className="flex justify-center mb-2 md:mb-4">
                  <Image
                    src="/images/dudespin-logo.png"
                    alt="Dude Spin Logo"
                    width={250}
                    height={94}
                    className="object-contain w-[60%] md:w-[70%]"
                  />
                </div>
                <div className="bonus-badge text-center py-1 px-3 md:px-4 rounded-full text-xs md:text-sm w-fit mx-auto mb-3 md:mb-6">
                  <span className="font-extrabold text-white">BONUS POWITALNY</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 mt-6 md:mt-0">
                  300% BONUS + 150FS
                </h4>
                <p className="text-center mb-4 md:mb-8">od depozytu</p>

                <div className="mb-2 md:mb-8 flex flex-col items-center mt-16 md:mt-8">
                  <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">Największe plusy</h5>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base w-full">
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Bonus powitalny 300%</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">150 darmowych spinów</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Szybkie wypłaty w 24h</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-auto pt-12 md:pt-0">
                <a
                  href="https://dudsp.lynmonkel.com/?mid=332494_1975686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button w-auto whitespace-nowrap bonus-button text-sm md:text-base py-2 px-4 md:py-3 md:px-6 inline-block text-center"
                >
                  <span className="font-extrabold text-white">Odbierz Bonus</span>
                </a>
              </div>
            </div>
          </div>

          {/* ALF Casino - 2nd position */}
          <div
            className="casino-card p-3 md:p-6 pt-6 md:pt-10 dotted-border md:angled-container transform md:rotate-[0deg] z-10 md:scale-105 relative hover-zoom-container-subtle mx-auto md:mx-0 w-full max-w-[95%] md:max-w-none md:col-span-1 col-span-1 order-2 md:order-2"
            style={{ minHeight: "calc(550px)" }}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/background-alf.png"
                alt="ALF Casino Background"
                fill
                className="object-cover"
                style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
              />
              <div className="absolute inset-0 bg-[#0C0C0C]/70"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4 pt-3 md:pt-0">ALF Casino</h3>
                <div className="flex justify-center mb-2 md:mb-4">
                  <Image
                    src="/images/alf-casino-logo.png"
                    alt="ALF Casino Logo"
                    width={250}
                    height={94}
                    className="object-contain w-[60%] md:w-[70%]"
                  />
                </div>
                <div className="bonus-badge text-center py-1 px-3 md:px-4 rounded-full text-xs md:text-sm w-fit mx-auto mb-3 md:mb-6">
                  <span className="font-extrabold text-white">BONUS POWITALNY</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 mt-6 md:mt-0">
                  100% BONUS + 200FS
                </h4>
                <p className="text-center mb-4 md:mb-8">od depozytu</p>

                <div className="mb-2 md:mb-8 flex flex-col items-center mt-16 md:mt-8">
                  <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">Największe plusy</h5>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base w-full">
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Bonus powitalny 100%</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">200 darmowych spinów</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Szybkie wypłaty w 24h</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-auto pt-12 md:pt-0">
                <a
                  href="https://alcw.monalvor.com/?mid=260177_1975677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button w-auto whitespace-nowrap bonus-button text-sm md:text-base py-2 px-4 md:py-3 md:px-6 inline-block text-center"
                >
                  <span className="font-extrabold text-white">Odbierz Bonus</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legiano Casino - 3rd position */}
          <div
            className="casino-card p-3 md:p-6 pt-6 md:pt-10 dotted-border md:angled-container transform md:rotate-[1deg] relative hover-zoom-container-subtle mx-auto md:mx-0 w-full max-w-[95%] md:max-w-none md:col-span-1 col-span-1 order-3 md:order-3"
            style={{ minHeight: "calc(550px)" }}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/gold-bars-coins.jpeg"
                alt="Gold Bars and Coins"
                fill
                className="object-cover"
                style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
              />
              <div className="absolute inset-0 bg-[#0C0C0C]/80"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4 pt-3 md:pt-0">Legiano Casino</h3>
                <div className="flex justify-center mb-2 md:mb-4">
                  <Image
                    src="/images/legiano-logo.png"
                    alt="Legiano Casino"
                    width={250}
                    height={94}
                    className="object-contain w-[60%] md:w-[70%]"
                  />
                </div>
                <div className="bonus-badge text-center py-1 px-3 md:px-4 rounded-full text-xs md:text-sm w-fit mx-auto mb-3 md:mb-6">
                  <span className="font-extrabold text-white">BONUS POWITALNY</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 mt-6 md:mt-0">100% BONUS</h4>
                <p className="text-center mb-4 md:mb-8">od depozytu</p>

                <div
                  id="najwieksze-plusy"
                  className="mb-2 md:mb-8 flex flex-col items-center scroll-target-plusy mt-16 md:mt-8"
                >
                  <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">Największe plusy</h5>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base w-full">
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">100 darmowych obrotów</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Możliwość depozytu BLIK</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Tygodniowy zwrot do 10%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-auto pt-12 md:pt-0">
                <a
                  href="https://lgno.monvaki.com/?mid=260177_1524185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button w-auto whitespace-nowrap bonus-button text-sm md:text-base py-2 px-4 md:py-3 md:px-6 inline-block text-center"
                >
                  <span className="font-extrabold text-white">Odbierz Bonus</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
