"use client";

import Link from "next/link";
import Image from "next/image";
import sample_img from "@/public/sample_1.png";
import { useState } from "react";
import { CountButton } from "./components/countButton";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page!
      <Link href="/create-post">Move Create Post Page</Link>
      <Image src={sample_img} alt="Sample image" width={200} height={300} />
      <h1>Count : {count}</h1>
      <CountButton count={count} setCount={setCount} />
    </main>
  );
}
