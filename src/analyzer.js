const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arr = text.trim().split(' ');
    let cantPalabras = 0;
    const patternAnyNumber = /\d/; //Patrón para cualquier número.
    //const patternSpecialChar = /[.;,]+/;  //Patrón para indicar signos de puntuación.
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].match(patternAnyNumber)){
        continue;
      }
      cantPalabras += 1;
    }
    return cantPalabras;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim(' ');
    let cantCaracteres = 0;
    const patternWords = /[a-zA-Z]/; //Patrón para letras.
    const patternPunc = /[.;,]+/;  //Patrón para signos de puntución.
    const patternNumbers = /\d+/; //Patrón para números.
    const patternSpaces = /\s/;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if ((arrSinEspacios[i].match(patternWords)) || (arrSinEspacios[i].match(patternPunc)) || (arrSinEspacios[i].match(patternSpaces))) {
        cantCaracteres += 1;
      } else if (arrSinEspacios[i].match(patternNumbers)) {
        continue;
      }
    }
    return cantCaracteres;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim();
    let cantCaracteresSinEsp = 0;
    const patternPunc = /[.;,]+/;
    /*const expresion1 = /[\s]/;*/
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if(arrSinEspacios[i].match(patternPunc)){
        continue;
      }else if (arrSinEspacios[i] !== (" ")){
        cantCaracteresSinEsp += 1;
      }
    }
    return cantCaracteresSinEsp;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arr = text.trim().split(' ');
    let cantPalabras = 0;
    for (let i = 0; i < arr.length; i++) {
      cantPalabras += 1;
    }

    const arrSinEspacios = text.trim();
    let cantCaracteresSinEsp = 0;
    /*const expresion1 = /[\s]/;*/
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if ((arrSinEspacios[i]) !== (" ")) {
        cantCaracteresSinEsp += 1;
      }
    }
    const prom = (cantCaracteresSinEsp)/parseFloat(cantPalabras);
    return parseFloat(prom.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim().split(' ');
    let cantNumeros = 0;
    const expresionNumInt = /\d/;
    const expresionNumDec = /\d{1, }.\d{0, }/
    const expresionLetras = /\D/;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if(arrSinEspacios[i].match(expresionLetras)){
        continue;
      }
      if (arrSinEspacios[i].match(expresionNumInt) || arrSinEspacios[i].match(expresionNumDec)){
        cantNumeros += 1;
      }
    }
    return cantNumeros;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const arrSinEspacios = text.trim().split(' ');
    let sumNumeros = 0;
    const expresionNumInt = /\d/;
    const expresionNumDec = /\d{1, }.\d{0, }/
    const expresionLetras = /\D/;
    for (let i = 0; i < arrSinEspacios.length; i++) {
      if(arrSinEspacios[i].match(expresionLetras)){
        continue;
      }else if(arrSinEspacios[i].match(expresionNumInt) || arrSinEspacios[i].match(expresionNumDec)) {
        sumNumeros = (parseFloat(sumNumeros) + parseFloat(arrSinEspacios[i])); 
      }
    }
    return parseFloat(sumNumeros);
  }
};

export default analyzer;
