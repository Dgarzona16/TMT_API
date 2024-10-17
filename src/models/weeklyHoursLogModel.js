import mongoose from 'mongoose'

const dailyLogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    TimeRecordId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TimeRecord',
        required: true
    } 
})

const weeklyHoursLogSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true        
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
    },
    dailyLogs: [dailyLogSchema],
    totalhoursWorked: {
        type: Number,
        required: true,
        default: 0
    }
}, {timestamps: true})

const WeeklyHoursLog = mongoose.model('weeklyHoursLog', weeklyHoursLogSchema)
export default WeeklyHoursLog