import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"

export function Contact() {
  return (
    <section id="contact" className="mb-20 scroll-mt-16">
      <SectionHeader title="Get in Touch" subtitle="Let's discuss your project" />

      <Card className="bg-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white">Contact Form</CardTitle>
          <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-400">Name</label>
                <Input className="bg-gray-700" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-gray-400">Email</label>
                <Input type="email" className="bg-gray-700" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-400">Message</label>
              <Textarea className="min-h-[150px] bg-gray-700" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

