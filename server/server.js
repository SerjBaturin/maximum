const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000

const fetch = require('node-fetch')
const bodyParser = require('body-parser')


const url = "https://cleaner.dadata.ru/api/v1/clean/address";
const token = "7a8be43c8bc10550ab00100b1e5654ccfcc3d252";
const secret = "500f7e68c22878ae06df5df76e1fdf900e2e5176";

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/dadata', (req, res) => {
  
  const query = req.body.input
  console.log(query)

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + token,
        "X-Secret": secret
    },
    body: JSON.stringify([query])
  }

  fetch(url, options)
  .then(response => response.text())
  .then(result => res.send(result))
  .catch(error => console.log("error", error));

})

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`)
})