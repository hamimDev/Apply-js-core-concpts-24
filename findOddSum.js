// function getSumNumber(numbers){
//     let sum = 0;
//     for(let  i = 0; i <numbers.lr){
//         const index =i;
//         const element =numbers[index];
//         sum = sum+element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// var myNumber =[12, 18, 22, 28, 36, 30, 40];
// getSumNumber(myNumber);

function getSumNumber(numbers) {
    let sum  = 0 ;
    for (let i = 0; i < numbers.length; i++) {
        const index = i ;
        const element = numbers[index];
        sum = sum+element ;
        console.log( index, element, sum);
    }
    return sum ;
}

function getOddNumber(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if( element%2 !== 0){
            console.log(index , element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers
}

const myNumber = [12, 13, 14, 45, 16, 71, 52, 85];
const oddNumbers = getOddNumber(myNumber);
console.log(oddNumbers);
getSumNumber(myNumber);