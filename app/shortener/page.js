"use client";

import { useState } from 'react';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import Background from './background';


function Page() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Background className="z-0">
        <main className="min-h-screen p-12 flex items-center justify-center z-40">
            <div className="bg-white rounded-lg p-4">
                <h1 
                    className="p-2 text-5xl font-bold text-center text-moss"
                    //https://fonts.google.com/specimen/Inconsolata
                    style={{ fontFamily: 'Inconsolata' }}> 
                        This is a URL Shortener</h1>
                <InputShortener setInputValue={setInputValue} />
                <LinkResult inputValue={inputValue} />
            </div>
        </main>
    </Background>
  );
}

export default Page;
  
  
  
  