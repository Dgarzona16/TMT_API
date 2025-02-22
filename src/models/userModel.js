import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true },
    firstName: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: {type: String, required:true },
    weeklyHours: {type: Number, default: 45}
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
export default User