// validation
import Joi from '@hapi/joi';



const registerValidation = (data) => {
    const schema = Joi.object({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        userName:Joi.number(),
        userPassword:Joi.string().min(6),
    });
    return schema.validate(data);
}

const SSMMSuserValidation = (data) => {
    const schema = Joi.object({
        villageName:Joi.string().min(1).required(),
        userName:Joi.number().required(),
        userPassword:Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// module.exports.registerValidation = registerValidation;
// module.exports.loginValidation = loginValidation;

export {registerValidation, loginValidation, SSMMSuserValidation};