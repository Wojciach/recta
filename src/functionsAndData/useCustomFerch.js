import { useState, useEffect } from 'react';

const useCustomFetch = () => {

    //const developmentAddress = 'http://localhost/recta2/recta2/public/php/getImagesURLs.php';
    const productionAddress = 'https://www.recta.website/php/getImagesURLs.php';

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(productionAddress, {
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