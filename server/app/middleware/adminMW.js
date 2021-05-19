// This middleware is used to limit access to routes which require the oap admin status

const adminMW = (req, res, next) => {
    // if the user is not connected, we send an error
    if (!req.session.user) {
        res.status(401).json(`L'utilisateur doit être connecté pour faire cette requête`);
        return;
    }

    // if the user is connected but doesn't have the oap admin role, we send the message that the access is forbidden
    if (!req.session.user.oap_admin_status) {
        res.status(403).json(`L'utilisateur doit avoir le rôle d'admin OAP pour faire cette requête`);
        return;
    }

    // if the user is connected and has the oap admin role, we call next()
    next();
}

module.exports = adminMW;