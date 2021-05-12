const { Router } = require('express');

const themeController = require('./controllers/themeController');
const missionController = require('./controllers/missionController');
const userController = require('./controllers/userController');
const interactController = require('./controllers/interactController');

const { validateBody } = require('./services/validator');
const missionSchema = require('./schemas/missionSchema');
const themeSchema = require('./schemas/themeSchema');

const router = Router();

// -------------------------------- THEME ROAD -------------------------------------

/**
 * Returns all themes from the database
 * @route GET /themes
 * @group Themes
 * @returns {Array<Themes>} 200 - An array of themes
 */
router.get('/themes', themeController.getAllThemes);

/**
 * Returns a theme from the database with its id
 * @route GET /themes/{id}
 * @group Themes
 * @param {number} id.path.required - the theme id
 * @returns {<Theme>} 200 - An instance of one theme
 */
router.get('/themes/:id(\\d+)', themeController.getOneTheme);


/**
 * add a new theme in the database with new id
 * @route POST /admin/themes
 * @group Themes
 * @returns {<New Theme>} 200 - An instance of new theme
 */
router.post('/admin/themes',validateBody(themeSchema.newTheme), themeController.addNewTheme);

/**
 * change theme in the database with this id
 * @route POST /admin/themes/{themeId}
 * @group Themes
 * @param {number} themeId.path.required - the theme id
 * @param {string} title - the title
 * @param {string} description- the description
 * @param {string} position - the position
 * @returns {<Theme>} 200 - an update in the theme
 */
router.post('/admin/themes/:themeId(\\d+)', validateBody(themeSchema.updateTheme), themeController.changeTheme);

/**
 * delete a theme in the database with this id
 * @route DELETE /admin/themes/{themeId}
 * @group Themes
 * @param {number} themeId.path.required - the theme id
 * @returns {<Theme>} 200 - Suppression the id theme in the database
 */
router.delete('/admin/themes/:themeId(\\d+)',  themeController.deleteTheme);

// END ---------------------------------------------------------------------

// -------------------------------- MISSION ROAD -------------------------------------

/**
 * Returns all missions from the database
 * @route GET /missions
 * @group Missions
 * @returns {Array<Mission>} 200 - An array of missions
 */
router.get('/missions', missionController.getAllMissions);

/**
 * Returns a mission from the database with id
 * @route GET /missions/{id}
 * @group Missions
 * @param {number} missionId.path.required - the mission id
 * @returns {<Mission>} 200 - An instance of one mission
 */
router.get('/missions/:id(\\d+)', missionController.getOneMission);

/**
 * Returns all missions for a given theme
 * @route GET /themes/{id}/missions
 * @group Missions
 * @param {number} id.path.required - the theme id
 * @returns {Array<Mission>} 200 - An array of missions
 */
router.get('/themes/:id(\\d+)/missions', missionController.getAllByThemeId);

/**
 * Create and return the new mission
 * @route POST /admin/themes/{theme_id}/missions
 * @group Missions
 * @param {number} theme_id.path.required - the theme id
 * @returns {Object} 201 - An object of the new mission
 */
router.post('/admin/themes/:theme_id(\\d+)/missions', validateBody(missionSchema.newMission), missionController.addMission);

/**
 * Modify and returns the id of the modify mission
 * @route POST /admin/missions/{missionId}
 * @group Missions
 * @param {number} missionId.path.required - the mission id
 * @returns {Object} 200 - An object of the id's mission modified
 */
router.post('/admin/missions/:missionId(\\d+)',validateBody(missionSchema.updateMission), missionController.modifyMission);

/**
 * Delete the mission and returns the id of the mission deleted
 * @route DELETE /admin/missions/{missionId}
 * @group Missions
 * @param {number} missionId.path.required - the mission id
 * @returns {Object} 200 - An object of the id's mission deleted
 */
router.delete('/admin/missions/:missionId(\\d+)', missionController.deleteMission);


//-----------------------------------END------------------------------------

// -------------------------------- INTERACT ROAD -------------------------------------

/**
 * Returns all checkbox values for a user id
 * @route GET /missions/users/{userId}
 * @group Interactions
 * @param {number} userId.path.required - the user id
 * @returns {Array<Interact>} 200 - An array of Interact instances
 */
router.get('/missions/users/:userId(\\d+)', interactController.getAllByUserId);

/**
 * Returns the checkbox value for a mission id and a user id
 * @route GET /missions/{missionId}/users/{userId}
 * @group Interactions
 * @param {number} missionId.path.required - the mission id
 * @param {number} userId.path.required - the user id
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.get('/missions/:missionId(\\d+)/users/:userId(\\d+)', interactController.getOneByMissionAndUser);

/**
 * Adds a record in database for a mission id and a user id
 * @route POST /user/missions
 * @group Interactions
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.post('/student/interact/', interactController.checkBox);

/**
 * Deletes a record in database for a mission id and a user id
 * @route DELETE /missions/{missionId}/users/{userId}
 * @group Interactions
 * @param {number} missionId.path.required - the mission id
 * @param {number} userId.path.required - the user id
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.delete('/student/interact/missions/:missionId(\\d+)/users/:userId(\\d+)', interactController.uncheckBox);

//---------------------------------- END -------------------------------------------------------


//------------------------------- USERS ROAD ---------------------------------------------------------

/**
 * Returns a user from the database with its id
 * @route GET /users/{id}
 * @group Users
 * @param {number} userId.path.required - the user id
 * @returns {<User>} 200 - An instance of one user
 */
router.get('/users/:id(\\d+)', userController.getOneUser);


/**
 * Returns all users from the database
 * @route GET /users
 * @group Users
 * @returns {Array<Themes>} 200 - An array of user
 */
router.get('/users', userController.getAllusers);

//----------------------------------END---------------------


// -----------------------------  SCORE ROAD ----------------

/**
 * Returns the score of a theme and a user
 * @route GET /student/{userId}/themes/{themeId}/score
 * @group Scores
 * @param {number} userId.path.required - the user id
 * @param {number} themeId.path.required - the theme id
 * @returns {Object} 200 - An object of a theme's score of a user
 */
router.get('/students/:userId(\\d+)/themes/:themeId(\\d+)/score',themeController.getScoreOfOneThemeOfOneUser);


/**
 * Returns the global score of a user
 * @route GET /students/{userId}/score
 * @group Scores
 * @param {number} userId.path.required - the user id
 * @returns {Object} 200 - An object of a score global of a user
 */
router.get('/students/:userId(\\d+)/score', interactController.getGlobalScoreOfOneUser);



module.exports = router;