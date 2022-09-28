function encodeAndDecodeMessages() {
  let textAreas = Array.from(document.querySelectorAll('textarea')); 
  document.querySelector('#main div:nth-child(1) button').addEventListener('click', encode);
  document.querySelector('#main div:nth-child(2) button').addEventListener('click', decode);

  function encode() {
    let message = textAreas[0].value;

    let encodedMessage = '';
    for (let letter of message) { 
        encodedMessage += String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    
    textAreas[0].value = '';
    textAreas[1].value = encodedMessage;
  }

  function decode() {
    let message = textAreas[1].value;

    let decodedMessage = '';
    for (let letter of message) { 
        decodedMessage += String.fromCharCode(letter.charCodeAt(0) - 1);
    }
     
    textAreas[1].value = decodedMessage;
  }
}