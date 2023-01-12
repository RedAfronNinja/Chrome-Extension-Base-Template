// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT

// import jokes from "getjoke.js";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4006d20080mshbcfc2137bfdd791p1ca494jsnbb5856d38834',
    'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
  }
};

fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes?limit=10', options)
  .then(response => response.json())
  .then(response => setInterval(changeTitle(response), 1000))
  .catch(err => console.error(err));

function changeTitle(arr) {
  const h3Titles = document.querySelectorAll("h3");
  const h2Titles = document.querySelectorAll("h2");

  for (const [index, headline] of h3Titles.entries()) {
    let i = index%10
    headline.innerText = arr[i].joke;
  }

  for (const [index, headline] of h2Titles.entries()) {
    let i = index%10
    headline.innerText = arr[i].joke;
    headline.querySelector('span').innerText = arr[i].joke;
  }
}