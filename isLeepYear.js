function isLeap(year){
    const leapYear = year%4;
    if(leapYear==0){
        console.log('This is leap year.')
    }
    else{
        console.log('This is not leap year.')
    }
}

isLeap(2021)