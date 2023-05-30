var display = document.getElementById('display');
var historyList = document.getElementById('history-list');
var historyContainer = document.getElementById('history-container');
var history = [];

function clearDisplay() {
  display.value = '';
}

function appendValue(value) {
  display.value += value;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  var expression = display.value;
  var result;

  try {
    result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
    console.log('Error:', error);
    return;
  }

  // Guardar historial
  var historyItem = expression + ' = ' + result;
  history.push(historyItem);

  // Actualizar historial
  updateHistory();
}

function updateHistory() {
  historyList.innerHTML = '';
  for (var i = 0; i < history.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = history[i];
    historyList.appendChild(listItem);
  }
}

function toggleHistory() {
  if (historyContainer.style.display === 'none') {
    historyContainer.style.display = 'block';
  } else {
    historyContainer.style.display = 'none';
  }
}
