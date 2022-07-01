const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto= require('crypto')
const sendEmail = require('../controllers/sendEmail')

const usersControllers = {
    signUpUsers: async (req, res) => {
        let { firstName, lastName, email, image, password, from } = req.body.userData
        try {
            const userExist = await User.findOne({ email })
            const verification = false
            const uniqueString = crypto.randomBytes(15).toString('hex')
            if (userExist) {
                if (userExist.from.indexOf(from) !== -1) {
                    res.json({
                        success: false,
                        from: 'signup',
                        message: "You have already done you signup, please sign in"
                    })
                } else {
                    const passwordHashed = bcryptjs.hashSync(password, 10)
                    userExist.from.push(from)
                    userExist.password.push(passwordHashed)
                    await userExist.save()
                    res.json({
                        success: true,
                        from: 'signup',
                        message: "We add " + from + " to your means to signIn"
                    })
                }
            } else {
                const passwordHashed = bcryptjs.hashSync(password, 10)
                console.log(passwordHashed)
                const newUser = await new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    image: image,
                    uniqueString: uniqueString,
                    verification: verification,
                    password: [passwordHashed],
                    from: [from]
                })
                console.log(newUser)
                if (from !== 'form-signup') {
                    await newUser.save()
                    console.log(newUser)
                    res.json({
                        success: true,
                        from: from,
                        message: "Congrats your user was created with " + from,
                    })
                } else {
                    await newUser.save()
                    await sendEmail(email, uniqueString)
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'We sent you an email to validate it, please check your email to complete the Sign Up'
                    })
                }
            }
        } catch (error) {
            res.json({ console: console.log(error),success: false, message: "Something went wrong. Try again in a few seconds" })
        }
    },
    logInUser: async (req, res) => {
        const { email, password, from } = req.body.userData

        try {
            const userExist = await User.findOne({email})
           // const indexPass = userExist.from.indexOf(from)
            if (!userExist) {
                res.json({ success: false, message: "Your email has not been registered, please Sign up." })
            } else {
                let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                console.log(passwordMatch.length)
                if (from !== "form-signup") {
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            image: userExist.image,
                            from: from,
                        }
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: { userData },
                            message: "Welcome " + userData.firstName + " " + userData.lastName,
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You did not register with " + from + " if you want to enter with this method please Sign Up with " + from
                        })
                    }
                } else {
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            image: userExist.image,
                            from: from,
                        }
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: { userData },
                            message: "Welcome " + userData.firstName + " " + userData.lastName,
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "The username or password does not match"
                        })
                    }
                }
            }
        } catch (error) {
            res.json({ success: false, message: "Something went wrong. Try again in a few seconds", console: console.log(error) })
        }
    },
    verifyMail: async (req,res) => {
        const string =req.params.string 
        console.log("soy la const string")
        console.log(string)
        const user = await User.findOne({uniqueString: string})
        console.log(user)
        if(user) {
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000")      
        }
        else{
            res.json({
                success:false,
                message: 'email has not been confirmed yet'
            })
        }
    }
}

module.exports = usersControllers

