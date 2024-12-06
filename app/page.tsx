import Law from '@/components/Law'

const laws = [
  {
    id: 1,
    title: "Freedom of Speech",
    description: "Protects an individual's right to express opinions without government censorship."
  },
  {
    id: 2,
    title: "Right to Privacy",
    description: "Safeguards personal information and protects against unreasonable searches and seizures."
  },
  {
    id: 3,
    title: "Equal Protection",
    description: "Ensures that all persons are treated equally under the law, regardless of race, gender, or other characteristics."
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Important Legal Laws</h1>
        <div className="space-y-6">
          {laws.map(law => (
            <Law key={law.id} title={law.title} description={law.description} />
          ))}
        </div>
      </div>
    </main>
  )
}

