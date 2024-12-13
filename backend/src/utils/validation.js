const validator = require ('validator');

const validateEmail = (email)=>
{
return validator.isEmpty(email);
};

const validatePassword =(password)=>
{
    return password.length >= 8;
};

module.exports= { validateEmail,validatePassword};