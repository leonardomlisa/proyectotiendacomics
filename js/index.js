document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    const mensajeError = document.getElementById("mensaje-error");

    const botonEnviar = document.getElementById("boton-enviar");
    botonEnviar.addEventListener("click", function () {
        const nombre = nombreInput.value.trim();
        const edad = edadInput.value.trim();

        if (nombre && edad) {
            mensajeBienvenida.innerHTML = `¡Hola ${nombre}! Bienvenido a nuestra página. Tu edad es: ${edad}`;

            // Almacenar datos del cliente en localStorage
            const cliente = {
                nombre: nombre,
                edad: edad
            };
            localStorage.setItem('cliente', JSON.stringify(cliente));

            mensajeError.style.display = 'none';
            mensajeBienvenida.style.display = 'block';
        } else {
            mensajeError.innerHTML = "Por favor, ingresa tu nombre y edad para continuar.";
            mensajeError.style.display = 'block';
            mensajeBienvenida.style.display = 'none';
        }
    });

    // Intentar recuperar y mostrar los datos del cliente almacenados
    const clienteJSON = localStorage.getItem('cliente');
    if (clienteJSON) {
        const cliente = JSON.parse(clienteJSON);
        mensajeBienvenida.innerHTML = `¡Hola ${cliente.nombre}! Bienvenido de nuevo a nuestra página. Tu edad es: ${cliente.edad}`;
        mensajeBienvenida.style.display = 'block';
    } else {
        mensajeError.innerHTML = "Por favor, ingresa tu nombre y edad para continuar.";
        mensajeError.style.display = 'block';
    }

    // Calculo total mas chequeo de stock disponible
    function calcularTotal(carrito) {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].precio;
        }
        return total;
    }

    const inventario = {
        "producto1": 10,
        "producto2": 5,
        "producto3": 0
    };

    function tieneStock(producto, cantidad) {
        return inventario.hasOwnProperty(producto) && inventario[producto] >= cantidad;
    }

    // Array de productos en la tienda de cómics
    const productosComics = [
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

    // Crear una lista de productos
    const listaProductos = document.getElementById("lista-productos");
    productosComics.forEach((comic, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${comic.titulo}`;
        listaProductos.appendChild(listItem);
    });

    // Bucle para seleccionar comics
    let seleccionado = false;
    productosComics.forEach(producto => {
        const respuesta = confirm("¿Quieres comprar " + producto.titulo + "?");
        seleccionado = respuesta;
        if (!respuesta) {
            // console.log("Compra cancelada.");
            return;
        }
    });

    // Alerta de cancelación de compra si no se seleccionó ningún comic
    if (!seleccionado) {
        // console.log("Compra cancelada.");
    }

    //mostrar todos los productos en la tienda
    function mostrarProductos() {
        const productosContainer = document.getElementById("productos-container");
        productosContainer.innerHTML = ""; // Limpiar contenido previo
        productosComics.forEach(comic => {
            const comicInfo = document.createElement("div");
            comicInfo.innerHTML = `
                <p><strong>Título:</strong> ${comic.titulo}</p>
                <p><strong>Autor:</strong> ${comic.autor}</p>
                <p><strong>Precio:</strong> ${comic.precio}</p>
                <p><strong>Stock:</strong> ${comic.stock}</p>
                <hr>
            `;
            productosContainer.appendChild(comicInfo);
        });
    }

    //busqueda de un producto
    function buscarProducto(titulo) {
        const comicEncontrado = productosComics.find(comic => comic.titulo === titulo);
        if (comicEncontrado) {
            // console.log("Comic encontrado:");
            // console.log("Título:", comicEncontrado.titulo);
            // console.log("Autor:", comicEncontrado.autor);
            // console.log("Precio:", comicEncontrado.precio);
            // console.log("Stock:", comicEncontrado.stock);
        } else {
            // console.log("El comic no está disponible en la tienda.");
        }
    }

    //practica de stock
    const producto = "producto1";
    const cantidad = 3;

    if (tieneStock(producto, cantidad)) {
        // console.log("Sí hay suficiente stock de " + producto);
    } else {
        // console.log("No hay suficiente stock de " + producto);
    }

    const carrito = [];
    let envioGratis = false;

    // Calculo de envio gratis o costo de envio
    function agregarAlCarrito() {
        const precioProducto = parseFloat(document.getElementById("precio").value);
        if (!isNaN(precioProducto)) {
            carrito.push(precioProducto);
            // console.log("Producto agregado al carrito.");
        } else {
            // console.log("Por favor, ingresa un precio válido.");
        }
    }

    function calcularTotal() {
        let precioTotal = carrito.reduce((total, precio) => total + precio, 0);
        let mensaje = precioTotal > 5000 ? "¡Envío gratis!" : "Costo de envío: $2000";
        precioTotal = precioTotal > 5000 ? precioTotal : precioTotal + 2000;
        mensaje += "<br>Precio total: $" + precioTotal.toFixed(2);
        document.getElementById("resultado").innerHTML = mensaje;
    }

    // navbar menu 
    document.addEventListener("DOMContentLoaded", function() {
        const nav = document.querySelector("#nav");
        const abrir = document.querySelector("#abrir");
        const cerrar = document.querySelector("#cerrar");
    
        abrir.addEventListener("click", () => { nav.classList.add("visible") });
        cerrar.addEventListener("click", () => { nav.classList.remove("visible") });
    });
    
    //creando clase de ejemplo con comic batman the dark knight returns
    class Comic {
        constructor(titulo, autor) {
            this.titulo = titulo;
            this.autor = autor;
        }

        mostrarInfo() {
            // console.log("Título:", this.titulo);
            // console.log("Autor:", this.autor);
        }
    }

    const comicBatman = new Comic("Batman: The Dark Knight Returns", "Frank Miller");
    comicBatman.mostrarInfo();
});


