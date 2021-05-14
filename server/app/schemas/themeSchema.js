const Joi = require('joi');

const schema = {
    newTheme : Joi.object({
        title : Joi.string().required(),
        description: Joi.string(),
        position: Joi.number().integer().min(0)
    }),

    updateTheme : Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        position: Joi.number().integer().min(0)
    })

}

module.exports = schema;