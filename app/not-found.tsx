"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-1 items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-float">
              <h1 className="text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
                404
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Oops! Page Not Found</h2>
              <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                The page you're looking for doesn't exist or has been moved to another location.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6 animate-slide-up">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
              </Button>
              <Link href="/" passHref>
                <Button className="bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  <Home className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
