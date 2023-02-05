const APIKEY = "b03ca71185d42e3c18373de7289f6d84";

function onGeoOk(position) {
  const city = document.querySelector("#weather span:first-child");
  const weather = document.querySelector("#weather span:last-child");
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`I live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const name = data.name;
      weather.innerText = data.weather[0].main;
      city.innerText = `📍${name}`;
    })
  );
}
function onGeoError() {
  alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
