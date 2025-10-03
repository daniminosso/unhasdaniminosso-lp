// components/WhatsappFloatingButton.tsx
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsappFloatingButton() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5541998817085&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+agendar+um+hor%C3%A1rio.&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-green-500 hover:bg-green-600
        text-white text-2xl
        rounded-full shadow-lg
        flex items-center justify-center
        transition-transform
        hover:scale-110
        focus:outline-none
      "
      aria-label="Chamar no WhatsApp"
    >
      <FaWhatsapp />
    </Link>
  )
}