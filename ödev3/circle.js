let pi = 3.14
function circleArea(yarıçap){
    
    let sonuc = pi*(yarıçap*yarıçap)

    console.log(`yarıçapı ${yarıçap} olan dairenin alanı:${sonuc}`)
}


function circlecircumFerence (yarıçap){

    let sonuc = 2*pi*yarıçap

    console.log(`yarıçapı ${yarıçap} olan dairenin çevresi:${sonuc}`)

}

module.exports ={
    circleArea,
    circlecircumFerence,
   
    
}
