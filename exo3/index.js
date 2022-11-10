const path = require ('path');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public","html","page.html"));
})

app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname,"public","html","page2.html"));
})

app.get('/Hello', (req, res) => {
    res.sendFile(path.join(__dirname,"public","html","page3.html"));
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})