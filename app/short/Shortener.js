"use client";
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function Shortener() {
    const [longURL, setLongUrl] = useState("");
    const [shortLink, setShortLink] = useState({});
    const [active, setActive] = useState(false);
    const [copy, setCopy] = useState(false);
  
    function handleChange(e) {
      setLongUrl(e.target.value);
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: longURL,
          domain: "bit.ly",
          group_guid: `${process.env.REACT_APP_GUID}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const new_link = data.link.replace("https://", "");
          fetch(
            `https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
            {
              mode: "cors",
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
              },
            }
          )
            .then((response) => response.json())
            .then((result) => {
              setShortLink(result);
              setActive(true);
            });
        });
      setLongUrl("");
    }

    return (
        <div className='p-8 flex flex-col items-center justify-center'> 
            <form onSubmit={handleSubmit}
                className="mb-10 p-1 text-2xl text-moss flex flex-row">
                <input 
                    type="text" 
                    value={longURL}
                    onChange={handleChange} 
                    className='p-1 mr-1 block text-dark-violet bg-white border border-dark-violet'
                    placeholder="Paste your url"/>
                <button 
                    type="submit"
                    className='px-4 block text-dark-violet bg-light-gray border border-dark-violet hover:bg-dark-violet hover:text-light-gray'>
                        Shorten
                </button>
            </form>
            <p className="text-2xl font-bold text-center text-moss">{shortLink.link}</p>
            <CopyToClipboard text={shortLink.link} copy={() => setCopy(true)}>
                <button 
                    className="py-2 px-4 bg-light-gray text-dark-violet border border-dark-violet hover:bg-dark-violet hover:text-light-gray font-bold">
                        Copy!
                </button>                
            </CopyToClipboard>
        </div>
    )
}

export default Shortener;