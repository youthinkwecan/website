import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Financial Statements: A Comprehensive Guide",
    excerpt:
      "Learn how to read and analyze financial statements with this step-by-step guide for commerce students and CA aspirants.",
    image: "/placeholder.svg?height=225&width=400&text=Financial+Statements",
    date: "May 15, 2023",
    category: "Accountancy",
    readTime: "8 min read",
    slug: "understanding-financial-statements",
  },
  {
    id: 2,
    title: "GST Simplified: Everything You Need to Know",
    excerpt:
      "A comprehensive overview of Goods and Services Tax (GST) in India, its implementation, and impact on businesses.",
    image: "/placeholder.svg?height=225&width=400&text=GST+Simplified",
    date: "June 2, 2023",
    category: "Taxation",
    readTime: "10 min read",
    slug: "gst-simplified",
  },
  {
    id: 3,
    title: "Preparing for CA Foundation: Study Strategies That Work",
    excerpt:
      "Effective study techniques and preparation strategies to help you excel in your CA Foundation examinations.",
    image: "/placeholder.svg?height=225&width=400&text=CA+Foundation",
    date: "June 18, 2023",
    category: "CA Preparation",
    readTime: "7 min read",
    slug: "preparing-for-ca-foundation",
  },
  {
    id: 4,
    title: "Business Ethics: Why They Matter in Corporate Governance",
    excerpt:
      "Exploring the importance of ethical practices in business operations and corporate governance frameworks.",
    image: "/placeholder.svg?height=225&width=400&text=Business+Ethics",
    date: "July 5, 2023",
    category: "Business Studies",
    readTime: "6 min read",
    slug: "business-ethics-corporate-governance",
  },
  {
    id: 5,
    title: "Mastering Cost Accounting: Techniques and Applications",
    excerpt:
      "A deep dive into cost accounting methodologies and their practical applications in business decision-making.",
    image: "/placeholder.svg?height=225&width=400&text=Cost+Accounting",
    date: "July 22, 2023",
    category: "Accountancy",
    readTime: "9 min read",
    slug: "mastering-cost-accounting",
  },
  {
    id: 6,
    title: "Economic Reforms in India: Impact on Business Environment",
    excerpt: "Analyzing the major economic reforms in India and their influence on the evolving business landscape.",
    image: "/placeholder.svg?height=225&width=400&text=Economic+Reforms",
    date: "August 10, 2023",
    category: "Economics",
    readTime: "11 min read",
    slug: "economic-reforms-india",
  },
]

// Categories for filtering
const categories = ["All", "Accountancy", "Taxation", "CA Preparation", "Business Studies", "Economics"]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Educational Blog</h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                Insights, guides, and resources for commerce students and CA aspirants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          {/* Categories */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>{post.readTime}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button variant="ghost" className="text-slate-900 dark:text-slate-200">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
