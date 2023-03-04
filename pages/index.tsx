import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { fetcher } from "../lib/swr"
import useSwr from "swr"
import Image from 'next/image'
import { useState } from 'react'

interface IResponse {
  data: {
    title: string,
    url: string,
    nsfw: boolean,
    spoiler: boolean,
    author: string,
    ups: number,
    preview: string[]
  },
  error: Error | undefined,
  isLoading: boolean
}

export default function Home() {
  const url = "https://meme-api.com/gimme"
  const { data, error, isLoading }: IResponse = useSwr(url, fetcher)
  const [image, setImage] = useState<string>("")

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div>{data.title}</div>
      <div>
        <Image src={data.preview[data.preview.length - 1]} alt='meme img' width="960" height="480" />
      </div>
    </>
  )
}
