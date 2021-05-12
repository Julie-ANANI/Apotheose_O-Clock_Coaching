const { json } = require('express');
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

    /**
    * It's control the road POST /v1/api/admin/themes/:theme_id/missions
    */
    addMission: async (req,res) => {

        try{
            /**
            * We get the theme id in the parameters of the request
            */
            const { theme_id } = req.params;
            
            /**
            * We get the title, advice, position in the body
            */
            const { title, advice, position} = req.body;

            const bodyErrors = [];

            /**
            * Verify if the title is empty
            */
            if(!title){
                bodyErrors.push('The title\'s mission can\'t be empty');
            };

            /**
            * Sending error if the title is empty
            */
            if(bodyErrors.length){
                res.status(400).json(bodyErrors);

            } else{
                /**
                * Create the new mission and save it int the database
                */
                const newMission = new Mission({title, advice, position, theme_id});
                await newMission.save();
                res.status(201).json(newMission);
            };
        }
        catch(err){
            /**
           * The mission can't be create
           * In the model, there is an error with a custom message
           */
            res.status(500).json(err.message);
        };
    },

    /**
    * It's control the road POST /v1/api/admin/missions/:missionId
    */
    modifyMission: async (req,res) =>{

        try{
            /**
            * We get the mission id in the parameters of the request
            */
            const { missionId } = req.params;

            /**
            * We have to find the mission with his id 
            */
            const mission = await Mission.findOne(missionId);
           

            /**
            * Verify if the mission is in the database
            */
            if(!mission){
                res.status(404).json(`There is no mission with this id :${missionId}!`);
            }else{

                /**
                * We get the title, advice, position in the body
                */
                const {title, advice, position}=req.body;


                /**
                * Verify : 
                *           IF parameter is not empty SO we change the parameter's mission
                */
                if(title){
                    mission.title = title;
                };

                if(advice){
                    mission.advice = advice;
                };

                if(position){
                    mission.position= position;
                };


                /**
                * The mission is update
                */
                const save = await mission.save();
                res.status(200).json(save);
            };

        }catch(err){
            /**
           * The mission can't be update
           * In the model, there is an error with a custom message
           */
            res.status(500).json(err.message)
        };
    },

    /**
    * It's control the road DELETE /v1/api/admin/missions/:missionId
    */
    deleteMission: async (req,res) =>{
        try{
            /**
            * We get the mission id in the parameters of the request
            */
            const { missionId }= req.params;

            /**
            * We have to find the mission with his id
            */
            const mission = await Mission.findOne(missionId);
            
            /**
            * Verify if the mission is in the database
            */
            if(!mission){
                res.status(404).json(`There is no misson with this id : ${missionId} `);
            }else{
                /**
                * Delete the mission
                */
                const deletedMission = await mission.delete();
                res.status(200).json(deletedMission);
            };
        
        }catch(err){
            /**
           * The mission can't be delete
           * In the model, there is an error with a custom message
           */
            res.status(500).json(err.message);
        };
    }

    

};

module.exports = missionController;