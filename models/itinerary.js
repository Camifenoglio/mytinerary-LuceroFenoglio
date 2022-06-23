const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true},
    personName:{type:String, required:true},
    imagePerson:{type:String, required:true},
    price: {type:String, required:true},
    duration: {type:String, required:true},
    hashtags:  {type:Array, required:true},
    likes: {type:Number, required:true},
    activities: {type:String},
    city: {type: mongoose.Types.ObjectId, ref: 'cities'}
})

const Itinerary= mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary