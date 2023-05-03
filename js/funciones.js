
/* funciones ajax */

function ajax(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    return xhr;
}

function llamarAjax(variable, url, obj, cb, cb2) {
   
    variable = ajax(url);
    variable.addEventListener("load", () => {
        if (variable.status === 200) {
            
            obj.innerHTML = variable.response;
            if (typeof cb === "function") cb() 
            if (typeof cb2 === "function") cb2()
        }
    });
}
/* ------------------------------------------------------------------------------------------- */


/* EJERCICIO 1 */
function respuesta1() {
    console.log(document.querySelector("title").innerHTML)
}

/* EJERCICIO 2 Y 3*/
/* se muestra al terminar todo el proceso porque debo yener los datos para mostrar */
function respuesta2(arr) {
    const divFinal = document.getElementById("divFinalizar")
    const fragmentImprimir = document.createDocumentFragment()
    const ul = document.createElement("ul")
    fragmentImprimir.appendChild(ul)
 for (let i = 0; i < arr.length; i++) {
    
     let textoImprimir = arr[i].primerNombre[0].toUpperCase()+arr[i].primerNombre.substring(1)
     if (arr[i].segundoNombre !== "") {
         textoImprimir += " " + arr[i].segundoNombre[0].toUpperCase()+arr[i].segundoNombre.substring(1)
     }
     textoImprimir += " " + arr[i].primerApellido.toUpperCase()
     if (arr[i].segundoApellid !== "") {
        textoImprimir += " " + arr[i].segundoApellido.toUpperCase()
     }
       const li = document.createElement("li")
     li.innerText = `Integrante ${i}: "${textoImprimir}" ` 
     li.style.margin="10px"
     ul.appendChild(li)
    }
    
    divFinal.appendChild(fragmentImprimir)
}


/* EJERCICIO 4 */

/* crear los articulos por cada persona ingresada en la base */
const base = datosIngresados

/* para obtener el nodelist y convertirlo en array */
function obtenerElementos(padre, hijo) {
    const elementos = document.querySelectorAll(`${padre} ${hijo}`);
    const arrELEM = [];
    elementos.forEach((elem) => arrELEM.push(elem.innerHTML));
    return arrELEM;
}



/* cambiar color cuando sea menor a  */
/* nl es nodelist */
function cambiarColorMenor(nl1, nl2, numero) {
    for (let i = 0; i < nl1.length; i++) {
        if (i < numero) {
            if (
                nl1[i].innerHTML === nl2[i].innerHTML &&
                nl1[i].innerHTML !== "" &&
                nl2[i].innerHTML !== ""
            ) {
                nl1[i].style.color = color;
                nl1[i].style.border = "solid";
                nl2[i].style.color = color;
                nl2[i].style.border = "solid";
            }
        }
    }
}

/* cambiar color cuando sea mayor a  */
function cambiarColorMayor(nl1, nl2, numero) {
    for (let i = 0; i < nl1.length; i++) {
        if (i > numero) {
            if (
                nl1[i].innerHTML === nl2[i].innerHTML &&
                nl1[i].innerHTML !== "" &&
                nl2[i].innerHTML !== ""
            ) {
                nl1[i].style.color = color;
                nl1[i].style.border = "solid";
                nl2[i].style.color = color;
                nl2[i].style.border = "solid";
            }
        }
    }
}

/* para colocar dd y dt en mayuscula la primer letra utilizando clase de css */
const capitalize = () => {
    const dds = document.querySelectorAll("#sectionIntegrantes dd")
    dds.forEach(dd => {
        dd.classList.add("capitalize")
    })
}

