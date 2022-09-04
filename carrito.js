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

    console.log(tarjeta)
}

myCart()

let getProductos = function() {
    console.log('------Antes de convertirlo')
    console.log(localStorage.getItem('producto'))
    console.log('------Despues de convertirlo')
    let producto = JSON.parse(localStorage.getItem('producto'))
    console.log(producto)
    document.querySelector('.item-name').innerHTML = producto.marca
    document.querySelector('.item-price').innerHTML = producto.precio
    document.querySelector('.item-desc').innerHTML = producto.descripcion
}

getProductos()