const { Router } = require('express');

const themeController = require('./controllers/themeController');
const missionController = require('./controllers/missionController');
const userController = require('./controllers/userController');
const interactController = require('./controllers/interactController');

const router = Router();

/**
 * Returns all themes from the database
 * @route GET /themes
 * @group The Themes
 * @returns {Array<Themes>} 200 - An array of themes
 */
router.get('/themes', themeController.getAllThemes);

/**
 * Returns a theme from the database with its id
 * @route GET /themes/{id}
 * @group A Theme
 * @returns {<Theme>} 200 - An instance of one theme
 */
router.get('/themes/:id', themeController.getOneTheme);

/**
 * Returns all missions from the database
 * @route GET /missions
 * @group The missions
 * @returns {Array<Mission>} 200 - An array of missions
 */
router.get('/missions', missionController.getAllMissions);

/**
 * Returns an mission from the database with id
 * @route GET /themes/{id}/missions
 * @group An Mission
 * @returns {<Mission>} 200 - An instance of one mission
 */
router.get('/missions/:id', missionController.getOneMission);

/**
 * Returns all missions with a given theme id
 * @route GET /themes/{id}/missions
 * @group The Missions
 * @returns {Array<Mission>} 200 - An array of missions
 */
router.get('/themes/:id/missions', missionController.getAllByThemeId);

/**
 * Returns all checkbox values for a user id
 * @route GET /missions/users/{userId}
 * @group Interactions
 * @returns {Array<Interact>} 200 - An array of Interact instances
 */
router.get('/missions/users/:userId', interactController.getAllByUserId);

/**
 * Returns the checkbox value for a mission id and a user id
 * @route GET /missions/:missionId/users/:userId
 * @group Interactions
 * @returns {<Interact>} 200|null - One instance of the Interact class or null
 */
router.get('/missions/:missionId/users/:userId', interactController.getOneByMissionAndUser);

/**
 * Returns a user from the database with its id
 * @route GET /users/{id}
 * @group Users
 * @returns {<User>} 200 - An instance of one user
 */
router.get('/users/:id', userController.getOneUser);


/**
 * Returns all users from the database
 * @route GET /users
 * @group The users
 * @returns {Array<Themes>} 200 - An array of user
 */
router.get('/users', userController.getAllusers);



module.exports = router;