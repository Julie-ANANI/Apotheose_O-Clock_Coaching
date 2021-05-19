const Mission = require('../models/mission');
const Theme = require('../models/theme');

const missionController = {

    /**
    * Controls endpoint GET /missions
    */
    getAllMissions: async (_, res) => {
        try {
            /* *
             * All the missions are retrieved from the database
             */
            
            const theMissions = await Mission.findAll();
            res.status(200).json(theMissions);

        } catch (err) {
            /**
           * There are no missions in the database
           * In the model, there is an error with a custom message
           */
            res.status(404).json(err.message);
        }
    },

    /**
    * Controls endpoint GET /v1/api/missions/:id
    */
    getOneMission: async (req, res) => {

        try {
            /**
            * We get the id in the parameters of the request
            */
            const { id } = req.params.id

            const onlyOneMission = await Mission.findOne(id);
            res.status(200).json(onlyOneMission);
            }

        catch (err) {
              /**
                * There is no this mission in the database
                * In the model, there is an error with a custom message
                */

            res.status(404).json(err.message);
        }
    },

    /**
    * Controls endpoint GET /v1/api/themes/:id/missions/
    */
    getAllByThemeId: async (req, res) => {
        
        try {
            /**
            * We get the id in the parameters of the request
            */
            const { id } = req.params;
            await Theme.findOne(id);

            const theMissions = await Mission.findByTheme(id);
            res.status(200).json(theMissions);
    
        
        } catch (err) {
            /**
            * There is no mission in the database for this theme id
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        }
    },

    /**
    * Controls endpoint POST /v1/api/admin/themes/:themeId/missions
    */
    addMission: async (req, res) => {

        try {
            console.log(req.params);
            /**
            * We get the theme id in the parameters of the request
            */
            const { themeId } = req.params;
             console.log(themeId);
            //verify id 
            const theme = await Theme.findOne(themeId);

            console.log(theme);
            /**
            * We get the title, advice, position in the body
            */
            const { title, advice } = req.body;

            console.log(req.body);
        
            /**
            * Create the new mission and save it int the database
            */
            console.log(`on appel la methode newMission`)
            const newMission = new Mission({title, advice, 'position': 0, 'theme_id': themeId });
            console.log(newMission)
            console.log(themeId)
            await newMission.save();
            res.status(201).json(newMission);
   
        }
        catch (err) {
            /**
           * The mission can't be create
           * In the model, there is an error with a custom message
           */
            res.status(404).json(err.message);
        };
    },


    /**
    * Controls endpoint POST /v1/api/admin/missions/:missionId
    */
    modifyMission: async (req, res) => {

        try {
            console.log(`je suis das la fonction modifier une mission `)
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
            if (!mission) {
                res.status(404).json(`There is no mission with this id :${missionId}!`);
            } else {

                /**
                * We get the title, advice, position in the body
                */
                const {title, advice } = req.body;

                /**
                * Verify : 
                *           IF parameter is not empty SO we change the parameter's mission
                */
                if (title) {
                    mission.title = title;
                };

                if (advice) {
                    mission.advice = advice;
                };

                /**
                * The mission is update
                */
                const save = await mission.save();
                res.status(200).json(save);
            };

        } catch (err) {
            /**
           * The mission can't be update
           * In the model, there is an error with a custom message
           */
            res.status(404).json(err.message)
        };
    },


    /**
    * It's control the road DELETE /v1/api/admin/missions/:missionId
    */
    deleteMission: async (req, res) => {
        try {
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
            if (!mission) {
                res.status(404).json(`There is no misson with this id : ${missionId} `);
            } else {
                /**
                * Delete the mission
                */
                const deletedMission = await mission.delete();
                res.status(200).json(deletedMission);
            };

        } catch (err) {
            /**
           * The mission can't be delete
           * In the model, there is an error with a custom message
           */
            res.status(500).json(err.message);
        };
    },


};

module.exports = missionController;