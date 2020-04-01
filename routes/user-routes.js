var express = require('express');
var router = express.Router();
var Controller = require('../controllers');

/**
 * @swagger
 *
 * /user/register:
 *   post:
 *     description: Register to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         in: formData
 *         type: string
 *       - name: lastName
 *         in: formData
 *         type: string
 *       - name: email
 *         in: formData
 *         type: string
 *       - name: userName
 *         in: formData
 *         type: string
 *       - name: password
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
router.post('/register', Controller.UserController.register);

/**
 * @swagger
 *
 * /user/login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

router.post('/login', Controller.UserController.login);

/**
 * @swagger
 *
 * /user/checkUnique:
 *   post:
 *     description: checkUnique
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: type
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         type: string
 *       - name: userName
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
router.post('/checkUnique', Controller.UserController.checkUnique);

/**
 * @swagger
 *
 * /user/getUserById/{userId}:
 *   get:
 *     description: getUserById
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: login
 */
router.get('/getUserById/:userId', Controller.UserController.getUserById);

/**
 * @swagger
 *
 * /user/updateUser/{userId}:
 *   put:
 *     description: updateUser
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: UserId
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: login
 */
router.put('/updateUser/:userId', Controller.UserController.updateUser);

/**
 * @swagger
 *
 * /user/resetPassword:
 *   post:
 *     description: resetPassword
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: formData
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: login
 */
router.post('/resetPassword', Controller.UserController.resetPassword);

/**
 * @swagger
 *
 * /user/verifyOtp:
 *   post:
 *     description: verifyOtp
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: formData
 *         type: string
 *         required: true
 *       - name: otpCode
 *         in: formData
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: login
 */
router.post('/verifyOtp', Controller.UserController.verifyOtp);

/**
 * @swagger
 *
 * /user/sendOtp:
 *   post:
 *     description: sendOtp
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: login
 */
router.post('/sendOtp', Controller.UserController.sendOtp);

/**
 * @swagger
 *
 * /user/getUsersList?page={page}:
 *   get:
 *     description: getUsersList
 *     produces:
 *       - application/json
 *     parameters:
 *         name: page
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: login
 */
router.get('/getUsersList', Controller.UserController.getUsersList);

module.exports = router;