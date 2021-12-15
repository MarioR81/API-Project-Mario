const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

//Read whole database
router.get('/', async (req,res) => {
    try{
        const users = await Users.find();
        res.json(users)
    }catch(err){
        res.json({ message: 'Error retrieving Database info' });
    }
});


//Create
router.post('/', async (req,res) => {
    const user = new Users ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthdate: req.body.birthdate
    });
    try{
    const savedUser = await user.save();
    res.json(savedUser);
    }catch(err){
        res.json({ message: 'Error creating new user' });
    }
});

//Remove
router.delete('/:userID', async (req,res) => {
    try{
    const removedUser = await Users.remove({_id: req.params.userID})
    res.json(removedUser);
    }catch(err){
        res.json({ message: "delete error" });
    }
});

//Update
router.patch('/:userID', async (req,res) => {
    try{
    const updatedUser = await Users.updateOne(
        {_id: req.params.userID},
        { $set: {firstName: req.body.firstName,
        lastName: req.body.lastName}}
        );
            res.json(updatedUser);
    }catch(err){
        res.json({ message: "error upon update"});
    }
});


module.exports = router;