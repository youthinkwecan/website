"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Master Commerce & CA with Expert Guidance",
    subtitle: "Learn from CA Amit Kumar's decade of experience in finance and teaching",
    image: "/placeholder.svg?height=600&width=1200&text=Commerce+Education",
    cta1: { text: "Watch Classes", link: "/watch", icon: <Play className="ml-2 h-4 w-4" /> },
    cta2: { text: "Read Blog", link: "/blog", icon: <BookOpen className="ml-2 h-4 w-4" /> },
    color: "from-brand-blue to-brand-purple",
  },
  {
    id: 2,
    title: "Comprehensive CA Foundation Courses",
    subtitle: "Build a strong foundation for your CA journey with structured learning",
    image: "/placeholder.svg?height=600&width=1200&text=CA+Foundation",
    cta1: { text: "Explore Courses", link: "/watch?category=foundation", icon: <Play className="ml-2 h-4 w-4" /> },
    cta2: { text: "Success Stories", link: "#testimonials", icon: <BookOpen className="ml-2 h-4 w-4" /> },
    color: "from-brand-purple to-brand-pink",
  },
  {
    id: 3,
    title: "Class 11-12 Commerce Made Simple",
    subtitle: "Engaging lessons that make complex concepts easy to understand",
    image: "/placeholder.svg?height=600&width=1200&text=Class+11-12",
    cta1: { text: "Start Learning", link: "/watch?category=commerce", icon: <Play className="ml-2 h-4 w-4" /> },
    cta2: { text: "Free Resources", link: "/blog", icon: <BookOpen className="ml-2 h-4 w-4" /> },
    color: "from-brand-green to-brand-teal",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`} />
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="relative h-full flex items-center">
              <div className="container px-4 md:px-6">
                <div className="max-w-3xl space-y-4 animate-slide-up">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    {slide.title}
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">{slide.subtitle}</p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Link href={slide.cta1.link} passHref>
                      <Button className="bg-white text-brand-blue hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg">
                        {slide.cta1.text} {slide.cta1.icon}
                      </Button>
                    </Link>
                    <Link href={slide.cta2.link} passHref>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 transition-all duration-300"
                      >
                        {slide.cta2.text} {slide.cta2.icon}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
