import React from "react";
import Link from 'next/link';
import Background from "./shortener/background";


export default function Page() {
  return (
    <Background className="z-0">
      <main className="min-h-screen p-12 z-10 flex items-center justify-center">
        <h1 
          className="text-3xl text-center text-white hover:text-light-violet z-40"
          style={{ fontFamily: 'Inconsolata' }}>
            <Link href="shortener">This way to get shortened</Link>
        </h1>
      </main>
    </Background>
  )
}
