const axios = require("axios");

module.exports ={ 
    getZone: async (req, res, next) => {
        if (req.body.zip) {
            console.log(req.body.zip)
            try{
                const zone = await axios.get(`phzmapi.org/${req.post.zip}.json`)
                console.log(req.body.zip)
                console.log(zone)
                return next()
            } catch(err){
                return next(err)
            }
            //return res.status(400).send({ message: "You must choose a valid zip code" });
        }
        return next()
    }
}
