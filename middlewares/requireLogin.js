module.exports = (req , res , next) => {
    if(!req.user){     //checking if user is looged in or not.
        return res.status(401).send({error : 'You must log in!'})
    }

    next()
}