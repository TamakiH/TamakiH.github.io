console.log("Hello World!");

//Function to get covid API data by country and display on HTML
async function getCovidData() {
  var countryName=document.getElementById("countryName").value;
  let response = await fetch('https://covid19-api.com/country?name='+countryName+'&format=json');
  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
      let data = await response.text();
      var result = data.substring(1, data.length-1);
      const data_json = JSON.parse(result);
      console.log(data_json);
      console.log(typeof(data_json));
      document.getElementById("cases").innerHTML = "Cases: " +data_json.confirmed;
      document.getElementById("critical").innerHTML = "Critical: " +data_json.critical;
      document.getElementById("death").innerHTML = "Death: " +data_json.deaths;

  }
}
