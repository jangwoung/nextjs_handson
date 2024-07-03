import Link from 'next/link'
import Image from 'next/image'
import sample_img from '@/public/sample_1.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page!
      <Link href='/create-post'>Move Create Post Page</Link>
      <Image
        src={sample_img}
        alt="Sample image"
        width={200}
        height={300}
      />
    </main>
  )
}
