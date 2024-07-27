// src/components/TransactionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = () => {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('deposit');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare transaction data
        const transactionData = {
            userId,
            amount: parseFloat(amount),
            type,
        };

        try {
            // Make the POST request to the backend
            const response = await axios.post('http://localhost:5000/api/transactions/', transactionData);

            // Update message with success response
            const successMessage = `Transaction successful: ${response.data.type} of $${response.data.amount}`;
            setMessage(successMessage);

        } catch (error) {
            // Check if error response is available and set appropriate error message
            const errorMessage = error.response
                ? `Error: ${error.response.data.error || 'An unexpected error occurred.'}`
                : `Error: ${error.message}`;
            setMessage(errorMessage);
        }
    };

    return (
        <div
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                className="bg-dark text-light p-4 rounded"
                style={{ width: '100%', maxWidth: '500px' }}
            >
                <h2 className="text-center">Make a Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">User ID:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Amount:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Type:</label>
                        <select
                            className="form-select"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="deposit">Deposit</option>
                            <option value="withdrawal">Withdrawal</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                {message && <p className="mt-3">{message}</p>}
            </div>
        </div>
    );
};

export default TransactionForm;
