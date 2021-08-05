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
    return Number(triangleSide1) + Number(triangleSide2) + Number(triangleBase);
} 

function triangleArea(triangleBase, triangleHeight){
    return (Number(triangleBase) * Number(triangleHeight)) / 2
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
    return (Math.pow(circleRadius, 2) * PI).toFixed(2);
}
console.groupEnd();

//square

function squarePerimeterCalculate(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert("El perímetro del cuadrado es " + perimeter);
}

function squareAreaCalculate(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const area = squareArea(value);
    alert("El área del cuadrado es " +area);
}

//triangle

function trianglePerimeterCalculate(){
    const side1 = document.getElementById("triangleInput1");
    const side2 = document.getElementById("triangleInput2");
    const base = document.getElementById("triangleInputBase");
    const value1 = (side1.value);
    const value2 = (side2.value);
    const valuebase = (base.value);
    const perimeter = trianglePerimeter(value1, value2, valuebase);
    alert("El perímetro del triángulo es " + perimeter);
}

function triangleAreaCalculate(){
    const heigth = document.getElementById("triangleInputHeight");
    const base = document.getElementById("triangleInputBase");
    const valueHeigth = (heigth.value);
    const valuebase = (base.value);
    const area = triangleArea(valuebase, valueHeigth)
    alert("El perímetro del triángulo es " + area);
}

//Circle

function circlePerimeterCalculate(){
    const radius = document.getElementById("circleInput");
    const valueRadius = Number(radius.value);
    const perimeter = circlePerimeter(valueRadius);
    alert("El perímetro del círculo es " + perimeter);
}

function circleAreaCalculate(){
    const radius = document.getElementById("circleInput");
    const valueRadius = Number(radius.value);
    const area = circleArea(valueRadius);
    alert("El área del círculo es " + area);
}
