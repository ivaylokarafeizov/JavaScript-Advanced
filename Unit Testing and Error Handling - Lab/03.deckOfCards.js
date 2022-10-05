function printDeckOfCards(cards) {
  let result = []; 
  
  for (const cardString of cards) {
    let face = cardString.slice(0, -1);
    let suit = cardString.slice(-1);
    
    try {
      let card = createCard(face, suit);
      result.push(card);
    } catch (error) {
      result = ['Invalid card: ' + cardString];
    } 
  } 

  console.log(result.join(' '));
  
  function createCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

    if (!faces.includes(face)) {
      throw new Error('Invalid face: ' + face);
    } else if (!suits[suit]) {
      throw new Error('Invalid suit: ' + suit);
    } 

    return { face, suit, toString: () => `${face}${suits[suit]}` };   
  } 
} 

printDeckOfCards(['AS', '10D', 'KH', '2C']); // A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']); // Invalid card: 1C
