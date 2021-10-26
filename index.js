const express = require('express')
const app = express()
const routes = require('./routes/routes1')
const port = process.env.PORT || 3000

app.use(routes)

app.listen(port, () => console.log(`Example app listening on port port!`))