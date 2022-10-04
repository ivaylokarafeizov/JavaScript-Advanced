function playingCards(face, suit) {
  let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

  if (faces.indexOf(face) == -1) {
    throw new Error('Invalid face!'); 
  }

  let output = {
    face,
    suit: suits[suit],
    toString() {
      return this.face + this.suit;
    }
  };
  
  return output.toString(); 
}
 
playingCards('A', 'S'); // A♠
playingCards('10', 'H'); // 10♥
playingCards('1', 'C'); // Error