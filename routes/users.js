var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');


router.get('/registration', function (req, res, next) {
    res.render('registration');

})



router.post('/registration', function (req, res, next) {
    var user = req.body;
    userController.saveUserToFile(user).then(function (data) {
        res.locals.message = "Save user Success";
        res.status(200)
        res.render('success');
    }, function (error) {
        next(error);
    })

})


module.exports = router;
