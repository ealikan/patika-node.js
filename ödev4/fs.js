const fs = require("fs")

fs.writeFile('employess.json', '{"name": "Employee 1 Name", "salary": 2000},', 'utf8', (err,data)=>{
    if(err) console.log(err)
    else console.log("JSON dosya başarılı bir şekilde oluşturuldu")    

}); 



    fs.readFile("employess.json","utf8",(err,data)=>{
        if(err) console.log(err)
        else console.log("dosya okundu",data)
        
    })


    fs.appendFile('employess.json', '\n {"name": "ethem fırat", "salary": 20000}', 'utf8', (err,data)=>{
        if(err) console.log(err)
        else console.log(" dosya başarılı bir şekilde eklendi")
    }); 

    
    // fs.unlink("employess.json",(err)=>{
    // if(err) console.log(err)
    // console.log("dosya silindi")
    // })


