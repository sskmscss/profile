import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Tabs - Moved to top */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 shadow-md mb-6">
        <div className="container mx-auto flex overflow-x-auto gap-8 justify-center">
          <Link
            href="/profile?tab=skills"
            className="whitespace-nowrap hover:text-blue-100 transition-colors px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Technical Skills
          </Link>
          <Link
            href="/profile?tab=experience"
            className="whitespace-nowrap hover:text-blue-100 transition-colors px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Experience
          </Link>
          <Link
            href="/profile?tab=projects"
            className="whitespace-nowrap hover:text-blue-100 transition-colors px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Projects
          </Link>
          <Link
            href="/profile?tab=certifications"
            className="whitespace-nowrap hover:text-blue-100 transition-colors px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Certifications
          </Link>
          <Link
            href="/blog"
            className="whitespace-nowrap hover:text-blue-100 transition-colors px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Blog
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-h-[calc(100vh-180px)]">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-6 md:p-12 lg:p-16">
          <div className="inline-block border border-blue-500 rounded-full px-4 py-1 text-sm mb-4 bg-blue-50 text-blue-700 shadow-sm">
            <span className="whitespace-nowrap">Technical Architect | Enterprise Architect | Solution Architect</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            I'm Saravana Kumar, a passionate Fullstack Architect with 17+ years of experience across Healthcare, Retail,
            Financial Planning, and Telecom domains.
          </h1>

          <p className="text-gray-600 mb-7 max-w-md text-lg leading-relaxed">
            I specialize in building scalable APIs, Microservices, and AI-powered enterprise-grade solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="rounded-full px-6 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md"
            >
              <Link href="/portfolio">
                My Portfolio <Play className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 border-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href="/profile">View Profile</Link>
            </Button>
          </div>
        </div>

        {/* Right Content with Image - Reduced size */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="h-full flex items-center justify-center p-6">
            <div className="relative shadow-xl rounded-lg overflow-hidden border-4 border-white max-w-[300px]">
              <Image
                src="/profile/images/passport.jpg"
                alt="Saravana Kumar"
                width={300}
                height={375}
                className="object-cover z-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
