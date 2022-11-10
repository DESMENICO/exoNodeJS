const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bonjour !");
})

app.get('/hello', (req, res) => {
   if(req.query.name != undefined){
       res.send("Bonjour " + req.query.name + " !");
   }else{
       res.send("Quel est votre nom? ");
   }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})