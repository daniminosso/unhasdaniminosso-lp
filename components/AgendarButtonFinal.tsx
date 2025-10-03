"use client";

// components/AgendarButtonFinal.tsx
import { usePathname } from 'next/navigation';
import React from "react";
import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export interface AgendarButtonFinalProps extends Omit<ButtonProps, "asChild"> {
  /** Número no padrão E.164 sem “+” (ex: 5541998817085) */
  phone?: string;
  /** Texto inicial no WhatsApp */
  message?: string;
  /** Texto do botão */
  label?: string;
  /** Identificador de origem (utm, página etc) */
  source?: string;
}

export const AgendarButtonFinal: React.FC<AgendarButtonFinalProps> = ({
  phone = "5541998817085",
  message = "Olá! Vim pelo site e gostaria de agendar um horário.",
  label = "AGENDAR VIA WHATSAPP",
  source,
  size = "lg",
  className,
  ...btnProps
}) => {
  const pathname = usePathname()

  // Usa a prop source se passar, senão pega a rota atual
  const origem = source ?? pathname

  // Monta a mensagem final (com informação de origem)
  const fullMessage = `${message}`;

  // Cria os params e encoda
  const params = new URLSearchParams({
    phone,
    text: fullMessage,
    app_absent: "0",
  }).toString();

  const href = `https://api.whatsapp.com/send?${params}`;

  return (
    <Button
      asChild
      size={size}
      className={`text-base md:text-lg px-8 md:px-12 py-4 md:py-6 text-white font-semibold tracking-wide montserrat ${className}`}
      style={{ backgroundColor: "#B48E69" }}
      {...btnProps}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        {label}
      </Link>
    </Button>
  );
};