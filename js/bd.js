/* ---------------------------------------- Array para completar consignas de ejercicios---------------------------------- */

const consignasAmostrar = [
    {
        id: 1,
        consigna: `<p>Vincular un archivo "index.html" con uno de JS "js/main.js". En el title y h1 principal del archivo HTML incorporar el texto "Ejercicio". Con JS leer directamente el contenido del elemento <title> e imprimirlo en la consola.</p>`,
    },
    {
        id: 2,
        consigna: `
        <p style = "margin-bottom: 20px">Investigar el uso de listas descriptivas de HTML y agregar en el HTML dos de estas listas con los nombres y apellidos de cada integrante de la pareja que realiza el ejercicio. Por ejemplo, la pareja conformada por Luis Rodríguez Sánchez (con 1 nombre y 2 apellidos) y Ana Laura García (que tiene 2 nombes y 1 apellido) formaría estas listas</p>
        
        <h2>Primer integrante</h2>
        <dl style = "margin-bottom: 20px">
            <dt>Primer nombre</dt>
            <dd>Luis</dd>
            <dt>Segundo nombre</dt>
            <dd></dd>
            <dt>Primer apellido</dt>
            <dd>Rodríguez</dd>
            <dt>Segundo apellido</dt>
            <dd>Sánchez</dd>
        </dl>

        <h2>Segundo integrante</h2>
        <dl style = "margin-bottom: 20px">
            <dt>Primer nombre</dt>
            <dd>Ana</dd>
            <dt>Segundo nombre</dt>
            <dd>Laura</dd>
            <dt>Primer apellido</dt>
            <dd>García</dd>
            <dt>Segundo apellido</dt>
            <dd></dd>
        </dl>

        <p style = "margin-bottom: 20px"> Respetar el uso de minúsculas y mayúsculas de los nombres y apellidos (el texto debe decir "Ana", no "ANA" ni "ana", etc)</p>

        <p>Estilizar libremente las listas con CSS, para que su diseño sea más interesante visualmente.</p>
        `,
    },
    {
        id: 3,
        consigna: `
        <p style = "margin-bottom: 20px">Leer con JS, ni bien se cargue la página, los datos definidos en el HTML e informar en la consola los nombres completos de cada integrante con el siguiente formato:</p>
        
        <p> Integrante 1: "Luis RODRÍGUEZ SÁNCHEZ"</p>
        <p style = "margin-bottom: 20px">Integrante 2: "Ana Laura GARCÍA"</p>
        
        <p style = "margin-bottom: 20px">Para esto tener en cuenta que:</p>

        <p style = "margin-bottom: 20px">- Debe utilizarse un único llamado a console.log para generar los 4 renglones.</p>

        <p style = "margin-bottom: 20px">- Si uno de los integrantes tiene un solo nombre y/o apellido, no se debe imprimir en la consola los nombres con doble espacio ni espacios al inicio o final. Esto debe estar automatizado. Es decir, en el ejemplo planteado, si en el HTML se agrega un 2do nombre para Luis o un 2do apellido para Laura, los nombres completos deben mostrarse en la consola con dicha informacion correctamente. En pocas palabras, se deben tomar los valores ingresados en el código fuente del HTML.</p>
        
        <p> Ejemplo incorrecto:</p>
    
        <p>Integrante 1: "Luis  RODRÍGUEZ SÁNCHEZ"</p>
        <p>Integrante 2: "Ana Laura GARCÍA "</p>
        `,
    },
    {
        id: 4,
        consigna: `
        <p style = "margin-bottom: 20px">Si los nombres cargados en el HTML coinciden en algún caso (Ej: "Ana Laura García" y "Laura Verónica Gutiérrez Méndez" comparten un nombre, sin importar que sean en el 1er o 2do nombre) realizar las siguientes acciones:</p>
        
        <p>- Informar en la consola que hubo coincidencias.</p>
        <p>- Informar en un prompt que hubo coincidencias y solicitar en ese mismo prompt que se ingrese un color para destacar los nombres. Guardar el texto ingresado por el usuario ("red", "#c4203f", etc), ya que se precisará en el siguiente punto.</p>
        <p style = "margin-bottom: 20px">- Utilizar el valor ingresado en el paso anterior para, con JS, agregarle estilos en línea a los nombres coincidentes, de tal manera que se destaquen en color los items de listas cuyos nombres coincidan. Por ej, en el navegador se mostraría así</p>
    
        <p>Primer nombre</p>
        <p>Ana</p>
        <p>Segundo nombre</p>
        <p>Laura <-- mostrarlo con el color elegido</p>
        <p>Primer apellido</p>
        <p>García</p>
        <p style = "margin-bottom: 20px">Segundo apellido</p>

        <p>Primer nombre</p>
        <p>Laura <-- mostrarlo con el color elegido</p>
        <p>Segundo nombre</p>
        <p>Verónica</p>
        <p>Primer apellido</p>
        <p>Gutiérrez</p>
        <p>Segundo apellido</p>
        <p style = "margin-bottom: 20px">Méndez</p>
    
        <p style = "margin-bottom: 20px">Si, en cambio, no hay coincidencias, informar en la consola que no las hubo.</p>
    
        <p style = "margin-bottom: 20px">Consultar a través de un confirm si se desea comparar los apellidos. En caso de responder afirmativamente, realizar la comparación de apellidos, con el mismo criterio que con los nombres y realizar las mismas acciones. En caso contrario no tomar ninguna acción.</p>
        `,
    },
    {
        id: 5,
        consigna: `<p>Analizar el código JS generado, buscando acciones repetidas y resolverlo mediante el uso de funciones. Por ejemplo, la generación del string con el nombre completo que se mostrará en consola del integrante, no debe repetirse, sino lograr que una función lo lleve a cabo y simplemente llamarla una vez para cada integrante.</p>`,
    },
    {
        id: 6,
        consigna: `<p style = "margin-bottom: 20px">Eliminar las listas descriptivas y reemplazarlas por un formulario con 2 inputs para los nombres del primer integrante y 2 más para sus apellidos y luego un botón con el texto "Completar". </p>
        <p>Agregar 4 campos más para los nombres y apellidos del 2do participantes y adicionar otro botón "Completar". </p>
        <p style = "margin-bottom: 20px">Estilizar los inputs para que solo tengan una línea en el borde inferior, incluso cuando reciban el foco. </p>
        <p style = "margin-bottom: 20px">Registrar el evento "click" de los botones, programándolos para que, al ser presionados, tomen los nombres y apellidos cargados actualmente en los inputs y modificar los pasos 3 y 4 para que cumplan las mismas tareas, pero obteniendo los valores del formulario esta vez, en lugar del HTML.</p>`,
    },
];

