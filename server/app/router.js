const { Router } = require('express');

//Controllers
const themeController = require('./controllers/themeController');
const missionController = require('./controllers/missionController');
const userController = require('./controllers/userController');
const interactController = require('./controllers/interactController');
const adminController = require('./controllers/adminController');

//Schemas (Mission, Theme, Login and Interact) and ValidateBody service
const { validateBody } = require('./services/validator');
const missionSchema = require('./schemas/missionSchema');
const themeSchema = require('./schemas/themeSchema');
const loginSchema = require('./schemas/loginSchema'); 
const interactSchema = require('./schemas/interactSchema');


const router = Router();


// ---------------------------------------- LOGIN SPACE ----------------------------------------

/**
 * Authenticates the user with the O'Clock API and adds the user in the OAP database if new 
 * @route POST /login
 * @group Login
 * @returns {<User>} 200 - A custom user object
 */
router.post('/login', validateBody(loginSchema.newLogin), userController.login);


/** Logs out the user from the backend
 * @route GET /logout
 * @group Login
 * @returns 200 - A message confirming the user is logged out in backend
 */
router.get('/logout', userController.logout);



// ---------------------------------------- THEME ROUTES ----------------------------------------
/**
 * Returns all themes from the database
 * @route GET /themes
 * @group Themes
 * @returns {Array<Theme>} 200 - An array of themes
 */
router.get('/themes', themeController.getAllThemes);

/**
 * Returns a theme from the database based on its id
 * @route GET /themes/{id}
 * @group Themes
 * @param {number} id.path.required - the theme id
 * @returns {<Theme>} 200 - An instance of one theme
 */
router.get('/themes/:id(\\d+)', themeController.getOneTheme);


/**
 * Adds a new theme in the database
 * @route POST /admin/themes
 * @group Themes
 * @param {string} title.path.required - the title
 * @param {string} description - the description
 * @returns {<New Theme>} 200 - An instance of new theme
 */
router.post('/admin/themes', validateBody(themeSchema.newTheme), themeController.addNewTheme);

/**
 * Edits a specific theme in the database
 * @route POST /admin/themes/{themeId}
 * @group Themes
 * @param {number} themeId.path.required - the theme id
 * @param {string} title - the title
 * @param {string} description- the description
 * @returns {<Theme>} 200 - thee updated instance of the theme
 */
router.post('/admin/themes/:themeId(\\d+)', validateBody(themeSchema.updateTheme), themeController.changeTheme);

/**
 * Deletes a specific theme in the database
 * @route DELETE /admin/themes/{themeId}
 * @group Themes
 * @param {number} themeId.path.required - the theme id
 * @returns {<Theme>} 200 - Removal confirmation message
 */
router.delete('/admin/themes/:themeId(\\d+)', themeController.deleteTheme);
//
//
// -------------------------------- END OF THEME ROUTES --------------------------------
//
// -------------------------------- MISSION ROUTES -------------------------------------
//
//
/**
 * Returns all missions from the database
 * @route GET /missions
 * @group Missions
 * @returns {Array<Mission>} 200 - An array of missions
 */
router.get('/missions', missionController.getAllMissions);

/**
 * Returns a specific mission from the database
 * @route GET /missions/{id}
 * @group Missions
 * @param {number} missionId.path.required - the mission id
 * @returns {<Mission>} 200 - An instance of the Mission class
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
 * Creates and returns a new mission
 * @route POST /admin/themes/{theme_id}/missions
 * @group Missions
 * @param {number} theme_id.path.required - the theme id
 * @param {string} title.path.properties- the title
 * @param {string} advice- the description
 * @returns {Object} 201 - Instance of the Mission class
 */
router.post('/admin/themes/:theme_id(\\d+)/missions', validateBody(missionSchema.newMission), missionController.addMission);

/**
 * Edits a specific mission
 * @route POST /admin/missions/{missionId}
 * @group Missions
 * @param {number} missionId.path.required - the mission id
 * @param {string} title - the title
 * @param {string} advice- the description
 * @returns {Object} 200 - An instance of a mission
 */
router.post('/admin/missions/:missionId(\\d+)', validateBody(missionSchema.updateMission), missionController.modifyMission);


/**
 * Deletes a specific mission
 * @route DELETE /admin/missions/{missionId}
 * @group Missions
 * @param {number} missionId.path.required - the mission id
 * @returns {Object} 200 - An instance of a mission
 */
router.delete('/admin/missions/:missionId(\\d+)', missionController.deleteMission);

//
//
// -------------------------------------- END OF MISSION ROUTES -----------------------------------------

//  ------------------------------------- SCORE COMPUTING ROUTES ----------------------------------------


/**
 * Returns the score of a given user for a given theme
 * @route GET /student/:userId/themes/:themeId/score
 * @group Scores
 * @param {number} userId.path.required - the user id
 * @param {number} themeId.path.required - the theme id
 * @returns {Number} 200 - Number between 0 and 100
 */
router.get('/students/:userId(\\d+)/themes/:themeId(\\d+)/score', interactController.getScorebyThemeAndUser);

/**
 * Returns the global score of a given user
 * @route GET /students/:userId/score
 * @group Scores
 * @param {number} userId.path.required - the user id
 * @returns {Number} 200 - Number between 0 and 100
 */
router.get('/students/:userId(\\d+)/score', interactController.getGlobalScoreByUser);

//--------------------------------- END OF SCORE COMUTING ROUTES -----------------------------------

//
// -------------------------------- INTERACT ROUTES ------------------------------------------------
//
//
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
 * @route POST /student/interact
 * @group Interactions
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.post('/student/interact/', validateBody(interactSchema.newInteract), interactController.checkBox);

/**
 * Deletes a record in database for a mission id and a user id
 * @route DELETE /missions/{missionId}/users/{userId}
 * @group Interactions
 * @param {number} missionId.path.required - the mission id
 * @param {number} userId.path.required - the user id
 * @returns {<Interact>} 200 - One instance of the Interact class
 */
router.delete('/student/interact/missions/:missionId(\\d+)/users/:userId(\\d+)', interactController.uncheckBox);
//
//
// ------------------------------------- END OF INTERACT ROUTES ------------------------------------------

//--------------------------------------- OTHER ROUTES ---------------------------------------------------
/**
 * Returns all users from the database
 * @route GET /users
 * @group Users
 * @returns {Array<User>} 200 - An array of user instances
 */
router.get('/users', userController.getAllusers);


/**
 * Returns a specific user from the database
 * @route GET /users/{id}
 * @group Users
 * @param {number} userId.path.required - the user id
 * @returns {<User>} 200 - An instance of one user
 */
router.get('/users/:id(\\d+)', userController.getOneUser);

/**
 * Creates/updates a user record with admin status
 * @route POST /admin/add
 * @group Admin
 * @returns {<User>} 200 - A custom user JSON string
 */
router.post('/admin/add', adminController.addAdmin);


/**
 * Returns all the students with their detailed info and cohorts 
 * @route GET /admin/students
 * @group Admin
 * @returns {Array<Student>} 200 - An array of students with detailed info on each student and their cohorts 
 */
router.get('/admin/students', adminController.getAllStudentsWithPromo);
//
//
// --------------------------------------END------------------------------------------

module.exports = router;
