const yarıçap = process.argv.slice(2)

function daireAlan(yarıçap,pi){
    let sonuc = pi*(yarıçap*yarıçap)

    console.log(`yarıçapı ${yarıçap} olan dairenin alanı:${sonuc}`)

}

daireAlan(yarıçap[0],3.14)