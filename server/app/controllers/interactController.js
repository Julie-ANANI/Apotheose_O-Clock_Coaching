const Interact = require('../models/interact');

const interactController = {
    /**
    * Endpoint GET /api/missions/users/{userId}
    */
    getAllByUserId: async (req, res) => {
        try {
            /**
                 * We get the id in the parameters of the request
                 */
            const { userId } = req.params;
            const theInteracts = await Interact.findAll(userId);
            res.status(200).json(theInteracts);

        } catch (err) {
            /**
           * There are no checkbox values stored in the database for this user id
           * In the model, there is an error with a custom message
           */
            res.status(404).json(err.message);
        }
    },
    /**
    * Endpoint GET /api/missions/:missionId/users/:userId
    */
    getOneByMissionAndUser: async (req, res) => {
        try {
            /**
                 * We get the id in the parameters of the request
                 */
            const { missionId, userId } = req.params;
            const theInteract = await Interact.findOne(userId, missionId);
            res.status(200).json(theInteract);

        } catch (err) {
            /**
           * There is no checkbox value stored in the database for this user id and this mission id
           * In the model, there is an error with a custom message
           */
            res.status(404).json(err.message);
        }
    },


    /**
    * Endpoint GET api/students/:userId/score
    */
    getGlobalScoreOfOneUser: async (req,res)=>{
        try{

            /**
             * We get the id in the parameters of the request
             */
            const { userId }= req.params;

            const globalScore = await Interact.findGlobalScoreOfOneUser(userId);
            res.status(200).json(globalScore);

        } catch(err) {
            res.status(404).json(err.message);
        };
    },

    
    /**
    * Endpoint POST /api/user/missions/
    */
    createCheckboxValue: async (req, res) => {
        try {
            // We get the body parameters of the request from req.body
            const { is_checked, mission_id, user_id } = req.body;

            // we check that all parameters have been passed on and add any errors to an array
            let bodyErrors = [];

            if (!is_checked) {
                bodyErrors.push(`is_checked cannot be empty`);
            }
            if (!mission_id) {
                bodyErrors.push(`mission_id cannot be empty`);
            }
            if (!user_id) {
                bodyErrors.push(`user_id cannot be empty`);
            }

            // if there are any errors, we return them
            if (bodyErrors.length) {
                res.status(400).json(bodyErrors);
            } else {
                // if there are no errors, we can save this new record in the database
                const newInteract = new Interact({ is_checked, mission_id, user_id });
                await newInteract.save();
                res.status(200).json(newInteract);
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    },

    deleteCheckboxValue: async (req, res) => {
        try {
            // We get the ids in the parameters of the request
            const { missionId, userId } = req.params;

            // We check that the record exists before updating it
            const interact = await Interact.findOne(userId, missionId);
            console.log(interact);
            if (!interact) {
                // if it doesn't exist, we return an error
                return res.status(404).json(`Cannot find record with user id ${userId} and mission id {$mission_id}`);
            } else {
                // We get the body parameter of the request from req.body
                const { is_checked } = req.body;

                if (is_checked === false) {
                    // if is_checked value is false, we delete the record in DB
                    // only checked boxes will have a record in DB
                    await interact.delete();
                    res.json('interact record deleted');
                }
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = interactController;