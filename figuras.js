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

function triangleArea(triangleBase, triangleHeight){
    return (triangleBase * triangleHeight) / 2
}
triangleArea();
console.groupEnd();

//circle

const PI = Math.PI;
function circleDiameter(circleRadius){
    return circleRadius *2;
}
circleDiameter();

function circlePerimeter(circleRadius){
    const diameter = circleDiameter(circleRadius);
    return (diameter * PI).toFixed(2);
}
circlePerimeter();

function circleArea(circleRadius){
    (Math.pow((circleRadius), 2) * PI).toFixed(2)
}
circleArea();
console.groupEnd();