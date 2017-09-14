var promise = require('promise');
var jsonfile = require('jsonfile')
var file = 'data.json';
var fs = require('fs');

function UserController() {
}


UserController.prototype.saveUserToFile = function (user) {

    return new Promise(function (resolve, reject) {
        fs.readFile('data.json', 'utf8', function (err, data) {
            if (err) {
                // not search file or directory
                if (err.code == "ENOENT") {
                    var obj = {users: []};
                    obj.users.push(user); //add some data
                    var json = JSON.stringify(obj); //convert it back to json
                    fs.writeFile('data.json', json, 'utf8', function (error) {
                        if (error) reject(error);
                        else resolve(json);
                    });
                }
                else {
                    reject(err);
                }
            } else {
                var obj;
                if (data) {
                    obj = JSON.parse(data);
                }
                else {
                    obj = {users: []};
                }
                obj.users.push(user); //add some data
                var json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('data.json', json, 'utf8', function (error) {
                    if (error) reject(error);
                    else resolve(json);
                });

            }
        });
    })
}


module.exports = new UserController();