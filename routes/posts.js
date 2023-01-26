import express from 'express';
import verify from '../verifyToken.js';

const router = express.Router();

router.get('/', verify, (req, res)=>{
    res.json({posts:{
        title: 'my first post',
        description:'random data you shoudnt access without logging in'
    }});
});

// module.exports = router;
export default router;