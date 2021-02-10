const { Person } = require('../models/person.model');
module.exports.all = (request, response) => {
    Person.find({})
    .then(allPerson => response.json(allPerson))
    .catch(err => response.json({message: "something is wrong man", error:err}));
    //response.json();
}
    // The method below is to create a new person/product
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
  // The method below is to retrieve one person/product
module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
//updating a person/product method 
module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}
// The method below is to delete a spesific person/product
module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}