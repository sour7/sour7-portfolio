"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { SectionHeader } from "./section-header";

export function GitHubStats() {
  return (
    <section id="github-activity" className="mb-20 scroll-mt-16">
      <SectionHeader
        title="GitHub Activity"
        subtitle="My contribution graph and stats"
      />
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <GitHubCalendar
            username="sour7"
            colorScheme="light"
            blockSize={15}
            blockMargin={5}
            fontSize={18}
            theme={{
              light: ["#161b22", "#39d353"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              color: "#9fa2ac",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
