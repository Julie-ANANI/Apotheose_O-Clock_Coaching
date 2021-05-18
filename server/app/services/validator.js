
// middleware to validate Joi's schema
const validor = {
    /**
     * This function will validate or not the data's body
     * @param {Schema} schema - data of the body
     * @return - a message error if there is a problem with the data's schema or nothing (the application will continue)
     */
    validateBody : (schema) => (req, res, next) => {
        
        const { error } = schema.validate(req.body);
        /**
         * If there is an error, a message with the precise data who is not conform with the schema
         */
        if (!error) {
            /**
             * Nothing, the app continue
             */
            next();
        } else {
            /**
             * A data is not conform  with the schema
             */
            const {message}= error.details[0];
            console.log(error.details[0]);
            res.status(400).json(message);
        };
    }
};

module.exports = validor;
