function valorVenta(venta){
    return venta.cantidad * venta.precio
}

function totalVendido(ventas){
    let total = 0;
    for(const venta of ventas){
        total = total + valorVenta(venta)
    }
    return total;
}

function unidadesVendidas(ventas){
    let total = 0
    for(const venta of ventas){
        total = total + venta.cantidad
    }
    return total;
}

function ventaMayor(ventas){
    let mayor = null;
    for(const venta of ventas){
        if(mayor === null || valorVenta(venta) > valorVenta(mayor)){
            mayor = venta
        }
    }
    return mayor;
}

function ticketPromedio(ventas){
    let total = 0
    let validas = 0
    
    for(const venta of ventas){
        if (valorVenta(venta) > 0){
            total += valorVenta(venta);
            validas += 1;
        }
    }
    if (validas === 0){
        return 0;
    }
    return total/validas
}

module.exports = { valorVenta, totalVendido, unidadesVendidas, ventaMayor, ticketPromedio};