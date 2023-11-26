import React from "react";
import Link from 'next/link';
import Layout from "./short/layout";


export default function Page() {
  return (
    <Layout className="z-0">
      <main className="min-h-screen p-12 z-10 flex items-center justify-center">
        <h1 className="text-3xl text-center text-white hover:text-light-violet z-40">
          <Link href="short">This way to get shortened</Link>
        </h1>
      </main>
    </Layout>
  )
}
