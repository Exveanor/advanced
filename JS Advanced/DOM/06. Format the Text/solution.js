function solve() {
  const textArea = document.getElementById("input");
  const textAreaValue = textArea.value;
  const resultDiv = document.getElementById("output");
  const sentArr = textAreaValue.split(".").filter((s) => s !== "").map((s) => s + ".");

  const paragraphRoof = Math.ceil(sentArr.length / 3);

  for (let i = 0; i < paragraphRoof; i++) {
    const joinedSent = sentArr.splice(0,3).join("");
    resultDiv.innerHTML += `<p>${joinedSent}</p>`;
  }
}