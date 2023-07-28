const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arr = text.trim().split(' ');
    let cantPalabras = 0;
    for (let i = 0; i < arr.length; i++) {
      cantPalabras += 1;
    }
    return cantPalabras;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim();
    let cantCaracteres = 0;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      cantCaracteres += 1;
    }
    return cantCaracteres;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim();
    let cantCaracteresEsp = 0;
    /*const expresion1 = /[\s]/;*/
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if ((arrSinEspacios[i]) !== (" ")) {
        cantCaracteresEsp += 1;
      }
    }
    return cantCaracteresEsp;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arr = text.split(' ');
    let cantPalabras = 0;
    let cantSilabas = 0;
    let promedioLong = 0;
    let sumLongitud = 0;
    for (let i = 0; i < arr.length; i++) {
      const palabraIndividual = arr[i].split(' ');
      for (let j = 0; j < palabraIndividual.length; j++) {
        cantSilabas = cantSilabas + [j + 1];
        sumLongitud += cantSilabas;
      }
      cantPalabras = cantPalabras + [i + 1];
      promedioLong = sumLongitud / cantPalabras;
    }
    return promedioLong;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim();
    let cantNumeros = 0;
    const expresionNum = /[\d]/;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if (expresionNum.test(arrSinEspacios[i])) {
        cantNumeros += 1;
      }
    }
    return cantNumeros;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim();
    let sumatoria = 0;
    const expresionNum = /[\d]/;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if (expresionNum.test(arrSinEspacios[i])) {
        sumatoria += parseInt(arrSinEspacios[i]);
      }
    }
    return sumatoria;
  },
};

export default analyzer;
