const Mission = require('../models/mission');

const missionController = {

    /**
    * It's control the road GET /v1/api/themes/:id/missions
    */
    getAllMissions: async (_, res) => {
        try {
            /* *
             * All the missions are retrieved from the database
             */
            const theMissions = await Mission.findAll();
            res.status(200).json(theMissions);
        
        } catch(err){
             /**
            * There are no missions in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        }
    },

    /**
    * It's control the road GET /v1/api/themes/:id/missions/:id
    */
   getOneMission: async (req, res) => {

        try {
             /**
             * We get the id in the parameters of the request
             */
            const { id } = req.params;
    
            const onlyOneMission = await Mission.findOne(id);
            res.status(200).json(onlyOneMission);

        } catch(err){
            /**
            * There is no this mission in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        }     
    }, 

};

module.exports = missionController;