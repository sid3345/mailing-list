module.exports = (req , res , next) => {
    if(req.user.credits < 1){     //checking if user has enough credit.
        return res.status(403).send({error : 'No enough credits!'})
    }

    next()
}