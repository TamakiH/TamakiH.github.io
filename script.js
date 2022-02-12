console.log("Hello World!");

//Function to get covid API data by country and display on HTML
async function getCovidData() {
  var countryName=document.getElementById("countryName").value;
  let response = await fetch('https://covid19-api.com/country?name='+countryName+'&format=json');
  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
      let data = await response.text();
      console.log(data);

      try {
        var result = data.substring(1, data.length-1);
        const data_json = JSON.parse(result);
        console.log(data_json);
        console.log(typeof(data_json));
        graph(data_json.confirmed, data_json.recovered, data_json.critical, data_json.deaths);
      }
      //catch countries that do not exist
      catch (SyntaxError) {
        console.log("Syntax Error!!");
        document.getElementById("cases").innerHTML = "Country Not Found\n" ;
        document.getElementById("critical").innerHTML = "";
        document.getElementById("death").innerHTML = "";
      }
  }
  else{
    console.log(response.status);
  }
 } 

function graph(confirmed, recovered, critical, deaths){
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["confirmed", "recovered", "critical", "deaths"],
          datasets: [{
              label: ["Cases"],
              data: [confirmed, recovered, critical, deaths],
              backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}