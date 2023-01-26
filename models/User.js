import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: false,
        min: 6,
        max: 255 
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date:{
        type: Date,
        default: Date.now
    },
    userName:{
        type: Number,
        required: true,
    },
    userPassword:{
        type: String,
        required: true,
        min: 6,
        max: 1024
    },

});

// module.exports = mongoose.model('User', userSchema)
export default mongoose.model('User', userSchema);