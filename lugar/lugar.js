const axios = require("axios");



let getLugarLatLong = async (direccion) => {

    let encodedURL = encodeURI(direccion);

    let peticion = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (peticion.data.status === "ZERO_RESULTS") {
        throw new Error("No existen resultados para la direccion ", direccion)
    }

    let result = peticion.data.results[0];
    let coors = result.geometry.location;

    return {
        direccion: result.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng,
    }

}

module.exports = {
    getLugarLatLong,
}