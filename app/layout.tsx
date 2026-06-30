import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

// Add Montserrat with weight 900 (Black)
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Golden Boys Rekomendacje",
  description: "Najlepsze bonusy i gry kasynowe",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${montserrat.variable} min-h-screen flex flex-col m-0 p-0`}>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
