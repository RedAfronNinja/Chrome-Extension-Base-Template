let jokes = []

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4006d20080mshbcfc2137bfdd791p1ca494jsnbb5856d38834',
    'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
  }
};

fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes?limit=10', options)
  .then(response => response.json())
  .then(response => jokes = [...response])
  .catch(err => console.error(err));

export default jokes