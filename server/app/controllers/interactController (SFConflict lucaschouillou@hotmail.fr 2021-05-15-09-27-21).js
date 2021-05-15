const Interact = require('../models/interact');
const Mission = require('../models/mission');
const Theme = require('../models/theme');

const interactController = {
    /**
    * Controls endpoint GET /api/missions/users/{userId}
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
    * Controls endpoint GET /api/missions/:missionId/users/:userId
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
    * Controls endpoint GET /api/students/:userId/themes/:themeId/score
    */
    getScorebyThemeAndUser: async (req, res) => {
        try {
            // we get the theme id and user id from the request body
            const { themeId, userId } = req.params;

            // we obtain the number of completed missions for this theme and this user
            const scoreByTheme = await Theme.findTheScoreOfOneThemeOfOneUser(themeId, userId);
            
            // we get all the missions in database related to this theme
            const allMissionsByTheme = await Mission.findByTheme(themeId);

            // we calculate the percentage of completed missions for this theme
            const scoreRatio = Math.round((parseInt(scoreByTheme.score, 10) / allMissionsByTheme.length) * 100);

            res.status(200).json({ bytheme_ratio: `${scoreRatio}` });
        } catch (err) {

            res.status(400).json(err.message);
        };

    },

    /**
    * Controls endpoint GET /api/students/:userId/score
    */
    getGlobalScoreByUser: async (req, res) => {
        try {
            // We get the id in the parameters of the request
            const { userId } = req.params;

            // we get the total number of completed missions for this user 
            const globalScore = await Interact.findGlobalScoreOfOneUser(userId);

            // we get all the missions existing in database
            const allMissions = await Mission.findAll();

            // we calculate the percentage of completed missions for this user
            const globalScoreRatio = Math.round((parseInt(globalScore.global_score, 10) / allMissions.length) * 100);
            res.status(200).json({ global_ratio: `${globalScoreRatio}` });

        } catch (err) {
            res.status(404).json(err.message);
        };
    },


    /**
    * Controls endpoint POST /api/user/missions/
    */
    checkBox: async (req, res) => {
        try {
            // We get the body parameters of the request from req.body
            const { mission_id, user_id } = req.body;

            // we check that all parameters have been passed on and add any errors to an array
            let bodyErrors = [];

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
                const newInteract = new Interact({ mission_id, user_id });
                await newInteract.save();
                res.status(200).json(newInteract);
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    },

    /**
    * Controls endpoint DELETE /api/student/interact/missions/:missionId/users/:userId
    */
    uncheckBox: async (req, res) => {
        try {
            // We get the ids in the parameters of the request
            const { missionId, userId } = req.params;

            // We check that the record exists before updating it
            const interact = await Interact.findOne(missionId, userId);
            console.log(interact);
            if (!interact) {
                // if it doesn't exist, we return an error
                return res.status(404).json(`Cannot find record with user id ${userId} and mission id {$mission_id}`);
            } else {
                // if it exists, we delete it and send a confirmation message to the client
                await interact.delete();
                res.status(200).json('interact record deleted');
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = interactController;