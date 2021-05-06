// Initial tests to check Active Record models functionality
const Theme = require('./app/models/theme');

(async () => {
    try {
        const themes = await Theme.findAll();
        console.log(themes);
    } catch (error) {
        console.log(error)
    }
    
})();