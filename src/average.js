
function averageCalculate(list){
    // let sumList = 0;
    // for (let i = 0; i< list.length; i++ ){
    //     sumList = sumList + list[i];
    // }
    const sumList = list.reduce(
        function(acummValue = 0, newElement){
            return acummValue + newElement;
        }
    );
    const averageList = sumList / list.length;
    return averageList;
};


