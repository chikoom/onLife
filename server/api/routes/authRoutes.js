const express = require('express')
const auth = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')

const findUserNameInDB = (userName) => User.findOne({ name: userName })

auth.post('/sighnup', async (req, res) => {
    const { userName, password } = req.body

    const isUserNameTaken = await findUserNameInDB(userName)
    if (isUserNameTaken) {
        res.status(409).send({ err: 'The user name is already taken' })
    }
    const newUser = new User({ userName, password: await bcrypt.hash(password, 10), courses: [] })
    newUser
        .save()
        .then(u => { res.status(201).send({ userName, userID: newUser._id, msg: 'success' }) })
        .catch(e => { res.status(500).send({ err: 'Oops the user couldnt save please try again' }) })
})

auth.post('/login', async (req, res) => {
    const { userName, password } = req.body

    const isUserNameInDB = await findUserNameInDB(userName)
    if (!isUserNameInDB) {
        res.status(404).send({ err: 'User name not in data base' })
    }
    const hash = isUserNameInDB.password
    await bcrypt.compare(password, hash) ?
        res.status(202).send({ userName, userID: newUser._id, msg: 'success' })
        :
        res.status(401).send({ err: 'passwords dont match' })
})

module.exports = auth