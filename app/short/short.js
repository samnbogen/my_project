import React, { useState } from 'react';
import axios from 'axios';

function URLShortener() {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const shortenUrl = async () => {
        try {
            const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
            setShortUrl(response.data.result.full_short_link);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={shortenUrl}>Shorten URL</button>
            {shortUrl && <a href={shortUrl}>{shortUrl}</a>}
        </div>
    );
}

export default URLShortener;
