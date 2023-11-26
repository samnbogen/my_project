import React, { useState } from 'react';


function URLShortener({setInput}) {
    const [url, setUrl] = useState('');

    const shortenUrl = async () => {
        setInput(url);
        setInput('');
    }


    return (
        <div>
            <input 
                className='p-1 mr-1 block text-dark-violet bg-white border border-dark-violet'
                type="text" placeholder="give me a url" value={url} onChange={e => setUrl(e.target.value)} />
            <button 
                className='px-4 block text-dark-violet bg-light-gray border border-dark-violet hover:bg-dark-violet hover:text-light-gray'
                onClick={shortenUrl}>Shorten URL</button>

        </div>
    );
}

export default URLShortener;
