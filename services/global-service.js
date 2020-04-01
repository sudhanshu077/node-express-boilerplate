

exports.sendSuccess = (res, msg = 'Success',data = null) => {
    if(msg == null)
        msg = "Success";

    let statusCode = 200;
    
    res.status(statusCode);
    res.send({
        "statusCode": statusCode,
        "message": msg,
        "data": data
    });
    return false;
}

exports.sendError = (res, msg = "Bad Request",data = null) => {
    let statusCode = 400;

    res.status(statusCode);
    res.send({
        "statusCode": statusCode,
        "message": msg,
        "data": data
    });
    return false;
}

exports.validationFailed = (request, reply, error) =>{
    delete error.output.body.validation;
    delete error.output.body.error;
    error.output.body.message = error.details[0].message;
    return error;
}
