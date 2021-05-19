const Joi = require('joi');

const schema = {
    newMission : Joi.object({
        title : Joi.string().required().messages({
            'string.empty': `Malgré vos grands pouvoirs Jedi, un titre tu dois saisir !`,
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour le titre tu dois saisir !`
        }),
        advice: Joi.string().allow(null, '').messages({
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour le conseil tu dois saisir !`}),
        position: Joi.number().allow(null, '').integer().min(0).allow(null, '').messages({
            'number.base': `Attention o'coaching obscure Jedi, un nombre pour la position tu dois saisir !`
        })
    }),

    updateMission : Joi.object({
        title : Joi.string().allow(null, '').messages({
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour le titre tu dois saisir !`}),
        advice: Joi.string().allow(null, '').messages({
            'string.base': `Attention o'coaching obscure Jedi, une chaîne de caractère pour le conseil tu dois saisir !`}),
        position: Joi.number().integer().min(0).allow(null, '').messages({
            'number.base': `Attention o'coaching obscure Jedi, nombre pour la position tu dois saisir !`
        })
    })

}

module.exports = schema;
