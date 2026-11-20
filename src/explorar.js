const ventas = require('./datos.js');
console.log("cantidad de registros: ", ventas.length, "tu primer registro es: ", ventas[0], "y el ultimo registro es: ", ventas.at(-1), "producto: ", ventas[4].producto)
console.table(ventas)

