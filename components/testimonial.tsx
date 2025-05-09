import Image from "next/image"

interface TestimonialProps {
  name: string
  image: string
  text: string
  rating: number
  course: string
  delay: number
}

export function Testimonial({ name, image, text, rating, course, delay }: TestimonialProps) {
  return (
    <div
      className="flex flex-col items-center space-y-4 text-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
        <Image src={image || "/placeholder.svg"} alt={name} width={80} height={80} className="object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-brand-blue">{name}</h3>
        <div className="inline-block rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-medium text-brand-purple mb-2">
          {course}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{text}"</p>
        <div className="flex justify-center space-x-1">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-brand-yellow"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
