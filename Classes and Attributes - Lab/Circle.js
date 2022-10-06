class Circle {
  constructor(radius) {
    this.radius = radius;  
  }
  
  get diameter() {
    return this.radius * 2; 
  }

  set diameter(diameter) {
    this.radius = diameter / 2; 
  }

  get area() {
    return  Math.PI * Math.pow(this.diameter, 2) / 4; 
  } 
}

let c = new Circle(5);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
