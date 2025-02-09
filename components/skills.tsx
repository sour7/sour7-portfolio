"use client"

import { Card } from "@/components/ui/card"
import { SectionHeader } from "./section-header"
import { motion } from "framer-motion"

export function Skills() {
  const skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Prisma", icon: "devicon-prisma-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Electron", icon: "devicon-electron-original colored" },
  ]

  const rows = [skills.slice(0, 6), skills.slice(6, 11), skills.slice(11, 15), skills.slice(15)]

  return (
    <section id="skills" className="mb-20 scroll-mt-16">
      <SectionHeader title="Skills & Technologies" subtitle="Technologies and tools I work with" />

      <div className="flex flex-col items-center space-y-2">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            className="flex justify-center space-x-2 sm:space-x-2 flex-wrap"
          >
           <div className="flex flex-wrap sm: gap-2 justify-center">
           {row.map((skill, index) => (
              <motion.div key={skill.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="group relative flex h-20 w-20 sm:h-24 sm:w-24 flex-col items-center justify-center gap-1 sm:gap-2 overflow-hidden bg-gray-800/50 p-3 sm:p-4 transition-all duration-300 hover:bg-purple-600/20">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.i
                    className={`${skill.icon} text-2xl sm:text-3xl relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="text-center text-[10px] sm:text-xs font-medium text-gray-300 transition-all duration-300 group-hover:text-white relative z-10">
                    {skill.name}
                  </span>
                </Card>
              </motion.div>
            ))}
           </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
