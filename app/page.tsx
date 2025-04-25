import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24">
          <div className="inline-block border border-blue-500 rounded-full px-4 py-1 text-sm mb-6 bg-blue-50 text-blue-700 shadow-sm">
            <span className="whitespace-nowrap">Technical Architect | Enterprise Architect | Solution Architect</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            I ARCHITECT
            <br />
            TO SOLVE
            <br />
            <span className="text-blue-500">PROBLEMS.</span>
          </h1>

          <p className="text-gray-600 mb-10 max-w-md">
            Fullstack Architect with 17+ years of expertise in designing scalable APIs, Microservices, and
            enterprise-grade applications.
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

        {/* Right Content with Image */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="h-full flex items-center justify-center p-8">
            <div className="relative shadow-xl rounded-lg overflow-hidden border-4 border-white">
              <Image
                src="/images/passport.jpg"
                alt="Saravana Kumar"
                width={400}
                height={500}
                className="object-cover z-10 max-h-[80vh] w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 shadow-md">
        <div className="container mx-auto flex overflow-x-auto gap-8 justify-between">
          <div className="flex gap-8">
            <Link href="/profile?tab=skills" className="whitespace-nowrap hover:text-blue-100 transition-colors">
              Technical Skills
            </Link>
            <Link href="/profile?tab=experience" className="whitespace-nowrap hover:text-blue-100 transition-colors">
              Experience
            </Link>
            <Link href="/profile?tab=projects" className="whitespace-nowrap hover:text-blue-100 transition-colors">
              Projects
            </Link>
            <Link
              href="/profile?tab=certifications"
              className="whitespace-nowrap hover:text-blue-100 transition-colors"
            >
              Certifications
            </Link>
            <Link href="/blog" className="whitespace-nowrap hover:text-blue-100 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
