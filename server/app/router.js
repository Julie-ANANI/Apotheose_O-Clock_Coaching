const { Router } = require('express');

const themeController = require('./controllers/themeController');
const missionController = require('./controllers/missionController');
const userController = require('./controllers/userController');

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
 * Returns an mission from the database with id
 * @route GET /themes/{id}/missions/{id}
 * @group An Mission
 * @returns {<Mission} 200 - An instance of one mission
 */
router.get('/themes/:id/missions/:id', missionController.getOneMission);

/**
 * Returns all missions from the database
 * @route GET /themes/{id}/missions
 * @group The Missions
 * @returns {Array<Missions} 200 - An array of missions
 */
router.get('/themes/:id/missions', missionController.getAllMissions);

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