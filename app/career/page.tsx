import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react"

// Mock data for career opportunities
const careerOpportunities = [
  {
    id: 1,
    title: "Content Creator - Accountancy",
    type: "Part-time",
    location: "Remote",
    description:
      "We're looking for knowledgeable content creators to help develop educational materials for accountancy subjects. Ideal for CA students or professionals with teaching experience.",
    requirements: [
      "Strong knowledge of accountancy principles",
      "Excellent communication skills",
      "Experience in content creation preferred",
      "Pursuing CA or completed CA qualification",
    ],
    slug: "content-creator-accountancy",
  },
  {
    id: 2,
    title: "Video Editor",
    type: "Freelance",
    location: "Remote",
    description:
      "Join our team as a video editor to help create engaging educational content for our YouTube channel and online platform. Experience with educational content is a plus.",
    requirements: [
      "Proficiency in video editing software",
      "Understanding of educational content pacing",
      "Ability to add graphics and animations",
      "Portfolio of previous work required",
    ],
    slug: "video-editor",
  },
  {
    id: 3,
    title: "Teaching Assistant - CA Foundation",
    type: "Part-time",
    location: "Delhi/Remote",
    description:
      "Support our main instructor in delivering CA Foundation courses, answering student queries, and providing additional guidance to students preparing for their exams.",
    requirements: [
      "Cleared CA Foundation with good scores",
      "Strong communication skills",
      "Patient and empathetic approach to teaching",
      "Available for online doubt-clearing sessions",
    ],
    slug: "teaching-assistant-foundation",
  },
]

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                Explore opportunities to work with us and contribute to commerce education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join Us</h2>
              <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                Be part of a mission to transform commerce education
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <GraduationCap className="h-8 w-8 text-slate-900 dark:text-slate-50" />
              </div>
              <h3 className="text-xl font-bold">Educational Impact</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Make a real difference in students' lives by contributing to quality education in commerce and CA
                preparation.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Briefcase className="h-8 w-8 text-slate-900 dark:text-slate-50" />
              </div>
              <h3 className="text-xl font-bold">Professional Growth</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Develop your skills in a supportive environment with opportunities to learn and advance your career.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Users className="h-8 w-8 text-slate-900 dark:text-slate-50" />
              </div>
              <h3 className="text-xl font-bold">Collaborative Culture</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Join a team of passionate educators committed to excellence in teaching and content creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Current Opportunities</h2>
              <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                Explore our open positions and find the right fit for your skills
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {careerOpportunities.map((job) => (
              <Card key={job.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{job.title}</CardTitle>
                  </div>
                  <CardDescription>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold dark:border-slate-800">
                      {job.type}
                    </span>
                    <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold dark:border-slate-800">
                      {job.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Requirements:</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={`/career/${job.slug}`} passHref>
                    <Button className="w-full">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Don't See a Perfect Fit?</h2>
            <p className="text-slate-700 dark:text-slate-300">
              We're always looking for talented individuals to join our team. If you're passionate about education and
              believe you can contribute, we'd love to hear from you.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/contact" passHref>
                <Button className="bg-slate-900 text-white hover:bg-slate-800">Submit Open Application</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
