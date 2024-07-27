const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: {
        type: String, // Use String here to match the User schema
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['deposit', 'withdrawal'],
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);
