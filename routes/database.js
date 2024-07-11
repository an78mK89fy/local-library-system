const express = require('express')
const router = express.Router()
const db = require('../utils/linkDB.js')

function routerGet(path, sql, callback = () => { }) {
    router.get(path, (req, res) => {
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(404).send(err)
            } else {
                callback(req, res)
                res.send(rows)
            }
        })
    })
}

routerGet('/books', 'SELECT * FROM books' )


module.exports = router