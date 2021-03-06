const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000
const mysql = require('mysql2')

const fetch = require('node-fetch')
const bodyParser = require('body-parser')


const url = "https://cleaner.dadata.ru/api/v1/clean/address";
const token = "7a8be43c8bc10550ab00100b1e5654ccfcc3d252";
const secret = "500f7e68c22878ae06df5df76e1fdf900e2e5176";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'maximum',
  password: 'root'
});

connection.connect((err) => {
  err ? console.log(err) : console.log("Coonection is OK")
})

app.use(cors())
app.use(bodyParser.json())

app.get('/dadata', (req, res) => {
  connection.query("SELECT query FROM queries ORDER BY rand() LIMIT 1", (err, results) => {
    let dadataQuery = ''
    if(err) {
      console.log(err)
    }
    if (results[0] === null || results[0] === undefined || results[0] === '' || results[0] === {}) {
      dadataQuery = "москва"
    } else {
      dadataQuery = JSON.stringify(results[0].query)
    }

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + token,
          "X-Secret": secret
      },
      body: JSON.stringify([dadataQuery])
    }
  
    fetch(url, options)
    .then(response => response.text())
    .then(result => res.send(result))
    .catch(error => console.log("error", error));
  })

})

app.post('/dadata', (req, res) => {
  
  const dadataQuery = req.body.input

  connection.query("INSERT INTO queries (query) VALUES ('" + dadataQuery + "')")

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + token,
        "X-Secret": secret
    },
    body: JSON.stringify([dadataQuery])
  }

  fetch(url, options)
  .then(response => response.text())
  .then(result => res.send(result))
  .catch(error => console.log("error", error));

})

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`)
})