// condicionales

// declaramos la variable edad
//(==) comparamos valores sin importar el tipo de dato 
//(===) comparamos valores respetando el tipo de dato

const age = prompt ("Ingresa tu edad")
const country = prompt ("Ingresa tu país").toLowerCase();

if (age >= 16 && country != "alemania" ) {

    alert ("Se habilitó el catálogo de peliculas violentas")

}
else {

    alert ("No tienes permiso de ver este catálogo")

}

