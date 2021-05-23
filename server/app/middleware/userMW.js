// This middleware is used to set a session property that we call user
// We initialize it with a value of false


const userMW = (req, res, next) => {
    // if we don't have the user property in req.session, we create it
    if (!req.session.user) {
        req.session.user = false;

        // Simulating a connected student for testing routes with studentMW
        req.session.user = {
            firstname: 'Michel',
            lastname: 'Michel',
            oap_admin_status: false,
            is_student: true
        };

        // // Simulating a connected oap admin for testing routes with adminMW
        req.session.user = {
            firstname: 'Michel',
            lastname: 'Michel',
            oap_admin_status: true,
            is_student: false
        };
    }

    next();
}

module.exports = userMW;