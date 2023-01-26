// const router = require("express").Router();
import express from 'express';
// const bcrypt = require("bcryptjs/dist/bcrypt");

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { registerValidation, loginValidation } from '../validation.js';

const router = express.Router();
router.post('/register', async (req, res) => {
    // lets validate the user data before creating user
    const {error} = registerValidation(req.body); 
    if(error) return res.status(400).send(error.details[0].message);

    // check if user already exists
    const emailExist = await User.findOne({email:req.body.email});
    if (emailExist) return res.status(400).send('email already exists');
    // hash the password
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // const salt = await bcrypt.gensalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        userName: req.body.userName,
        userPassword: req.body.userPassword,
    });
    try{
        const savedUser = await user.save();
        res.send({user: savedUser});
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
    // res.send(user);
});

router.post('/login',async (req, res) => {
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // checking if email exists
    const user = await User.findOne({email:req.body.email});
    if (!user) return res.status(400).send('email or password is wrong');
    // password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('invalid password');
    // create and assign a token
    console.log('jwt secret', process.env.TOKEN_SECRET);
    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET );
    res.header('auth-token', token).send(token);

    // res.send('logged in');

});


// module.exports = router;
export default router;