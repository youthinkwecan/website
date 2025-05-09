"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Search } from "lucide-react"

// Mock data for videos
const mockVideos = {
  commerce: [
    {
      id: "c1",
      title: "Introduction to Accountancy for Class 11",
      description: "Learn the basics of accountancy and its importance in commerce education.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Accountancy",
      duration: "15:30",
      date: "May 15, 2023",
      videoId: "abc123",
    },
    {
      id: "c2",
      title: "Business Studies: Understanding Business Environment",
      description: "Comprehensive overview of business environment factors and their impact.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Business+Studies",
      duration: "18:45",
      date: "June 2, 2023",
      videoId: "def456",
    },
    {
      id: "c3",
      title: "Economics: Demand and Supply Analysis",
      description: "Detailed explanation of demand and supply concepts with practical examples.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Economics",
      duration: "22:10",
      date: "June 18, 2023",
      videoId: "ghi789",
    },
  ],
  foundation: [
    {
      id: "f1",
      title: "CA Foundation: Accounting Fundamentals",
      description: "Essential accounting concepts for CA Foundation students.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=CA+Foundation",
      duration: "25:15",
      date: "July 5, 2023",
      videoId: "jkl012",
    },
    {
      id: "f2",
      title: "Business Laws and Business Correspondence",
      description: "Key legal concepts every CA Foundation student should know.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Business+Laws",
      duration: "20:30",
      date: "July 22, 2023",
      videoId: "mno345",
    },
    {
      id: "f3",
      title: "Quantitative Aptitude for CA Foundation",
      description: "Mathematical concepts and problem-solving techniques for CA Foundation.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Quantitative+Aptitude",
      duration: "28:45",
      date: "August 10, 2023",
      videoId: "pqr678",
    },
  ],
  advanced: [
    {
      id: "a1",
      title: "Advanced Financial Reporting Standards",
      description: "In-depth analysis of complex financial reporting standards for CA Final students.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Financial+Reporting",
      duration: "35:20",
      date: "September 5, 2023",
      videoId: "stu901",
    },
    {
      id: "a2",
      title: "Strategic Financial Management",
      description: "Advanced concepts in financial management for CA Final preparation.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Financial+Management",
      duration: "42:15",
      date: "September 25, 2023",
      videoId: "vwx234",
    },
    {
      id: "a3",
      title: "Corporate and Economic Laws",
      description: "Comprehensive coverage of corporate laws for CA Intermediate and Final students.",
      thumbnail: "/placeholder.svg?height=225&width=400&text=Corporate+Laws",
      duration: "38:30",
      date: "October 12, 2023",
      videoId: "yz567",
    },
  ],
}

export default function WatchPage() {
  const [activeTab, setActiveTab] = useState("commerce")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would filter videos based on the search query
    console.log("Searching for:", searchQuery)
  }

  const handleVideoSelect = (video: any) => {
    setSelectedVideo(video)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filteredVideos = mockVideos[activeTab as keyof typeof mockVideos].filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Educational Videos</h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                Watch our comprehensive collection of educational videos for commerce and CA students
              </p>
            </div>
            <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="search"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Video Player Section (conditionally rendered) */}
      {selectedVideo && (
        <section className="w-full py-12 bg-white dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center">
                  {/* In a real implementation, this would be a YouTube embed */}
                  <div className="text-center">
                    <Play className="mx-auto h-16 w-16 text-slate-400" />
                    <p className="mt-4 text-slate-700 dark:text-slate-300">YouTube Video: {selectedVideo.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Video ID: {selectedVideo.videoId}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <span>{selectedVideo.date}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedVideo.duration} mins</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="commerce" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="commerce">Commerce Classes</TabsTrigger>
              <TabsTrigger value="foundation">CA Foundation</TabsTrigger>
              <TabsTrigger value="advanced">CA Advanced</TabsTrigger>
            </TabsList>
            {Object.keys(mockVideos).map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredVideos.map((video) => (
                    <div
                      key={video.id}
                      className="group cursor-pointer overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800"
                      onClick={() => handleVideoSelect(video)}
                    >
                      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          width={400}
                          height={225}
                          className="object-cover transition-all group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                          {video.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <span>{video.date}</span>
                          <span className="mx-2">•</span>
                          <span>{video.duration} mins</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredVideos.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-lg font-medium text-slate-900 dark:text-slate-50">No videos found</p>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                      Try adjusting your search or check back later for new content.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
