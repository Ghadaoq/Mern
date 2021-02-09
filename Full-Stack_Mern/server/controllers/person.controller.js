const { Person } = require('../models/person.model');
module.exports.all = (request, response) => {
    Person.find()
    .then(allPerson => response.json(allPerson))
    .catch(err => response.json({message: "something is wrong man", error:err}));
    //response.json();
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { title,price,description } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}