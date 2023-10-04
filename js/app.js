//Variables
const resultado = document.querySelector("#resultado"); //Donde mostraremos los resultados, es un div en el archivo HTML
const year = document.querySelector("#year");

const max = new Date().getFullYear(); //Toma el año actual
const min = max - 10;

console.log(max);
console.log(min);

//Eventos
document.addEventListener("DOMContentLoaded",  ()=>{
    mostrarAutos(); //Muestra los carros al cargar

    //Llena las opciones de años
    llenarSelect();
});


//Funciones
function mostrarAutos() {
    
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision } = auto; //Usamos destructuring para prevenir el usar auto.marca o auto.modelo
        const autoHTML = document.createElement("p"); //Creamos un elemento "p" para cada item iterado, este codigo se repite para c/u
        autoHTML.innerHTML = `
            ${marca} - ${modelo} - ${year} - $${precio} - Puertas: ${puertas} - Color: ${color} - ${transmision};
        `;
        resultado.appendChild(autoHTML); //Metemos los elementos de los carros en la variable resultado
    });
};

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
