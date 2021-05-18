const Joi = require('joi');

const schema = {
    newTheme : Joi.object({
        title : Joi.string().required().messages({
            'string.empty': `Malgré vos grands pouvoirs Jedi, un titre tu dois saisir !`,
            'string.base': `Attention au côté obscure, chaine de caractère pour le titre tu dois saisir !`
        }),
        description: Joi.string().allow(null, '').messages({
            'string.base': `Attention au côté obscure, chaine de caractère pour la description tu dois saisir !`
        }),
        position: Joi.number().integer().min(0).allow(null, '').messages({
            'string.base': `Attention au côté obscure, nombre pour la description tu dois saisir !`
        }),
    }),

    updateTheme : Joi.object({
        title: Joi.string().allow(null, '').messages({
            'string.base': `Attention au côté obscure, chaine de caractère pour le titre tu dois saisir !`}),
        description: Joi.string().allow(null, '').messages({
            'string.base': `Attention au côté obscure, chaine de caractère pour la description tu dois saisir !`}),
        position: Joi.number().integer().min(0).allow(null, '').messages({
            'string.base': `Attention au côté obscure, nombre pour la description tu dois saisir !`
        })
    })

}

module.exports = schema;