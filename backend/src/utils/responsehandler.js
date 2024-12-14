const sucessResponse = (res, data ,message)=>
{
return res.status(statuscode).json({
    message, data, sucess:true
});


};
const errorResponse =(res, message, statusCode= 500 , error = null)=>
{
    return res.status(statusCode).json({
        sucess: false,
        message,
        error
    });
};
module.exports ={sucessResponse, errorResponse};