function createID(word, arraySize) {
  let h = 0;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (ch >= 'a' && ch <= 'z') {
      h += (ch.charCodeAt(0) - 'a'.charCodeAt(0));
    }
  }

  return h % arraySize;
}

function generateHash() {
  let word = document.getElementById("wordInput").value;
  let arraySize = 10; 
  let id = createID(word, arraySize);

  document.getElementById("result").innerText = 
    `Hash ID for "${word}" is: ${id}`;
}
