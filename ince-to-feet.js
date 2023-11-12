// var myIncas = 12;
// const myFeet = myIncas/12;
// // console.log(myFeet);


// var dadaIncas = 144;
// const dadaFeet = dadaIncas/12;
// console.log('feet hoba:', dadaFeet);


function incasToFeet(incas){
    const feet = incas/12;
    return feet;
}
const dadaIncas = 144;
const dadaFeet =incasToFeet(dadaIncas);
console.log(dadaFeet);

const nanaIncas = 168;
const nanaFeet = incasToFeet(nanaIncas);
console.log(nanaFeet);