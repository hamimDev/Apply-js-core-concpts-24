function mileToMiter (mile){
    var kMiter1 =1.6;
    const kMiter = mile*kMiter1;
    return kMiter ;
}

var dadaMile = 20;
var dadaKMiler = mileToMiter(dadaMile);
console.log(dadaKMiler);