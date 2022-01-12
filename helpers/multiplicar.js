const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 20) => {

    try {




        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;


        }

        if (listar) {
            console.log('=======================');
            console.log(`     TABLA DEL ${base}`.rainbow);
            console.log('=======================');
            console.log(salida.green);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        const nombreArchivo = await `tabla-${base}.txt `;
        return nombreArchivo;
    } catch (error) {
        throw error;
    }


};


module.exports = {
    crearArchivo: crearArchivo
};