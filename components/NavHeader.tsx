"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const AgendarButtonDesktop: React.FC = ({
}) => {
  return (
    <Button className="hidden md:inline-flex text-white font-semibold" style={{ backgroundColor: "#B48E69" }} asChild variant="default" size="lg">
      <Link
        href="https://api.whatsapp.com/send?phone=5541998817085&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agendar Avaliação
      </Link>
    </Button>
  );
}

const AgendarButtonMobile: React.FC<{setIsOpen: Dispatch<SetStateAction<boolean>>}> = ({
  setIsOpen
}) => {
  return (
    <Button
      className="w-full text-white font-semibold"
      style={{ backgroundColor: "#B48E69" }}
      onClick={() => setIsOpen(false)}
      asChild
      variant="default"
      size="lg">
      <Link
        href="https://api.whatsapp.com/send?phone=5541998817085&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agendar Avaliação
      </Link>
    </Button>
  );
}

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/20">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/#hero"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#4A2F1A" }}
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.svg"     // path público
                alt="Unhas Dani Minosso"
                width={120}          // ajuste conforme proporção do seu SVG
                height={120}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold" style={{ color: "#4A2F1A" }}>
                Unhas Dani Minosso
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/#sobre"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#4A2F1A" }}
            >
              Sobre
            </Link>
            <Link
              href="/#valores"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#4A2F1A" }}
            >
              Valores
            </Link>
            <Link
              href="/#servicos"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#4A2F1A" }}
            >
              Serviços
            </Link>
            <Link
              href="/#contato"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#4A2F1A" }}
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <AgendarButtonDesktop />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} style={{ color: "#4A2F1A" }}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "#EBDDD1" }}
        >
          <nav className="px-4 py-6 space-y-4 border-t border-white/20">
            <Link
              href="/#sobre"
              className="block text-lg font-medium hover:opacity-80 transition-opacity py-2"
              style={{ color: "#4A2F1A" }}
              onClick={closeMenu}
            >
              Sobre Mim
            </Link>
            <Link
              href="/#valores"
              className="block text-lg font-medium hover:opacity-80 transition-opacity py-2"
              style={{ color: "#4A2F1A" }}
              onClick={closeMenu}
            >
              Valores
            </Link>
            <Link
              href="/#servicos"
              className="block text-lg font-medium hover:opacity-80 transition-opacity py-2"
              style={{ color: "#4A2F1A" }}
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link
              href="/#contato"
              className="block text-lg font-medium hover:opacity-80 transition-opacity py-2"
              style={{ color: "#4A2F1A" }}
              onClick={closeMenu}
            >
              Contato
            </Link>
            <div className="pt-2 border-t border-white/20">
              <AgendarButtonMobile setIsOpen={setIsOpen} />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
