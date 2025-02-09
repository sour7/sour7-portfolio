"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { GitHubStats } from "@/components/github-calendar"
import { Footer } from "@/components/footer"

export default function Page() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950">
      <Navbar />
      <main className="container mx-auto px-4 py-10 md:py-20">
        {/* Hero Section */}
        <section id="about" className="mb-20 scroll-mt-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 text-center md:order-1 md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                Hi, I'm Sourabh Kumar
                <span className="block text-purple-400">Full Stack Developer</span>
              </h1>
              <p className="mb-8 text-lg text-gray-400">
                Passionate MERN stack developer with 2.5 years of experience building scalable web applications and
                cloud solutions using AWS.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/sour7" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.linkedin.com/in/sour7" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:sourabhdev273@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 flex justify-center md:order-2">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-purple-400 md:h-64 md:w-64">
                <Image src="/my.jpeg" alt="Sourabh Kumar" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Separator className="my-20 bg-gray-800" />
        <Skills />
        <Separator className="my-20 bg-gray-800" />
        <Experience />
        <Separator className="my-20 bg-gray-800" />
        <Projects />
        <Separator className="my-20 bg-gray-800" />
        <GitHubStats />
        <Separator className="my-20 bg-gray-800" />
        {/* <Contact /> */}
    
      </main>
      <Footer/>
    </div>
  )
}

