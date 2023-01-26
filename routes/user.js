import verify from '../verifyToken.js';
import User from '../models/User.js';
import SSMMSUser from '../models/SSMMSUser.js';
import express from 'express';
import { SSMMSuserValidation } from '../validation.js';

const router = express.Router();
router.post('/', verify, async (req, res)=>{
    const user = await User.findOne({email:req.body.email});
    res.json(user);
});

router.post('/create', verify, async (req, res)=>{
    // lets validate the user data before creating user
    const {error} = SSMMSuserValidation(req.body); 
    if(error) return res.status(400).send(error.details[0].message);

    // check if user already exists
    // const emailExist = await User.findOne({email:req.body.email});
    // if (emailExist) return res.status(400).send('email already exists');
    // hash the password
    // var salt = bcrypt.genSaltSync(10);
    // var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // const salt = await bcrypt.gensalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = new SSMMSUser({
        villageName: req.body.villageName,
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

// module.exports = router;
export default router;