import Link from "next/link"

export function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          Saravana Kumar
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-blue-600 transition-colors">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
