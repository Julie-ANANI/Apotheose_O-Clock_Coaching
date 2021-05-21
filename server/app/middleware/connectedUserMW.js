// This middleware is used to limit access to routes which requires the user to be connected

const connectedUserMW = (req, res, next) => {
    // if the user is not connected, we send an error
    console.log('******req.session dans connecteduserMW');
    console.log(req.session);
    console.log('******req.cookies dans connecteduserMW');
    console.log(req.cookies);
    if (!req.session.user) {
        res.status(401).json(`L'utilisateur doit être connecté pour faire cette requête`);
        return;
    }

    // if the user is connected, we call next()
    next();
}

module.exports = connectedUserMW;