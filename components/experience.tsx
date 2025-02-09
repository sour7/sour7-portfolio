import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "./section-header";

export function Experience() {
  const experiences = [
    {
      period: "May 2022 - Present",
      title: "Software Developer Engineer",
      company: "Manufac Analytics, Gurugram, India",
      description:
        "Led a team of two, engaging with clients to gather requirements and deliver over four projects on time. Demonstrated expertise in AWS services (Amplify, S3) to reduce deployment time by 20% and enhance scalability. Developed interactive data visualizations using ECharts, boosting data insight delivery and user engagement by 40%. Created more than ten APIs using FastAPI while consistently producing clean, maintainable code that reduced production bugs by 25%.",
    },
    {
      period: "Aug 2022 - April 2023",
      title: "MERN Stack Developer",
      company: "Notion Infosoft, Ahemdabad, India",
      description:
        "Developed robust RESTful APIs using Express.js with seamless integration of MongoDB. Enhanced React applications by implementing dynamic user interfaces, effective state management, and smooth integration with backend APIs. Collaborated with cross-functional teams to deliver high-quality products and ensured adherence to coding standards.",
    },
    // {
    //   period: "Oct 2021 - June 2022",
    //   title: "MERN Stack Developer",
    //   company: "Masai School, Bangalore",
    //   description:
    //     "Focused on full-stack web development using the MERN stack, building robust web applications and strengthening proficiency in modern JavaScript frameworks.",
    // },
  ];

  return (
    <section id="experience" className="mb-20 scroll-mt-16">
      <SectionHeader title="Experience" subtitle="My professional journey" />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-gray-800/50">
            <CardHeader>
              <CardDescription>{exp.period}</CardDescription>
              <CardTitle className="text-white">{exp.title}</CardTitle>
              <CardDescription className="text-purple-400">{exp.company}</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">{exp.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
