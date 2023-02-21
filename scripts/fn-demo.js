function analyzeText(inputText) {
  console.log(inputText);
  let analysisResults = `The word "${inputText}" is ${getStringLength(
    inputText
  )} characters`;
  return analysisResults;
}

function getStringLength(inputString) {
  let stringLength = inputString.length;
  return stringLength;
}

let userText = "Cat";

let analyzeResult = analyzeText(userText);

console.log("The result: " + analyzeResult);
