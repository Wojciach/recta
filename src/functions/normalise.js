const normalize = (inputString) => {
    
        const transliterationMap = {
            "ą": "a",
            "ć": "c",
            "ę": "e",
            "ń": "n",
            "ł": "l",
            "ó": "o",
            "ź": "z",
            "ż": "z",
        };
    
    return inputString
        .toLowerCase()
        .split('')
        .map(char => transliterationMap[char] || char)
        .join('');
        
        
}

export default normalize