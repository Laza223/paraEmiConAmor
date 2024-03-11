const fs = require("fs")
const path = require("path")

const { loadData } = require('../database')

module.exports = (res, req, next) => {

    const data = loadData();
    let user = req.query.user

    if (data.includes(user)) {
        return next()
    } else {
        res.send('No tienes los privilegios para ingresar')
    }
}