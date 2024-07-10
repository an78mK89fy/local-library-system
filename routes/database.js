const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const db = new sqlite3.Database(path.join(__dirname,
     '../database/localLibraryDatabase.sqlite3'), sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('open is succeed')
    }
})

router.get('/books', (req, res) => {
    db.all('SELECT * FROM books', (err, rows) => {
        if (err) {
            res.status(404).end()
        } else {
            res.send(rows)
        }
    })
})

module.exports = router