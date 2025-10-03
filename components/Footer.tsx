"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const AgendarButtonFooter: React.FC = ({
}) => {
  return (
    <Button variant="ghost" size="icon" style={{ color: "#4A2F1A" }} asChild>
      <Link
        href="https://api.whatsapp.com/send?phone=5541998817085&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </Button>
  );
}

const InstagramButtonFooter: React.FC = ({
}) => {
  return (
    <Button
      variant="ghost" size="icon" style={{ color: "#4A2F1A" }} asChild
    >
      <Link
        href="https://www.instagram.com/unhasdaniminosso/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-5 w-5" />
      </Link>
    </Button>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="py-16 bg-white/80">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.svg"     // path público
                  alt="Unhas Dani Minosso"
                  width={120}          // ajuste conforme proporção do seu SVG
                  height={120}
                  className="h-10 w-auto [&>path]:stroke-[3px]"
                />
                <span className="text-lg md:text-xl font-bold montserrat" style={{ color: "#4A2F1A" }}>
                  Unhas Dani Minosso
                </span>
              </div>
              <p className="montserrat text-sm md:text-base" style={{ color: "#333333" }}>
                Especialista em alongamento de fibra e molde F1. Naturalidade, durabilidade e sofisticação em cada
                trabalho.
              </p>
              <div className="flex space-x-4">
                <AgendarButtonFooter />
                <InstagramButtonFooter />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold montserrat" style={{ color: "#4A2F1A" }}>
                Serviços
              </h4>
              <div className="space-y-2 text-sm montserrat">
                <p style={{ color: "#333333" }}>Alongamento em Fibra</p>
                <p style={{ color: "#333333" }}>Molde F1</p>
                <p style={{ color: "#333333" }}>Banho em Gel</p>
                <p style={{ color: "#333333" }}>Nail Art</p>
                <p style={{ color: "#333333" }}>Manutenção</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold montserrat" style={{ color: "#4A2F1A" }}>
                Informações
              </h4>
              <div className="space-y-2 text-sm montserrat">
                <p style={{ color: "#333333" }}>Atendimento por agendamento</p>
                <p style={{ color: "#333333" }}>Reposição de canto: consultar valores</p>
                <p style={{ color: "#333333" }}>Remoção: R$ 50</p>
                <p style={{ color: "#333333" }}>Durabilidade: até 30 dias</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/30">
            <div className="text-center">
              <p className="text-sm montserrat" style={{ color: "#333333" }}>
                © {new Date().getFullYear()} Unhas Dani Minosso. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}
