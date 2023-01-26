import mongoose from 'mongoose';

const SSMMSuserSchema = new mongoose.Schema({
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
        min: 1,
        max: 1024
    },
    villageName:{
        type: String,
        required: true,
        min: 1,
        max: 255
    },

});

// module.exports = mongoose.model('User', userSchema)
export default mongoose.model('SSMMSUser', SSMMSuserSchema);