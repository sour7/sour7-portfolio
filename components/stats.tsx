import { SectionHeader } from "./section-header"

export function Stats() {
  return (
    <section className="mb-20">
      <SectionHeader title="My Stats" subtitle="A quick overview of my professional achievements" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-gray-800/50 p-6">
          <div className="text-3xl font-bold text-purple-400">2.5+</div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
        <div className="rounded-lg bg-gray-800/50 p-6">
          <div className="text-3xl font-bold text-purple-400">20+</div>
          <div className="text-sm text-gray-400">Projects Completed</div>
        </div>
        <div className="rounded-lg bg-gray-800/50 p-6">
          <div className="text-3xl font-bold text-purple-400">15+</div>
          <div className="text-sm text-gray-400">Happy Clients</div>
        </div>
        <div className="rounded-lg bg-gray-800/50 p-6">
          <div className="text-3xl font-bold text-purple-400">100%</div>
          <div className="text-sm text-gray-400">Client Satisfaction</div>
        </div>
      </div>
    </section>
  )
}

