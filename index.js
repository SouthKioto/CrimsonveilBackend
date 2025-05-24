const express = require('express')
const app = express()
const port = 3000

//pobieranie danych za pomoca get z bazy
app.get('/', (req, res) => {
  res.send('To jest get request')
})

// wysyłanie danych za pomocą post do bazy
app.post("/", (req, res) => {
  res.send("To jest post request")
})

app.put("/user", (req, res) => {
  res.send("Put request na sciezce /user")
})

app.delete("/user", (req, res) => {
  res.send('Got a DELETE request at /user')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

