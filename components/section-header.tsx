interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-2 inline-block border-b-2 border-purple-400 pb-2 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-gray-400">{subtitle}</p>
    </div>
  )
}

