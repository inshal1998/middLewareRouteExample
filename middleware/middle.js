function admin(req,res,next) {
    const admin = "Inshal"
    if (req.params.name && req.params.name == admin || req.body.name && req.body.name == admin) {
        res.send(`<h1>HEllo ${admin}</h1>`)
    } else {
        res.send(`<h1>Kaun Hai bei tu ${req.params.name != null ?req.params.name : req.body.name } jaa ${admin} Boss sei baat kar</h1>`)
    }
    console.log("This is From MiddleWare :  ",req.params.name , `jaa ${admin} sei baat kar`);
    next()
}

module.exports = admin