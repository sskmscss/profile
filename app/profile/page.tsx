"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Linkedin, Download, ChevronDown, MessageSquare } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProfilePage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState("skills")
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    if (
      tabParam &&
      ["skills", "experience", "achievements", "projects", "certifications", "education"].includes(tabParam)
    ) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement("a")
    link.href = "/assets/saravana_kumar_resume.pdf"
    link.download = "Saravana_Kumar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Tab colors for highlighting
  const tabColors = {
    skills: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-300",
    },
    experience: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-300",
    },
    achievements: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-300",
    },
    projects: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-300",
    },
    certifications: {
      bg: "bg-teal-50",
      text: "text-teal-700",
      border: "border-teal-300",
    },
    education: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border-rose-300",
    },
  }

  // Microsoft certifications data
  const certifications = [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      icon: "devops-engineer-expert",
      url: "https://learn.microsoft.com/en-us/users/sarans-3016/credentials/a430a5667c474e51",
      color: "blue",
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      icon: "solutions-architect-expert",
      url: "https://learn.microsoft.com/en-us/users/sarans-3016/credentials/3330f48beb5e1e50",
      color: "blue",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      icon: "developer-associate",
      url: "https://learn.microsoft.com/en-us/users/sarans-3016/credentials/60ce2b0683607ee9",
      color: "blue",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      icon: "administrator-associate",
      url: "https://learn.microsoft.com/en-us/users/sarans-3016/credentials/fdc269bf8997eb57",
      color: "blue",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      icon: "fundamentals",
      url: "https://learn.microsoft.com/en-gb/users/sarans-3016/credentials/e7893cd10b31bc83",
      color: "blue",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      icon: "fundamentals",
      url: "https://learn.microsoft.com/en-gb/users/sarans-3016/credentials/f6c6680c19503d60",
      color: "blue",
    },
  ]

  // Project data in descending order by date
  const projects = [
    {
      title: "Retail Jewel Design & Fashion Tech",
      period: "Jan 2025 – Present",
      description:
        "Developed an e-commerce platform that facilitates token-based conversion of 2D jewel designs into 3D models, streamlining the goldsmithing process.",
      highlights: [
        "Designed and deployed EC2 and ECS environments for scalable application hosting.",
        "Integrated AI models seamlessly to automate 3D image generation from 2D designs.",
        "Utilized JHipster for backend scaffolding and Vite for frontend scaffolding, accelerating the application's initial setup.",
      ],
      technologies:
        "Java 21, Spring Boot, WebFlux, R2DBC, Reactive stream, Webflux, Kafka, Postgresql, ReactJS, Stripe, AWS cloud",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Healthcare Workflow Automation",
      period: "Jul 2024 - Dec 2024",
      description:
        "Developed an intelligent automation platform to streamline post-acute healthcare operations using Kafka, DynamoDB, and Temporal.",
      highlights: [
        "Designed and implemented multiple automated workflows for seamless communication.",
        "Built state services for patient state management.",
        "Developed child containers for task queue event organization.",
        "Implemented priority queues for function block call prioritization.",
      ],
      technologies: "Java 21, Spring Boot, Reactive stream, Temporal, Kafka, DynamoDB",
      bgColor: "bg-green-50",
      badgeColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Financial Planning & Analysis",
      period: "Aug 2023 - Jun 2024",
      description:
        "Enterprise SaaS solution with integrations across ERP and CRM systems, featuring self-service analytics, financial budgeting, and forecasting.",
      highlights: [
        "Designed and implemented Multi-Factor Authentication (MFA) with multi-tenant client.",
        "Integrated Apache Superset for financial data visualization.",
        "Developed Distributed Monolithic services for data mastering, process streamlining, and workflow automation.",
        "Provisioned & managed Google Kubernetes Engine clusters with cloud service registry.",
      ],
      technologies: "Java21, Springboot, PostgreSQL, Redis, Superset, ReactJS, JSpreadsheet",
      bgColor: "bg-purple-50",
      badgeColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      title: "Healthcare Notification & Telehealth",
      period: "Apr 2023 - Jul 2023",
      description:
        "Automated notification system to enhance clinician-patient communication and reduce administrative overhead.",
      highlights: [
        "Developed real-time notifications for scheduled visits and clinician arrivals.",
        "Built Notification Auth and Outbound Microservices for online message processing.",
        "Created a Telehealth Microservice for secure video conferencing.",
        "Enabled video consultations for patient appointments.",
        "Integrated AWS X-Ray for end-to-end observability across Telehealth applications.",
      ],
      technologies: "Angular 9+, Java 17, Spring Boot, REST APIs, AWS X-Ray",
      bgColor: "bg-teal-50",
      badgeColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
    {
      title: "Retail Merchandise Domain",
      period: "Sep 2021 - Mar 2023",
      description: "Developed various Microservices to manage retail pricing, offers, and product promotions.",
      highlights: [
        "Built Offer MS for offer fulfillment and business rule validation.",
        "Created Retail Price MS for managing product prices and zone configurations.",
        "Developed Price Change MS to handle scheduled price updates with batch processing.",
        "Designed Retail Price Change Lead Time MS to optimize price change decision-making.",
        "Implemented Retail Price Blockades to enforce supplier pricing regulations.",
      ],
      technologies: "Kotlin, Java17, Springboot, MongoDB, CosmosDB, Kafka-Confluent",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Retail Store Operations",
      period: "Jul 2019 - Jun 2021",
      description: "Developed store management and segmentation services for retail operations.",
      highlights: [
        "Developed Store Segmentation Microservice for grouping stores based on location, sales, and demographics.",
        "Built Store Microservice for managing store operations and workflows.",
      ],
      technologies: "Java11, Springboot, RESTful Web Services, CosmosDB, Universal Message, Kafka, Spring MVC",
      bgColor: "bg-amber-50",
      badgeColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      title: "Telecommunications & E-commerce",
      period: "Aug 2016 – Jun 2019",
      description:
        "Developed key modules for a telecom e-commerce platform, enhancing customer engagement and order processing.",
      highlights: [
        "Designed Swiper Carousel, Savings Calculator, Shopping Cart, Checkout & Payment.",
        "Integrated Redux Store for state management and UI routing.",
        "Created an Order Microservice for order fulfillment and tracking.",
        "Implemented Facade Design Pattern to wrap and optimize service interactions.",
      ],
      technologies: "Angular 9+, Java 8, Springboot, REST APIs, Spring MVC",
      bgColor: "bg-purple-50",
      badgeColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      title: "Netherlands Supermarket E-commerce",
      period: "2016-2023",
      description:
        "Full stack development and end-to-end deployment with Microservices for business user interaction with Store, Offer, Retail and Floor Price.",
      highlights: [
        "Designed and implemented Microservice architectures for retail pricing, segmentation, and offer management systems.",
        "Developed low-code Domain-Driven Design (DDD) models and delegator methods.",
        "Leveraged OpenAPI Specification (OAS 3.0) for an API-first design approach.",
      ],
      technologies: "Java, Kotlin, ReactJS, Microservices, CosmosDB",
      bgColor: "bg-green-50",
      badgeColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Telecommunications MVNO Platform",
      period: "2016-2023",
      description: "E-commerce platform for American multinational telecommunications selling MVNO products.",
      highlights: [
        "Led the modernization of MVNO services, migrating applications to Angular 9+ and Java-based Microservices.",
        "Significantly improved scalability and performance through architecture redesign.",
        "Implemented responsive UI for improved mobile experience.",
      ],
      technologies: "Java, Angular8, Bootstrap, SASS, Webpack",
      bgColor: "bg-teal-50",
      badgeColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
    {
      title: "Internet Security System",
      period: "2010-2014",
      description:
        "Built Internet security system to manage and secure all connected devices through router, with Web Caller to identify Phishing sites and Trusted sites.",
      highlights: [
        "Developed secure frameworks and test management components.",
        "Strengthened application security and compliance.",
        "Created Test Management dashboard for comprehensive monitoring.",
      ],
      technologies: "Linux, JAVA, EMBEDDED C, Selenium, Perl, MySQL",
      bgColor: "bg-amber-50",
      badgeColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      title: "Operative Dashboard",
      period: "2008-2010",
      description:
        "Created Factory and MVC framework for Advertisements Deal and Inventory forecast for a company running Online Advertisement in New York.",
      highlights: [
        "Implemented Service-Oriented Architecture (SOA) to optimize ad-trafficking workflows.",
        "Boosted revenue generation through improved forecasting.",
        "Developed MVC-based custom templates for streamlined management.",
      ],
      technologies: "Linux, MOD-PERL, MySQL, Prototype, AJAX, JavaScript",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
  ]

  // Display only first 8 projects initially
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 8)

  // Skill categories with improved layout
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "Kotlin", "PHP", "Perl"],
      color: "blue",
    },
    {
      title: "Frontend",
      skills: ["Angular", "ReactJS"],
      color: "green",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Oracle", "CosmosDB", "MongoDB"],
      color: "purple",
    },
    {
      title: "Cloud Platforms",
      skills: ["Azure", "AWS", "GCP"],
      color: "amber",
    },
    {
      title: "CI/CD",
      skills: ["Jenkins", "EPAM Delivery Platform"],
      color: "teal",
    },
    {
      title: "Observability",
      skills: ["AppInsights", "Prometheus", "Cloud Watch"],
      color: "rose",
    },
    {
      title: "Frameworks & Architecture",
      skills: ["Spring Boot", "Hibernate", "Microservice", "SOLID Design Principles"],
      color: "indigo",
    },
    {
      title: "Messaging & Streaming",
      skills: ["Apache Kafka", "Confluent Kafka", "RabbitMQ", "ActiveMQ"],
      color: "cyan",
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
      color: "orange",
    },
    {
      title: "Others",
      skills: ["Jira", "Nginx", "Tomcat", "Apache2", "Maven", "Gradle"],
      color: "emerald",
    },
  ]

  return (
    <main className="min-h-screen container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 overflow-hidden rounded-lg border shadow-md bg-white">
            <Image src="/images/passport.jpg" alt="Saravana Kumar" width={192} height={192} className="object-cover" />
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Saravana Kumar
              </h1>
              <p className="text-xl text-gray-600">Technical Architect | Enterprise Architect | Solution Architect</p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <a href="mailto:r_s_saravana_kumar@yahoo.com" className="text-blue-600 hover:underline">
                    r_s_saravana_kumar@yahoo.com
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <a href="tel:+919791004409" className="text-gray-700 hover:underline">
                    +91-9791004409
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                  <Linkedin className="h-4 w-4 text-blue-500" />
                  <a
                    href="https://www.linkedin.com/in/saravanakumar-s-architect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                {/* WhatsApp Button */}
                <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                  <MessageSquare className="h-4 w-4 text-green-500" />
                  <a
                    href="https://wa.me/919791004409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="flex gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Professional Summary</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Fullstack Architect with 17+ years of expertise in designing scalable APIs, Microservices, and
                enterprise-grade applications.
              </li>
              <li>Specialized in Java, Kotlin, and Spring Boot for backend, and Angular, ReactJS for frontend.</li>
              <li>
                Experienced in AI-driven development and accelerating application delivery using JHipster for backend
                and Vite for frontend.
              </li>
              <li>
                Proven track record in leading cloud-native transformations, DevOps automation, and observability
                solutions across multiple domains including healthcare, retail, and telecommunications.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="grid grid-cols-6 w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <TabsTrigger
            value="skills"
            onClick={() => window.history.pushState({}, "", "?tab=skills")}
            className={`${activeTab === "skills" ? `${tabColors.skills.bg} ${tabColors.skills.text} border-b-2 ${tabColors.skills.border}` : ""}`}
          >
            Technical Skills
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            onClick={() => window.history.pushState({}, "", "?tab=experience")}
            className={`${activeTab === "experience" ? `${tabColors.experience.bg} ${tabColors.experience.text} border-b-2 ${tabColors.experience.border}` : ""}`}
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="achievements"
            onClick={() => window.history.pushState({}, "", "?tab=achievements")}
            className={`${activeTab === "achievements" ? `${tabColors.achievements.bg} ${tabColors.achievements.text} border-b-2 ${tabColors.achievements.border}` : ""}`}
          >
            Achievements
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            onClick={() => window.history.pushState({}, "", "?tab=projects")}
            className={`${activeTab === "projects" ? `${tabColors.projects.bg} ${tabColors.projects.text} border-b-2 ${tabColors.projects.border}` : ""}`}
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="certifications"
            onClick={() => window.history.pushState({}, "", "?tab=certifications")}
            className={`${activeTab === "certifications" ? `${tabColors.certifications.bg} ${tabColors.certifications.text} border-b-2 ${tabColors.certifications.border}` : ""}`}
          >
            Certifications
          </TabsTrigger>
          <TabsTrigger
            value="education"
            onClick={() => window.history.pushState({}, "", "?tab=education")}
            className={`${activeTab === "education" ? `${tabColors.education.bg} ${tabColors.education.text} border-b-2 ${tabColors.education.border}` : ""}`}
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="mt-6">
          <Card className="border-none shadow-lg">
            <CardHeader
              className={`bg-gradient-to-r from-${activeTab === "skills" ? "blue" : "blue"}-50 to-${activeTab === "skills" ? "blue" : "blue"}-100 rounded-t-lg`}
            >
              <CardTitle className="text-blue-800">Technical Skills</CardTitle>
              <CardDescription>Technologies and tools I specialize in</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {/* Improved Technical Skills Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`bg-${category.color}-50 p-4 rounded-lg shadow-sm border border-${category.color}-100 hover:shadow-md transition-shadow`}
                  >
                    <h3
                      className={`font-semibold mb-3 text-${category.color}-700 border-b pb-2 border-${category.color}-200 text-center`}
                    >
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`bg-white text-${category.color}-700 border border-${category.color}-200 hover:bg-${category.color}-100 transition-colors py-1 px-2`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience" className="mt-6">
          <Card className="border-none shadow-lg">
            <CardHeader
              className={`bg-gradient-to-r from-${activeTab === "experience" ? "green" : "blue"}-50 to-${activeTab === "experience" ? "green" : "blue"}-100 rounded-t-lg`}
            >
              <CardTitle className={`text-${activeTab === "experience" ? "green" : "blue"}-800`}>
                Professional Experience
              </CardTitle>
              <CardDescription>My career journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Ideas2IT Technology Services Pvt. Ltd.</h3>
                    <p className="text-gray-600">Technical Architect</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Mar 2023 – Present</Badge>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>
                    Architected an AI-powered e-commerce platform enabling token-based 2D-to-3D jewel design conversion
                    with scalable cloud deployment.
                  </li>
                  <li>
                    Architected backend REST APIs and automated workflows using Kafka and Temporal for a healthcare
                    platform.
                  </li>
                  <li>
                    Enhanced financial planning SaaS solutions by integrating multi-factor authentication and Superset
                    for advanced data visualization.
                  </li>
                  <li>
                    Designed and developed distributed monolithic services, provisioning Google Kubernetes Engine (GKE)
                    clusters for efficient cloud operations.
                  </li>
                  <li>
                    Built a React-based dashboard with real-time Socket.io integration and jSpreadsheet functionality
                    for enhanced user interaction.
                  </li>
                  <li>
                    Developed reusable SASS components and implemented observability solutions using AWS X-Ray and Azure
                    App Insights.
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Tata Consultancy Services Pvt. Ltd</h3>
                    <p className="text-gray-600">Assistant Consultant</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Aug 2016 – Mar 2023</Badge>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>
                    Designed and implemented Microservice architectures for retail pricing, segmentation, and offer
                    management systems, serving a leading Dutch supermarket chain.
                  </li>
                  <li>
                    Developed low-code Domain-Driven Design (DDD) models and delegator methods, leveraging OpenAPI
                    Specification (OAS 3.0) for an API-first design approach.
                  </li>
                  <li>
                    Led the modernization of MVNO services, migrating applications to Angular 9+ and Java-based
                    Microservices, significantly improving scalability and performance.
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Cognizant Technology Solutions Pvt. Ltd</h3>
                    <p className="text-gray-600">Technology Specialist</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Sep 2010 - Aug 2016</Badge>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>
                    Automated network provisioning for wired and wireless communication systems for a US-based telecom
                    client.
                  </li>
                  <li>
                    Developed secure frameworks and test management components to strengthen application security and
                    compliance.
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">CSS Corp Pvt. Ltd</h3>
                    <p className="text-gray-600">Senior System Analyst</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Jan 2008 - Sep 2010</Badge>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>
                    Developed MVC-based custom templates to streamline advertisement deal management and forecasting.
                  </li>
                  <li>
                    Implemented Service-Oriented Architecture (SOA) to optimize ad-trafficking workflows, boosting
                    revenue generation.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <Card className="border-none shadow-lg">
            <CardHeader
              className={`bg-gradient-to-r from-${activeTab === "achievements" ? "purple" : "blue"}-50 to-${activeTab === "achievements" ? "purple" : "blue"}-100 rounded-t-lg`}
            >
              <CardTitle className={`text-${activeTab === "achievements" ? "purple" : "blue"}-800`}>
                Achievements
              </CardTitle>
              <CardDescription>Key accomplishments throughout my career</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Led the design and development of a Spring Boot application integrated with Angular 9+, enabling
                    appointment scheduling, reminder notifications, and audit event tracking.
                  </li>
                  <li>
                    Developed reusable Microservice components, including a Business Rules Validation Framework for
                    pre-approval rules validation and a Hexagonal Microservice Template for standardized development.
                  </li>
                  <li>
                    Implemented a custom annotation using Spring AOP for method execution time logging, with Circuit
                    Breaker and Resilience4J integration.
                  </li>
                  <li>
                    Built a Façade framework and Redux store in Angular for efficient state management of application
                    components.
                  </li>
                  <li>
                    Successfully orchestrated build and deployment pipelines across multiple environments using Jenkins
                    and the EPAM delivery platform.
                  </li>
                  <li>
                    Demonstrated expertise in containerization using Docker, deploying applications seamlessly across
                    diverse environments.
                  </li>
                  <li>
                    Leveraged containerization with Docker to streamline application deployments across diverse
                    environments.
                  </li>
                  <li>
                    Developed end-to-end observability solutions using AppInsights and AWS X-Ray, ensuring comprehensive
                    application monitoring.
                  </li>
                  <li>
                    Designed and implemented a distributed workflow with Temporal, enabling efficient handling of
                    long-running processes and distributed states.
                  </li>
                  <li>
                    Created MVC-based custom templates for advertisement deals and forecasting, enhancing scalability
                    and user engagement.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <Card className="border-none shadow-lg">
            <CardHeader
              className={`bg-gradient-to-r from-${activeTab === "projects" ? "amber" : "blue"}-50 to-${activeTab === "projects" ? "amber" : "blue"}-100 rounded-t-lg`}
            >
              <CardTitle className={`text-${activeTab === "projects" ? "amber" : "blue"}-800`}>
                Project Details
              </CardTitle>
              <CardDescription>Professional project experience</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {displayedProjects.map((project, index) => (
                  <div key={index} className={`${project.bgColor} p-6 rounded-lg shadow-sm mb-6`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-semibold text-lg ${project.textColor}`}>{project.title}</h3>
                      <Badge className="bg-white text-gray-800">{project.period}</Badge>
                    </div>
                    <p className="mb-4 text-gray-700">{project.description}</p>
                    <div className="mb-4">
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-600">Technologies:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.split(", ").map((tech) => (
                          <Badge key={tech} variant="outline" className={`${project.badgeColor}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {projects.length > 8 && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    variant="outline"
                    className="flex items-center gap-2 border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    {showAllProjects ? "Show Less" : "Load More Projects"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showAllProjects ? "rotate-180" : ""}`} />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="mt-6">
          <Card className="border-none shadow-lg">
            <CardHeader
              className={`bg-gradient-to-r from-${activeTab === "certifications" ? "teal" : "blue"}-50 to-${activeTab === "certifications" ? "teal" : "blue"}-100 rounded-t-lg`}
            >
              <CardTitle className={`text-${activeTab === "certifications" ? "teal" : "blue"}-800`}>
                Microsoft Azure Certifications
              </CardTitle>
              <CardDescription>Professional certifications and credentials</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg border p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-50 p-4 rounded-full mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="text-blue-600"
                      >
                        <path
                          d="M23.9998 4L6 10.1149V18.2298C6 26.1149 10.9333 33.4851 18.2222 36.5702L23.9998 39L29.7775 36.5702C37.0664 33.4851 41.9997 26.1149 41.9997 18.2298V10.1149L23.9998 4Z"
                          fill="#0078D4"
                        />
                        {cert.icon === "devops-engineer-expert" && (
                          <path
                            d="M31.8 19.2H25.2V12.6H22.8V19.2H16.2V21.6H22.8V28.2H25.2V21.6H31.8V19.2Z"
                            fill="white"
                          />
                        )}
                        {cert.icon === "solutions-architect-expert" && (
                          <>
                            <path d="M31 19H17V22H31V19Z" fill="white" />
                            <path d="M24 22V29H31V26H27V22H24Z" fill="white" />
                            <path d="M17 29H24V26H20V22H17V29Z" fill="white" />
                          </>
                        )}
                        {cert.icon === "developer-associate" && (
                          <>
                            <path d="M18 19V29H22V24H26V29H30V19H18ZM22 22V21H26V22H22Z" fill="white" />
                          </>
                        )}
                        {cert.icon === "administrator-associate" && <path d="M31 19H17V29H31V19Z" fill="white" />}
                        {cert.icon === "fundamentals" && (
                          <>
                            <path d="M24 16L28 24H20L24 16Z" fill="white" />
                            <path d="M24 32L20 24H28L24 32Z" fill="white" />
                          </>
                        )}
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-500">Microsoft Certified</p>
                    <span className="mt-2 text-xs text-blue-600 hover:underline">View Credential</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <Card className="border-none shadow-lg">
            <CardHeader
              className={`bg-gradient-to-r from-${activeTab === "education" ? "rose" : "blue"}-50 to-${activeTab === "education" ? "rose" : "blue"}-100 rounded-t-lg`}
            >
              <CardTitle className={`text-${activeTab === "education" ? "rose" : "blue"}-800`}>Education</CardTitle>
              <CardDescription>Academic qualifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-700">MBA Entrepreneurship</h3>
                <p className="text-gray-700">School of distance education, Bharathiar University</p>
                <p className="text-sm text-gray-500">May, 2010</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Master of Science Software System (Five-year integrated course)
                </h3>
                <p className="text-gray-700">R.V.S. College of Arts and Science, Coimbatore, Bharathiar University</p>
                <p className="text-sm text-gray-500">May, 2005</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
