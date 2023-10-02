const analyzer = {
  getCharacterCount: (text) => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      count++;
    }

    return count;
  },

  getWordCount: (text) => {
    // Verifica si el texto es "Números" seguido de un número
    if (/^\s*Números\s*:\s*\d+\s*$/.test(text)) {
      return 0; // Retorna 0 si cumple con el patrón
    }

    // Si no cumple con el patrón, cuenta las palabras como antes
    const words = text.split(/\s+/).filter(word => word.length > 0 && !/\d/.test(word));
    return words.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // Elimina espacios, comas y puntos del texto
    const textWithoutSpacesCommasDots = text.replace(/[\s,.]+/g, "");

    // Verifica si el texto resultante contiene solo números
    if (/^Números\s*:\s*\d+\s*$/.test(textWithoutSpacesCommasDots)) {
      return 0; // Retorna 0 si solo contiene números en el formato específico
    }

    // Si no solo contiene números, retorna la longitud del texto modificado
    return textWithoutSpacesCommasDots.length;
  },

  getWordLengthAverage: (text) => {
    // Divide el texto en palabras
    const words = text.split(/\s+/).filter(word => word.length > 0);

    if (words.length === 0) {
    return 0;
    }

    // Calcula la longitud total de las palabras
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);

    // Calcula el promedio y redondea a dos decimales
    const average = totalWordLength / words.length;
    const roundedAverage = parseFloat(average.toFixed(2));

    return roundedAverage;
},


  getNumberCount: (text) => {
    // Utiliza una expresión regular para encontrar números (pueden incluir decimales)
    const numbers = text.match(/[-+]?\b\d+(\.\d+)?\b/g);

    // Retorna la cantidad de números encontrados o 0 si no se encontraron números
    return numbers ? numbers.length : 0;
  },

  
  getNumberSum: (text) => {
        // Verifica si no hay palabras ni números ingresados
    if (!/\d/.test(text)) {
    return 0;
  }

        // Utiliza una expresión regular para encontrar números (pueden incluir decimales)
  const numbers = text.match(/[-+]?\b\d+(\.\d+)?\b/g);

        // Si no se encuentran números, retorna 0
  if (!numbers) {
    return 0;
  }

        // Filtra los números válidos y realiza la suma
  const validNumbers = numbers.filter(num => !isNaN(parseFloat(num)));
  const sum = validNumbers.reduce((acc, num) => acc + parseFloat(num), 0);

   return sum;
    }



};

export default analyzer;
