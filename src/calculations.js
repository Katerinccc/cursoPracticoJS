
//Extraer datos del usuario y convertirlos a un array
function datalist(datos){
    let inicio=0;
    let userList = [];
    while(true){
        let comma = datos.indexOf(",")  
        if (comma ==-1){
            number = datos.slice(comma + 1,);
            number = parseFloat(number);
            userList.push(number);
            console.log(userList);
        break
        }
        else{
            let number = datos.slice(inicio, comma);
            number =parseFloat(number);
            userList.push(number);
            datos = datos.slice(comma +1,);
        }
    }
    return userList
}


// Promedio

function averageCalculate(userList){
    const sumList = userList.reduce(
        function(acummValue = 0, newElement){
            return acummValue + newElement;
        }
    );
    const averageList = sumList / userList.length;
    return averageList
};

function average(){
    const datos = document.getElementById("user-inputs").value;
    let data = datalist(datos);
    const result = averageCalculate(data);
    const resultP = document.getElementById("resultAverage");
    resultP.innerText = "El  promedio es: " + result.toFixed(2);
}



//Mediana

function medianCalculate (list) {
    if (list.length !==0){
        let median = 0;
        let index = 0;
        const sortedList = list.sort((a, b) => a - b);
        if (sortedList.length % 2 === 0 ){
            index = sortedList.length / 2;
            let value1 = list[index - 1];
            let value2 = list[index];
            const medianValue1and2 = averageCalculate([
                value1, value2,])
            return median = medianValue1and2;
        } else{
            index = sortedList.length / 2;
            index = Math.floor(index);
            return median = list[index];
        }
    }
    else{
        console.log("Debes ingresar una lista con valores")
    }
}