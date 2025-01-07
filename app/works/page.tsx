import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

const works = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    link: "#",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 and its main functionalities.",
    link: "#",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Project 3",
    description: "Highlights of Project 3 and its unique selling points.",
    link: "#",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  // Add more projects as needed
]

export default function Works() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">My Works</h1>
        <p className="text-xl italic text-gray-600">
          {"Work until you no longer have to introduce yourself"}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <Link href={work.link} key={index} className="block group">
            <Card className="overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src={work.imageUrl}
                  alt={`${work.title} thumbnail`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">{work.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{work.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}