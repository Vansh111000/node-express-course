const authorize = (req,res,next) => {
    const {user} = req.query
    if (user === 'Ash'){
        req.user = {
            
            name : 'Ash',
            id : 5
        }
        next()
    }    
    else{
            res.status(401).send('Unauthorized')
    }


    next()
}

module.exports =authorize