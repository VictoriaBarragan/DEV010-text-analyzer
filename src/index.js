import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`
let btnLimpiar = addEventListener("click", limpiarAreaTxt);
function limpiarAreaTxt(){
    document.getElementsByTagName("textarea")[0].value = "";
};

let arregloTxt = document.getElementsByName("user-input");
arregloTxt[0].addEventListener("keyup", ()=>{
    let txt=arregloTxt[0].value; 
    let contadorDePalabras = analyzer.getWordCount(txt);
    let contadorDeCaracteres = analyzer.getCharacterCount(txt);
    let contadorDeCaracteresEsp = analyzer.getCharacterCountExcludingSpaces(txt);
    let contadorDeNumeros = analyzer.getNumberCount(txt);
    let sumatoriaNumeros = analyzer.getNumberSum(txt);
    let longPromedioPalabras = analyzer.getAverageWordLength(txt);
    document.querySelector('li[data-testid="word-count"]').textContent = "Palabras " + contadorDePalabras;
    document.querySelector('li[data-testid="character-count"]').textContent = "Caracteres (incluyendo espacios) " + contadorDeCaracteres;
    document.querySelector('li[data-testid="character-no-spaces-count"]').textContent = "Caracteres (excluyendo espacios) " + contadorDeCaracteresEsp;
    document.querySelector('li[data-testid="number-count"]').textContent = "Números " + contadorDeNumeros;
    document.querySelector('li[data-testid="number-sum"]').textContent = "Sumatoria " + sumatoriaNumeros;
    document.querySelector('li[data-testid="word-length-average"]').textContent = "Longitud media palabras " + longPromedioPalabras;
});














