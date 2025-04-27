import type React from "react"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata = {
  title: "Saravana Kumar - Technical Architect",
  description: "Professional portfolio of Saravana Kumar, Technical Architect with 17+ years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
