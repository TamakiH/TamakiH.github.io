console.log("Hello World!");
async function getCovidData() {
  var countryName=document.getElementById("countryName").value;
  let response = await fetch('https://covid19-api.com/country?name='+countryName+'&format=json');
  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
      let data = await response.text();
      console.log(data);
      console.log(typeof(data));
      // handle data
  }
  //console.log(response);
  // fetch('https://covid19-api.com/country?name='+countryName+'&format=json')
  // .then(response => response.json())
  // .then(data => console.log(data));

}
