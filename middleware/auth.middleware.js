var db = require('../db');

module.exports.requireAuth = function (req, res, next) {
    // check xem người dùng đã đăng nhập vào trước khi xem chưa
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    var user = db.get('users').find({ id: req.signedCookies.userId }).value();

    if (!user){
        res.redirect('/auth/login');
        return;
    }

    res.locals.user = user;

    next();
}