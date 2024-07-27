// controllers/userController.js 

const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const { userId, username, password } = req.body;
        const newUser = new User({ userId, username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserBalance = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ balance: user.balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
