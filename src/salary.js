const colombia = [];

colombia.push({
    name: "Katerina",
    salary: 3600000
});

colombia.push({
    name: "Manuel",
    salary: 7500000
});

colombia.push({
    name: "Alejandro",
    salary: 5600000
});

colombia.push({
    name: "Catalina",
    salary: 4100000
});

colombia.push({
    name: "Karen",
    salary: 2100000
});

colombia.push({
    name: "Luis",
    salary: 2800000
});

colombia.push({
    name: "Alex",
    salary: 1800000
});

colombia.push({
    name: "Stephany",
    salary: 1300000
});

colombia.push({
    name: "Felipe",
    salary: 980000
});

colombia.push({
    name: "Ana",
    salary: 1500000
});

const colSalary = colombia.map(
    function (person){
        return person.salary;
    }
);

const colSalarySorted = colSalary.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
)

function loadPage(){
    printSalaries();
}

function printSalaries() {
    const print = colombia.map(function(show){
        return show.name +' '+ Number(show.salary).toLocaleString("de-DE", {minimumFractionDigits: 0}) + "\n";
    })
    const salaries = document.getElementById("salaries");
    salaries.innerText = print; 
}

function isEven(number) {
    return (number % 2 === 0);
}

function averageCalculate(userList){
    const sumList = userList.reduce(
        function(acummValue = 0, newElement){
            return acummValue + newElement;
        }
    );
    const averageList = sumList / userList.length;
    return averageList
};

function medianSalary(list) {
    const half = parseInt(list.length /2);
    if (isEven(list.length)){
        const medianPerson1 = list[half];
        const medianPerson2 = list[half - 1];
        const median = averageCalculate([
            medianPerson1, medianPerson2,])
        return median;
    }else{
        const medianPerson = list[half];
        return medianPerson;
    }
}

function medianS() {
    const result = medianSalary(colSalarySorted);
    const resultSalary = document.getElementById("resultSalary");
    resultSalary.innerText = "La mediana de los salarios es $" + Number(result).toLocaleString("de-DE", {minimumFractionDigits: 0});;
}
