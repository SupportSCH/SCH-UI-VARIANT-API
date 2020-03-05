const app = require('./router.js')

const port = 4201

app.listen(port, () => {
    console.log('App running on port', port)
})