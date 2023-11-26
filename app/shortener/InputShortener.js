"use client";

import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div >
      <h1>URL <span>Shortener</span></h1>
      <div className='flex flex-row items-center justify-center'>
        <input
          type="text"
          className='p-1 mr-1 h-8 block text-dark-violet bg-white border border-dark-violet'
          placeholder="give me a url"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button 
            className='px-4 h-8 block text-dark-violet bg-light-gray border border-dark-violet hover:bg-dark-violet hover:text-light-gray'
            onClick={handleClick}>shorten</button>
      </div>
    </div>
  )
}

export default InputShortener;