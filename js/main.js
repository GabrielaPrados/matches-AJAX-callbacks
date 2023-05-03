let main = document.querySelector("main");
const datosAcomparar = datosIngresados;
let color;
let confirmacionApellidos;
const igualdad = [];
const igualdad2 = [];
const igualdadApellido = [];
const igualdadApellido2 = [];

/* al iniciar la pagina que se cargue home como vista principal */

llamarAjax("ingreso", "pages/inicio.html", main);
respuesta1();


/* funcion para cargar la consigna que corresponda. el id se saca del contenido de cada article (texto en posicion 9) */
const consignas = (id) => {
    
    const consignas = consignasAmostrar;
    const button = document.querySelector("button")
    let consigna = ""

    for (let i = 0; i < consignas.length; i++) {
        if (consignas[i].id == id) {
            consigna = consignas[i].consigna
        }      
    }

    const divI = document.createElement("div");
    divI.id = "divI";
    divI.innerHTML = consigna;
  
    button.insertAdjacentElement("beforebegin", divI);
}


/* funcion que recibe el array con objetos de base de datos DATOS INGRESADOS que ahora se llama "datosAcomparar" y se comparan los nombres y los apellidos segun se necesite */
function compararNombres(arr, propiedad, texto, arrpush) {
    const inputs = document.querySelectorAll("#sectionIntegrantes dd");

    arr.forEach((elem) => {
        const buscar = elem[propiedad];
        const eliminarI = arr.indexOf(elem);

        for (let i = 0; i < arr.length; i++) {
            let dato = arr[i][propiedad];
            if (i !== eliminarI && buscar === dato && buscar !== "") {
                arrpush.push(dato);
            }
        }
    });

    if (igualdad.length !== 0) {
        inputs.forEach((input) => {
            if (input.previousElementSibling.innerHTML.includes(texto)) {
                for (let i = 0; i < arrpush.length; i++) {
                    if (arrpush[i] === input.innerHTML) {
                        input.style.color = color;
                        input.style.border = "solid";
                    }
                }
            }
        });
    }
}

const variasFun = (cb) => {
    const ocultarBoton = document.querySelector("#buscarNombres")
    ocultarBoton.classList.add("visibility")
    articulos();
    capitalize()
    compararNombres(datosAcomparar, "primerNombre", "Primer nombre", igualdad);
    compararNombres(datosAcomparar, "segundoNombre", "Segundo nombre", igualdad2);
    if (typeof cb === "function") cb()
}

const timeOut1 = function () {
    setTimeout(() => {
        if (igualdad.length === 0 && igualdad2.length === 0) {
      llamarAjax( "sinCoincidenciasNombres",   "views/sinCoincNombres.html",  main  );
  } else {
      setTimeout(() => {
          llamarAjax(" preguntar", "views/confirmar.html", main);
      }, 4000);
  }
  }, 2000);
}

const timeOut2 = function () {
    setTimeout(() => {
        if (igualdadApellido.length === 0 && igualdadApellido2.length === 0) 
        {
            const sinCoincidenciasApellidos = ajax(
                "views/sinCoincApellidos.html"
            );
            sinCoincidenciasApellidos.addEventListener("load", () => {
                if (sinCoincidenciasApellidos.status === 200) {
                    main.innerHTML = sinCoincidenciasApellidos.response;

                    respuesta2(datosAcomparar);
                }
            });
        } else {
            setTimeout(() => {
                const fin = ajax("views/graciasPorPart.html");
                fin.addEventListener("load", () => {
                     if (fin.status === 200) {
                            main.innerHTML = fin.response;
                            respuesta2(datosAcomparar);
                        }
                     }, 1000);
            });
        }
    }, 4000);
}
/* -------------------------------------------   EVENTOS ------------------------------------------------- */

main.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.target;

    /* que el boton del archivo inicio me lleve a archivo ejercicio donde estan las consgnas */
    if (t.matches("#inicio a") || t.matches("#mostrarConsignas button")) {
        const ejercicio = ajax("pages/ejercicio.html")
        ejercicio.addEventListener("load", () => {
            if (ejercicio.status === 200) {
                main.innerHTML = ejercicio.response
            }
        })
    }
    
    /* que al clickear el article, se abra la consigna */
    if (t.matches("#seccionEjercicio article")) {
        const id = t.innerHTML[9]
        llamarAjax("mostrarConsigna", "pages/consignas.html", main, ()=>consignas(id) )
    }

  
    /* que el boton IR A FORMULARIO, me lleve al archivo cantidadDatos para que registre la cantidad de datos a ingresar */
    if (t.matches("#irAformulario")) {
        llamarAjax("cantidadDatos", "views/cantidadDatos.html", main);
    }

    /* obtener la cantidad de datos que va a incorporar */
    /* VER EVENTO EN bd.js */

    /* que cuando clickee e INGRESAR DATOS, se genere un objeto y lo incluya en el ARRAY */
    /* VER EVENTO EN bd.js */

    /* que cuando el cliente quiera dejar de ingresar datos y clickea IR A PLANTILLA, se llame al archivo home vacio y que se genere un article por cada persona ingresada */
    if (t.matches("irPlantilla")) {
        llamarAjax("home", "views/home.html", main,  ()=> capitalize())
    }

    /* boton de home para comenzar busqueda de nombres */
    if (t.matches("#buscarNombres")) {
        llamarAjax("elegirColoresNombres", "views/nombres.html", main);
    }

    /* input con valores de colores */
    if (t.matches("#elegir")) {
        color = t.value;
    }

    /* submit de pagina nombres para colocar colores a nombres repetidos */
    if (t.matches("#coloresNombres")) {
        llamarAjax("inicio", "views/home.html", main, ()=>variasFun (() => timeOut1()))
    }

    /* gurdar confirmacion de pagina sin coincidencias de nombres */
    if (t.matches("#mostrar .radio")) {
        confirmacionApellidos = t.value;
    }

    /* input en nombres que permite ir a cambiar colores o a inicio */
    if (t.matches("#submitIrApellidos")) {
        if (confirmacionApellidos === "si") {
            llamarAjax("apellidos", "views/apellidos.html", main);
        } else {
            const fin = ajax("views/graciasPorPart.html");
            fin.addEventListener(  "load", () => {
                if (fin.status === 200) {
                     main.innerHTML = fin.response;
                    respuesta2(datosAcomparar);
                }
            })
        }
    }

    /* para confirmar si quiere o no buscar apellidos */
    if (t.matches("#submitConfirmar")) {
        if (confirmacionApellidos === "si") {
            llamarAjax("apellidos", "views/apellidos.html", main);
        } else {
            const fin = ajax("views/graciasPorPart.html");
            fin.addEventListener("load", () => {
                if (fin.status === 200) {
                    main.innerHTML = fin.response;
                    respuesta2(datosAcomparar);
                }
            })
        }
    }

    /* submit de apellidos que permite seleccionar colores comparar datos y cambiar color*/
    if (t.matches("#coloresApellidos")) {
        llamarAjax("inicio", "views/home.html", main, ()=>variasFun (() => timeOut2()))
    }

     /* que al hacer click sobre un input radio de las views confirmar y sinCoincidencias, desaparezcan los label y radios y que aparezca la foto de ok */
     if (t.matches("input[type='radio']")) {
        const divRadio = document.querySelector("#divRadio")
        divRadio.setAttribute("style", "display: none")
        const imgOk = document.querySelector(".imgOk")
        imgOk.classList.remove("displayNone")
    }

    /* recarga de pagina */
    if (t.matches("#porFinTermine")) {
        location.reload();
    }
});



