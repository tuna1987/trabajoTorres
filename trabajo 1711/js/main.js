let miNumero = 0;

function generarNumero() {
    miNumero = Math.floor(Math.random() * 100) + 1;
    document.getElementById("myInput").value = miNumero;
}

function agregarANumeroLista() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(miNumero));
    document.getElementById("myList").appendChild(li);
}
function sumarNumeros() {
    let numeros = document.getElementById("myList").getElementsByTagName("li");
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += parseInt(numeros[i].innerText);
    }
    document.getElementById("resultado").innerText = "La suma es: " + suma;
}

function calcularPromedio() {
    let numeros = document.getElementById("myList").getElementsByTagName("li");
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += parseInt(numeros[i].innerText);
    }
    let promedio = suma / numeros.length;
    document.getElementById("resultadoPromedio").innerText = "El promedio es: " + promedio.toFixed(2);
}

