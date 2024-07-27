// src/components/UserBalance.js
import React, { useState } from 'react';
import axios from 'axios';

const UserBalance = () => {
    const [userId, setUserId] = useState('');
    const [balance, setBalance] = useState(null);
    const [message, setMessage] = useState('');

    const handleCheckBalance = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${userId}/balance`);
            setBalance(response.data.balance);
            setMessage('');
        } catch (error) {
            setMessage(`Error: ${error.response.data.error}`);
            setBalance(null);
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 1rem',
            }}
        >
            <div
                className="bg-dark p-4 rounded shadow-lg"
                style={{ width: '100%', maxWidth: '500px', color:"white" }}
            >
                <h2 className="text-center">Check Balance</h2>
                <div className="mb-3">
                    <label className="form-label">User ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary mt-3" onClick={handleCheckBalance}>
                        Check Balance
                    </button>
                </div>
                {message && <p className="mt-3">{message}</p>}
                {balance !== null && <p>Balance: ${balance}</p>}
            </div>
        </div>
    );
};

export default UserBalance;
