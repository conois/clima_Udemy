const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");


const argv = require("yargs").options({
        direccion: {
            alias: "d",
            description: "Direccion de la ciudad para obtener el clima",
            demand: true,
        }
    })
    .help()
    .argv

let getInfo = async (direccion) => {

    try {
        let coors = await lugar.getLugarLatLong(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `La tempera en ${coors.direccion} es de ${temp.temperatura} °C `

    } catch (error) {
        return `No se ha podido obtener la información de ${direccion}`
    }
}

getInfo(argv.direccion).then(mensaje => console.log(mensaje)).catch(err => {
    console.log("Error, ", err)
});