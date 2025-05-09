import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About CA Amit Kumar</h1>
                <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                  A passionate educator and Chartered Accountant dedicated to empowering the next generation
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="CA Amit Kumar"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Background</h2>
              <p className="text-slate-700 md:text-lg dark:text-slate-300">
                CA Amit Kumar is a passionate and dedicated Chartered Accountant with over ten years of experience in
                the field of finance. He leads the firm "Amit Kumar Singh & Co., Chartered Accountants", based in Delhi.
                Beyond his professional practice, he is driven by a love for teaching.
              </p>
              <p className="text-slate-700 md:text-lg dark:text-slate-300">
                His mission is to blend his real-world expertise as a Finance Manager with the art of teaching commerce
                to school and CA students. With a deep understanding of both theoretical concepts and practical
                applications, CA Amit Kumar brings a unique perspective to education that bridges the gap between
                academic learning and real-world implementation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Teaching Philosophy</h2>
              <p className="text-slate-700 md:text-lg dark:text-slate-300">
                At the core of CA Amit Kumar's teaching philosophy is the belief that complex financial concepts can be
                made accessible to everyone through clear, structured, and engaging education. He focuses on building
                strong foundational knowledge while providing insights into practical applications that prepare students
                for both examinations and professional careers.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Educational Approach</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-200 p-6 dark:border-slate-800">
                  <BookOpen className="h-12 w-12 text-slate-900 dark:text-slate-50" />
                  <h3 className="text-xl font-bold">Comprehensive</h3>
                  <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                    Covering all aspects of the curriculum with depth and clarity
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-200 p-6 dark:border-slate-800">
                  <Users className="h-12 w-12 text-slate-900 dark:text-slate-50" />
                  <h3 className="text-xl font-bold">Engaging</h3>
                  <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                    Interactive teaching methods that keep students motivated
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-200 p-6 dark:border-slate-800">
                  <Award className="h-12 w-12 text-slate-900 dark:text-slate-50" />
                  <h3 className="text-xl font-bold">Practical</h3>
                  <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                    Real-world examples and applications of theoretical concepts
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Journey</h2>
              <p className="text-slate-700 md:text-lg dark:text-slate-300">
                CA Amit Kumar invites you to join him on this educational journey through his YouTube channel and this
                professional platform. Whether you're a commerce student in school or pursuing your CA qualification,
                his structured approach to learning will help you build a strong foundation and achieve your academic
                and professional goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/watch" passHref>
                  <Button className="bg-slate-900 text-white hover:bg-slate-800">
                    Explore Classes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button
                    variant="outline"
                    className="border-slate-900 text-slate-900 hover:bg-slate-100 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
