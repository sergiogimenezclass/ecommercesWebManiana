function change_image(image){
    let container = document.getElementById("main-image");
   container.src = image.src;
}

let armar_producto = function() {
    // let productos = []
    let producto = {}
    producto.marca = document.querySelector('.brand').innerHTML
    producto.precio = document.querySelector('.act-price').innerHTML
    producto.talle = document.querySelector('input[type=radio]:checked').value
    producto.descripcion = document.querySelector('.about').innerHTML
    producto.nombre = document.querySelector('.nombre').innerHTML
    console.log(producto)
    
    
    localStorage.setItem('producto', JSON.stringify(producto))

    // Marca
    // Precio
    // Talle
    // Descripcion
    // Nombre
    // Fotos
}


let usarLocalStorage = function() {
    console.log('Estamos por usar LocalStorage')
    localStorage.setItem('producto','Aca va el producto completo')
    localStorage.setItem('marca',document.querySelector('.brand').innerHTML)
    localStorage.setItem('precio',document.querySelector('.act-price').innerHTML)
    
}

armar_producto()


