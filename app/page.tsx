import Law from '@/components/Law'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end space-x-4 mb-8">
          {!session ? (
            <>
              <Link 
                href="/auth/signin" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div>Welcome, {session.user?.email}</div>
          )}
        </div>

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

