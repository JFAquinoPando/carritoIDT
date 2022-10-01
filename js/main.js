import { guardar, obtener } from "./persistencia.js";

const btnComprar = $("#comprar")

btnComprar.on("click", function(){
    const producto = {
        nombre: 'Gabrielle Essence Eau De Parfum',
        precio: 169.99,
        descuento: 11.76,
        cantidad: 2
    }

    const productoJson = JSON.stringify(producto)
    console.log(producto);
    console.log(productoJson);
    guardar("producto",productoJson)
})

function cargarProductos(){
    const productoJson = obtener("producto")
    const producto = JSON.parse(productoJson)
    console.log("desde el carrito",producto);
    return producto;
}

const carrito = $("#productos")
console.log(carrito.length);
if (carrito.length) {
    const paraCarrito = cargarProductos()
    /*
    <tr>
                <td>Descripcion</td>
                <td>Precio</td>
                <td>Descuento</td>
                <td>Precio con descuento</td>
                <td>Cantidad</td>
                <td>Total</td>
            </tr>
    */
    carrito.html(`<tr>
    <td>${paraCarrito.nombre}</td>
    <td>${paraCarrito.precio}</td>
    <td>${paraCarrito.descuento}</td>
    <td>${(1-(paraCarrito.descuento/100)) * paraCarrito.precio}</td>
    <td>${paraCarrito.cantidad}</td>
    <td>${(1-(paraCarrito.descuento/100)) * paraCarrito.precio * paraCarrito.cantidad }</td>
    </tr>`)

}