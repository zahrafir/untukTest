const bcrypt = require('bcryptjs')

const hash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPas = bcrypt.hashSync(password, salt)
    return hashedPas
}

const compare = (password, hashedPassword) => {
    const isMatch = bcrypt.compareSync(password, hashedPassword)
    console.log(isMatch)  //untuk debug saja
    return isMatch
}

module.exports = { hash, compare }