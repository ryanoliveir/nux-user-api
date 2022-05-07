const User = require('../../services/database/models/Users/users')

const privilegeCheck = async (req, res, next) => {
    
    const user = await User.findByPk(req.session.userid)

    switch ((user.privilege).toString()) {
        case "1":
            console.log("root")
            return next()

        case "2":
            console.log("admin")
            return next()

        case "3":
            console.log("geral")
            return next()

        default:
            break;
    }
}

module.exports = privilegeCheck