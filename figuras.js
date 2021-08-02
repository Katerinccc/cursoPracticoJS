//square 

console.group("Cuadrado");

function squarePerimeter(squareSide){
    return squareSide * 4;
} 

function squareArea(squareSide){
    return Math.pow(squareSide, 2);
}
console.groupEnd();

//triangle

console.group("triángulo");

function trianglePerimeter(triangleSide1, triangleSide2, triangleBase){
    return triangleSide1 + triangleSide2 + triangleBase;
} 

function triangleArea(triangleBase, triangleHeight){
    return (triangleBase * triangleHeight) / 2
}
console.groupEnd();

//circle

const PI = Math.PI;
function circleDiameter(circleRadius){
    return circleRadius *2;
}

function circlePerimeter(circleRadius){
    const diameter = circleDiameter(circleRadius);
    return (diameter * PI).toFixed(2);
}

function circleArea(circleRadius){
    (Math.pow((circleRadius), 2) * PI).toFixed(2)
}
console.groupEnd();

function squarePerimeterCalculate(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function squareAreaCalculate(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const area = squareArea(value);
    alert(area);
}