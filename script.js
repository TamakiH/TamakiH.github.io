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
        document.getElementById("cases").innerHTML = "Cases: " +data_json.confirmed;
        document.getElementById("critical").innerHTML = "Critical: " +data_json.critical;
        document.getElementById("death").innerHTML = "Death: " +data_json.deaths;
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
    console.log(response.status)
  }
  graph();
}

function graph(){
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
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