'use client'

import Image from 'next/image'
import imgProfile from './images/img-profile.jpeg'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
        <Image
          src={imgProfile}
          alt="Profile Picture"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>
      <div className="text-center max-w-2xl mb-8 px-4">
        <h1 className="text-3xl font-bold mb-4">highonrice.base.eth</h1>
        <p className="text-lg text-gray-700 font-semibold mb-4">a professional baby stepper</p>
        <p className="text-lg text-gray-700">currently working at <a href="https://kroma.network" target="_blank" rel="noopener noreferrer" className="underline">kroma</a>.</p>
        <p className="text-lg text-gray-700 mb-4">as a developer-turned-product manager with a user-centric mindset, I excel in planning, executing and managing complex services and UX while understanding both business and technology.</p>
        <p className="text-lg text-gray-700">you can find my professional journey on <a href="https://linkedin.com/in/seoho-yoon" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">LinkedIn</a>,</p>
        <p className="text-lg text-gray-700">shitposting with degen mode on <a href="https://x.com/0xdonsterling" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">X(formerly Twitter)</a>,</p>
        <p className="text-lg text-gray-700">building toy projects on <a href="https://warpcast.com/0xdonsterling" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">Warpcast</a>,</p>
        <p className="text-lg text-gray-700">and my green squares on <a href="https://github.com/highonrice" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">Github</a>.</p>
      </div>
    </div>
  )
}

