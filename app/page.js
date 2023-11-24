import React from "react";
import Link from 'next/link';


export default function Page() {
  return (
    <main className="bg-dark-violet min-h-screen p-12">
      <div>
        <h1 className="text-4xl font-bold text-center text-moss">Page</h1>
        <p className="text-2xl font-bold text-center text-metal">This is a page</p>
        
        <div className="flex flex-wrap justify-center">
          <div className="bg-white rounded-lg w-1/2 p-4">
            <h2 className="text-2xl font-bold text-center text-dark-violet">Box</h2>
            <p className="text-lg text-center text-light-violet">This is a box</p>  
          </div>
          <div className="bg-moss rounded-lg w-1/2 p-4">
            <h2 className="text-2xl font-bold text-center text-dark-violet">Box</h2>
            <p className="text-lg text-center text-light-violet">This is a box</p>
          </div>
          <div className="bg-light-violet rounded-lg w-1/2 p-4">
            <p className="text-2xl text-center text-white hover:text-moss"><Link href="short">This way to get shortened</Link></p>
          </div>
        </div>
     </div>
    </main>

  )
}
