"use client";
import React from "react";
import Layout from "../shortener/background";
import URLShortener from "./short";
import { useState } from "react";
import LinkResult from "./LinkResult";



export default function Page() {
  const [input, setInput] = useState('');

  return (
    <Layout className="z-0">
    <main className="min-h-screen p-12 z-10 flex items-center justify-center">
      <div className="bg-white rounded-lg  p-4">
        <h1 className="p-2 text-5xl font-bold text-center text-moss">This is a URL Shortener</h1>
        <URLShortener setInput={setInput}/>
        <LinkResult input={input}/>
     </div>
    </main>
    </Layout>
  )
}