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

    addMission: async (req,res) => {

        try{
            const { theme_id } = req.params;
            
            const { title, advice, position} = req.body;

            const bodyErrors = [];

            if(!title){
                bodyErrors.push('The title\'s mission can\'t be empty');
            };

            if(bodyErrors.length){
                res.status(400).json(bodyErrors);

            } else{

                const newMission = new Mission({title, advice, position, theme_id});
                await newMission.save();
                res.status(201).json(newMission);
            };
        }
        catch(err){
            
            res.status(500).json(err.message);
        };
    },

    modifyMission: async (req,res) =>{

        try{
            const { theme_id,missionId } = req.params;
            const mission = await Mission.findOne(missionId);
            console.log(mission);

            if(!mission){
                res.status(404).json(`There is no mission with this id :${missionId}!`);
            }else{
                const {title, advice, position}=req.body;

                if(title){
                    mission.title = title;
                };

                if(advice){
                    mission.advice = advice;
                };

                if(position){
                    mission.position= position;
                };
                
                if(theme_id){
                    mission.theme_id= theme_id;
                };

                const save = await mission.save();
                res.status(200).json(save);
            }

        }catch(err){
            res.status(500).json(err.message)
        };
    },

    deleteMission: async (req,res) =>{
        try{
            const { missionId }= req.params;
            const mission = await Mission.findOne(missionId);
            

            if(!mission){
                res.status(404).json(`There is no misson with this id : ${missionId} `);
            }else{
                const deletedMission = await mission.delete();
                res.status(200).json(deletedMission);
            };
        
        }catch(err){
            res.status(500).json(err.message);
        };
    }

    

};

module.exports = missionController;