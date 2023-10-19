const API_KEY = "1db6416e75ec5c1ece521f97dd9f527f";
/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */

const getWeather = (lat,lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    // console.log( url );
    fetch(url)
    .then( (response)=>{ return response.json(); })
    .then( (json) => {
        console.log( json );
        console.log( json.name );
        console.log( json.main.temp);
        console.log( (json.main.temp - 273.15).toFixed(2) );
    })
    .catch( (error) => {
        console.log( error );
    });
}
const handleSuccess = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log( lat, lon );
    getWeather( lat,lon );
}
const handleError = () => {
    console.log( "error location" );
}
const weather_init = () => {
    navigator.geolocation.getCurrentPosition( handleSuccess, handleError );
}
weather_init();