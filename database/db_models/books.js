const db = require('../../utils/linkDB.js')

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS "books" (
        "bid" INTEGER NOT NULL,
        "name" VARCHAR(50) NOT NULL,
        "author" VARCHAR(50) NULL,
        "create_time" BIGINT NULL,
        PRIMARY KEY ("bid")
        );`)
    // db.run("INSERT INTO `books`(`name`, `author`) VALUES('海底两万里', 1)")
})

module.exports = {}