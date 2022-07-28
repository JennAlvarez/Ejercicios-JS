let edad = parseInt(prompt("que edad tienes?"))
let tutor= confirm ("ACEPTA si vienes con tu tutor")


if(edad >= 18){
    console.log("bienvenido a la fiesta");
} else if (tutor){
    console.log('puedes entrar con tu tutor');
} else {
    console.log ('no entra');
}