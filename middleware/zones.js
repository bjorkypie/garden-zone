const axios = require("axios");

module.exports ={ 
    getZone: async (req, res, next) => {
        if (req.body.zip) {
            try{
                const usdaZone = await axios.get(`https://phzmapi.org/${req.body.zip}.json`)
                req.body.zoneData = usdaZone.data
                return next()
            } catch(err){
                return res.status(400).send({ message: "Choose a different zip code " });
            }
        }
        return res.status(400).send({ message: "You must input a zip code"})
    }
}
