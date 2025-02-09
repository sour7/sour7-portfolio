import Link from "next/link"
import { Linkedin, Mail, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6">
          <Link
            href="https://www.linkedin.com/in/sour7" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6 hover:text-white" />
          </Link>
          <Link href="mailto:sourabhdev273@gmail.com">
            <Mail className="h-6 w-6 hover:text-white" />
          </Link>
          <Link
            href="https://github.com/sour7" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 hover:text-white" />
          </Link>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Sourabh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
