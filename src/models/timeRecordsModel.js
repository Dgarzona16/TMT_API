import mongoose from 'mongoose'

const timeEntrySchema = new mongoose.Schema({
    entryType: {
        type: String,
        enum: ['entry', 'exit', 'lunchStart','lunchEnd'],
        required: true
    },
    time: {
        type: Date,
        required: true
    }
})

const timeRecordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    timeEntries: [timeEntrySchema],
    totalHours: {
        type: Number
    }
}, {timestamps: true})

const TimeRecord = mongoose.model('TimeRecord', timeRecordSchema)
export default TimeRecord