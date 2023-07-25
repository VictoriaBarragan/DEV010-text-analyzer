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
    document.querySelector('li[data-testid="word-count"]').textContent = "Palabras " + contadorDePalabras;
    document.querySelector('li[data-testid="character-count"]').textContent = "Caracteres " + contadorDeCaracteres;
});














