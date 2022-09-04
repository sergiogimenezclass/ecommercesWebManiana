let myCart = function cart() {
    
    // Objeto carrito
    let carrito = {}
    carrito.id = 0
    carrito.productos = []
    carrito.subtotal = 0
    carrito.envio = 0
    carrito.total = 0
    carrito.cliente = ""

    console.log(carrito)

    // Objeto Cliente
    let cliente = {}
    cliente.nombre = ""
    cliente.foto = ""

    console.log(cliente)

    // Objeto tarjeta de credito
    let tarjeta = {}
    tarjeta.numero = 0
    tarjeta.titular = ""
    tarjeta.expiracion = ""
    tarjeta.cvv = 000
    
}

myCart()