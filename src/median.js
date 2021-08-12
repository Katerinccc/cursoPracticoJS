
function averageCalculateM(list){
    const sumList = list.reduce(
        function(acummValue = 0, newElement){
            return acummValue + newElement;
        }
    );
    const averageList = sumList / list.length;
    return averageList;
};


function medianCalculate (list) {
    if (list.length !==0){
        let median = 0;
        let index = 0;
        const sortedList = list.sort((a, b) => a - b);
        if (sortedList.length % 2 === 0 ){
            index = sortedList.length / 2;
            let value1 = list[index - 1];
            let value2 = list[index];
            const medianValue1and2 = averageCalculateM([
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



