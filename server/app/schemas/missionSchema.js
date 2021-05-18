const Joi = require('joi');

const schema = {
    newMission : Joi.object({
        title : Joi.string().required().messages({
            'string.empty': `Malgré vos grands pouvoirs Jedi,un titre tu dois saisir !`,
            'string.base': `Attention au côté obscure, chaine de caractère pour le titre tu dois saisir !`
        }),
        advice: Joi.string().allow(null, '').messages({
            'string.base': `Attention au côté obscure, chaine de caractère pour le conseil tu dois saisir !`}),
        position: Joi.number().allow(null, '').integer().min(0).allow(null, '').messages({
            'string.base': `Attention au côté obscure, nombre pour la description tu dois saisir !`
        })
    }),

    updateMission : Joi.object({
        title : Joi.string().allow(null, '').messages({
            'string.base': `Attention au côté obscure, chaine de caractère pour le titre tu dois saisir !`}),
        advice: Joi.string().allow(null, '').messages({
            'string.base': `Attention au côté obscure, chaine de caractère pour le conseil tu dois saisir !`}),
        position: Joi.number().integer().min(0).allow(null, '').messages({
            'string.base': `Attention au côté obscure, nombre pour la description tu dois saisir !`
        })
    })

}

module.exports = schema;