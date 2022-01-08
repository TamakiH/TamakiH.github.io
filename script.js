console.log("Hello World!");
function getCovidData() {
  var countryName=document.getElementById("countryName").value;
  fetch('https://covid19-api.com/country?name='+countryName+'&format=json')
  .then(response => response.json())
  .then(data => console.log(data));
}
