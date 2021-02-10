const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/people', PersonController.all);// retrieve all
    app.post('/api/people', PersonController.createPerson);//create new
    app.get('/api/people/:id', PersonController.getPerson);// retrive one person/product
    app.put('/api/people/:id', PersonController.updatePerson);//update person
    app.delete('/api/people/:id', PersonController.deletePerson);//delete person/product
}