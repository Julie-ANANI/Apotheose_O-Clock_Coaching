const Mission = require('../models/mission');

const missionController = {

    /**
    * It's control the road GET /v1/api/themes/:id/missions/
    */
    getAllMissions: async (_, res) => {

        // const theMissions = await Mission.findAll();


        try {
            const theMissions = await Mission.findAll();
            res.status(200).json(theMissions);
        
        } catch(err){
            const { message, path } = err.details[0];
            res.status(404).json({message, path});
        }


        // if (theMissions) {
        //     res.status(200).json(theMissions);
        // } else {
        //     res.status(404).json(err.message);
        // }

    },

    /**
    * It's control the road GET /v1/api/themes/:id/missions/:id
    */
   getOneMission: async (req, res) => {

    try {
        const { id } = req.params;
        console.log(`${id} est l'id recherché`)

        const onlyOneMission = await Mission.findOne(id);
        res.status(200).json(onlyOneMission);

     } catch(err){
       
            res.status(404).json(err.message);
        } 
        
    


        // if ( null ) {
        //     console.log(`${id} est l'id recherché`)
        //     res.status(404)
        // }
        // console.log(`${id} est l'id recherché`)
        //  const { message, path } = err.details[0];
        //     res.status(404).json({message, path});
    // }



    //  const { id } = req.params;

    //  const onlyOneMission = await Mission.findOne(id);

    //  if (!onlyOneMission || null) {
    //     res.status(404).json(err.message);
        
    //  } else {
    //     res.status(200).json(onlyOneMission);
    // }
}, 

};

module.exports = missionController;