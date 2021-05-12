
// middleware to validate Joi's schema
const validor = {
    /**
     * This function will validate or not the data's body
     * @param {Schema} schema data of the body
     * @return - a message error if there is a problem with the data's schema or nothing (the application will continue)
     */
    validateBody : (schema) => (req, res, next) => {
            

        const { error } = schema.validate(req.body);
        console.log(error);
        if (!error) {
            next();
        } else {
            const { message, path }= error.details[0];
            res.status(400).json({message, path});
        };
    }
};

module.exports = validor;
