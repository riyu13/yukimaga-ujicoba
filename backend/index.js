require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors")
const db = require('./config/database')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Vue.js, Express, and Postgres API' })
})
//user
app.get('/Users', db.getUsers)
app.get('/Users/:id', db.getUsersById)
app.post('/Users', db.createUsers)
app.put('/Users/:id', db.updateUsers)
app.delete('/Users/:id', db.deleteUsers)
//user
app.get('/Sensei', db.getSensei)
app.get('/Sensei/:id', db.getSenseiById)
app.post('/Sensei', db.createSensei)
app.put('/Sensei/:id', db.updateSensei)
app.delete('/Sensei/:id', db.deleteSensei)
//hirakata
app.get('/Hirakata', db.getHirakata)
app.get('/Hirakata/:id', db.getHirakataById)
app.post('/Hirakata', db.createHirakata)
app.put('/Hirakata/:id', db.updateHirakata)
app.delete('/Hirakata/:id', db.deleteHirakata)
//Kanjin5
app.get('/Kanjin5', db.getKanjin5)
app.get('/Kanjin5/:id', db.getKanjin5ById)
app.post('/Kanjin5', db.createKanjin5)
app.put('/Kanjin5/:id', db.updateKanjin5)
app.delete('/Kanjin5/:id', db.deleteKanjin5)
//Katabenda
app.get('/Katabenda', db.getKatabenda)
app.get('/Katabenda/:id', db.getKatabendaById)
app.post('/Katabenda', db.createKatabenda)
app.put('/Katabenda/:id', db.updateKatabenda)
app.delete('/Katabenda/:id', db.deleteKatabenda)
//Katakerja
app.get('/Katakerja', db.getKatakerja)
app.get('/Katakerja/:id', db.getKatakerjaById)
app.post('/Katakerja', db.createKatakerja)
app.put('/Katakerja/:id', db.updateKatakerja)
app.delete('/Katakerja/:id', db.deleteKatakerja)
//Katasifat
app.get('/Katasifat', db.getKatasifat)
app.get('/Katasifat/:id', db.getKatasifatById)
app.post('/Katasifat', db.createKatasifat)
app.put('/Katasifat/:id', db.updateKatasifat)
app.delete('/Katasifat/:id', db.deleteKatasifat)
//Katasifat2
app.get('/Katasifat2', db.getKatasifat2)
app.get('/Katasifat2/:id', db.getKatasifat2ById)
app.post('/Katasifat2', db.createKatasifat2)
app.put('/Katasifat2/:id', db.updateKatasifat2)
app.delete('/Katasifat2/:id', db.deleteKatasifat2)
//Pembayaran
app.get('/Pembayaran', db.getPembayaran)
app.get('/Pembayaran/:id', db.getPembayaranById)
app.post('/Pembayaran', db.createPembayaran)
app.put('/Pembayaran/:id', db.updatePembayaran)
app.delete('/Pembayaran/:id', db.deletePembayaran)

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}.`)
})