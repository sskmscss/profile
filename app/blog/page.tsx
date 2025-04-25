import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Blog
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>Blog posts will be available soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This section is under development. Check back later for technical articles, insights, and more.</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link href="/" className="text-blue-600 hover:underline">
              Back to Home
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
