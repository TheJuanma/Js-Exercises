
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


/*
10. Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses
*/ 

let level = prompt(`Te damos la bienvenida al programa educativo de programacion Full Stack, a continuación escribir el nivel deseado`);
let scholarship;
let priceCourse = 4999;
let priceCarrera = 3999;
let priceMaster = 2999;
let timeCourse = 2;
let timeCarrera =  6;
let timeMaster = 12;


level = level.toLowerCase();

if ( level === `course` ){
    console.log(`Excentenle escogiste la opción Course, tiene un valor de: $4999 MXN `);
    let scholarship = prompt(`¿Cuentas con alguna Beca?`);

    scholarship = scholarship.toLowerCase();

    if ( scholarship === `facebook` ){
        console.log(`Cuentas con una beca Facebook que te hace un descuento del 20%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceCourse * 0.8)} MXN`);
        console.log(`La duración del curso son 2 meses entonces el pago total seria: ${Math.round(priceCourse * 0.8)*2} MXN`);
    } else if ( scholarship === `google` ){
        console.log(`Cuentas con una beca Google que te hace un descuento del 15%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceCourse * 0.85)} MXN`);
        console.log(`La duración del curso son 2 meses entonces el pago total seria: ${Math.round(priceCourse * 0.85)*2} MXN`);
    } else if ( scholarship === `jesua` ){
        console.log(`Cuentas con una beca Jesua que te hace un descuento del 50%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceCourse * 0.5)} MXN`);
        console.log(`La duración del curso son 2 meses entonces el pago total seria: ${Math.round(priceCourse * 0.5)*2} MXN`);
    }
    
} else if ( level === `carrera` ){
    console.log(`Excentenle escogiste la opción Carrera, tiene un valor de: 3999 MXN`);
    let scholarship = prompt(`¿Cuentas con alguna Beca?`);
    scholarship = scholarship.toLowerCase();

    if ( scholarship === `facebook` ){
        console.log(`Cuentas con una beca Facebook que te hace un descuento del 20%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceCarrera * 0.8)} MXN`);
        console.log(`La duración del curso son 6 meses entonces el pago total seria: ${Math.round(priceCarrera * 0.8)*6} MXN`);
    } else if ( scholarship === `google` ){
        console.log(`Cuentas con una beca Google que te hace un descuento del 15%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceCarrera * 0.85)} MXN`);
        console.log(`La duración del curso son 6 meses entonces el pago total seria: ${Math.round(priceCarrera * 0.85)*6} MXN`);
    } else if ( scholarship === `jesua` ){
        console.log(`Cuentas con una beca Jesua que te hace un descuento del 50%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceCarrera * 0.5)} MXN`);
        console.log(`La duración del curso son 6 meses entonces el pago total seria: ${Math.round(priceCarrera * 0.5)*6} MXN`);
    }

} else if ( level === `master` ){
    console.log(`Excentenle escogiste la opción Master, tiene un valor de: $2999 MXN`);
    let scholarship = prompt(`¿Cuentas con alguna Beca?`);

    scholarship = scholarship.toLowerCase();

    if ( scholarship === `facebook` ){
        console.log(`Cuentas con una beca Facebook que te hace un descuento del 20%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceMaster * 0.8)} MXN`);
        console.log(`La duración del curso son 12 meses entonces el pago total seria: ${Math.round(priceMaster * 0.8)*12} MXN`);
    } else if ( scholarship === `google` ){
        console.log(`Cuentas con una beca Google que te hace un descuento del 15%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceMaster * 0.85)} MXN`);
        console.log(`La duración del curso son 12 meses entonces el pago total seria: ${Math.round(priceMaster * 0.85)*12} MXN`);
    } else if ( scholarship === `jesua` ){
        console.log(`Cuentas con una beca Jesua que te hace un descuento del 50%`);
        console.log(`El precio mensual con el descuento seria: ${Math.round(priceMaster * 0.5)} MXN`);
        console.log(`La duración del curso son 12 meses entonces el pago total seria: ${Math.round(priceMaster * 0.5)*12} MXN`);
    }
}