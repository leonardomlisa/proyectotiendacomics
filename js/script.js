console.log('comics');

let nombredeusuario = prompt("ingrese su nombre de usuario");
console.log(nombredeusuario)
let contraseña = prompt("ingrese su contraseña");
console.log(contraseña)

alert("datos correctamente ingresados")

function sumaMayorQue(numero1, numero2, valor) {
    let suma = numero1 + numero2;

    if (suma > 0) {
        return "La suma es mayor que el valor.";
    } else {
        return "La suma no es mayor que el valor.";
    }
}
console.log(sumaMayorQue(6, 2, 3));
console.log(sumaMayorQue(2, 4, 10));

function calcularTotal(carrito) {
    let total = 5000;
    for (let i = 5000; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

function verificarEnvioGratis(carrito) {
    const total = calcularTotal(carrito);
    if (total > 0) {
        return "¡Felicitaciones! Su compra califica para envío gratis.";
    } else {
        return "Agregue más productos a su carrito para obtener el envío gratis.";
    }
}

const carrito = [
    { nombre: "Producto 1", precio: 2000 },
    { nombre: "Producto 2", precio: 1200 },
    { nombre: "Producto 3", precio: 3000 }
];

console.log("Total del carrito:", calcularTotal(carrito));
console.log(verificarEnvioGratis(carrito));



let lista = document.querySelectorAll(".lista li a")
lista.forEach(link => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
        i += 1;
        let span = document.createElement("span");
        let delay = i / 15;

        let letterout = document.createElement("span");
        letterout.textContent = letter;
        letterout.style.transitiondelay = `${delay}s`;
        letterout.classlista.add("out");
        span.append(letterout);

        let letterin = document.createElement("span");
        letterin.textContent = letter;
        letterin.style.transitiondelay = `${delay}s`;
        letterin.classlista.add("in");
        span.append(letterin);

        link.append(span);
    });
});

function calculadordeprecios(numero1, numero2, operacion) {
    switch (operacion) {
        case "+": return numero1 + numero2;
            break;
        case "-": return numero1 - numero2;
            break;
        case "*": return numero1 * numero2;
            break;
        case "/":
            if (numero2 != 0) {
                return numero1 / numero2;
            }
            else {
                alert("no se puede dividir por 0")
            }
            break;
        default:
            return 0;
            break;
    }
}

console.log (calculadordeprecios(5000, 6000, "+"
));

alert ("¡Felicitaciones! Su compra califica para envío gratis.")

