const Itinerary = require('../models/itinerary')

const itinerariesControllers = {
    getItineraries: async (req, res) => {
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    },
    getOneItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOne({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : { itinerary },
            success: error ? false : true,
            error: error
        })
    }
    ,
    addItinerary: async (req, res) => {
        const { name, personName, imagePerson, price, duration, hashtags, likes, activities, city } = req.body.data
        let itinerary
        let error = null
        try {
            itinerary = await new Itinerary({
                city: city,
                name: name,
                personName: personName,
                imagePerson:imagePerson,
                price: price,
                duration: duration,
                hashtags:  hashtags,
                likes: 0,
                activities:activities
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    multiplesItineraries: async (req, res) => {
        let itineraries = []
        const data = req.body.data //almaceno en la constante data la informacion que le pedi al body
        let error = null
        try {
            data.map(async (item) => {
                await new Itinerary({
                    city: item.city,
                    name: item.name,
                    personName: item.personName,
                    imagePerson: item.imagePerson,
                    price: item.price,
                    duration: item.duration,
                    hashtags: item.hashtags,
                    likes: item.likes,
                    activities:item.activities
                }).save()
            })
        } catch (err) { error = err }
        itineraries = await Itinerary.find()
        res.json({
            response: error ? "ERROR" : itineraries,
            success: error ? false : true,
            error: error
        })
    },
    modifyItinerary: async (req, res) => {
        const id = req.params.id
        const itinerary = req.body.data
        let itinerarydb
        let error = null
        try {
            itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerarydb,
            success: error ? false : true,
            error: error
        })
    },
    removeItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    findItinerariesFromCity: async (req,res)=>{
        const id= req.params.id
        let itineraries
        let error= null
        try{
            itineraries= await Itinerary.find({city: id}).populate("comments.userId", { firstName: 1, image: 1 });
            console.log(itineraries)
        }catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : (itineraries),
            success: error ? false : true,
            error: error
        })
    },
    likeDislike:async (req,res) =>{
        const id=req.params.itineraryId //id que llega por parametro desde el axios
        const userId = req.user._id //el id nos llega por passport

       await Itinerary.findOne({_id: id})
    
        .then((itinerary) =>{
            // console.log("itinerary",itinerary)
            if(itinerary.likes.includes(userId)){ //si itinerary incluye la propiedad like con el id del usuario
              Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:userId}}, {new:true})//pull quita
               .then((response)=> res.json({success:true, response:response.likes, message:"You don't like it anymore"}))
               .catch((error) => console.log(error))
            }else{ //sino incluye la prop like con el id del usuario
               Itinerary.findOneAndUpdate({_id:id}, {$push:{likes:userId}},{new:true})//push agrega
                .then((response) => res.json({success:true, response:response.likes, message: "You like it"}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    },
}

module.exports = itinerariesControllers

