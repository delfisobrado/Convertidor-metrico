let number = document.getElementById("number"); 
const buttonEl = document.getElementById("convert");
let pElMeteres = document.getElementById("p-elmeters");
let pElVol = document.getElementById("p-elvol");
let pElKg = document.getElementById("p-elkg");
let multiplicacion = "";
let division = "";
const feets =  3.281;
const gallon =0.264 ;
const pound= 2.204 ;
let parrafo = "";

function calcular (unit) {
    multiplicacion =  number.value * unit; 
    division= number.value / unit; 
}
function metersFeets() {
    calcular(feets)
    parrafo= `${number.value} meters = ${multiplicacion.toFixed(3)} feet |
    ${number.value} feet = ${division.toFixed(3)} meters`;
   
   pElMeteres.innerHTML = parrafo
}
function litersGallons() {
    calcular(gallon)
    parrafo= `${number.value} meters = ${multiplicacion.toFixed(3)} feet |
    ${number.value} feet = ${division.toFixed(3)} meters`;
   
    pElVol.innerHTML = parrafo
}
function kgPounds() {
    calcular(pound)
    parrafo= `${number.value} meters = ${multiplicacion.toFixed(3)} feet |
    ${number.value} feet = ${division.toFixed(3)} meters`;
   
    pElKg.innerHTML = parrafo
}

buttonEl.addEventListener("click", function (){
metersFeets();
litersGallons();
kgPounds();

}
)