function attachGradientEvents() {
  let hoverElement = document.getElementById('gradient');
  
  hoverElement.addEventListener('mousemove', (event) => {
    document.getElementById('result').textContent = 
    `${Math.floor((event.offsetX / 300) * 100)}%`;
  });
}
