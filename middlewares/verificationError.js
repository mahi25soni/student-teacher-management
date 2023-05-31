const handleVerification = (err, req, res,next ) => {
    if (err && err.errors) {
         let validationErrors = [];
    
        for (let field in err.errors) {
            console.log(err.errors);
            const newField = err.errors[field]
            if(newField.name === "ValidatorError"){
                validationErrors.push(newField.message)
            }
            else if (newField.name === "CastError"){
                validationErrors.push("The write datatype for " + newField.path + " is " + newField.kind )
            }
        }
    
        res.status(400).send( {validationErrors} );
      } else {
        next(err);
      }
    next()
}

module.exports = {handleVerification}