const request = require("postman-request");

const BASE_URL = "http://api.weatherstack.com/current?";
const access_key = "81bde1da789dcd33552553e81e5624fb";
const url = BASE_URL + "access_key=" + access_key + "&query=mendoza";
console.log(url);
request(
    {
        url,
        json: true,
    },
    (error, response) => {
        console.log(
            `It is currently ${response.body.current.temperature}°C and the sky is ${response.body.current.weather_descriptions[0]}`
        );
    }
);
