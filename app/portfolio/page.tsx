import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          My Portfolio
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Retail Jewel Design Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Retail Jewel Design & Fashion Tech</CardTitle>
              <Badge className="bg-blue-100 text-blue-800">2025-Present</Badge>
            </div>
            <CardDescription>AI-powered e-commerce platform for jewelry design</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Developed an e-commerce platform that facilitates token-based conversion of 2D jewel designs into 3D
              models, streamlining the goldsmithing process.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java 21", "Spring Boot", "WebFlux", "ReactJS", "AWS", "AI"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-blue-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Healthcare Workflow Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Healthcare Workflow Automation</CardTitle>
              <Badge className="bg-green-100 text-green-800">2024</Badge>
            </div>
            <CardDescription>Intelligent automation platform for healthcare operations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Developed an intelligent automation platform to streamline post-acute healthcare operations using Kafka,
              DynamoDB, and Temporal.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java 21", "Spring Boot", "Temporal", "Kafka", "DynamoDB"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-green-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Financial Planning Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-purple-400 to-purple-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Financial Planning & Analysis</CardTitle>
              <Badge className="bg-purple-100 text-purple-800">2023-2024</Badge>
            </div>
            <CardDescription>Enterprise SaaS solution for financial analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Enterprise SaaS solution with integrations across ERP and CRM systems, featuring self-service analytics,
              financial budgeting, and forecasting.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java 21", "Spring Boot", "PostgreSQL", "ReactJS", "Superset", "GKE"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-purple-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Healthcare Notification Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-teal-400 to-teal-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-500"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Healthcare Notification & Telehealth</CardTitle>
              <Badge className="bg-teal-100 text-teal-800">2023</Badge>
            </div>
            <CardDescription>Automated notification system for healthcare communication</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Automated notification system to enhance clinician-patient communication and reduce administrative
              overhead, with integrated telehealth capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Angular 9+", "Java 17", "Spring Boot", "REST APIs", "AWS X-Ray"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-teal-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Retail Merchandise Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-amber-400 to-amber-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M12 2a10 10 0 0 1 10 10H12V2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Retail Merchandise Domain</CardTitle>
              <Badge className="bg-amber-100 text-amber-800">2021-2023</Badge>
            </div>
            <CardDescription>Microservices for retail pricing and promotions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Developed various Microservices to manage retail pricing, offers, and product promotions for a leading
              Dutch supermarket chain.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kotlin", "Java 17", "Springboot", "MongoDB", "CosmosDB", "Kafka"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-amber-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Retail Store Operations Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-indigo-400 to-indigo-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-500"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-500"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Retail Store Operations</CardTitle>
              <Badge className="bg-indigo-100 text-indigo-800">2019-2021</Badge>
            </div>
            <CardDescription>Store management and segmentation services</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Developed store management and segmentation services for retail operations, grouping stores based on
              location, sales, and demographics.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java 11", "Springboot", "RESTful APIs", "CosmosDB", "Kafka"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-indigo-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Telecommunications Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-pink-400 to-pink-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-500"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Telecommunications & E-commerce</CardTitle>
              <Badge className="bg-pink-100 text-pink-800">2016-2019</Badge>
            </div>
            <CardDescription>Telecom e-commerce platform with order processing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Developed key modules for a telecom e-commerce platform, enhancing customer engagement and order
              processing with modern Angular frontend.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Angular 9+", "Java 8", "Springboot", "REST APIs", "Redux"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-pink-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>

        {/* Internet Security Project */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 bg-gradient-to-r from-red-400 to-red-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="absolute right-6 top-6 bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Internet Security System</CardTitle>
              <Badge className="bg-red-100 text-red-800">2010-2014</Badge>
            </div>
            <CardDescription>Security management for connected devices</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Built Internet security system to manage and secure all connected devices through router, with Web Caller
              to identify Phishing sites and Trusted sites.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Linux", "JAVA", "EMBEDDED C", "Selenium", "Perl", "MySQL"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-red-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href="/profile?tab=projects" className="text-blue-600 hover:underline">
              View Project Details
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
