//Array de los productos
let allProducts = [];

//Cargo los productos que tengo en el Array segun stock
const cargarProductos = async () => {
    const resp = await fetch('js/stock.json');
    const data = await resp.json();

    allProducts = data;
    showProducts(allProducts);
  }

  cargarProductos();

  //Para crear cada producto automaticamente
  const contenedorProductos = document.getElementById('contenedorProductos');

  const showProducts = (array) => {
    contenedorProductos.innerHTML = '';
    array.forEach((producto) => {

//Descripciones de cada producto que esta en el array
    const div = document.createElement('div');
    div.className = "col";
    div.innerHTML = `<div class="card">
                        <img src=${producto.imagenes} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text rojo">Precio: $${producto.precio}</p>
                            <button onclick="agregarAlCarrito(${producto.id})" class="btn-comprar">Agregar al Carrito</button>
                        </div>
                     </div>`;
  contenedorProductos.appendChild(div);
  });
  }

  showProducts(allProducts);

// Funcion para guardar los productos en el storage
const storeProducts = (clave, valor) => {
    localStorage.setItem(clave, valor)};

//Aplico la funcion por cada producto de mi array productos
for (const producto of allProducts) {
    storeProducts (producto.id, JSON.stringify(producto));
}

//Selectores
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0];
const botonAbrir = document.getElementById('boton-carrito');
const botonCerrar = document.getElementById('carritoCerrar');
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];

//Sale la pantalla al hacer click en modal se hace visible
botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
})
//Cerrar la pantalla modal
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click();
})
//Evito que al hacer click en cualquier parte del modal el mismo se cierre
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation();
})