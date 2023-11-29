var city = '';
const cityText = document.querySelector('.city');
const highTemp = document.querySelector('.highT');
const lowTemp = document.querySelector('.lowT');
const currentTemp = document.querySelector('.currentT');
const humidity = document.querySelector('.humidity');
const input = document.querySelector('.inputCity');
const button = document.querySelector('.subButton');

var apiKey = 'MAeJJN+Ea97Ze8+xo6byLQ==OwHwVIllJtQbhnIy';

function Fahrenheit(e){
  return (e*9/5)+32;
}


// var apiUrl = 'https://api.api-ninjas.com/v1/weather?city=' + zipCode;

button.addEventListener('click',(e)=>{
  e.preventDefault();
  city = input.value;
  
  var apiUrl = 'https://api.api-ninjas.com/v1/weather?city=' + city;
  var urlWithApiKey = apiUrl + '&api_key=' + apiKey;
  console.log(city);
  fetch(urlWithApiKey, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        console.log('not valid');
        cityText.innerHTML = 'not a city';
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('valid');
      cityText.innerHTML = city;
      return response.json();
    })
    .then(data => {
      // Process the API response data
      console.log(data);
      highTemp.innerHTML = `${data.max_temp} C° / ${Fahrenheit(data.max_temp)} F°`;
      lowTemp.innerHTML = `${data.min_temp} C° / ${Fahrenheit(data.min_temp)} F°`;
      currentTemp.innerHTML = `${data.temp} C° / ${Fahrenheit(data.temp)} F°`;
      humidity.innerHTML = `${data.humidity}%`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});



/*

fetch(urlWithApiKey, {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      console.log('not valid');
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log('valid');
    return response.json();
  })
  .then(data => {
    // Process the API response data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  }); 
  
  */



//To observe and compare ajax vs fetch
//   var city = 'london'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });