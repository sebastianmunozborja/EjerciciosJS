let department = prompt("Ingrese un Departamento entre: Cundinamarca, Quindio, Antioquia o Valle")
let motive = prompt("Ingrese el motivo de su Visita en el Departamento elegido con anterioridad. Puede validar: Turismo, Comidas o Museos")

if (department === "" || motive ==="") {
    alert("Debe ingresar el Departamento y el motivo de la visita")
} else {
    department = department.toLowerCase();
    motive = motive.toLowerCase();
    if (department === "cundinamarca" && motive === "turismo") {
        alert("En Cundinamarca puedes visitar lugares como: Zipaquirá, Monserrate y Guatavita")
    } else {
        if (department === "cundinamarca" && motive === "comidas") {
            alert("En Cundinamarca puedes probar: Garullas, Ajiaco  y Caldo de Costilla ")
        } else {
            if (department === "cundinamarca" && motive === "museos") {
                alert("En Cundinamarca puedes visitar los siguientes museos: Casa Museo Salto de Tequendama, Museo Aeroespacial Fuerza Aérea Colombiana y Museo Indigena en Guatavita")
            } else {
                if ((department === "quindio" || department === "quindío") && motive === "turismo") {
                    alert("En Quindío puedes visitar lugares como: Salento, Valle de Cocora y Armenia")
                } else {
                    if ((department === "quindio" || department === "quindío") && motive === "comidas") {
                        alert("Puedes probar el Mondongo,la Trucha y el café")
                    } else {
                        if ((department === "quindio" || department === "quidío") && motive === "museos") {
                            alert("Puedes visitar el Museo del Oro Quimbaya en Armenia, Museo Gráfico y Audiovisual del Quindio en Calarcá y Casa Museo Arte Universal en Filandia")
                        } else {
                            if (department === "antioquia" && motive === "turismo") {
                                alert("Puedes visitar la Comuna 13 , Guatape y Pueblito Paisa")
                            } else {
                                if (department === "antioquia" && motive === "comidas") {
                                    alert("puedes probar la Bandeja Paisa, el fiambre y el arroz Paisa")
                                } else {
                                    if (department === "antioquia" && motive === "museos") {
                                        alert("puedes visitar el Museo de Arte Moderno en Medellín, Museo de Geociencias y el Planetario de Medellín Jesús Emilio Ramírez")
                                    } else {
                                        if (department === "valle" && motive === "turismo") {
                                            alert("Puedes visitar elZoológico de Cali, Isla Malpelo y la Basílica del Señor de los Milagros de Buga")
                                        } else {
                                            if (department === "valle" && motive === "comidas") {
                                                alert("Puedes probar la chuleta,el Cholado y la Lulada")
                                            } else {
                                                if (department === "valle" && motive === "museos") {
                                                    alert("puedes visitar el Museo la Tertulia en Calí, Museo Aéreo Fenix en La Esmeralda y Museo del Oro Calima del Banco de la República en Cali")
                                                } else {
                                                            alert("Debe colocar los dos datos: departamento y motivo de la visita")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }