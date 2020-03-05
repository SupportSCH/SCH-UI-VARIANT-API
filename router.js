const bodyParser = require('body-parser')
const express = require('express')
const get = require('./api_data')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/get_variants', get.get)
app.post('/insert_variants', get.insert)
app.get('/list_variants', get.list_variant)
app.post('/select_variant', get.select_variant)
module.exports = app;