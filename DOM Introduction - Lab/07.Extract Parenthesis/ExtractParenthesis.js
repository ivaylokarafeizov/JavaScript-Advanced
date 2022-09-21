function extract(content) {
  const pattern = /\((.+?)\)/g;
  const text = document.getElementById(content).textContent;
  let match = pattern.exec(text);

  const result = [];
  while (match != null) {
    result.push(match[1]); 
    match = pattern.exec(text);
  }
  
  return result.join('; ');
}
