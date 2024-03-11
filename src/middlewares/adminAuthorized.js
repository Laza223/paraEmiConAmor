const fs = require("fs"); 
const path = require("path");

const registerLog = (req,res,next) => { 
  fs.appendFileSync(path.join(__dirname , '../log/user.logs.txt') , `El usuario ingreso a la ruta ${req.url}\n`)

  next()
}

module.exports = registerLog