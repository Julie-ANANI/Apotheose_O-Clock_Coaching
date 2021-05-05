const Mission = require('../models/mission');

const missionController = {

    /**
    * It's control the road GET /v1/api/themes/:id/missions/
    */
    getAllMissions: async (_, res) => {

        const theMissions = await Mission.findAll();

        if (theMissions) {
            res.status(200).json(theMissions);
        } else {
            res.status(404).json(err.message);
        }

    },

    /**
    * It's control the road GET /v1/api/themes/:id/missions/:id
    */
   getOneMission: async (req, res) => {
    const { id } = req.params;

    const onlyOneMission = await Mission.findOne(id);

    if (onlyOneMission) {
        res.status(200).json(onlyOneMission);
    } else {
        res.status(404).json(err.message);
    }
},

};

module.exports = missionController;