const Activity = require('../models/activity')

const activitiesControllers = {
    getActivities: async (req, res) => {
        let activities
        let error = null
        try {
            activities = await Activity.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { activities },
            success: error ? false : true,
            error: error
        })
    },
    getOneActivity: async (req, res) => {
        const id = req.params.id
        let activity
        let error = null
        try {
            activity = await Activity.findOne({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : { activity },
            success: error ? false : true,
            error: error
        })
    }
    ,
    addActivity: async (req, res) => {
        const { name, image, itinerary } = req.body.data
        let activity
        let error = null
        try {
            activity = await new Activity({
                name: name,
                image:image,
                itinerary: itinerary
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    },
    multiplesActivities: async (req, res) => {
        let activities = []
        const data = req.body.data //almaceno en la constante data la informacion que le pedi al body
        let error = null
        try {
            data.map(async (item) => {
                await new Activity({
                    name: item.name,
                    image:item.image,
                    itinerary: item.itinerary
                }).save()
            })
        } catch (err) { error = err }
        activities = await Activity.find()
        res.json({
            response: error ? "ERROR" : activities,
            success: error ? false : true,
            error: error
        })
    },
    modifyActivity: async (req, res) => {
        const id = req.params.id
        const activity = req.body.data
        letactivitydb
        let error = null
        try {
            activitydb = await Itinerary.findOneAndUpdate({ _id: id }, activity, { new: true })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activitydb,
            success: error ? false : true,
            error: error
        })
    },
    removeActivity: async (req, res) => {
        const id = req.params.id
        let activity
        let error = null
        try {
            activity = await Activity.findOneAndDelete({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    },
    findActivitiesFromItinerary: async (req,res)=>{
        const id= req.params.id
        let activities
        let error= null
        try{
            activities= await Activity.find({itinerary: id})
        }catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : (activities),
            success: error ? false : true,
            error: error
        })
    }
}

module.exports = activitiesControllers