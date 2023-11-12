// const eleManat =15527;
// if(eleManat%2==0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

function isEven(number){
    const remainder = number%2;
    if(remainder===0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

isEven(43);