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
    
    let listado = []
    listado.push(producto)
    if (localStorage.getItem('producto')) {
        // trabajamos con version que haya del localStorage
        listado = JSON.parse(localStorage.getItem('producto'))
    }
    if (localStorage.getItem('producto')) {
        // Existe el array en el localStorage
        listado.push(producto)
        localStorage.setItem('producto', JSON.stringify(listado))
    } else {
        // No esta definido en el localStorage. Hay que crearlo
        localStorage.setItem('producto', JSON.stringify(listado))
    }
    console.log(listado)
    

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


