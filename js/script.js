
// Fonction appelée lors du chargement de la page 
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal (aujourd'hui)
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Lendemain
      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      //Après lendemain
      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      //Après après lendemain
      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);


      // Modifier le DOM (pour aujourd'hui)
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // Lendemain
      document.getElementById('test-forecast-main').innerHTML = main1;
      document.getElementById('test-forecast-more-info').innerHTML = description1;
      document.getElementById('test-weather-container').innerHTML = icon1;
      document.getElementById('test-forecast-temp').innerHTML = `${temp1}°C`;

      //Après lendemain
      document.getElementById('test2-forecast-main').innerHTML = main2;
      document.getElementById('test2-forecast-more-info').innerHTML = description2;
      document.getElementById('test2-weather-container').innerHTML = icon2;
      document.getElementById('test2-forecast-temp').innerHTML = `${temp2}°C`;

      //Après après lendemain
      document.getElementById('test3-forecast-main').innerHTML = main3;
      document.getElementById('test3-forecast-more-info').innerHTML = description3;
      document.getElementById('test3-weather-container').innerHTML = icon3;
      document.getElementById('test3-forecast-temp').innerHTML = `${temp3}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function start(city) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal (aujourd'hui)
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Lendemain
      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      //Après lendemain
      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      //Après après lendemain
      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);


      // Modifier le DOM (pour aujourd'hui)
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // Lendemain
      document.getElementById('test-forecast-main').innerHTML = main1;
      document.getElementById('test-forecast-more-info').innerHTML = description1;
      document.getElementById('test-weather-container').innerHTML = icon1;
      document.getElementById('test-forecast-temp').innerHTML = `${temp1}°C`;

      //Après lendemain
      document.getElementById('test2-forecast-main').innerHTML = main2;
      document.getElementById('test2-forecast-more-info').innerHTML = description2;
      document.getElementById('test2-weather-container').innerHTML = icon2;
      document.getElementById('test2-forecast-temp').innerHTML = `${temp2}°C`;

      //Après après lendemain
      document.getElementById('test3-forecast-main').innerHTML = main3;
      document.getElementById('test3-forecast-more-info').innerHTML = description3;
      document.getElementById('test3-weather-container').innerHTML = icon3;
      document.getElementById('test3-forecast-temp').innerHTML = `${temp3}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
