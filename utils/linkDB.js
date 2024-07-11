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
module.exports = db