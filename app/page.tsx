import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Users, GraduationCap, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonial } from "@/components/testimonial"
import { CourseCard } from "@/components/course-card"
import { HeroSlider } from "@/components/hero-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple animate-pulse-light">
                Why Choose You Think We Can?
              </h2>
              <p className="text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
                Join thousands of students who have transformed their academic journey with our expert guidance
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up">
              <div className="rounded-full bg-gradient-to-br from-brand-blue to-brand-purple p-3">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Expert Guidance</h3>
              <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                Learn from CA Amit Kumar, who brings real-world expertise to every lesson
              </p>
            </div>
            <div
              className="flex flex-col items-center space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="rounded-full bg-gradient-to-br from-brand-green to-brand-teal p-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                Our students consistently achieve top ranks in exams and competitions
              </p>
            </div>
            <div
              className="flex flex-col items-center space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="rounded-full bg-gradient-to-br from-brand-yellow to-brand-orange p-3">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Engaging Content</h3>
              <p className="text-center text-sm text-slate-700 dark:text-slate-300">
                Interactive lessons that make complex concepts easy to understand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-teal animate-pulse-light">
                Our Courses
              </h2>
              <p className="text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
                Comprehensive education for commerce students and CA aspirants at all levels
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <CourseCard
              title="Commerce Classes"
              description="For Class 11-12 Students"
              content="Comprehensive lessons covering Accountancy, Business Studies, Economics, and more."
              icon="book"
              color="blue"
              link="/watch?category=commerce"
              delay={0}
            />
            <CourseCard
              title="CA Foundation"
              description="For CPT/Foundation Students"
              content="Expert guidance for CA Foundation with focus on core concepts and exam preparation."
              icon="graduation-cap"
              color="purple"
              link="/watch?category=foundation"
              delay={0.2}
            />
            <CourseCard
              title="CA Advanced"
              description="For Intermediate to Final"
              content="In-depth courses for CA Intermediate and Final students with practical insights."
              icon="award"
              color="green"
              link="/watch?category=advanced"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink animate-pulse-light">
                Latest Videos
              </h2>
              <p className="text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
                Watch our most recent educational content
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up"
                style={{ animationDelay: `${(i - 1) * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <Image
                    src={`/placeholder.svg?height=225&width=400&text=Video+${i}`}
                    alt={`Latest Video ${i}`}
                    width={400}
                    height={225}
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-3 transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 text-brand-blue" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-brand-blue transition-colors duration-300">
                    Educational Video Title {i}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                    A brief description of what this educational video covers and why it's valuable.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span>May {i + 10}, 2023</span>
                    <span className="mx-2">•</span>
                    <span>15:0{i} mins</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/watch" passHref>
              <Button className="bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
                View All Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-orange animate-pulse-light">
                Latest Articles
              </h2>
              <p className="text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
                Educational insights and resources for commerce and CA students
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up"
                style={{ animationDelay: `${(i - 1) * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=225&width=400&text=Blog+${i}`}
                    alt={`Blog Post ${i}`}
                    width={400}
                    height={225}
                    className="object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue mb-2">
                    Accountancy
                  </div>
                  <CardTitle className="hover:text-brand-blue transition-colors duration-300">
                    Understanding Financial Statements {i}
                  </CardTitle>
                  <CardDescription>May {i + 10}, 2023 • 8 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    A comprehensive guide to understanding and analyzing financial statements for commerce students.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/post-${i}`} passHref>
                    <Button
                      variant="ghost"
                      className="text-brand-blue hover:text-brand-purple hover:bg-slate-100 transition-all duration-300"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog" passHref>
              <Button className="bg-gradient-to-r from-brand-yellow to-brand-orange text-white hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-lg">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-green animate-pulse-light">
                Student Success Stories
              </h2>
              <p className="text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
                Hear from our students who have achieved their academic goals
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Testimonial
              name="Priya Sharma"
              image="/placeholder.svg?height=96&width=96&text=Priya"
              text="The guidance from CA Amit Kumar helped me clear my CA Foundation with flying colors. The concepts were explained in a simple yet effective manner."
              rating={5}
              course="CA Foundation"
              delay={0}
            />
            <Testimonial
              name="Rahul Verma"
              image="/placeholder.svg?height=96&width=96&text=Rahul"
              text="As a Class 12 student, I was struggling with accountancy. The videos and study material provided by You Think We Can made complex topics easy to understand."
              rating={5}
              course="Class 12 Commerce"
              delay={0.2}
            />
            <Testimonial
              name="Ananya Patel"
              image="/placeholder.svg?height=96&width=96&text=Ananya"
              text="CA Amit Sir's teaching methodology is unique. His real-world examples and case studies helped me connect theoretical concepts with practical applications."
              rating={5}
              course="CA Intermediate"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-brand-blue to-brand-purple text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl animate-float">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Your Learning Journey Today
              </h2>
              <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who have transformed their academic careers with our expert guidance
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6 animate-slide-up">
              <Link href="/watch" passHref>
                <Button className="bg-white text-brand-blue hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg">
                  Start Learning <Users className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
