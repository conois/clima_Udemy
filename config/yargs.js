const argv = require("yargs").options({
    direccion: {
        alias: "d",
        description: "Direccion de la ciudad para obtener el clima",
        demand: true,
    }
})
.help()
.argv

module.export= {
    argv
}