const Joi = require('joi');

const schema = {
    newMission : Joi.object({
        title : Joi.string().required(),
        advice: Joi.string(),
        position: Joi.number().integer().min(0)
    }),

    updateMission : Joi.object({
        title : Joi.string(),
        advice: Joi.string(),
        position: Joi.number().integer().min(0)
    })

}

module.exports = schema;