const ventas = require('./datos.js');
const {valorVenta, totalVendido, ventaMayor, ticketPromedio} = require('./analitica.js');

console.log("El ticket promedio es de: $", ticketPromedio(ventas));
//console.log("esta es la mayor venta: ", ventaMayor(ventas))

//console.log(valorVenta(ventas[0]));
//console.log(valorVenta(ventas[7]));


//console.log("cantidad de registros: ", ventas.length, "tu primer registro es: ", ventas[0], "y el ultimo registro es: ", ventas.at(-1), "producto: ", ventas[4].producto)
//console.table(ventas)

