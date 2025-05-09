"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CourseCardProps {
  title: string
  description: string
  content: string
  icon: "book" | "graduation-cap" | "award"
  color: "blue" | "purple" | "green" | "yellow" | "pink"
  link: string
  delay: number
}

export function CourseCard({ title, description, content, icon, color, link, delay }: CourseCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "book":
        return <BookOpen className="h-8 w-8 text-white" />
      case "graduation-cap":
        return <GraduationCap className="h-8 w-8 text-white" />
      case "award":
        return <Award className="h-8 w-8 text-white" />
      default:
        return <BookOpen className="h-8 w-8 text-white" />
    }
  }

  const getGradient = () => {
    switch (color) {
      case "blue":
        return "from-brand-blue to-blue-600"
      case "purple":
        return "from-brand-purple to-purple-600"
      case "green":
        return "from-brand-green to-green-600"
      case "yellow":
        return "from-brand-yellow to-yellow-600"
      case "pink":
        return "from-brand-pink to-pink-600"
      default:
        return "from-brand-blue to-blue-600"
    }
  }

  return (
    <Card
      className="border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`h-2 w-full bg-gradient-to-r ${getGradient()}`} />
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={`rounded-full bg-gradient-to-r ${getGradient()} p-2`}>{getIcon()}</div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-700 dark:text-slate-300">{content}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} passHref>
          <Button
            variant="ghost"
            className={`text-brand-${color} hover:text-${color}-600 hover:bg-slate-100 transition-all duration-300`}
          >
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
