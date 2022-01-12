const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: false,
        describe: 'Base de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Muestra hasta donde llega la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un Number';
        }
        return true;
    })

    .argv;

module.exports = argv; //lo que me interesa exportar es la constante argv