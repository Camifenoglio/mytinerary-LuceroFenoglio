const User = require('../models/user')

const usersControllers = {
    signUpUsers: async (req, res) => {
        let { firstName, lastName, email, password, from } = req.body.userData
        try {
            const userExist = await User.findOne({ email })
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
                    res.json({
                        success: true,
                        from: 'signup',
                        message: "We add" + from + "to your means to signIn"
                    })
                }
            } else {
                const passwordHashed = bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    firstName,
                    lastName,
                    email,
                    password: [passwordHashed],
                    verifiedEmail: false,
                    from: [from]
                })
                if (from !== 'form-Signup') {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congrats your user was created with " + from
                    })
                } else {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'We sent yo an email to validate it, please check your email to complete the Sign Up'
                    })
                }
            }
        } catch (error) {
            res.json({ success: false, message: "Something went wrong. Try again in a few seconds" })
        }
    },
    logInUser: async (req, res) => {
        const { email, password, from } = req.body.logedUser
        try {
            const userExist = await User.findOne({ email })
            const indexPass = userExist.from.indexOf(from)
            if (!userExist) {
                res.json({ success: false, message: "Your user has not been registered, please Sign up." })
            } else {
                if (from !== "form-Signup") {
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            from: from,
                        }
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: { userData },
                            message: "Welcome " + userData.firstName + userData.lastName,
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You did not register with " + from + "if you want to enter with this method please Sign Up with " + from
                        })
                    }
                } else {
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            from: from,
                        }
                        await userExist.save()
                        res.json({
                            success: true,
                            from: from,
                            response: { token, userData },
                            message: "Welcome " + userData.firstName + userData.lastName,
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
            res.json({ success: false, message: "Something went wrong. Try again in a few seconds" })
        }
    },
}



module.exports = usersControllers

