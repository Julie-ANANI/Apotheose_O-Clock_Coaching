const { Router } = require('express');

const router = Router();

const themeController = require('./controllers/themeController');
const Theme = require('./models/theme');



router.get('/', (_,res)=>{
    res.send("Hello World !");
});

router.get('/madou', (_,res)=>{
    res.send("Hello Madou !");
});

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
 * @returns {Array<Theme>} 200 - An array of one them
 */
router.get('/themes/:id', themeController.getOneTheme);

module.exports = router;