/* ---------------------------------------- Array para ingresar datos---------------------------------- */

let cantidadDatos;
const datosIngresados = [];

main = document.querySelector("main");

main.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.target;

    /* archivo para preguntar la cantidad de datos a ingresar. Capturar el valor de los datps*/
    if (t.matches("#cantidadDatos")) {
        cantidadDatos = document.querySelector("#cantidadDatos").value;
    }
    
    /* arfhivo de formulario para cargar las personas */
    if (t.matches("#seccionCantidadDatos button")) {
        llamarAjax("irFormulario", "pages/formulario.html", main);
    }

    /* ingreso de cada dato */
    if (t.matches("#ingrsarDato")) {
        const inputs = document.querySelectorAll("#seccionFormulario input");
        const inputsAregistrar = [];

        /* si el primer nombre o el primer apellido no estan completos, crear un span de aviso */
        for (let i = 0; i < inputs.length; i++) {
            const elem = inputs[i];

            if (
                elem.previousElementSibling.innerHTML.includes("Primer") &&
                elem.value === ""
            ) {
                const span = document.createElement("span");
                span.innerHTML = `Debe completar el campo ${elem.previousElementSibling.innerHTML}`;
                span.style.margin = "5px";
                span.style.color = "red";
                elem.insertAdjacentElement("beforebegin", span);

                /* que se elimine el span a los 3 segundos */
                setTimeout(() => {
                    const form = document.querySelector(
                        "#seccionFormulario form"
                    );
                    form.removeChild(span);
                }, 3000);
            }
        }
        /* guardo los inpust de los cuales necesito el value */
        inputs.forEach((elem) => {
            if (elem["type"] !== "button") {
                inputsAregistrar.push(elem);
            }
        });
        /* creo el objeto para incorporar a cada persona */
        for (let j = 0; j < cantidadDatos.length; j++) {
            const datoCompleto = {
                primerNombre: " ",
                segundoNombre: " ",
                primerApellido: " ",
                segundoApellido: " ",
            };

            for (let i = 0; i < inputsAregistrar.length; i++) {
                const element = inputsAregistrar[i].value;
                const dato = element.toLowerCase().trim();

                switch (i) {
                    case 0:
                        datoCompleto.primerNombre = dato;
                        break;
                    case 1:
                        datoCompleto.segundoNombre = dato;
                        break;
                    case 2:
                        datoCompleto.primerApellido = dato;
                        break;
                    case 3:
                        datoCompleto.segundoApellido = dato;
                        break;
                }
            }
          /* le marco que solo guarde en el array los elementos que estan completos el primer nombre y el primer apellido */
          if ( datoCompleto.primerNombre !== "" && datoCompleto.primerApellido !== "" ) {
                datosIngresados.push(datoCompleto);
            }
        }
      
        inputs.forEach((elem) => {
            if (elem["type"] !== "button") {
                elem.value = "";
            }
        });

            /* creo un articulo por cada persona que se incorporo */  
            for (let i = 0; i < datosIngresados.length; i++) {
                if (datosIngresados.length == cantidadDatos) {
                 
                    const home = ajax("views/home.html");
                    home.addEventListener("load", () => {
                        if (home.status === 200) {
                            main.innerHTML = home.response;
                           
                            articulos()
                            capitalize()
                        }
                    });
                }
            }
        
    }
});

/* funcion que crea el articulo y los incluye en home*/
const articulos = ()=> {
    const fragmento = document.createDocumentFragment();
    for (let i = 0; i < datosIngresados.length; i++) {
        const section = document.querySelector(
            "#sectionIntegrantes"
        );
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.innerHTML = `Integrante ${i + 1}`;
        const dl = document.createElement("dl");
        dl.innerHTML = ` <dl id="Integrante ${i} class= "width: 100%" ">
            <dt>Primer nombre</dt>
            <dd>${datosIngresados[i].primerNombre}</dd>
            <dt>Segundo nombre</dt>
            <dd>${datosIngresados[i].segundoNombre}</dd>
            <dt>Primer apellido</dt>
            <dd>${datosIngresados[i].primerApellido}</dd>
            <dt>Segundo apellido</dt>
            <dd>${datosIngresados[i].segundoApellido}</dd>
            </dl>`;
        fragmento.appendChild(div);
        div.appendChild(h2);
        div.appendChild(dl);
        section.appendChild(fragmento);
    }
}