
/*Tercer ejercicio
3. Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert.

let requestedNumber = parseInt(prompt(`Introduce un numero`));

if ( (requestedNumber % 2) === 0){
    alert(`El numero que ingreso es par`);
} else if ( requestedNumber % 2 === 1){
    alert(`El numero que ingreso no es par`);
}
*/

/*Cuarto ejercicio
4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.

let number = parseInt(prompt(`Ingrese un numero`));

if ( number === 1000 ){
    console.log(`Ganaste un premio`);
} else {
    console.log(`Lo sentimos, sigue participando`);
}
*/

/*Quinto ejercicio
5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.

let firtsNumber = parseInt(prompt(`Ingresa un numero`));
let secondNumber = parseInt(prompt(`Ingresa otro numero`));

if ( firtsNumber > secondNumber ){
    console.log(`El primer numero es mayor al segundo numero`);
} else if ( firtsNumber < secondNumber ){
    console.log(`El segundo numero es mayor al primer numero`);
}
*/

/*Sexto ejercicio
6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.

let firtsNumber = parseInt(prompt(`Ingresa un numero (Solo se aceptan numeros enteros)`));
let secondNumber = parseInt(prompt(`Ingresa otro numero`));
let thirdNumber = parseInt(prompt(`Ingresa otro numero`));


if ( firtsNumber === secondNumber){
    console.log (`El primer numero y el segundo numero son iguales`);
} else if ( secondNumber === thirdNumber){
    console.log (`El segundo numero y el tercer numero son iguales`);
} else if ( thirdNumber === firtsNumber){
    console.log (`El tercer numero y el primer numero son iguales`);
} else if ( firtsNumber > secondNumber && firtsNumber > thirdNumber ){
    console.log (`El primer numero es mayor`);
} else if ( secondNumber > firtsNumber && secondNumber > thirdNumber ){
    console.log (`El segundo numero es mayor`);
} else if ( thirdNumber > firtsNumber && thirdNumber >secondNumber ){
    console.log (`El tercer numero es mayor`);
}
*/

/*Septimo ejercicio
7. Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje.

let day = prompt(`Ingrese un dia de la semana`);

if ( day === `Lunes` || day === `lunes`) {
    console.log(`El dia que selecionaste es Lunes`);
} else if ( day === `Viernes` || day === `viernes`) {
    console.log(`El dia que selecionaste es Viernes`);
} else if ( day === `Sabado` || day === `sabado` || day === `Domingo` || day === `domingo`){
    console.log(`El dia que selecionaste es Sabado o Domingo`);
} else {
    console.log(`El dia que seleciono no nos importa, Tenga un buen dia.`);
}
*/

/*Octavo ejercicio
8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10.

let note = parseFloat(prompt(`Ingrese su calificación (Esta debera de estar entre 1 o 10)`));

if ( note >= 1 && note <= 10){
    if ( note <= 5 ){
        console.log(`Reprobado`);
    } else if ( note >= 6 && note <= 8 ){
        console.log(`Regular`);
    } else if ( note === 9 ){
        console.log(`Bien`);
    } else if ( note === 10 ){
        console.log(`Excelente`);
    }

} else {
    console.error(`Datos ingresados incorrectos`);
}

*/


/*Noveno ejercicio
9. Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping.

let topping = prompt(`¿Qué topping desea agregar?`);
let oreo = 10;
let kitkat = 15;
let brownie = 20;
let iceCream = 50;
let price

topping = topping.toLowerCase();

if ( topping == `oreo` || topping == `kitkat` || topping == `brownie`){
    if ( topping == `oreo`){
        price = oreo + iceCream;
        console.log(`El helado con topping de oreo tiene un valor de: ${price} MXN`);
    } else if ( topping == `kitkat`){
        price = kitkat + iceCream;
        console.log(`El helado con topping de kitkat tiene un valor de: ${price}mx`);
    } else if ( topping == `brownie`){
        price = brownie + iceCream;
        console.log(`El helado con topping de brownie tiene un valor de: ${price} MXN`);
    }
} else {
    console.log(`No tenemos este topping, lo sentimos. El helado tiene un valor de:  ${iceCream} MXN`);
}
*/

