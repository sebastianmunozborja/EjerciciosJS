let department = prompt("ingrese el departamento");

if (department === "null" || department === "") {
  alert("opción invalida");
} else {
  department = department.toLowerCase();

  if (department === "cundinamarca") {
    alert("la capital de Cundinamarca es Bogota");
  } else {
    if (department === "quindio" || department === "quindío") {
      alert("la capital de Quindio es Armenia");
    } else {
      if (department === "antioquia") {
        alert("la capital de Antioquia es Medellin");
      } else {
        if (department === "valle") {
          alert("la capital de Valle es Cali");
        }

        else {

            alert("por favor Ingresar sólo uno de los departamentos: Cundinamarca, Quindio, Antioquia o Valle");

        }
      }
    }
  }
  
}
