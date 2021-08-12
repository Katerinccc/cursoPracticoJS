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

function averageCalculate(userList){
    // let sumList = 0;
    // for (let i = 0; i< list.length; i++ ){
    //     sumList = sumList + list[i];
    // }
    const sumList = userList.reduce(
        function(acummValue = 0, newElement){
            return acummValue + newElement;
        }
    );
    const averageList = sumList / userList.length;
    return averageList
};

document.querySelector(".averageButton").addEventListener("click", ()=>{
    const datos=document.getElementById("user-inputs").value;
    let data = datalist(datos);
    const result = averageCalculate(data);
    const resultP = document.getElementById("resultAverage");
    resultP.innerText = "El  promedio es: " + Number(result).toLocaleString("de-DE", {minimumFractionDigits: 0});;
})


