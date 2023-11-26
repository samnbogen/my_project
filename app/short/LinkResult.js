"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({inputValue}) => {
    const [link, setLink] = useState('');
    const [copy, setCopy] = useState(false);
    const [loading, setLoading] = useState(false);

    const getLink = async () => {
        try {
            setLoading(true);
            const response = await axios ('https://api-ssl.bitly.com/v4/shorten', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    long_url: longURL,
                    domain: 'bit.ly',
                    group_guid: `${process.env.REACT_APP_GUID}`,
                }),
            })
            setLink(response.data);
        
        }
        catch (err) {
            console.error(err);
        }
        finally{

        }
    }

    useEffect(() => {
        if (inputValue) {
            getLink();
    }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopy(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [copy]);

    return (
        <div className='p-8 flex flex-col items-center justify-center'>
            <h1 className='text-2xl text-dark-violet'>Your shortened link is:</h1>
            <div className='flex flex-row items-center justify-center'>
                <a href={link.long_url} target='_blank' className='text-2xl text-dark-violet underline'>{link.long_url}</a>
                <CopyToClipboard text={link.long_url} onCopy={setCopy}>
                    <button className='ml-2 p-1 text-2xl text-moss bg-dark-violet hover:bg-moss hover:text-dark-violet rounded-md'>Copy</button>
                </CopyToClipboard>
            </div>
            {copy && <p className='text-moss'>Copied to clipboard!</p>}
        </div>
    );
}

export default LinkResult;