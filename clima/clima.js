const axios = require("axios"); 


let apiKey = "585ef22d516a17971850c536db35c257";


let getClima = async (lat, long) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`)

    return {
        temperatura: clima.data.main.temp
    }
}

module.exports = {
    getClima, 
}