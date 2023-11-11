import { useState, useEffect } from 'react';

const useCustomFetch = () => {

    const production = 'https://www.recta.website/php/getImagesURLs.php';
    const development = 'http://localhost/recta2/recta2/public/php/getImagesURLs.php';

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(development, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(response => response.json())
        .then((data) => {setData(data);})
    }, []);
    return data;
};

export default useCustomFetch;