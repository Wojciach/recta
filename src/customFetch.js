export const customFetch = () => {
  return fetch('http://localhost:80/recta2/recta2/src/php/get_images.php')   //this line is for localhost testing
 // return fetch('php/get_images.php')    //this line is for production
  /* This unusual response handling is created to pass PHP errors to React regardless of whether the response comes as JSON (the desired outcome) or PHP sends an error. 
  The reason behind this is to have better control over errors and to avoid switching back and forth between production code and release code. 
  Normally, we would hide error messages. */
  .then((response) => {
    const clone = response.clone();   //clone response to do not lose data stream in case parsing to JSON fails ("Stream Consumption" issues)
    // First, attempt to parse as JSON.
    return response.json().catch((er) => {
      // If an error is thrown, it couldn't parse to JSON,
      // so we return the text response.
      console.log("unsucesful JSON", er);
      return clone.text();
    });
  })
  .then((data) => {
    // If data is a string, it wasn't JSON, so we log it as is.
    if (typeof data === 'string') {
      console.log(data);
      return data;
    }
    // If it wasn't a string, it was parsed as JSON.
    if (data.error) {
      console.error(data.error);
      throw new Error('Error No1');
    } else {
   //   console.log(data);
      return data;
    }
  })
  .catch((error) => {
    console.error(error);
    throw new Error('Error No2');
  });
};


