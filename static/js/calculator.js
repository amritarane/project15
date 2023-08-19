function appendValue(value) {
  document.getElementById('result').value += value;
}

// Function to clear the result input
function clearResult() {
  document.getElementById('result').value = '';
}

// Function to calculate the result
function calculateResult() {
  var result = document.getElementById('result').value;
  var calculatedResult = eval(result);
  document.getElementById('result').value = calculatedResult;
}