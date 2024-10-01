const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().db().collection('contacts').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch contacts', error: err });
    }
};

const getSingle = async (req, res) => {
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

module.exports = {
    getAll,
    getSingle
};
