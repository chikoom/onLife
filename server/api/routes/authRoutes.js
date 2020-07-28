const express = require('express')
const auth = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')

const findUserNameInDB = (userName) => User.findOne({ userName })

auth.post('/signup', async (req, res) => {
    const { userName, password } = req.body

    const isUserNameTaken = await findUserNameInDB(userName)
    if (isUserNameTaken) {
        res.status(409).send('The user name is already taken')
    } else {
        const newUser = new User({ userName, password: await bcrypt.hash(password, 10), courses: [] })
        newUser
            .save()
            .then(u => { res.status(201).send({ userName, userID: newUser._id, msg: 'success' }) })
            .catch(e => { res.status(500).send('Oops the user couldnt save please try again') })
    }
})

auth.post('/login', async (req, res) => {
    const { userName, password } = req.body

    const isUserNameInDB = await findUserNameInDB(userName)
    if (!isUserNameInDB) {
        res.status(404).send('User name not in data base')
    } else {
        const hash = isUserNameInDB.password
        const userID = isUserNameInDB._id
        await bcrypt.compare(password, hash) ?
            res.status(202).send({ userName, userID, msg: 'success' })
            :
            res.status(401).send('passwords dont match')
    }
})

module.exports = auth