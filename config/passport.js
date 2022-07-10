//estrategia de autenticacion de usuario
const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy //constructor estrategias
const extractJwt = require('passport-jwt').ExtractJwt //constructor, extraccion de usuario

const User = require('../models/user')
//definimos nueva estrategia, que mediante .fromauth... extraera el token del header y compara su firma desencriptandla con nuestra secret key
module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, (jwt_payload, done) => {
    User.findOne({ _id: jwt_payload.id })

        .then(user => {
            if (user) {
                return done(null, user)
            }
            else if (err) {
                console.log(err)
                return done(err, false);
            }
            else {
                return done(null, false)
            }
        })
        .catch(err => {
            return done(err, false)
        })

}))