const Joi = require('joi');

const schema = {
    newLogin : Joi.object({
        login_email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'io'] } }).required(),
        login_password : Joi.string().required()
    })
};

module.exports = schema;