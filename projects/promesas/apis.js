/* let axios = require("axios");

let url = "https://swapi.dev/api/people/?page=2";

axios.get(url)
  .then((result) => {
    console.log(result.data.results);
  }).catch((err) => {
    console.log(err.response.statusText);
  });;
 */

let promesa = function(url = "") {
  return new Promise(function(resolve, reject) {
    if(url.startsWith("https://")) {
      resolve(true);
    }
    
    reject(false);
  }) 
}

promesa("https://github.com")
  .then(res => console.log(res))
  .catch(err => console.log(err))

let otraPromesa = async function(url = "") {
  if(url.startsWith("https://")) {
    return {}
  }

  throw new Error("La url debe ser segura");
}

otraPromesa("https://github.com")
  .then(res => console.log(res))
  .catch(err => console.log(err))






