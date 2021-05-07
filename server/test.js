// Initial tests to check Active Record models functionality
const Theme = require('./app/models/theme');
const Mission = require('./app/models/mission');
const Interact = require('./app/models/interact');
const User = require('./app/models/user');

// Getting all themes
// Test ok
// (async () => {
//     try {
//         const themes = await Theme.findAll();
//         console.log(themes);
//     } catch (error) {
//         console.log(error)
//     }

// })();

// Inserting a record in the bridging table (delete record for mission_id 2 in db)
// Test ok
// (async () => {
//     try {
//         const newRecord = new Interact({is_checked: true, mission_id: 2, user_id: 1});
//         console.log(newRecord);
//         newRecord.save();
//     } catch (error) {
//         console.log(error)
//     }
// })();

// Inserting a theme
// Test ok 
// (async () => {
//     try {
//         const newTheme = new Theme({ title: 'Hello 2', description: 'Blue <b>ba</b> blue', position: 3 });
//         console.log(newTheme);
//         newTheme.save();
//     } catch (err) {
//         console.log(error);
//     }
// })();

// Inserting a mission
// Test ok
// (async () => {
//     try {
//         const newMission = new Mission({title: 'Ajouter des contacts', advice: 'Blue <b>bi</b> blue', position: 3, theme_id: 2});
//         console.log(newMission);
//         newMission.save();
//     } catch (error) {
//         console.log(error);
//     }

// })();

// Getting one user based on external API user ID 4627
// Test ok
// (async () => {
//     try {
//         const internalUser = await User.findOneByApiId(4627)
//         console.log(internalUser);
//     } catch (error) {
//         console.log(error)
//     }
// })();


// Deleting the theme with id 10
// Test ok
(async () => {
    try {
        const themeToDelete = await Theme.findOne(10);
        console.log(themeToDelete);
        themeToDelete.delete();
    } catch (error) {
        console.log(error);
    }

})();
