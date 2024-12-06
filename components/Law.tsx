interface LawProps {
    title: string
    description: string
  }
  
  export default function Law({ title, description }: LawProps) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <p className="mt-1 text-sm text-gray-500 sm:mt-0 sm:px-6 sm:py-5">{description}</p>
        </div>
      </div>
    )
  }
  
  