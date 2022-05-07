const sessionCheck = (req, res, next) => {
    const session = req.session.userid;

    if(session != null){
        return next()
    }else{
        return res.status(401).end()
    }
}

module.exports = sessionCheck