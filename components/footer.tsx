import { Mail, Phone, Linkedin, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 mt-auto bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saravana Kumar. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0 justify-center">
          <a
            href="mailto:r_s_saravana_kumar@yahoo.com"
            className="text-sm text-muted-foreground hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <Mail className="h-3 w-3" /> r_s_saravana_kumar@yahoo.com
          </a>
          <a
            href="tel:+919791004409"
            className="text-sm text-muted-foreground hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <Phone className="h-3 w-3" /> +91-9791004409
          </a>
          <a
            href="https://wa.me/919791004409"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-green-600 transition-colors flex items-center gap-1"
          >
            <MessageSquare className="h-3 w-3" /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/saravanakumar-s-architect/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <Linkedin className="h-3 w-3" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
