import normalize from "./normalise";
import oferta from "../oferta.js";
import hashtags from "../hashtags.js";

const searchFunction = (searchPhrase) => {

    console.log("UUSE SEARCH FUNCTION FIRREEED FIIIIREEEEE!!!!");

    var serviceList = [];
      //search in offers and add to serviceList
      for (let i = 0; i < oferta.length; i++) {
        const section = oferta[i];
        for (const key in section) {
            section[key].forEach((element) => {
              if (normalize(element).includes(normalize(searchPhrase))) {
                serviceList.push(element);
                const uniqueArray = [...new Set(serviceList)];
                serviceList = uniqueArray;
              }
            })
            if (normalize(key).includes(normalize(searchPhrase))) {
              serviceList.push(key);
              const uniqueArray = [...new Set(serviceList)];
              serviceList = uniqueArray;
            }
        };
      }

      //search in hashtags and add to serviceList
      for (let i = 0; i < hashtags.length; i++) {
        Object.keys(hashtags[i]).forEach((key) => {
          hashtags[i][key].forEach((element) => {
            if (normalize(element).includes(normalize(searchPhrase))) {
              serviceList.push(element);
              const uniqueArray = [...new Set(serviceList)];
              serviceList = uniqueArray;
            }
          });
        });
      }


   return serviceList;

  };

  export default searchFunction;