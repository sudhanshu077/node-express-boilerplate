const Model = require('../models');
var Services = require('../services');

exports.register = async (request, response) => {
    console.log(request.body);
    let userObj = {};
    userObj = request.body;
    userObj.otpCode = '1234';

    // check if email exists
    try {
        let user = await Services.UserService.checkEmail(userObj.email);
        if (user != null)
            return Services.GlobalService.sendError(response, 'Email already exists.');
    } catch (err) {
        return Services.GlobalService.sendError(response, err);
    }

    // // check if username is unique
    if (userObj.userName) {
        let user = await Model.User.findOne({ userName: userObj.userName });
        if (user != null) {
            return Services.GlobalService.sendError(response, 'Username already exists.');
        }
    }

    try {
        let save = await Services.UserService.saveUser(userObj);
        return Services.GlobalService.sendSuccess(response, 'User registered successfully.', save);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.login = async (request, response) => {
    let existingUser = await Services.UserService.checkEmail(request.body.email);
    if (existingUser == null) {
        return Services.GlobalService.sendError(response, 'User doesn\'t exist');
    }
    try {
        let userObj = await Services.UserService.loginWithEmail(existingUser, request.body);

        return Services.GlobalService.sendSuccess(response, null, userObj);
    } catch (err) {
        return Services.GlobalService.sendError(response, err);
    }
}

exports.checkUnique = async (request, response) => {
    let type = request.body.type; // username or email
    let userName = request.body.userName;
    let email = request.body.email; 
    try{
        console.log(request.body);
        if(type == 'username'){
            let userObj = await Services.UserService.checkUnique(userName, type);
            if(userObj.length == 0)
                return Services.GlobalService.sendSuccess(response, 'Username available');
            else
                return Services.GlobalService.sendError(response, 'Username exits.');
        }else if(type == 'email'){
            let userObj = await Services.UserService.checkUnique(email, type);
            console.log(userObj);
            if(userObj.length == 0)
                return Services.GlobalService.sendSuccess(response, 'Email available');
            else
                return Services.GlobalService.sendError(response, 'Email exits.');
        }else{
            return Services.GlobalService.sendError(response, 'Type can be username or email only.');
        }
    }catch(err){
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.updateUser = async (request, response) => {
    try{
        let userObj = await Services.UserService.updateUser(request);
        return Services.GlobalService.sendSuccess(response, null, userObj);
    }catch(err){
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.getUsersList = async (request, response) => {
    try {
        let users = await Services.UserService.getUsersList(request);
        return Services.GlobalService.sendSuccess(response, null, users);
    } catch (err) {
        return Services.GlobalService.sendError(response, err);
    }
}

exports.getUserById = async (request, response) => {
    try {
        let users = await Services.UserService.getUserById(request);
        return Services.GlobalService.sendSuccess(response, null, users);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.resetPassword = async (request, response) => {
    try{
        let userObj = await Services.UserService.resetPassword(request);
        return Services.GlobalService.sendSuccess(response, null, userObj);
    }catch(err){
        return Services.GlobalService.sendError(response, err);
    }

}

exports.verifyOtp = async (request, response) => {
    console.log(request.body);
    try {
        let result = await Services.UserService.verifyOtp(request.body);
        return Services.GlobalService.sendSuccess(response, result);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.sendOtp = async (request, response) => {
    console.log(request.body);
    try {
        let result = await Services.UserService.sendOtp(request.body);
        return Services.GlobalService.sendSuccess(response, result);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}
