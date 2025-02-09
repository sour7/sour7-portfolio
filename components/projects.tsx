import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "./section-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Projects() {
  const workProjects = [
    {
      title: "Banker on Wheels",
      description:
        "A comprehensive platform providing investment guides, tools, and resources tailored for European and UK investors. Features include an intuitive UI for modifying ETFs and time periods, real-time market data integration, interactive data visualizations using Charts.js, and a robust backend deployed on AWS EC2 integrated with WordPress.",
      image: "/bankers.png", // Replace with your image URL if available
      tags: ["React", "TypeScript", "FastAPI", "AWS", "Charts.js"],
      demo: "https://www.bankeronwheels.com/",
    },
    {
      title: "Manufac Magnet",
      description:
        "Optimizes manufacturing operations by leveraging advanced data analytics for predictive maintenance, quality control, and production enhancement. Leveraged Playwright for efficient web scraping from IndiaMart, utilized DynamoDB for scalable data storage, implemented AWS Amplify for secure authentication, and integrated GraphQL APIs. Designed a user-friendly interface using Mantine.",
      image: "/magnet.png", // Replace with your image URL if available
      tags: ["React", "AWS Amplify", "DynamoDB", "GraphQL", "Mantine", "Playwright"],
      demo: "https://www.magnet.manufacanalytics.com/",
    },
    {
      title: "LogLink",
      description:
        "Flexible digital communication for transportation and logistics. Impactful innovation to improve your efficiency while delighting your customers.",
      image: "/loglink.png", // Replace with your actual image URL if available
      tags: ["React", "Tailwind", "TypeScript"],
      demo: "https://loglink.io/",
    },
  ]

  const personalProjects = [
    {
      title: "Resturent App",
      description:
        "A food delivery website where users can place orders. The admin can change the state of an order, add new food items, or delete them.",
      image: "/food.png", // Ensure the image is available in your public folder (e.g., public/food.png)
      tags: ["Next.js", "MongoDB", "Node.js"],
      demo: "https://www.youtube.com/watch?v=d4vU9Lxugvg",
      github: "https://github.com/sour7/food",
    },
    {
      title: "Hotel App",
      description:
        "A responsive hotel booking website where users can search for available rooms, book rooms, and manage reservations. The admin can manage room inventory and bookings.",
      image: "/hotel.png", // Place your hotel app image in the public folder
      tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      demo: "https://hotel-booking-sourabh.netlify.app/",
      github: "https://github.com/sour7/hotel-app",
    },
    {
      title: "YouTube",
      description:
        "A YouTube-like website where users can register, upload videos, like videos, and comment. Redux Toolkit is used for state management.",
      image: "/youtube.png", // Ensure the image is available (e.g., public/youtube.png)
      tags: ["HTML", "CSS", "JavaScript", "Redux Toolkit"],
      demo: "https://user-images.githubusercontent.com/95950369/213151499-0ea7257d-8185-4a4e-b933-733055d3cce8.mp4",
      github: "https://github.com/sour7/Youtube-MERN",
    },
    {
      title: "Roden + Fields",
      description:
        "A clone of RodanAndFields.com developed by a team of 5 members at Masai School in just 5 days as part of our Module 2 project evaluation.",
      image: "https://user-images.githubusercontent.com/95950369/158530057-bc704d44-c6de-43b6-ae80-c1c470d84596.png",
      tags: ["React", "Redux", "Node.js", "MongoDB", "Express"],
      demo: "https://focused-heisenberg-fa48d3.netlify.app/index.html",
      github: "https://github.com/Maddy-O/Rodan-Feilds.git",
    },
    {
      title: "sony.co.in",
      description:
        "A clone of sony.co.in developed by a team of 5 members at Masai School in 4 days as part of our Unit 3 Build Week evaluation.",
      image: "https://user-images.githubusercontent.com/95950369/158631283-681f13cd-f8e1-4fff-9ea7-161af442892c.png",
      tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Express"],
      demo: "https://sonyclone.netlify.app/index.html",
      github: "https://github.com/mohan-palleti/unit-3_project_Sony.co.in.git",
    },
    {
      title: "CandyMart",
      description:
        "A solo full-stack e-commerce MERN project built in 10 days. Features filtering and sorting of data along with Redux for state management.",
      image: "https://user-images.githubusercontent.com/95950369/172141540-a72c5f01-47cb-4a63-8c78-9199981bc93d.png",
      tags: ["React", "Redux", "Bootstrap", "Node.js", "MongoDB", "Express"],
      demo: "https://candymart.netlify.app/",
      github: "https://github.com/sour7/Ecommerce",
    },
  ]

  return (
    <section id="projects" className="mb-20 scroll-mt-16">
      <SectionHeader title="My Projects" subtitle="Some of my recent work" />

      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800/50">
          <TabsTrigger value="work">Work Projects</TabsTrigger>
          <TabsTrigger value="personal">Personal Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="work" className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {workProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="work" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="personal" className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="personal" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function ProjectCard({ project, type }: { project: any; type: "work" | "personal" }) {
  return (
    <Card className="flex h-full flex-col bg-gray-800/50">
      <CardHeader className="p-0">
        {/* Responsive image container with a 4:3 aspect ratio */}
        <div className="relative w-full h-0 pb-[75%]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="mb-2 text-white">{project.title}</CardTitle>
        <CardDescription className="mb-4">{project.description}</CardDescription>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="rounded-full bg-purple-400/10 px-3 py-1 text-xs text-purple-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4">
          {type === "personal" && project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
