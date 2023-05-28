function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";
  const inputValue = document.getElementById("text").value.toLowerCase();
  const currentCase = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  if(currentCase !== CAMEL_CASE && currentCase !== PASCAL_CASE) {
    result.textContent = "Error!";
    return;
  }

  const arrOfStrings = inputValue.split(" ");
  let output = "";
  let startingPoint = 0;

  if(currentCase === CAMEL_CASE) {
    output += arrOfStrings[0];
    startingPoint = 1
  }

  for (let i = startingPoint; i < arrOfStrings.length; i++) {
    const currentWord = arrOfStrings[i];
    output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);
    result.textContent = output
    
  }
}