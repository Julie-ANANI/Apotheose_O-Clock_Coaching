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
}

module.exports = interactController;