module.exports = () => {
    const users = req.query.user
    res.send(`Hola admin: ${users}`)
}