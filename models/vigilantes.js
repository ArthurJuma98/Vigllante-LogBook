const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default:"Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

//create vigilante schema

const vigilanteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    crime: {
        type: String,
        required: true
    },

    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Vigilante = mongoose.model('vigilante', vigilanteSchema);
module.exports = Vigilante;