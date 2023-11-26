import React from "react";

const ShortInput = () => {
    return (
        <div>
            <input type="text" placeholder="give me a url" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={shortenUrl}>Shorten URL</button>
            {shortUrl && <a href={shortUrl}>{shortUrl}</a>}
        </div>
    );
}

export default ShortInput;