"use client";

import Link from "next/link";
import Image from "next/image";
import sample_img from "@/public/sample_1.png";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page!
      <Link href="/create-post">Move Create Post Page</Link>
      <Image src={sample_img} alt="Sample image" width={200} height={300} />
      <h1>Count : {count}</h1>
      <div>
        <button
          onClick={countDown}
          className="bg-yellow-500 py-2 mx-2 px-4 rounded font-bold text-white shadow-md duration-300 hover:shadow-none"
        >
          －１
        </button>
        <button
          onClick={countUp}
          className="bg-yellow-500 py-2 mx-2 px-4 rounded font-bold text-white shadow-md duration-300 hover:shadow-none"
        >
          ＋１
        </button>
      </div>
    </main>
  );
}
