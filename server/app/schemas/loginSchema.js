const Joi = require('joi');

const schema = {
    newLogin : Joi.object({
        login_email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'io'] } }).required().messages({
            'string.email': `Oyez oyez veuillez mettre un e-mail valide !`,
            'string.empty': `Si rejoindre le coaching de la force est votre volonté, il faut saisir ton e-mail !`,
            'string.base': `Vérifier ton e-mail ou ton password tu devras ! `,
            'any.required': `Oups l'e-mail est important pour rejoindre le coaching de la force !`
        }),
        login_password : Joi.string().required().messages({
            'string.empty': `Si rejoindre le coaching de la force est votre volonté, il faut saisir ton password !`,
            'any.required': `Oups le password est important pour rejoindre le coaching de la force !`,
            'string.base': `Vérifier ton e-mail ou ton password tu devras ! `
        }),

    })  
};

module.exports = schema;
