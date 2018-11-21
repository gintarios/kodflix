const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();


const url
// = process.env.DB_URL_PRD || process.env.DB_URL_DEV;
process.env.NODE_ENV === "production" ? url = process.env.DB_URL_PRD : url = process.env.DB_URL_DEV;

const database = url.substr(url.lastIndexOf('/') + 1);

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            const dbo = db.db(database);
            resolve(dbo);
        });
    });
}

module.exports = { connect };