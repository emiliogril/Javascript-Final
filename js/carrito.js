
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

//Array carrito
let cart = [];

//Agregar los productos al carrito
const agregarAlCarrito = (itemId) => {
    const productoEnCarrito = cart.find((prod) => prod.id === itemId);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        let {id, nombre, precio} = allProducts.find( el => el.id == itemId )
        cart.push({id: id, nombre: nombre, precio: precio, cantidad: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    actualizarCarrito();
}
    


//Visualizar los productos que agrego al carrito, si no hay productos el carrito dice que esta vacio
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    
    if (cart.length == 0) {
        const div = document.createElement('div');
        div.classList.add('sinProductoEnCarrito');
        div.innerHTML = `<p>Tu carrito está vacio</p>`;
        contenedorCarrito.appendChild(div);
    } else {
    cart.forEach((prod) => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" 
                d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z">
                </path></svg></button>
             `
        contenedorCarrito.appendChild(div);
    })}

    contadorCarrito.innerText = cart.length;
    cart.reduce((acc, prod) => acc += prod.cantidad, 0);
    precioTotal.innerText = cart.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0);
}

//Eliminar los productos
const eliminarProducto = (itemId) => {
    const producto = cart.find((prod) => prod.id === itemId);

    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = cart.indexOf(producto);
        cart.splice(index, 1);
    }   
    actualizarCarrito();
}