import React from "react";
import Layout from "./layout";

export default function Page() {
  return (
    <Layout className="z-0">
    <main className="min-h-screen p-12 z-10">
      <div className="bg-white rounded-lg w-1/2 p-4">
        <h1 className="text-4xl font-bold text-center text-moss">Page</h1>
        <p className="text-2xl font-bold text-center text-metal">This is a page</p>
     </div>
    </main>
    </Layout>
  )
}