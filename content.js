
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4006d20080mshbcfc2137bfdd791p1ca494jsnbb5856d38834',
    'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
  }
};
const reload = (function () {
  let invoked = false;
  return function () {
    if (!invoked) window.location.reload();
    invoked = true;
  }
})();
// reload()
fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes?limit=10', options)
  .then(response => response.json())
  .then(response => setInterval(changeTitle(response), 1000))
  .catch(err => console.error(err));

function changeTitle(arr) {
  const h1Titles = document.querySelectorAll("h1");
  const h3Titles = document.querySelectorAll("h3");
  const h2Titles = document.querySelectorAll("h2");

  //h1s
  for(const [index, headline] of h1Titles.entries()) {
    let i = index%10
    headline.innerText = arr[i].joke;
  }

  //New York Times
  for (const [index, headline] of h3Titles.entries()) {
    let i = index%10
    headline.innerText = arr[i].joke;
  }

  for (const [index, headline] of h2Titles.entries()) {
    let i = index % 10
    //Needed for Washington Post
    if (headline.querySelector('span')) headline.querySelector('span').innerText = arr[i].joke;
    //Hits most of the other sites
    headline.innerText = arr[i].joke;
    
  }
}

