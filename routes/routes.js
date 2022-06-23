const Router = require('express').Router();

const citiesControllers = require('../controllers/citiescontroller');
const itinerariesControllers = require('../controllers/itinerariescontroller');
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary,  removeItinerary, multiplesItineraries,findItinerariesFromCity} = itinerariesControllers

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


module.exports = Router