const Joi = require('joi');

const schema = {
    newTheme : Joi.object({
        title : Joi.string().required().messages({
            'string.empty': `Malgré vos grands pouvoirs Jedi, un titre tu dois saisir !`,
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour le titre tu dois saisir !`
        }),
        description: Joi.string().allow(null, '').messages({
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour la description tu dois saisir !`
        }),
        position: Joi.number().integer().min(0).allow(null, '').messages({
            'number.base': `Attention o'coaching obscure Jedi, un nombre pour la position tu dois saisir !`
        }),
    }),

    updateTheme : Joi.object({
        title: Joi.string().allow(null, '').messages({
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour le titre tu dois saisir !`}),
        description: Joi.string().allow(null, '').messages({
            'string.base': `Attention au o'coaching obscure Jedi, une chaîne de caractère pour la description tu dois saisir !`}),
        position: Joi.number().integer().min(0).allow(null, '').messages({
            'number.base': `Attention o'coaching obscure Jedi, un nombre pour la position tu dois saisir !`
        })
    })

}

module.exports = schema;
