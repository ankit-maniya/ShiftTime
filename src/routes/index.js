"use strict"

/*** Third Party Packages ***/
import express from 'express';

/*** Global ***/
import utils from '../global/index.js'

/*** Controllers ***/
import { user } from '../controllers/index.js'

/*** Middleware ***/
import { me } from '../middlewares/index.js'
import EmailService from '../global/EmailService.js';

const routes = express.Router()

/*** TEST ***/
routes.get('/', (req, res) => utils.sendSuccess(res, 200, { label: 'Api Working Fine!!' }))
// routes.get('/test', async (req, res) => {
//     await EmailService.sendMail({
//         from: 'Amaniya4606@conestogac.on.ca',
//         to: 'pratikboghani1@gmail.com',
//         subject: 'Otp 9999',
//         text: 'This is a test email OTP is 9999'
//     })

//     utils.sendSuccess(res, 200, { label: 'Api Working Fine!!' })
// })

/*** USER ***/
routes.get('/users', user.getAll)
routes.get('/users/:userId', user.get)
routes.post('/users/signup', user.create)
routes.post('/users/login', user.login)
routes.put('/users/:userId', me, user.update)
routes.delete('/users/:userId', me, user.delete)

export default routes