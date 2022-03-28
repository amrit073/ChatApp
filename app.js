const express =require('express')
const app = express()
const fs = require('fs')


app.get('/', (req, res)=>{
    res.status(200).sendFile( `${__dirname + '/public/index.html'}`)
})

app.get('/getCom', (req, res)=>{
fs.readFile('./data.json', 'utf-8', (err, data)=>{
    if (err) throw err
    data = JSON.parse(data)
    console.log(data);
    res.json(data)
})
}
)



app.listen(3000 , ()=>{
    console.log('started at port 3000');
})











