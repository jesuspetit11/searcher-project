//Variables
const resultado = document.querySelector("#resultado"); //Donde mostraremos los resultados, es un div en el archivo HTML

//Eventos
document.addEventListener("DOMContentLoaded",  ()=>{
    mostrarAutos();
});


//Funciones
function mostrarAutos() {
    
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision } = auto; //Usamos destructuring para prevenir el usar auto.marca o auto.modelo
        const autoHTML = document.createElement("p"); //Creamos un elemento "p" para cada item iterado
        autoHTML.innerHTML = `
            ${marca} - ${modelo} - ${year} - $${precio} - Puertas: ${puertas} - Color: ${color} - ${transmision};
        `;
        resultado.appendChild(autoHTML);
    });
};