// src/components/CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', {
                userId,
                username,
                password
            });
            setMessage(`User created: ${response.data.username}`);
        } catch (error) {
            setMessage(`Error: ${error.response.data.error}`);
        }
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundSize: 'cover',
                padding: '0 1rem',
            }}
        >
            <div
                className="bg-dark p-4 rounded shadow-lg"
                style={{ width: '100%', maxWidth: '500px', backgroundColor: 'black', color:'white' }}
            >
                <h2 className="text-center mb-4">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">User ID:</label>
                        <input
                            type="text"
                            id="userId"
                            className="form-control"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                {message && (
                    <div className="mt-3">
                        <div className={`alert ${message.startsWith('Error') ? 'alert-danger' : 'alert-success'}`} role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateUser;
