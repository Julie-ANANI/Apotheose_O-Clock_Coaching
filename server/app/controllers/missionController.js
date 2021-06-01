const Mission = require('../models/mission');
const Theme = require('../models/theme');

const missionController = {

    /**
    * Controls endpoint GET /missions
    */
    getAllMissions: async (_, res) => {
        try {
            // we get all the missions from the database
            const theMissions = await Mission.findAll();
            res.status(200).json(theMissions);

        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    /**
    * Controls endpoint GET /v1/api/missions/:id
    */
    getOneMission: async (req, res) => {

        try {
            // We get the id in the parameters of the request
            const { id } = req.params.id

            const onlyOneMission = await Mission.findOne(id);
            res.status(200).json(onlyOneMission);
        }

        catch (err) {
            res.status(404).json(err.message);
        }
    },

    /**
    * Controls endpoint GET /v1/api/themes/:id/missions/
    */
    getAllByThemeId: async (req, res) => {

        try {
            // We get the id in the parameters of the request
            const { id } = req.params;
            await Theme.findOne(id);

            const theMissions = await Mission.findByTheme(id);
            res.status(200).json(theMissions);


        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    /**
    * Controls endpoint POST /v1/api/admin/themes/:themeId/missions
    */
    addMission: async (req, res) => {

        try {
            // We get the theme id in the parameters of the request
            const { themeId } = req.params;

            // we check the theme id 
            await Theme.findOne(themeId);

            // We get the title, advice in the body
            const { title, advice } = req.body;

            // We create a new mission and save it in the database
            // For v1, we don't handle the position so we hardcode it for now
            const newMission = new Mission({ title, advice, 'position': 0, 'theme_id': themeId });

            await newMission.save();
            res.status(201).json(newMission);

        }
        catch (err) {
            res.status(404).json(err.message);
        };
    },


    /**
    * Controls endpoint POST /v1/api/admin/missions/:missionId
    */
    modifyMission: async (req, res) => {

        try {
            // We get the mission id in the parameters of the request
            const { missionId } = req.params;

            // We check the mission id
            const mission = await Mission.findOne(missionId);

            // We get the title, advice, position in the body
            const { title, advice } = req.body;

            //  If a parameter is provided, we update the mission accordingly
            if (title) {
                mission.title = title;
            };

            if (advice) {
                mission.advice = advice;
            };

            // Then we save the changes in database
            const save = await mission.save();
            res.status(200).json(save);

        } catch (err) {
            res.status(404).json(err.message)
        };
    },


    /**
    * Controls endpoint DELETE /v1/api/admin/missions/:missionId
    */
    deleteMission: async (req, res) => {
        try {
            // We get the mission id in the parameters of the request
            const { missionId } = req.params;

            // We check the mission id
            const mission = await Mission.findOne(missionId);

            // If found, we delete the mission
            const deletedMission = await mission.delete();
            res.status(200).json(deletedMission);

        } catch (err) {
            res.status(500).json(err.message);
        };
    },


};

module.exports = missionController;