const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    try {
        const { userId, amount, type } = req.body;

        // Find user by userId
        const user = await User.findOne({ userId }); // Find user by userId as String
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        let newBalance = user.balance;
        if (type === 'deposit') {
            newBalance += amount;
        } else if (type === 'withdrawal') {
            if (user.balance < amount) {
                return res.status(400).json({ error: 'Insufficient funds' });
            }
            newBalance -= amount;
        } else {
            return res.status(400).json({ error: 'Invalid transaction type' });
        }

        user.balance = newBalance;
        await user.save();

        const transaction = new Transaction({ user_id: userId, amount, type });
        await transaction.save();

        res.status(201).json(transaction);
    } catch (error) {
        console.error('Error creating transaction:', error); // Log server-side errors
        res.status(500).json({ error: 'Internal server error' });
    }
};
