import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const btnLimpiar = document.getElementById("reset-button");
btnLimpiar.addEventListener("click" , () => {
  document.getElementsByTagName("textarea")[0].value = "";
})

const arregloTxt = document.getElementsByName("user-input");
arregloTxt[0].addEventListener("keyup", () => {
  const txt = arregloTxt[0].value;
  const contadorDePalabras = analyzer.getWordCount(txt);
  const contadorDeCaracteres = analyzer.getCharacterCount(txt);
  const contadorDeCaracteresEsp = analyzer.getCharacterCountExcludingSpaces(txt);
  const contadorDeNumeros = analyzer.getNumberCount(txt);
  const sumatoriaNumeros = analyzer.getNumberSum(txt);
  const longPromedioPalabras = analyzer.getAverageWordLength(txt);
  document.querySelector('li[data-testid="word-count"]').textContent = "Palabras " + contadorDePalabras;
  document.querySelector('li[data-testid="character-count"]').textContent = "Caracteres (incluyendo espacios) " + contadorDeCaracteres;
  document.querySelector('li[data-testid="character-no-spaces-count"]').textContent = "Caracteres (excluyendo espacios) " + contadorDeCaracteresEsp;
  document.querySelector('li[data-testid="number-count"]').textContent = "Números " + contadorDeNumeros;
  document.querySelector('li[data-testid="number-sum"]').textContent = "Sumatoria " + sumatoriaNumeros;
  document.querySelector('li[data-testid="word-length-average"]').textContent = "Longitud media palabras " + longPromedioPalabras;
});














