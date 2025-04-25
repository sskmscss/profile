export function Footer() {
  return (
    <footer className="border-t py-6 mt-auto bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saravana Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="mailto:r_s_saravana_kumar@yahoo.com"
            className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
          >
            r_s_saravana_kumar@yahoo.com
          </a>
          <a href="tel:+919791004409" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
            +91-9791004409
          </a>
        </div>
      </div>
    </footer>
  )
}
