//logica y algoritmos
//dirección, estado civil , cédula , celular

let userName = "";
let age = "";
let address = "";
let civilStatus = "";
let identification = "";
let mobile = "";
let email = "";
let salary = "";

function registerData() {
  userName = prompt("ingresa tu nombre");
  age = prompt("ingresa tu edad");
  address = prompt("ingresa tu dirección");
  civilStatus = prompt("ingresa tu estado civil");
  identification = prompt("ingresa tu identificación");
  mobile = prompt("ingresa tu número celular");
  email = prompt("ingresa tu E-Mail");
  salary = prompt("ingresa tu salario");
}
function showData() {
  alert(
    "tu nombre es " +
      userName +
      "\n  tu edad es " +
      age +
      " \n tu dirección es " +
      address +
      " \n tu estado civil es " +
      civilStatus +
      " \n tu identificación es " +
      identification +
      " \n tu número de celular es " +
      mobile +
      " \n tu E-mail es " +
      email +
      " \n tu salario es " +
      salary
  );
}
