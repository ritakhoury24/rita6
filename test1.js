const express = require('express')
const app = express()
const xlsx=require('xlsx')
const cors=require('cors')
app.use(cors())

let wb= xlsx.readFile("students.xlsx");//WORKBOOK
let ws1 = wb.Sheets["Sheet1"];

let wb2= xlsx.readFile("datastudents2.xlsx");//WORKBOOK
let ws2 = wb2.Sheets["Sheet1"];

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/rita', function (req, res) {
    res.send('hello rita')
  })
  
//array of obgects 
app.get('/marie', function (req, res) {
    let data=[{id:6,name:'rita'},{id:65,name:"emile"},{id:7,name:"marie"}]
    res.send(data)

  })

//arrow fct 
app.get('/emile', (req,res)=> {
    res.send('hello emile')
  })

//by uson xlsx package
app.get('/students', function (req, res) {
    let data2 = xlsx.utils.sheet_to_json(ws1)
    res.send(data2)
  })

app.get('/datastudents', function (req, res) {
    let stdata=xlsx.utils.sheet_to_json(ws2)
    res.send(stdata)
  })


app.listen(1234)