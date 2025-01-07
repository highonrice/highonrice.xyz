'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import projBasename from '../images/proj-basename.png'
import projBasedPump from '../images/proj-basedpump.png'
import projPunch from '../images/proj-punch.png'
import projRaffle from '../images/proj-raffle.png'
import projSocialPower from '../images/proj-social-power.png'

const works = [
  {
    title: "Basename on Frame",
    description: "Claim your Basename Directly on Frame",
    link: "https://warpcast.com/0xdonsterling/0xca45b56f",
    imageUrl: projBasename
  },
  {
    title: "Based Pump",
    description: "Pump but Based, on Farcaster Frame",
    link: "https://warpcast.com/0xdonsterling/0x05fdae46",
    imageUrl: projBasedPump
  },
  {
    title: "Punch",
    description: "Punch Ganselar in da face!",
    link: "https://warpcast.com/0xdonsterling/0x8d3612d3",
    imageUrl: projPunch
  },
  {
    title: "Raffle Among Ur Fans",
    description: "Raffle among your Farcaster fans",
    link: "https://warpcast.com/0xdonsterling/0x46468e28",
    imageUrl: projRaffle
  },
  {
    title: "Powerful Fan",
    description: "Check who's your most powerful fan",
    link: "https://warpcast.com/0xdonsterling/0x3fd898b5",
    imageUrl: projSocialPower
  },
]

export default function Works() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">My Toys</h1>
        <p className="text-xl italic text-gray-600">
          explore by getting my hands dirty
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {works.map((work, index) => (
          <a href={work.link} target='_blank' rel='noreferrer noopener' key={index} className="block group">
            <Card className="overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
              <div className="relative">
                <Image
                  src={work.imageUrl}
                  alt={`${work.title} thumbnail`}
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
          </a>
        ))}
      </div>
    </div>
  )
}