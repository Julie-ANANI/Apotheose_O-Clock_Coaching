const Joi = require('joi');

const schema = {
    newInteract : Joi.object({
        mission_id: Joi.number().integer().min(0).required().messages({
            'number.min': `Aie padawan, il y a eu un soucis avec le checking. C'est négatif tout ça... Rafraîchir la page serait une solution ? Ou bien contact tes maîtres coachs ! (A moins que t'es du coaching obscure hum hum)`,
            'number.base': `Aie padawan, il y a eu un soucis avec le checking. C'est (type)pique. Rafraîchir la page serait une solution ? Ou bien contact tes maîtres coachs ! (A moins que t'es du coaching obscure hum hum)`,
            'any.required': `Aie padawan, il y a eu un soucis avec le checking. C'est vide quelque part. Rafraîchir la page serait une solution ? Ou bien contact tes maîtres coachs ! (A moins que t'es du coaching obscure hum hum)`
        }),
        theme_id: Joi.number().integer().min(0).required().messages({
            'number.min': `Aie padawan, il y a eu un soucis avec le checking. C'est négatif tout ça... Rafraîchir la page serait une solution ? Ou bien contact tes maîtres coachs ! (A moins que t'es du coaching obscure hum hum)`,
            'number.base': `Aie padawan, il y a eu un soucis avec le checking. C'est (type)pique. Rafraîchir la page serait une solution ? Ou bien contact tes maîtres coachs ! (A moins que t'es du coaching obscure hum hum)`,
            'any.required': `Aie padawan, il y a eu un soucis avec le checking. C'est vide quelque part. Rafraîchir la page serait une solution ? Ou bien contact tes maîtres coachs ! (A moins que t'es du coaching obscure hum hum)`
        })

    })  
};

module.exports = schema;