"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Shield, Sparkles, Calendar, Instagram, ChevronDown } from "lucide-react"
import Image from "next/image"
import { AgendarButtonFinal } from "@/components/AgendarButtonFinal"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AgendarButtonMain: React.FC = ({
}) => {
  return (
    <Button
      size="lg"
      className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 text-white font-semibold tracking-wide montserrat"
      style={{ backgroundColor: "#B48E69" }}
      asChild variant="default"
    >
      <Link
        href="https://api.whatsapp.com/send?phone=5541998817085&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        AGENDE SUA AVALIAÇÃO
      </Link>
    </Button>
  );
}

const InstagramButtonFinal: React.FC = ({
}) => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 font-semibold tracking-wide border-2 montserrat"
      style={{
        borderColor: "#B48E69",
        color: "#B48E69",
      }}
      asChild
    >
      <Link
        href="https://www.instagram.com/unhasdaniminosso/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="mr-2 h-5 w-5" />
        VER NO INSTAGRAM
      </Link>
    </Button>
  );
}

interface MainPageProps {
}

export const MainPage: React.FC<MainPageProps> = ({
}) => {
  return (
    <>
      <section id="hero" className="py-20 md:py-32 relative overflow-hidden">
        {/* — background shapes — */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rotate-45"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white/30 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 border border-white/30 rotate-45"></div>
          <Star className="absolute top-20 right-32 w-8 h-8 text-white/30" />
          <Star className="absolute bottom-32 right-10 w-6 h-6 text-white/30" />
        </div>

        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* título e subtítulo */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light playfair" style={{ color: "#4A2F1A" }}>
                NAIL DESIGNER
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light montserrat" style={{ color: "#4A2F1A" }}>
                ESPECIALISTA EM ALONGAMENTO EM FIBRA E MOLDE F1
              </p>
            </div>

            {/* — bloco da imagem — */}
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
                <div className="absolute inset-0 border-2 border-white rounded-lg rotate-3"></div>
                <div className="absolute inset-2 border border-white/50 rounded-lg -rotate-2"></div>
                <Image
                  priority
                  src="/images/dani.png"
                  alt="Daniele Minosso - Nail Designer"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover object-top w-full h-full"
                />
              </div>
              <div
                className="absolute -left-6 md:-left-8 top-8 text-xs tracking-widest transform -rotate-90 origin-center montserrat"
                style={{ color: "#4A2F1A" }}
              >
                DANIELE MINOSSO
              </div>
              <div
                className="absolute -right-6 md:-right-8 bottom-8 text-xs tracking-widest transform rotate-90 origin-center montserrat"
                style={{ color: "#4A2F1A" }}
              >
                @UNHASDANIMINOSSO
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light playfair" style={{ color: "#4A2F1A" }}>
                DANIELE
              </h2>
              <AgendarButtonMain />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-white/30">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2
              className="text-3xl md:text-4xl font-light playfair"
              style={{ color: "#4A2F1A" }}
            >
              Sobre Mim
            </h2>
            <p className="montserrat text-lg text-[#4A2F1A]">
              Sou Daniele Minosso, Nail Designer com mais de 5 anos de experiência em
              alongamento em fibra e molde F1, banho em gel e cutilagem russa. Minha
              missão é realçar a beleza das suas mãos com elegância, naturalidade e
              máxima durabilidade.
            </p>

            <ul className="list-disc list-inside montserrat text-[#4A2F1A] space-y-2">
              <li>Alongamento em fibra e molde F1 sem ponto de tensão;</li>
              <li>Banho em gel que fortalece e dá brilho extra;</li>
              <li>Cutilagem russa com acabamento impecável;</li>
              <li>Produtos premium e esterilização completa em autoclave.</li>
            </ul>

            <p className="montserrat text-[#4A2F1A]">
              Cada atendimento é pensado para ser uma experiência única, em sala
              privativa, com total conforto, higiene e discrição.
            </p>
          </div>

          {/* Vídeo */}
          <div className="w-full">
            {/* Mobile */}
            <div className="w-full md:hidden">
              <video
                className="w-full h-auto object-cover rounded-lg shadow-lg pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="/videos/sobre.webm" type="video/webm" />
                <source src="/videos/sobre.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Desktop 16:9 */}
            <div
              className="hidden md:block relative w-full"
              style={{ paddingBottom: '56.25%' }}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="/videos/sobre.webm" type="video/webm" />
                <source src="/videos/sobre.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide playfair"
              style={{ color: "#4A2F1A" }}
            >
              TABELA DE VALORES
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/images/alongamento-molde-f1-com-esmaltação-em-gel.jpg"
                  alt="Alongamento Molde F1 + esmaltação em gel"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover w-full h-full"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  Alongamento molde F1 + esmaltação em gel
                </CardTitle>
                <CardDescription className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  R$ 200,00
                </CardDescription>
                <div className="px-4 md:px-6 py-2 w-full">
                  <Link
                    href="/servicos/alongamento-molde-f1-com-esmaltacao-em-gel"
                    rel="noopener noreferrer"
                    className={`
                      block                /* vira display:block */
                      w-full               /* width:100% */
                      text-center          /* centraliza o texto */
                      text-xl md:text-2xl 
                      font-bold 
                      text-white 
                      px-4 md:px-6 
                      py-2 
                      rounded-lg 
                      montserrat
                    `}
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    Ver sobre
                  </Link>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/images/alongamento-molde-f1-com-decoração-encapsulada.jpg"
                  alt="Alongamento molde F1 + decoração encapsulada"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover object-top w-full h-full"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  Alongamento molde F1 + decoração encapsulada
                </CardTitle>
                <CardDescription className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  R$ 250,00
                </CardDescription>
                <div className="px-4 md:px-6 py-2 w-full">
                  <Link
                    href="/servicos/alongamento-molde-f1-com-decoracao-encapsulada"
                    rel="noopener noreferrer"
                    className={`
                      block                /* vira display:block */
                      w-full               /* width:100% */
                      text-center          /* centraliza o texto */
                      text-xl md:text-2xl 
                      font-bold 
                      text-white 
                      px-4 md:px-6 
                      py-2 
                      rounded-lg 
                      montserrat
                    `}
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    Ver sobre
                  </Link>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/images/banho-em-gel.jpg"
                  alt="Banho em gel + esmaltação em gel"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover object-top w-full h-full"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  Banho em gel + esmaltação em gel
                </CardTitle>
                <CardDescription className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  R$ 130,00
                </CardDescription>
                <div className="px-4 md:px-6 py-2 w-full">
                  <Link
                    href="/servicos/banho-em-gel"
                    rel="noopener noreferrer"
                    className={`
                      block                /* vira display:block */
                      w-full               /* width:100% */
                      text-center          /* centraliza o texto */
                      text-xl md:text-2xl 
                      font-bold 
                      text-white 
                      px-4 md:px-6 
                      py-2 
                      rounded-lg 
                      montserrat
                    `}
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    Ver sobre
                  </Link>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/images/banho-em-gel-com-decoração-encapsulada.jpg"
                  alt="Banho em gel + decoração encapsulada"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover w-full h-full objec"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  Banho em gel + decoração encapsulada
                </CardTitle>
                <CardDescription className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  R$ 160,00
                </CardDescription>
                <div className="px-4 md:px-6 py-2 w-full">
                  <Link
                    href="/servicos/banho-em-gel-com-decoracao-encapsulada"
                    rel="noopener noreferrer"
                    className={`
                      block                /* vira display:block */
                      w-full               /* width:100% */
                      text-center          /* centraliza o texto */
                      text-xl md:text-2xl 
                      font-bold 
                      text-white 
                      px-4 md:px-6 
                      py-2 
                      rounded-lg 
                      montserrat
                    `}
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    Ver sobre
                  </Link>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/images/alongamento-em-fibra-com-esmaltação-em-gel.jpg"
                  alt="Alongamento em fibra + esmaltação em gel"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover w-full h-full"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  Alongamento em fibra + esmaltação em gel
                </CardTitle>
                <CardDescription className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  R$ 200,00
                </CardDescription>
                <div className="px-4 md:px-6 py-2 w-full">
                  <Link
                    href="/servicos/alongamento-em-fibra-com-esmaltacao-em-gel"
                    rel="noopener noreferrer"
                    className={`
                      block                /* vira display:block */
                      w-full               /* width:100% */
                      text-center          /* centraliza o texto */
                      text-xl md:text-2xl 
                      font-bold 
                      text-white 
                      px-4 md:px-6 
                      py-2 
                      rounded-lg 
                      montserrat
                    `}
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    Ver sobre
                  </Link>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/images/alongamento-em-fibra-com-decoração-encapsulada.jpg"
                  alt="Alongamento em fibra + esmaltação em gel"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover w-full h-full"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  Alongamento em fibra + Decoração encapsulada
                  <br />
                  <span className="text-xs md:text-sm">Baby Boomer, Baby Color, Baby Glitter</span>
                </CardTitle>
                <CardDescription className="montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                  R$ 250,00
                </CardDescription>
                <div className="px-4 md:px-6 py-2 w-full">
                  <Link
                    href="/servicos/alongamento-em-fibra-com-decoracao-encapsulada"
                    rel="noopener noreferrer"
                    className={`
                      block                /* vira display:block */
                      w-full               /* width:100% */
                      text-center          /* centraliza o texto */
                      text-xl md:text-2xl 
                      font-bold 
                      text-white 
                      px-4 md:px-6 
                      py-2 
                      rounded-lg 
                      montserrat
                    `}
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    Ver sobre
                  </Link>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-white/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide playfair"
              style={{ color: "#4A2F1A" }}
            >
              TÉCNICA SEM PONTO DE TENSÃO
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto montserrat" style={{ color: "#333333" }}>
              Especializada em alongamento com fibra utilizando uma técnica exclusiva que elimina o ponto de tensão, proporcionando unhas mais leves, confortáveis e com acabamento natural que se mantém mesmo durante o crescimento.
              O resultado? Unhas sofisticadas, resistentes e harmônicas, com aparência impecável do início ao fim.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#B48E69" }}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="montserrat" style={{ color: "#4A2F1A" }}>
                  Naturalidade
                </CardTitle>
                <CardDescription className="montserrat" style={{ color: "#333333" }}>
                  Resultado natural que se integra perfeitamente às suas unhas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#B48E69" }}
                >
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="montserrat" style={{ color: "#4A2F1A" }}>
                  Durabilidade
                </CardTitle>
                <CardDescription className="montserrat" style={{ color: "#333333" }}>
                  Até 30 dias de duração com manutenção adequada
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#B48E69" }}
                >
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="montserrat" style={{ color: "#4A2F1A" }}>
                  Resistência
                </CardTitle>
                <CardDescription className="montserrat" style={{ color: "#333333" }}>
                  Fibra de alta qualidade que resiste ao dia a dia
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="extras" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide playfair"
              style={{ color: "#4A2F1A" }}
            >
              ADICIONAIS & NAIL ART
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center montserrat text-sm md:text-base"
                  style={{ color: "#4A2F1A" }}
                >
                  Francesa Reversa
                  <Badge className="text-xs" style={{ backgroundColor: "#B48E69", color: "white" }}>
                    +R$ 20
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center montserrat text-sm md:text-base"
                  style={{ color: "#4A2F1A" }}
                >
                  Pó Cromo
                  <Badge className="text-xs" style={{ backgroundColor: "#B48E69", color: "white" }}>
                    +R$ 30
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center montserrat text-sm md:text-base"
                  style={{ color: "#4A2F1A" }}
                >
                  Nail Art Simples
                  <Badge className="text-xs" style={{ backgroundColor: "#B48E69", color: "white" }}>
                    +R$ 15
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center montserrat text-sm md:text-base"
                  style={{ color: "#4A2F1A" }}
                >
                  Nail Art Elaborada
                  <Badge className="text-xs" style={{ backgroundColor: "#B48E69", color: "white" }}>
                    +R$ 40
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center montserrat text-sm md:text-base"
                  style={{ color: "#4A2F1A" }}
                >
                  Pedrarias
                  <Badge className="text-xs" style={{ backgroundColor: "#B48E69", color: "white" }}>
                    +R$ 25
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center montserrat text-sm md:text-base"
                  style={{ color: "#4A2F1A" }}
                >
                  Adesivos Premium
                  <Badge className="text-xs" style={{ backgroundColor: "#B48E69", color: "white" }}>
                    +R$ 18
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="manutencao" className="py-20 bg-white/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide playfair"
              style={{ color: "#4A2F1A" }}
            >
              MANUTENÇÃO
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto montserrat" style={{ color: "#333333" }}>
              Mantenha suas unhas sempre perfeitas com nosso cronograma de manutenção
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 bg-white/80 rounded-lg shadow-lg space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold montserrat" style={{ color: "#4A2F1A" }}>
                      Até 20 dias
                    </h3>
                    <p className="text-sm montserrat" style={{ color: "#333333" }}>
                      Manutenção recomendada
                    </p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-semibold montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                    Esmaltação: R$ 130
                  </p>
                  <p className="font-semibold montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                    Decoração: R$ 150
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 bg-white/80 rounded-lg shadow-lg space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#B48E69" }}
                  >
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold montserrat" style={{ color: "#4A2F1A" }}>
                      Até 30 dias
                    </h3>
                    <p className="text-sm montserrat" style={{ color: "#333333" }}>
                      Manutenção ideal
                    </p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-semibold montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                    Esmaltação: R$ 140
                  </p>
                  <p className="font-semibold montserrat text-sm md:text-base" style={{ color: "#4A2F1A" }}>
                    Decoração: R$ 160
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide playfair"
              style={{ color: "#4A2F1A" }}
            >
              PRONTA PARA TRANSFORMAR SUAS UNHAS?
            </h2>
            <p className="text-lg md:text-xl montserrat" style={{ color: "#333333" }}>
              Agende sua avaliação e descubra a diferença da técnica especializada em alongamento de fibra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AgendarButtonFinal />
              <InstagramButtonFinal />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}