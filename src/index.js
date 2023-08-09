import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const arregloTxt = document.getElementsByName("user-input");
arregloTxt[0].addEventListener("keyup", () => {
  const txt = arregloTxt[0].value;
  const contadorDePalabras = analyzer.getWordCount(txt);
  const contadorDeCaracteres = analyzer.getCharacterCount(txt);
  const contadorDeCaracteresSinEsp = analyzer.getCharacterCountExcludingSpaces(txt);
  const contadorDeNumeros = analyzer.getNumberCount(txt);
  const sumatoriaNumeros = analyzer.getNumberSum(txt);
  const longPromedioPalabras = analyzer.getAverageWordLength(txt);
  document.querySelector('li[data-testid="word-count"]').textContent = "Palabras " + contadorDePalabras;
  document.querySelector('li[data-testid="character-count"]').textContent = "Caracteres IESP " + contadorDeCaracteres;
  document.querySelector('li[data-testid="character-no-spaces-count"]').textContent = "Caracteres EE " + contadorDeCaracteresSinEsp;
  document.querySelector('li[data-testid="number-count"]').textContent = "Números " + contadorDeNumeros;
  document.querySelector('li[data-testid="number-sum"]').textContent = "Sumatoria números " + sumatoriaNumeros;
  document.querySelector('li[data-testid="word-length-average"]').textContent = "Longitud media palabras " + longPromedioPalabras;
});

const btnLimpiar = document.getElementById("reset-button");
btnLimpiar.addEventListener("click" , () => {
  document.getElementsByTagName("textarea")[0].value = "";
  document.querySelector('[data-testid="word-count"]').textContent = "Palabras: 0";
  document.querySelector('[data-testid="character-count"]').textContent = "Caracteres (inc. espacios y signos puntuación): 0";
  document.querySelector('[data-testid="character-no-spaces-count"]').textContent = "Caracteres (excluyendo espacios): 0";
  document.querySelector('[data-testid="number-count"]').textContent = "Números: 0";
  document.querySelector('[data-testid="number-sum"]').textContent = "Sumatoria números: 0";
  document.querySelector('[data-testid="word-length-average"]').textContent = "Longitud media palabras: 0";
})
