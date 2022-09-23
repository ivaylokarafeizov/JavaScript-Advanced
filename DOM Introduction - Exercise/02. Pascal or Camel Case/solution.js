function solve() {
  let textInput = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;

  let wordsArr = textInput.split(' '); 
  let textOutput = '';
  if (convention == 'Camel Case') { 
    textOutput = wordsArr[0]; 
    
    for (let i = 1; i < wordsArr.length; i++) {
      textOutput += wordsArr[i][0].toUpperCase() + wordsArr[i].substring(1);
    }
  } else if (convention == 'Pascal Case') {  
    for (let i = 0; i < wordsArr.length; i++) { 
      textOutput += wordsArr[i][0].toUpperCase() + wordsArr[i].substring(1);
    }
  } else {
    textOutput = 'Error!';
  }

  document.getElementById('result').textContent = textOutput;
}
