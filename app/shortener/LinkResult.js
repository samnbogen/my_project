"use client";

import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          long_url: inputValue,
          domain: 'bit.ly',
          group_guid: `${process.env.REACT_APP_GUID}`,
        }),
      });
      const data = await response.json();
      setShortenLink(data.link);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  console.log(shortenLink);
  

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong</p>
  }


  return (
    <div className="h-10">
      {shortenLink && (
        <div>
          <p className="text-2xl font-bold text-center text-dark-violet">{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  )
}

export default LinkResult;