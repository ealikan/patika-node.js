const fs = require("fs")

// Dosya Okumak

// fs.readFile("password.txt","utf8",(err,data)=>{
//     if(err) console.log(err)
//     else console.log(data)
//     console.log("dosya okundu")
// })

//Dosya oluşturmak



// fs.writeFile('example.txt', 'Kodluyoruz', 'utf8', (err,data)=>{
//     if(err) console.log(err)
//     else console.log("JSON dosya başarılı bir şekilde oluşturuldu")
// }); 

//veri eklemek

// fs.appendFile('example.txt', '\n kodluyoruz 2', 'utf8', (err,data)=>{
//     if(err) console.log(err)
//     else console.log(" dosya başarılı bir şekilde eklendi")
// }); 

//dosya silmek

// fs.unlink("example.json",(err)=>{
//     if(err) console.log(err)
//     console.log("dosya silindi")
// })

//Klasörler oluşturma

fs.mkdir("uploads/img",{recursive:true},(err)=>{
    if(err) console.log(err)
    console.log("klasörler oluşturuldu")
})

//klasör silme

fs.rmdir("uploads",{recursive:true},(err)=>{
    if(err) console.log(err)
    console.log("klasörler silindi")
})
