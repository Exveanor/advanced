function extractText() {
    let lis = document.getElementsByTagName('li');
    let liArr = Array.from(lis);
    let allTexts = liArr.map( x => x.textContent);

    let textArea = document.getElementById('result');
    textArea.value = allTexts.join('\n');
}