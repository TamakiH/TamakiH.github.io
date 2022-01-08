console.log("Hello World!");
function getCovidData() {
  fetch('https://covid19-api.com/country?name=Japan&format=json')
  .then(response => response.json())
  .then(data => console.log(data));
}
