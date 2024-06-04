console.log('comics');

window.onload = function () {
    var nombre = prompt("Por favor, ingresa tu nombre y apellido:");
    var edad = prompt("Por favor, ingresa tu edad:");

    if (nombre && edad) {
        alert("¡Hola " + nombre + "! Bienvenido a nuestra página. Tu edad es: " + edad);
    } else {
        alert("Por favor, ingresa tu nombre y edad para continuar.");
    }
};



function calcularTotal(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}


var inventario = {
    "producto1": 10,
    "producto2": 5,
    "producto3": 0
};

function tieneStock(producto, cantidad) {

    if (inventario.hasOwnProperty(producto)) {

        if (inventario[producto] >= cantidad) {
            return true; // Hay stock
        } else {
            return false; // No hay stock
        }
    } else {
        return false; // El producto no está en el inventario
    }
}

// Array de productos en la tienda de cómics
var productosComics = [
    {
        titulo: "El regreso de Wolverine",
        autor: "Charles Soule, Steve Mcniven",
        precio: 15000,
        stock: 10
    },
    {
        titulo: "Batman: Year One",
        autor: "Frank Miller",
        precio: 12000,
        stock: 8
    },
    {
        titulo: "Batman caballero blanco",
        autor: "Sean Murphy, Matt Hollingsworth",
        precio: 11000,
        stock: 6
    }
];

//mostrar todos los productos en la tienda
function mostrarProductos() {
    console.log("Productos disponibles en la tienda de cómics:");
    productosComics.forEach(function (comic) {
        console.log("Título:", comic.titulo);
        console.log("Autor:", comic.autor);
        console.log("Precio:", comic.precio);
        console.log("Stock:", comic.stock);
        console.log("--------------");
    });
}

//buscar un producto por título
function buscarProducto(titulo) {
    var comicEncontrado = productosComics.find(function (comic) {
        return comic.titulo === titulo;
    });
    if (comicEncontrado) {
        console.log("Comic encontrado:");
        console.log("Título:", comicEncontrado.titulo);
        console.log("Autor:", comicEncontrado.autor);
        console.log("Precio:", comicEncontrado.precio);
        console.log("Stock:", comicEncontrado.stock);
    } else {
        console.log("El comic no está disponible en la tienda.");
    }
}


var producto = "producto1";
var cantidad = 3;

if (tieneStock(producto, cantidad)) {
    console.log("Sí hay suficiente stock de " + producto);
} else {
    console.log("No hay suficiente stock de " + producto);
}

var carrito = [];
var envioGratis = false;

function agregarAlCarrito() {
    var precioProducto = parseFloat(document.getElementById("precio").value);
    if (!isNaN(precioProducto)) {
        carrito.push(precioProducto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Por favor, ingresa un precio válido.");
    }
}

function calcularTotal() {
    var precioTotal = carrito.reduce((total, precio) => total + precio, 0);
    var mensaje = "";

    if (precioTotal > 5000) {
        envioGratis = true;
        mensaje = "¡Envío gratis!";
    } else {
        precioTotal += 2000;
        mensaje = "Costo de envío: $2000";
    }

mensaje += "<br>Precio total: $" + precioTotal.toFixed(2);

    document.getElementById("resultado").innerHTML = mensaje;
}
// navbar menu 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => { nav.classList.add("visible") })

cerrar.addEventListener("click", () => { nav.classList.remove("visible") })