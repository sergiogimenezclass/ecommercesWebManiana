function change_image(image){
    let container = document.getElementById("main-image");
   container.src = image.src;
}

let armar_producto = function() {
    let producto = {}
    producto.marca = document.querySelector('.brand').innerHTML
    producto.precio = document.querySelector('.act-price').innerHTML
    producto.talle = document.querySelector('input[type=radio]:checked').value
    producto.descripcion = document.querySelector('.about').innerHTML
    producto.nombre = document.querySelector('.nombre').innerHTML
    console.log(producto)

    // Marca
    // Precio
    // Talle
    // Descripcion
    // Nombre
    // Fotos
}

armar_producto()