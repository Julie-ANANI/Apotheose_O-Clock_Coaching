// This middleware is used to limit access to routes which require the student status

const studentMW = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).json(`L'utilisateur doit être connecté pour faire cette requête`);
        return
    }

    // if the user is connected but doesn't have the student role, we send the message that the access is forbidden
    if (!req.session.user.is_student) {
        res.status(403).json(`L'utilisateur doit avoir le rôle d'étudiant O'Clock pour faire cette requête`);
        return;
    }

    //the user is connected and is allowed to execute the controller method 
    next();
};

module.exports = studentMW;