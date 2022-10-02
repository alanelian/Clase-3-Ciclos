// Ciclos por conteo - for

for(let i=1; 1<=10; i++){
    //esta porcion de codigo es la que se va a repetir
    console.log("Vuelta nro "+i);
}
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}


//Solicitud de usuario y contraseña (con ciclo for y break)
for(let i=1; i<=3; i++){
    let usuario = prompt("Ingresa nombre de usuario");
let contrasenia = prompt("Ingresa contraseña para "+usuario);
if((usuario == "Neo2032") && (contrasenia == "Matrix_02")){
    console.log("Bienvenido Neo!");
    break;
}else{
    console.log("Usuario y/o contraseña invalidos, restan "+(3-i)+" intento");
}
}


//Imprimir los numeros impares del 1 al 10 (ciclo for y continue con el operador % modulo)
for (let i=1;i<=10;i++){
    if(i%2==0){
        continue;
    }else{
        console.log(i);
    }
}



//sumar 5 valores ingresados por el usuario
let acumulador = 0;
for(let i=1;i<=5;i++){
    let valor = parseInt(prompt("Ingresa un numero"));
    console.log("El usuario ingreso el valor: "+valor);
    acumulador = acumulador + valor;
    console.log("El acumulador: "+acumulador);
}

//Solicitar a un alumno 3 notas de la materia informatica, y luego mostrarle el promedio de las mismas.
//Si el promedio es mayor o igual a 7 entonces informarle que aprobo la materia, sino que debe recuperar.

let acumulador1 = 0;
for (let i=1;i<=3;i++){
    let notas = parseInt(prompt("Ingresar la nota"));
    alert("Nota N°"+i+": "+notas)
    acumulador1 = acumulador1 + notas;
    alert("La nota es de: " +acumulador1)
}
let promedio = acumulador1 / 3;
alert("El promedio es "+promedio)

if(promedio>=7){
    alert("Aprobaste la materia!!!");
}else{
    alert("Debes recuperar la materia :(");
}
/* Version profe:
let acumulador = 0;
for (let i=1;i<=3;i++){
    let nota=parseInt(prompt("Ingresa la nota nro "+i));
    acumulador = acumulador + nota;
}
let promedio = acumulador / 3;
console.log("El promedio es "+promedio);

if(promedio>=7){
    alert("Aprobaste la materia!!!")
}else{
    alert("Debes recuperar la materia :(");
}
*/

console.log("Lista de compras");
let producto=prompt("Ingresa el producto (s para salir)");
while(producto!="s"){
    console.log(producto);
    producto= prompt("Ingresa el producto (s para salir)")
}

let dato;
do{
    dato=prompt("Ingresa una palabra (salir para finalizar");
    if(dato!="salir"){
        console.log(dato);
    }
    console.log(dato);
}while(dato!="salir")


let fruta=prompt("Ingresa la fruta y te dire el precio por kg (s para salir)");

while(fruta!="s"){
    switch (fruta){
        case "manzana":
            console.log("El precio de la manzana es $299.00");
            break;
        case "banana":
            console.log("El precio de la manzana es $199.00");
            break;
        case "frutilla":
            console.log("El precio de la manzana es $699.00");
            break;
        case "durazno":
            console.log("El precio de la manzana es $350.00");
            break;
        case "mandarina":
            console.log("El precio de la manzana es $318.00");
            break;
        case "uva":
        case "naranja":
            console.log("El precio de la uva y la naranja es 567.00");
        default:
            console.log("Fruta sin stock");
            break;
    }
    fruta=prompt("Ingresa la fruta y te dire el precio por kg (s para salir)");
}


let numero = parseInt(prompt("Ingresar la cantidad de veces que se repetira el patron"));

for(let i=1;i<=numero;i++){
    console.log("*")
}

