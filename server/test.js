// Initial tests to check Active Record models functionality
const Theme = require('./app/models/theme');
const Mission = require('./app/models/mission');
const Interact = require('./app/models/interact');
const User = require('./app/models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');

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

// Inserting a record in the bridging table
// Test ok
// (async () => {
//     try {
//         const newRecord = new Interact({mission_id: 3, user_id: 4});
//         console.log(newRecord);
//         newRecord.save();
//         console.log(newRecord);
//     } catch (error) {
//         console.log(error)
//     }
// })();

// Deleting a record in the bridging table
// Test ok
// (async () => {
//     try {
//         const newRecord = await Interact.findOne(3, 4);
//         newRecord.delete();
//         console.log(newRecord);
//     } catch (error) {
//         console.log(error)
//     }
// })();

//Inserting a theme
//Test ok 
// (async () => {
//     try {
//         const newTheme = new Theme({ title: 'Hello 2', description: 'Blue <b>ba</b> blue', position: 40 });
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
// (async () => {
//     try {
//         const themeToDelete = await Theme.findOne(10);
//         console.log(themeToDelete);
//         themeToDelete.delete();
//     } catch (error) {
//         console.log(error);
//     }

// })();

// Getting the missions for theme 2
// Test ok
// (async () => {
//     try {
//         const theMissions = await Mission.findByTheme(2);
//         console.log(theMissions);
//     } catch (error) {
//         console.log(error);
//     }

// })();

// Getting the value of checkbox for user_id 3 and mission 5
// Test ok
// (async () => {
//     try {
//         const theInteract = await Interact.findOne(3, 5);
//         console.log(theInteract);
//     } catch (error) {
//         console.log(error);
//     }

// })();

// Passing user with id 6's admin status to true
// Test ok
// (async () => {
//     try {
//         const theUser = await User.findOne(6);
//         console.log(theUser);
//         theUser.admin_status = true;
//         theUser.save();
//     } catch (error) {
//         console.log(error);
//     }

// })();

(async () => {
    try {
        
        const response = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/cohorts`, {
            headers: {
                'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
            }
        });

        const cohort = await response.json();
        console.log(cohort);

    } catch (err) {
        console.log(err);
    }
})();
