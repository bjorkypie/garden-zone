const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
    produce: {
        type: String,
        required: true,
    },
    culinaryType: {
        type: String,
        required: false,
    },
    seasonalityByZone: [{
        zone: [ Number ]
    }]
})