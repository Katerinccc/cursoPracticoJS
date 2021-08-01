//square 

console.group("Cuadrado");

function squarePerimeter(squareSide){
    return squareSide * 4;
} 
squarePerimeter();
// console.log("El perimero del cuadrado mide: " + squarePerimeter + "cm");

function squareArea(squareSide){
    return Math.pow(squareSide, 2);
}
squareArea();
// console.log("El área del cuadrado mide: " + squareArea + "cm^2");
console.groupEnd();

//triangle

console.group("triángulo");

function trianglePerimeter(triangleSide1, triangleSide2, triangleBase){
    return triangleSide1 + triangleSide2 + triangleBase;
} 
trianglePerimeter();
// console.log("El perimetro del triángulo mide: " + trianglePerimeter + "cm");

function triangleArea{
    return (triangleBase * triangleHeight) / 2
}
triangleArea();

// console.log("El área del triángulo mide: " + triangleArea + "cm^2");
console.groupEnd();

//circle

console.group("círculo");
const circleRadius = 4;
const circleDiameter = circleRadius *2;
const PI = Math.PI;
const circlePerimeter = (circleDiameter * PI).toFixed(2);
const circleArea = (Math.pow((circleRadius), 2) * PI).toFixed(2);

console.log("El radio del círculo mide: " + circleRadius + "cm");
console.log("El perimetro del círculo mide: " + circlePerimeter + "cm");
console.log("El área del círculo mide: " + circleArea + "cm^2");
console.groupEnd();