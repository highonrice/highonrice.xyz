import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
        <Image
          src="/placeholder.svg?height=192&width=192"
          alt="Profile Picture"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>
      <div className="text-center max-w-2xl mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Personal Website</h1>
        <p className="text-lg text-gray-700">
          Hello! Im a passionate developer with a keen interest in creating beautiful and functional web applications. 
          I love to explore new technologies and solve complex problems.
        </p>
      </div>
      <div className="flex space-x-6">
        <a href="https://linkedin.com/in/seoho-yoon" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
          LinkedIn
        </a>
        <a href="https://github.com/highonrice" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          Github
        </a>
        <a href="https://x.com/0xdonsterling" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
          X(formarly Twitter)
        </a>
        <a href="https://warpcast.com/0xdonsterling" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
          Warpcast
        </a>
      </div>
    </div>
  )
}

