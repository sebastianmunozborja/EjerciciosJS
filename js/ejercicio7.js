//ejercicio de lógica
//los tres iguales valida que la variable y lo ingresado sea el mismo tipo de dato y el valor

let day = prompt("ingrese el día");

if (day === "null" || day === "") {
  alert("opción invalida");
} else {
  day = day.toLowerCase();
    if (
      day == "lunes" ||
      day == "martes" ||
      day == "miercoles" ||
      day == "miércoles" ||
      day == "jueves" ||
      day == "viernes"
    ) {
      alert("es un día entre semana");
    } else {
      //if anidado
      if (day === "sabado" || day === "domingo" || day === "sábado") {
        alert("es un día de fin de semana");
      } else {
        alert("por favor ingresar sólo días de la semana");
      }
    }
  }


/**
 * Notas
 * mayusculas
 * vacio
 * palabras que no son días
 * tildes
 */
