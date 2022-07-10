const Router = require('express').Router();

const citiesControllers = require('../controllers/citiescontroller');
const itinerariesControllers = require('../controllers/itinerariescontroller');
const usersControllers = require ('../controllers/userscontroller')
const activitiesControllers = require ('../controllers/activitiescontroller')
const commentsControllers = require('../controllers/commentsController')

const validator = require ('../config/validator')
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary,  removeItinerary, multiplesItineraries,findItinerariesFromCity, likeDislike} = itinerariesControllers
const {signUpUsers, logInUser, verifyMail, verifyToken} = usersControllers
const {getActivities, getOneActivity, addActivity, modifyActivity,  removeActivity, multiplesActivities,findActivitiesFromItinerary} = activitiesControllers
const {addComment, modifyComment,deleteComment}= commentsControllers
const passport= require('../config/passport')

// RUTAS CITIES
Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity )

Router.route("/multiplesCities")
.post(multiplesCities)

// RUTAS ITINERARIES
Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route("/multiplesItineraries")
.post(multiplesItineraries)

Router.route('/itinerariesbycities/:id')
.get(findItinerariesFromCity)

Router.route("/like/:itineraryId")
.put(passport.authenticate("jwt", {session: false}),likeDislike)

// RUTAS ACTIVITIES

Router.route('/activities')
.get(getActivities)
.post(addActivity)

Router.route('/activities/:id')
.delete(removeActivity)
.put(modifyActivity)
.get(getOneActivity)

Router.route("/multiplesActivities")
.post(multiplesActivities)

Router.route('/activitiesbyitinerary/:id')
.get(findActivitiesFromItinerary)

// RUTAS USER

Router.route('/auth/signup')
.post(validator, signUpUsers)

Router.route ('/auth/login')
.post(logInUser)

Router.route('/verify/:string')
.get(verifyMail)

Router.route('/auth/token')
.get(passport.authenticate('jwt', {session: false}),verifyToken)

//RUTAS COMMENTS

Router.route('/allItineraries/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)
.put(passport.authenticate('jwt',{ session: false }),modifyComment)

Router.route('/allItineraries/comment/:id')
.delete(passport.authenticate('jwt',{ session: false }),deleteComment)

module.exports = Router