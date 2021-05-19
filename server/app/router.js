const { Router } = require('express');

const themeController = require('./controllers/themeController');
const missionController = require('./controllers/missionController');
const userController = require('./controllers/userController');
const interactController = require('./controllers/interactController');
const adminController = require('./controllers/adminController');

const adminMW = require('./middleware/adminMW');
const studentMW = require('./middleware/studentMW');

const { validateBody } = require('./services/validator');
const missionSchema = require('./schemas/missionSchema');
const themeSchema = require('./schemas/themeSchema');
const loginSchema = require('./schemas/loginSchema'); 


const router = Router();


// ---------------------------------------- LOGIN SPACE ----------------------------------------

/**
 * Authenticates the user with the O'Clock API, adds the user in the OAP database if new, and saves them in session 
 * @route POST /login
 * @group Login
 * @returns {<User>} 200 - A user object
 */
router.post('/login', validateBody(loginSchema.newLogin), userController.login);

/**
 * Logs out the user from the backend
 * @route GET /logout
 * @group Login
 * @returns 200 - A message confirming the user is logged out in backend
 */
router.get('/logout', userController.logout);



// ---------------------------------------- STUDENT SPACE ----------------------------------------

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
 * Returns a mission from the database with id
 * @route GET /themes/{id}/missions
 * @group An Mission
 * @returns {<Mission>} 200 - An instance of one mission
 */
router.get('/missions/:id', missionController.getOneMission);

/**
 * Returns all missions for a given theme
 * @route GET /themes/{id}/missions
 * @group The Missions
 * @returns {Array<Mission>} 200 - An array of missions
 */
router.get('/themes/:id/missions', missionController.getAllByThemeId);


/**
 * Returns the score of a user for a theme
 * @route GET /student/:userId/themes/:themeId/score
 * @returns {Object} 200 - An object of a theme's score of a user
 */
router.get('/students/:userId/themes/:themeId/score', interactController.getScorebyThemeAndUser);

/**
 * Returns the global score of a user
 * @route GET /students/:userId/score
 * @returns {Object} 200 - An object of a score global of a user
 */
router.get('/students/:userId/score', interactController.getGlobalScoreByUser);

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
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.get('/missions/:missionId/users/:userId', interactController.getOneByMissionAndUser);

/**
 * Adds a record in database for a mission id and a user id
 * @route POST /student/interact
 * @group Interactions
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.post('/student/interact/', studentMW, interactController.checkBox);

/**
 * Deletes a record in database for a mission id and a user id
 * @route DELETE /missions/:missionId/users/:userId
 * @group Interactions
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.delete('/student/interact/missions/:missionId/users/:userId', studentMW, interactController.uncheckBox);


// ---------------------------------------- ADMIN SPACE ----------------------------------------

/**
 * add a new theme in the database with new id
 * @route POST /admin/themes
 * @group A Theme
 * @returns {<New Theme>} 200 - An instance of new theme
 */
router.post('/admin/themes', adminMW, validateBody(themeSchema.newTheme), themeController.addNewTheme);

/**
 * change theme in the database with this id
 * @route POST /admin/themes/:themeId
 * @group A Theme
 * @returns {<Theme>} 200 - an update in the theme
 */
router.post('/admin/themes/:themeId', adminMW, validateBody(themeSchema.updateTheme), themeController.changeTheme);

/**
 * delete a theme in the database with this id
 * @route POST /admin/themes/:themeId
 * @group A Theme
 * @returns {<Theme>} 200 - Suppression the id theme in the database
 */
router.delete('/admin/themes/:themeId', adminMW, themeController.deleteTheme);

/**
 * Creates/updates a user record with admin status
 * @route POST /admin/add
 * @group Admin
 * @returns {<User>} 200 - An instance of User class
 */
router.post('/admin/add', adminMW, adminController.addAdmin);

/**
 * Create and return the new mission
 * @route POST /admin/themes/:theme_id/missions
 * @returns {Object} 201 - An object of the new mission
 */
router.post('/admin/themes/:theme_id/missions', adminMW, validateBody(missionSchema.newMission), missionController.addMission);

/**
 * Modify and returns the id of the modify mission
 * @route POST /admin/missions/:missionId
 * @returns {Object} 200 - An object of the id's mission modified
 */
router.post('/admin/missions/:missionId', adminMW, validateBody(missionSchema.updateMission), missionController.modifyMission);

/**
 * Delete the mission and returns the id of the mission deleted
 * @route DELETE /admin/missions/:missionId
 * @returns {Object} 200 - An object of the id's mission deleted
 */
router.delete('/admin/missions/:missionId', adminMW, missionController.deleteMission);

/**
 * Returns one users details with this all promos 
 * @route GET /admin/students
 * @group Admin
 * @returns {Array<Student>} 200 - An array of students with detailed info on each student and their cohorts 
 */
router.get('/admin/students', adminMW, adminController.getAllStudentsWithPromo);


// ---------------------------------------- INTERN SPACE ----------------------------------------

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