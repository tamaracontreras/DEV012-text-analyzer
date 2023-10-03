//// Importa el objeto 'analyzer' del módulo 'analyzer.js'
import analyzer from './analyzer.js';

//  actualiza los resultados en las etiquetas <li>
function updateResults() {
  // Obtiene el texto ingresado por el usuario desde el área de texto
  const textInput = document.querySelector('textarea[name="user-input"]').value;

  // Invoca los métodos del objeto 'analyzer' para realizar el análisis
  const charCount = analyzer.getCharacterCount(textInput);
  const wordCount = analyzer.getWordCount(textInput);
  const charCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textInput);
  const averageWordLength= analyzer.getAverageWordLength(textInput);
  const numberCount = analyzer.getNumberCount(textInput);
  const numberSum = analyzer.getNumberSum(textInput);

  // Actualiza los resultados en las etiquetas <li>
  document.querySelector('li[data-testid="character-count"]').textContent = `Caracteres: ${charCount}`;
  document.querySelector('li[data-testid="character-no-spaces-count"]').textContent = `Caracteres Sin Espacios: ${charCountExcludingSpaces}`;
  document.querySelector('li[data-testid="word-count"]').textContent = `Palabras: ${wordCount}`;
  document.querySelector('li[data-testid="number-count"]').textContent = `Números: ${numberCount}`;
  document.querySelector('li[data-testid="number-sum"]').textContent = `Suma Números: ${numberSum}`;
  document.querySelector('li[data-testid="word-length-average"]').textContent = `Promedio de Longitud: ${averageWordLength}`;
}

function resetMetrics() {
  // Limpia el área de texto
  document.querySelector('textarea[name="user-input"]').value = '';

  // Selecciona todas las etiquetas <li> con la clase "metricas"
  const metricItems = document.querySelectorAll('.metricas');

  // Limpia los valores de resultados en las etiquetas <li>
  metricItems.forEach(item => {
    item.textContent = item.textContent.split(':')[0] + ':';
  });
}

// Escucha el evento de clic en el botón "Limpiar Métricas" para limpiar el contenido
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetMetrics);

// Escucha el evento de cambio en el área de texto para actualizar los resultados
const textArea = document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('input', updateResults);
