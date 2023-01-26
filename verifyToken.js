import jwt from 'jsonwebtoken';

export default function (req, res, next){
    const token = req.header('auth-token');
    // console.log('auth-token',  req);
    console.log(req.header("auth-token"));
    if(!token) return res.status(401).send('access Denied');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('invalid token');
    }
}