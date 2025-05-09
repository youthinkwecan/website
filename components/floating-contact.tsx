"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 flex flex-col gap-2 animate-slide-up">
          <Link href="https://t.me/caamitkumar07" target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-brand-blue text-white shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Telegram</span>
            </Button>
          </Link>
          <Link href="tel:+918287512393">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-brand-green text-white shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">Call</span>
            </Button>
          </Link>
        </div>
      )}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-brand-pink hover:bg-pink-600 rotate-45"
            : "bg-gradient-to-r from-brand-blue to-brand-purple hover:from-blue-600 hover:to-purple-600 animate-pulse-light"
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
        <span className="sr-only">{isOpen ? "Close contact options" : "Open contact options"}</span>
      </Button>
    </div>
  )
}
