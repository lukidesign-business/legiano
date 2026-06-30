import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-transparent py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold gold-gradient">LEGIANO</div>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-[#d4af37] transition-colors">
            Strona główna
          </Link>
          <Link href="/bonusy" className="text-white hover:text-[#d4af37] transition-colors">
            Bonusy
          </Link>
          <Link href="/gry" className="text-white hover:text-[#d4af37] transition-colors">
            Gry
          </Link>
          <Link href="/kontakt" className="text-white hover:text-[#d4af37] transition-colors">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  )
}
