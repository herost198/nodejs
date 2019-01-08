var db = require('../db');

module.exports.requireAuth = function (req, res, next) {
    // check xem người dùng đã đăng nhập vào trước khi xem chưa
    if (!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    var user = db.get('users').find({ id: req.cookies.userId }).value();

    if (!user){
        res.redirect('/auth/login');
        return;
    }
    next();
}