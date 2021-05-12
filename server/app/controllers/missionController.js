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

    getAllByThemeId: async (req, res) => {
        try {
            /**
            * We get the id in the parameters of the request
            */
           const { id } = req.params;
   
           const theMissions = await Mission.findByTheme(id);
           res.status(200).json(theMissions);

       } catch(err){
           /**
           * There is no mission in the database for this theme id
           * In the model, there is an error with a custom message
           */
           res.status(404).json(err.message);
       }     
    },

    addMission: async (req,res) => {
        const { title } = req.body;

        const bodyErrors = [];

        if(!title){
            bodyErrors.push('title cannot be empty');
        };

        if(body.Errors.length){
            res.stats(400).json(bodyErrors);
            return;
        }; 

        try {
            const newMission = new Mission(req.body);
            await newMission.save();
            res.status(201).json(newMission);
        }
        catch(err){
            res.status(500).json(err.message);
        };
    },

    modifyMission: async (req,res) =>{
        
    }

};

module.exports = missionController;