const Router = require('express').Router();

const citiesControllers = require('../controllers/citiescontroller');
const itinerariesControllers = require('../controllers/itinerariescontroller');
const usersControllers = require ('../controllers/userscontroller')
const validator = require ('../config/validator')
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary,  removeItinerary, multiplesItineraries,findItinerariesFromCity} = itinerariesControllers
const {signUpUsers, logInUser, verifyMail, verifyToken} = usersControllers
const passport= require('../config/passport')

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity )

Router.route("/multiplesCities")
.post(multiplesCities)

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

Router.route('/auth/signup')
.post(validator, signUpUsers)

Router.route ('/auth/login')
.post(logInUser)

Router.route('/verify/:string')
.get(verifyMail)

Router.route('/auth/token')
.get(passport.authenticate('jwt', {session: false}),verifyToken)

module.exports = Router