const axios = require("axios");

module.exports ={ 
    getZone: async (req, res, next) => {
        if (req.post.zip) {
            const zone = await axios.get(`phzmapi.org/${req.post.zip}.json`).then(response => response.text());
            console.log(zone)
            return next();
        } else {
            return res.status(400).send({ message: "You must choose a valid zip code" });
        }
    }
}
