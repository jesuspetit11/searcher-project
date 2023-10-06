//Variables
const marca = document.querySelector("#marca"); //Añadimos las variables para llenar el obj datosBusqueda
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para resultados
const resultado = document.querySelector("#resultado"); //Donde mostraremos los resultados, es un div en el archivo HTML

const max = new Date().getFullYear(); //Toma el año actual
const min = max - 10;

//Generar un obj con la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    min: "",
    max: "",
    transmision: "",
    color: "",

}


//Eventos
document.addEventListener("DOMContentLoaded",  ()=>{
    mostrarAutos(autos); //Muestra los carros al cargar

    //Llena las opciones de años
    llenarSelect();
});

//Event listeners para los formularios de búsqueda
marca.addEventListener("change", e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
    
});

year.addEventListener("change", e =>{
    datosBusqueda.year = Number(e.target.value);
    filtrarAuto();
    filtrarYear();
    
});

minimo.addEventListener("change", e =>{
    datosBusqueda.min = e.target.value;
    filtrarAuto();

});

maximo.addEventListener("change", e =>{
    datosBusqueda.max = e.target.value;
    filtrarAuto();
    
});

transmision.addEventListener("change", e =>{
    datosBusqueda.transmision = e.target.value;
    
});

color.addEventListener("change", e =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});

//Funciones
function mostrarAutos(autos) {
    limpiarHTML();

        autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision } = auto; //Usamos destructuring para prevenir el usar auto.marca o auto.modelo
        const autoHTML = document.createElement("p"); //Creamos un elemento "p" para cada item iterado, este codigo se repite para c/u
        autoHTML.innerHTML = `
            ${marca} - ${modelo} - ${year} - $${precio} - Puertas: ${puertas} - Color: ${color} - ${transmision};
        `;
        resultado.appendChild(autoHTML); //Metemos los elementos de los carros en la variable resultado
    });
};

//Limpiar HTML

function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--){
        //max 2023, cuando i > min sea false, el bucle se detiene, max en cada recorrido quita 1 al max
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de año al select

    }
}

//Función que filtra en base a la búsqueda en datosBusqueda.marca;
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo); //Acepta chaining
    console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto) { //Función que compara si marca es true, entonces regresa el auto que sea igual a datosBusqueda.marca y en el array de objetos autos.marca 
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }
    return autos;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === year;
    }
    return autos;
}

function filtrarMinimo(auto) {
    const { min } = datosBusqueda;
    if( min ){
        return auto.precio >= min;
    }
    return autos;
}

function filtrarMaximo(auto) {
    const { max } = datosBusqueda;
    if(max){
        return auto.precio <= max;
    } 
    return autos;
}