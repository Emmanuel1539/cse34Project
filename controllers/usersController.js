const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    // #Swagger.tags-['Users']
    try {
        const result = await mongodb.getDatabase().db().collection('contacts').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch contacts', error: err });
    }
};

const getSingle = async (req, res) => {
    // #Swagger.tags-['Users']
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: userId }).toArray();
        if (result.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch the contact', error: err });
    }
};


const createUser = async (req, res) => {
    // #Swagger.tags-['Users']
    const user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        favoritecolor: req.body.favoritecolor,
        birthday : req.body.birthday
    }
    const response = await mongodb.getDatabase().db().collection('contacts').insertOne(user);
    if(response.acknowledged === true) {
        res.status(204).send();

    } else{
        res.status(500).json(response.error || 'Some error occured while updating the user.');
    }
}


const updateUser = async (req, res) => {
    // #Swagger.tags-['Users']
    const userId = new ObjectId(req.params.id);
    const user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        favoritecolor: req.body.favoritecolor,
        birthday : req.body.birthday
    }

    const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: userId}, user);
    if(response.matchedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occured while updating the user')
    }
}



const deleteUser = async (req, res) => {
    // #Swagger.tags-['Users']
    const userId = new ObjectId(req.params.id);
    const user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        favoritecolor: req.body.favoritecolor,
        birthday : req.body.birthday
    }

    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: userId});
    if(response.deletedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occured while updating the user')
    }
}

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};
