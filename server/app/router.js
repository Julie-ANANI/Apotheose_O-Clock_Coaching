const { Router } = require('express');

const themeController = require('./controllers/themeController');
const missionController = require('./controllers/missionController');

const router = Router();

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
 * @group A Theme
 * @returns {<Theme>} 200 - An instance of one theme
 */
router.get('/themes/:id', themeController.getOneTheme);

/**
 * Returns an mission from the database with id
 * @route GET /themes/{id}/missions/{id}
 * @group An Mission
 * @returns {<Theme>} 200 - An instance of one mission
 */
router.get('/themes/:id/missions/:id', missionController.getOneMission);


router.get('/themes/:id/missions', missionController.getAllMissions);

module.exports = router;