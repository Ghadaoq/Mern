const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/all', PersonController.all);
    app.post('/api/people', PersonController.createPerson);
}