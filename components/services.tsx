import { Cloud, Code, Database, Layout } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "./section-header"

export function Services() {
  return (
    <section className="mb-20">
      <SectionHeader title="My Services" subtitle="Specialized in full-stack development and cloud solutions" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800/50">
          <CardHeader>
            <Code className="h-10 w-10 text-purple-400" />
            <CardTitle className="text-white">Full Stack Development</CardTitle>
            <CardDescription>
              End-to-end web application development using MERN stack (MongoDB, Express.js, React, Node.js)
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            Building scalable and responsive web applications with modern technologies and best practices
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50">
          <CardHeader>
            <Cloud className="h-10 w-10 text-purple-400" />
            <CardTitle className="text-white">AWS Cloud Solutions</CardTitle>
            <CardDescription>Cloud infrastructure setup and management using AWS services</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            Experience with AWS Amplify, S3, Lambda, EC2, and other AWS services
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50">
          <CardHeader>
            <Database className="h-10 w-10 text-purple-400" />
            <CardTitle className="text-white">Database Design</CardTitle>
            <CardDescription>Database architecture and optimization for scalable applications</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            Expertise in MongoDB, designing efficient schemas and queries
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50">
          <CardHeader>
            <Layout className="h-10 w-10 text-purple-400" />
            <CardTitle className="text-white">API Development</CardTitle>
            <CardDescription>RESTful API design and implementation</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            Creating robust and well-documented APIs using Express.js and Node.js
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

