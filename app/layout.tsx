import type { ReactNode } from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script src="https://unpkg.com/framer-motion@6.3.3/dist/framer-motion.js"></script>
        <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

