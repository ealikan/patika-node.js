const express = require('express')


const app = express()

app.get('/',(req, res) => {
  res.status(200).send('index sayfası')
})


app.get('/about',(req, res) => {
  res.status(200).send('hakkimda sayfası')
})


app.get('/contact',(req, res) => {
  res.status(200).send('iletisim sayfası')
})

app.get('*',(req, res) => {
  res.status(404).send('404 NOT FOUND')
})

const port = 3000

app.listen(port,()=>{
    console.log(`sunucu ${port} portta çalışmaya başladı`)
})