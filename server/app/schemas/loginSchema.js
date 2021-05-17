const Joi = require('joi');

const schema = {
    newLogin : Joi.object({
        login_email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'io'] } }).required().messages({
            'string.email': `Oyez oyez veuillez mettre un e-mail valide ou password`,
            'string.empty': ` Jeune padawan tu a oublié le champs e-mail ?!`
        }),
        login_password : Joi.string().required().messages({
            'string.empty': ` Jeune padawan tu a oublié le champs password ?!`
        }),

    })  
};

module.exports = schema;